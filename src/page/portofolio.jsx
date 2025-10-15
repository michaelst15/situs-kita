import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  IconButton,
  Rating,
} from "@mui/material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { handleClick } from "./home";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../image/logo.png";
import Compro1 from "../image/compro1.png";
import Compro2 from "../image/compro2.png";
import Compro3 from "../image/compro3.png";
import Compro4 from "../image/compro4.png";
import Compro5 from "../image/compro5.png";
import Compro6 from "../image/compro6.png";
import Olshop1 from '../image/olshop1.png'
import Olshop2 from '../image/olshop2.png'
import Olshop3 from '../image/olshop3.png'
import Olshop4 from '../image/olshop4.png'
import Olshop5 from '../image/olshop5.png'
import Olshop6 from '../image/olshop6.png'
import LandingPage1 from '../image/LandingPage1.png'
import LandingPage2 from '../image/LandingPage2.png'
import LandingPage3 from '../image/LandingPage3.png'
import LandingPage4 from '../image/LandingPage4.png'
import LandingPage5 from '../image/LandingPage5.png'
import LandingPage6 from '../image/LandingPage6.png'
import "@fontsource/niconne"; 

// ========================= DATA PORTOFOLIO =========================
const portofolioCategories = [
  {
    category: "Company Profile",
    data: [
      { title: "Digital Agency", image: Compro1, link: "https://themewagon.github.io/dSign/" },
      { title: "Web Development Company", image: Compro3, link: "https://themewagon.github.io/Base-Tailwind/" },
      { title: "Kesehatan – MediLab", image: Compro5, link: "https://themewagon.github.io/MediLab/" },
      { title: "Fintech (Financial Technology)", image: Compro6, link: "https://themewagon.github.io/Nova-Bootstrap/" },
      { title: "Fast Food Restaurant", image: Compro4, link: "https://themewagon.github.io/feane/" },
      { title: "humanitarian donations", image: Compro2, link: "https://themewagon.github.io/Charitize/" },
    ],
  },
  {
    category: "Toko Online",
    data: [
      { title: "Shoes Sale", image: Olshop1, link: "https://themewagon.github.io/footwear/" },
      { title: "Fashion Store E-commerce", image: Olshop2, link: "https://themewagon.github.io/ashion/" },
      { title: "Fruits Shop", image: Olshop3, link: "https://themewagon.github.io/tropika/" },
      { title: "Grocery Store", image: Olshop4, link: "https://themewagon.github.io/FoodMart/" },
      { title: "Pet Shop", image: Olshop5, link: "https://themewagon.github.io/waggy/" },
      { title: "Electronics Store", image: Olshop6, link: "https://themewagon.github.io/MiniStore/" },
    ],
  },
  {
    category: "Landing Page",
    data: [
      { title: "Creative", image: LandingPage1, link: "https://themewagon.github.io/Desgy/" },
      { title: "Road Trip", image: LandingPage2, link: "https://themewagon.github.io/RoadTrip/" },
      { title: "Various Coffees", image: LandingPage3, link: "https://themewagon.github.io/Lounge/" },
      { title: "Construction Service", image: LandingPage4, link: "https://themewagon.github.io/BuilderMax/index.html" },
      { title: "Digital Idea Solutions", image: LandingPage5, link: "https://themewagon.github.io/mueller/" },
      { title: "Wedding Planing ", image: LandingPage6, link: "https://themewagon.github.io/mr-mrs/" },
    ],
  },
];

