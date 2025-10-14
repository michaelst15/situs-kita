import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../image/logo.png";

// Import font Montserrat
import "@fontsource/montserrat"; // npm install @fontsource/montserrat

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = ["Layanan", "Portofolio", "Harga", "Testimoni"];
  const isMobile = useMediaQuery("(max-width:900px)");

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{ height: 100, mt: 2, mb: 2 }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
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

  // ✨ Tagline berbeda antara desktop dan mobile
  const taglineDesktop = ["Buat", "Website", "Cepat", "&", "Professional"];
  const taglineMobile = ["Cepat", "&", "Profesional"];

  const taglineWords = isMobile ? taglineMobile : taglineDesktop;

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

            {/* Tagline dengan font Montserrat */}
            <Typography
              variant={isMobile ? "subtitle2" : "h6"}
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                fontSize: isMobile ? "0.9rem" : "1.3rem",
                letterSpacing: "0.5px",
                gap: "4px",
              }}
            >
              {taglineWords.map((word, index) => (
                <span key={index} style={{ display: "inline-flex" }}>
                  <span style={{ color: "#31927b" }}>
                    {word.charAt(0)}
                  </span>
                  <span style={{ color: "#fcb81c" }}>
                    {word.slice(1)}
                  </span>
                  &nbsp;
                </span>
              ))}
            </Typography>
          </Box>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000", fontWeight: 500 }}>
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

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer agar konten tidak tertutup AppBar */}
      <Toolbar />
    </>
  );
}
