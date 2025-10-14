import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../image/logo.png";
import { handleClick } from "./home";
import { useNavigate } from "react-router-dom";
import "@fontsource/montserrat";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // untuk dropdown desktop

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleDropdownToggle = () => setOpenDropdown(!openDropdown);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const isMobile = useMediaQuery("(max-width:900px)");

  const navItems = ["Layanan", "Portofolio", "Harga", "Testimoni"];
  const layananItems = [
    "Website Company Profile",
    "Toko Online",
    "Landing Page",
  ];

  // Tagline dinamis dengan animasi fade bergantian
const taglineDesktop = ["Jasa Buat Website", "Website Cepat", "Website Professional"];
const taglineMobile = ["Jasa Buat Website", "Website Cepat", "Website Professional"];
const taglineWords = isMobile ? taglineMobile : taglineDesktop;

const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false); // mulai fade-out
    setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % taglineWords.length);
      setFade(true); // fade-in setelah ganti kata
    }, 400); // waktu transisi keluar
  }, 2000); // tiap 2 detik ganti kata

  return () => clearInterval(interval);
}, [taglineWords]);


   const navigate = useNavigate();

const handleScroll = (item) => {
  let targetId = "";

  switch (item.toLowerCase()) {
    case "portofolio":
      navigate("/portofolio");
      setMobileOpen(false);
      return;
    case "harga":
      targetId = "paket-website";
      break;
    case "testimoni":
      targetId = "testimoni";
      break;
    default:
      return;
  }

  // Jika user sedang tidak di halaman utama, arahkan ke '/' dan bawa id target
  if (window.location.pathname !== "/") {
    navigate("/", { state: { scrollTo: targetId } });
    setMobileOpen(false);
    return;
  }

  // Jika sudah di halaman utama, langsung scroll
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  setMobileOpen(false);
};



  // Drawer untuk mobile
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{ height: 100, mt: 2, mb: 2 }}
      />
      <List>
        {/* Dropdown Layanan di mobile */}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              justifyContent: "center",
              textAlign: "center",
            }}
            onClick={handleDropdownToggle}
          >
            <ListItemText
              primaryTypographyProps={{
                fontWeight: 600,
                textAlign: "center",
                paddingLeft: "25px"
              }}
              primary="Layanan"
            />
            {openDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>

        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {layananItems.map((sub) => (
            <ListItemButton
              key={sub}
              sx={{
                justifyContent: "center",
                textAlign: "center",
                py: 0.8,
                bgcolor: "#31927b", // 💚 warna latar belakang
                color: "#fff",       // warna teks putih
                "&:hover": {
                  bgcolor: "#267561", // warna lebih gelap saat hover
                },
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  textAlign: "center",
                  fontWeight: 500,
                }}
                primary={sub}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>


        {/* Menu lain di bawahnya */}
        {navItems
          .filter((i) => i !== "Layanan")
          .map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                }}
                onClick={() => handleScroll(item)}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                  primary={item}
                />
              </ListItemButton>
            </ListItem>
          ))}

        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={{
              justifyContent: "center",
              bgcolor: "#FF7A00",
              color: "#fff",
              mt: 1,
              mx: 4,
              borderRadius: "8px",
              "&:hover": { bgcolor: "#e56b00" },
            }}
          >
            Konsultasi Gratis
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          borderBottom: "1px solid #ddd",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + Tagline */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 70,
                cursor: "pointer",
              }}
            />

        <Typography
          variant={isMobile ? "subtitle2" : "h6"}
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            fontSize: isMobile ? "1rem" : "1.4rem",
            letterSpacing: "0.5px",
            transition: "opacity 0.5s ease",
            opacity: fade ? 1 : 0,
          }}
        >
          <span style={{ color: "#31927b" }}>
            {taglineWords[currentWordIndex].charAt(0)}
          </span>
          <span style={{ color: "#fcb81c" }}>
            {taglineWords[currentWordIndex].slice(1)}
          </span>
        </Typography>

          </Box>

          {/* Menu Desktop dengan dropdown */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              sx={{ color: "#000", fontWeight: 500 }}
              onClick={handleMenuOpen}
              endIcon={
                anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />
              }
            >
              Layanan
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                sx: { p: 0.5 },
              }}
            >
              {layananItems.map((sub) => (
                <MenuItem key={sub} onClick={handleMenuClose}>
                  {sub}
                </MenuItem>
              ))}
            </Menu>

            {navItems
              .filter((i) => i !== "Layanan")
              .map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#000", fontWeight: 500 }}
                  onClick={() => handleScroll(item)}
                >
                  {item}
                </Button>
              ))}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF7A00",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "8px",
                px: 2.5,
                "&:hover": { bgcolor: "#e56b00" },
              }}
            >
              Konsultasi Gratis
            </Button>
          </Box>

          {/* Menu Mobile */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer hanya muncul di mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 260 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer agar konten tidak tertutup AppBar */}
      <Toolbar />
    </>
  );
}