// ========================= KOMPONEN UTAMA =========================
export default function Portofolio() {

const [init, setInit] = React.useState(false);

  // Inisialisasi Engine
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => setInit(true));
  }, []);
  
  return (
    <>
<Box sx={{ position: "relative", overflow: "hidden", bgcolor: "#f9fafb", mt: -10 }}>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            preset: "links",
            background: { color: "#ffffff" },
            particles: {
              color: { value: "#31927b" },
              links: { color: "#31927b", distance: 150, enable: true, opacity: 0.4, width: 1 },
              move: { enable: true, speed: 2 },
              number: { value: 60, density: { enable: true, area: 800 } },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      {/* ===== Konten Utama ===== */}
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#31927b" }}>
            Website{" "}
            <span
              style={{
                color: "#fcb81c",
                fontFamily: "'Niconne', cursive",
                fontSize: "1.4em",
              }}
            >
              SitusKita
            </span>
          </Typography>
        </Box>

        {/* Loop kategori */}
        {portofolioCategories.map((section, i) => (
          <Box key={i} sx={{ mb: 10 }}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: "#31927b",
                textTransform: "uppercase",
              }}
            >
              {section.category}
            </Typography>

            <Grid container spacing={4}>
              {section.data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Card
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        "&:hover img": {
                          filter: "blur(3px) brightness(0.8)",
                          transform: "scale(1.05)",
                        },
                        "&:hover .overlay": {
                          opacity: 1,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.title}
                        loading="lazy"
                        sx={{
                          transition: "0.4s ease",
                        }}
                      />
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          background: "rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        <Typography
                          component="a"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            textDecoration: "none",
                            backgroundColor: "#31927b",
                            px: 3,
                            py: 1,
                            borderRadius: "8px",
                            "&:hover": { backgroundColor: "#267360" },
                          }}
                        >
                          Lihat
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        align="center"
                        fontWeight={700}
                        sx={{ mb: 1, color: "#31927b" }}
                      >
                        {item.title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "#555", fontWeight: 600 }}>
                          Top Desain
                        </Typography>
                        <Rating name="read-only" value={5} readOnly size="small" sx={{ color: "#fcb81c" }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>

      {/* ===== FOOTER ===== */}
      <Container sx={{ position: "relative", zIndex: 1 }}>
      <Box
      component="footer"
      sx={{
        bgcolor: "#f7f7f7",
        color: "#333",
        mt: 10,
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={6}>
        {/* Kolom 1: Logo & Deskripsi */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={logo}
            alt="SitusKita Logo"
            sx={{ height: 100, mb: 2 }}
          />
          <Typography sx={{ mb: 2 }}>
            <b style={{ color: "#31927b" }}>SitusKita</b> adalah penyedia jasa
            pembuatan website profesional yang membantu Anda membangun identitas
            digital yang kuat. Kami percaya bahwa setiap bisnis berhak tampil
            modern dan mudah ditemukan di internet.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Dengan kombinasi desain kreatif, performa cepat, dan strategi digital
            yang efektif, kami hadir untuk membantu bisnis Anda berkembang melalui
            website yang menarik, responsif, dan terpercaya.
          </Typography>
        </Grid>

        {/* Kolom 2: Navigasi */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#31927b", mb: 2 }}
          >
            Navigasi
          </Typography>
          {["Beranda", "Layanan", "Paket Website", "Portofolio", "Testimoni", "Kontak"].map(
            (item, i) => (
              <Typography
                key={i}
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#fcb81c" },
                  transition: "0.3s",
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Grid>

        {/* Kolom 3: Informasi Kontak */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#31927b", mb: 2 }}
          >
            Hubungi Kami
          </Typography>
          <Typography sx={{ mb: 1 }}>
            📍 Jln Madrasah No. 91, RT.3/RW.9, Pekayon, Pasar Rebo, Jakarta timur 13710
          </Typography>
          <Typography sx={{ mb: 1 }}>📞 +62 812 3456 7890</Typography>
          <Typography sx={{ mb: 2 }}>✉️ situskita@gmail.com</Typography>
          <Typography sx={{ color: "#555" }}>
            Kami selalu siap membantu Anda membangun website impian. Hubungi kami
            untuk konsultasi gratis dan dapatkan solusi terbaik untuk kebutuhan
            digital Anda.
          </Typography>
        </Grid>

        <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 60,
          height: 60,
        }}
      >
        {/* Efek radar */}
        <span className="pulse-ring"></span>

        <IconButton
          id="whatsapp-btn"
          onClick={handleClick}
          sx={{
            bgcolor: "#25D366",
            "&:hover": { bgcolor: "#1ebe5d" },
            color: "#fff",
            width: 60,
            height: 60,
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
    </Box>
      </Grid>

      {/* Garis Pembatas */}
      <Box
        sx={{
          mt: 8,
          mb: 2,
          borderTop: "1px solid #ddd",
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.9rem", color: "#666" }}>
          © {new Date().getFullYear()}{" "}
          <b style={{ color: "#31927b" }}>SitusKita</b> — Semua hak cipta
          dilindungi. Dibuat dengan semangat dan inovasi 💡 untuk membantu Anda
          memiliki website yang lebih baik.
        </Typography>
      </Box>
    </Box>
    </Container>
    </Box>

     
    </>
  );
}
