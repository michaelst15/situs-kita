import React, { useState } from "react";
import logo from '../image/logo.png'
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Zoom,
  CircularProgress,
  IconButton
} from "@mui/material";
import UseWhatsapp from "whatsapp-react-component";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { CancelOutlined } from "@mui/icons-material";
import testimoni1 from "../image/testimoni1.jpg";
import testimoni2 from "../image/testimoni2.jpg";
import testimoni3 from "../image/testimoni3.jpg";
import testimoni4 from "../image/testimoni4.jpg";
import testimoni5 from "../image/testimoni5.jpg";
import testimoni6 from "../image/customer6.jpg";
import CheckIcon from "@mui/icons-material/Check";
import emailjs from "emailjs-com";
import foto1 from "../image/foto1.webp";
import foto2 from "../image/foto2.png";
import foto3 from "../image/foto3.png";
import foto4 from "../image/foto4.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "@fontsource/montserrat";
import "@fontsource/niconne"; 

 export const handleClick = (me) => {
  const whatsappNumber = "+6281325565530"; // format internasional
  const message = "Halo, saya ingin Konsultasi tentang website Anda."; // pesan otomatis
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // buka WhatsApp Web / App
  };

export default function Home() {

 const [open, setOpen] = useState(false);
const [selectedPaket, setSelectedPaket] = useState(null);
const [formData, setFormData] = useState({ customer: "", hp: "", email: "" });
const [loading, setLoading] = useState(false);
const [result, setResult] = useState(null); // null | "success" | "error"
const [errors, setErrors] = useState({
  customer: "",
  hp: "",
  email: ""
});

const fiturList = [
    {
      title: "Desain Menarik",
      desc: "Tampilan yang elegan dan profesional untuk menarik perhatian pengunjung.",
      img: foto1,
    },
    {
      title: "Harga Terjangkau",
      desc: "Nikmati layanan premium dengan biaya yang sesuai anggaran bisnis Anda.",
      img: foto2,
    },
    {
      title: "Cepat & Responsif",
      desc: "Website cepat diakses dan tampilan menyesuaikan semua perangkat.",
      img: foto3,
    },
    {
      title: "Support Penuh",
      desc: "Kami siap membantu dari pembuatan hingga pemeliharaan situs Anda.",
      img: foto4,
    },
  ];


  const [formDataLangganan, setFormDataLangganan] = useState({
    message: "",
    mobileNumber: "6281325565530", // nomor tujuan
  });
  const [error, setError] = useState("");

const onChange = (e) => {
  const { name, value } = e.target;
  setFormDataLangganan({ ...formDataLangganan, [name]: value });
};


const onSubmit = (e) => {
  e.preventDefault();

  if (!formDataLangganan.message) {
    setError("Email wajib diisi!");
    return;
  }

  setError("");
  const number = "6281325565530"; // format internasional
  const msg = encodeURIComponent(formDataLangganan.message);
  // Buka WhatsApp Web / App
  window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
};






// --- fungsi buka / tutup popup ---
const handleOpen = (pkg) => {
  setSelectedPaket(pkg);
  setOpen(true);
  setLoading(false);
  setResult(null);
};
const handleClose = () => {
  setOpen(false);
  setSelectedPaket(null);
  setFormData({ customer: "", hp: "", email: "" });
  setLoading(false);
  setResult(null);
};

// --- handle form input ---
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

// --- submit form ---
const handleSubmit = (e) => {
  e.preventDefault();

    // Validasi tiap field
  let tempErrors = {
    customer: formData.customer ? "" : "Nama wajib diisi",
    hp: formData.hp ? "" : "Nomor HP wajib diisi",
    email: formData.email ? "" : "Email wajib diisi",
  };

  setErrors(tempErrors);

  // Cek apakah masih ada error
  const hasError = Object.values(tempErrors).some((err) => err !== "");
  if (hasError) return; // stop jika ada error

  if (!formData.customer || !formData.hp || !formData.email) {
    alert("Harap isi semua data sebelum mengirim!");
    return;
  }

  setLoading(true);
  setResult(null);

  const templateParams = {
    nama: formData.customer,
    hp: formData.hp,
    email: formData.email,
    paket: selectedPaket?.name,
    harga: selectedPaket?.price,
  };

  emailjs
    .send(
      "service_72uhs0a",
      "template_pb4j2ae",
      templateParams,
      "TbDr3t371KGk0YAQk"
    )
    .then(
      () => {
        setLoading(false);
        setResult("success");
      },
      () => {
        setLoading(false);
        setResult("error");
      }
    );
};


  const testimonials = [
    {
      name: "Rina Putri",
      role: "Pemilik Toko Online",
      text: "Pelayanan cepat, desainnya keren banget! Website saya langsung naik traffic-nya.",
      img: testimoni1,
    },
    {
      name: "Dimas Arif",
      role: "Freelancer",
      text: "Saya puas banget, timnya komunikatif dan hasil websitenya sesuai harapan.",
      img: testimoni2,
    },
    {
      name: "Sarah Wijaya",
      role: "UMKM Kuliner",
      text: "SitusKita bikin website usaha saya lebih dipercaya pelanggan!",
      img: testimoni3,
    },
    {
      name: "Melisa Handayani",
      role: "Event Organizer",
      text: "Dari awal konsultasi sampai website jadi, semuanya lancar. Desainnya sesuai keinginan saya, dan performanya ringan banget. Penjualan meningkat setelah pakai website ini!",
      img: testimoni4,
    },
    {
      name: "Fauzan Hakim",
      role: "Freelancer Designer",
      text: "Website portofolio saya jadi terlihat profesional. Banyak klien baru yang datang setelah saya tampilkan di media sosial. Sangat direkomendasikan!",
      img: testimoni5,
    },
    {
      name: "Lisa Hartono",
      role: "Marketing Manager",
      text: "Desain websitenya elegan, sesuai brand image kami. Mereka juga bantu optimasi SEO, jadi website kami mudah ditemukan di Google.",
      img: testimoni6,
    },
  ];


  return (
    <Box sx={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          bgcolor: "#31927b",
          color: "#fff",
          textAlign: "center",
          py: { xs: 8, md: 12 },
          mt: -8,
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Wujudkan Website Profesionalmu Bersama{" "}
          <span
            style={{
              color: "#fcb81c",
              fontFamily: "'Niconne', cursive",
              fontSize: "1.3em",
            }}
          >
            SitusKita
          </span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "700px",
            mx: "auto",
            mb: 4,
            color: "#fff",
            opacity: 0.9,
          }}
        >
          Kami membantu bisnis dan personal membangun kehadiran online yang cepat,
          modern, dan menarik perhatian.
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            bgcolor: "#fcb81c",
            color: "#000",
            fontWeight: 700,
            px: 4,
            py: 1.5,
            borderRadius: "10px",
            "&:hover": { bgcolor: "#ffcf4d" },
          }}
        >
          Konsultasi Gratis Sekarang
        </Button>
      </Box>

      {/* ===== TENTANG SITUSKITA ===== */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 }, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#31927b" }}>
          Apa Itu{" "}
          <span
            style={{
              color: "#fcb81c",
              fontFamily: "'Niconne', cursive",
              fontSize: "1.4em",
            }}
          >
            SitusKita
          </span>
          ?
        </Typography>
        <Typography
          sx={{
            mt: 3,
            maxWidth: 800,
            mx: "auto",
            color: "#333",
            lineHeight: 1.8,
          }}
        >
          <b>SitusKita</b> adalah platform jasa pembuatan website profesional
          yang berfokus pada desain modern, kecepatan optimal, dan kemudahan
          pengelolaan. Kami hadir untuk membantu Anda membangun citra digital
          yang kuat dan meningkatkan kepercayaan pelanggan Anda.
        </Typography>
      </Box>

      {/* ===== MENGAPA MEMILIH SITUSKITA ===== */}
<Box
  sx={{
    bgcolor: "#f7f7f7",
    py: 10,
    px: { xs: 3, md: 10 },
    textAlign: "center",
  }}
>
  <Typography variant="h4" sx={{ fontWeight: 700, color: "#31927b" }}>
    Mengapa Memilih{" "}
    <span
      style={{
        color: "#fcb81c",
        fontFamily: "'Niconne', cursive",
        fontSize: "1.4em",
      }}
    >
      SitusKita
    </span>
    ?
  </Typography>

  <Grid
    container
    spacing={3}
    sx={{
      mt: 4,
      justifyContent: "center",
    }}
  >
    {fiturList.map((item, i) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        key={i}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: {
            xs: i > 0 ? 2 : 0,
            md: i >= 3 ? 3 : 0,
          },
        }}
      >
        <Card
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 300,
            height: 360, // ✅ tinggi tetap agar gambar bisa proporsional penuh
            borderRadius: "12px",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            },
            background: "white",
            color: "#333",
          }}
        >
          {/* Gambar memenuhi seluruh area bagian atas kartu */}
          <Box
            component="img"
            src={item.img}
            alt={item.title}
            sx={{
              width: "100%",
              height: "200px", // ✅ tinggi tetap agar semua seragam
              objectFit: "cover", // isi penuh tanpa distorsi
              borderRadius: "10px",
              mb: 2,
              display: "block",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />

          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: "#31927b",
                mb: 0.5,
                fontSize: "1rem",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: "gray",
                opacity: 0.9,
                fontSize: "0.85rem",
                lineHeight: 1.4,
                px: 1.5,
              }}
            >
              {item.desc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


      {/* ===== PAKET WEBSITE ===== */}
<Box id="paket-website" sx={{ py: 10, px: { xs: 3, md: 10 }, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#31927b" }}>
        Paket Website{" "}
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

      {/* === GRID PAKET === */}
      <Grid container spacing={4} sx={{ mt: 5, justifyContent: "center" }}>
        {[
          {
            name: "Starter",
            price: "Rp 1.500.000",
            features: [
              "Desain Template",
              "1 Halaman Utama",
              "Gratis Domain 1 Tahun",
              "Responsive Design",
            ],
          },
          {
            name: "Bisnis",
            price: "Rp 3.000.000",
            features: [
              "Desain Kustom",
              "3–5 Halaman",
              "Optimasi SEO Dasar",
              "Gratis Maintenance 3 Bulan",
            ],
          },
          {
            name: "Premium",
            price: "Rp 5.000.000",
            features: [
              "Desain Eksklusif",
              "10+ Halaman",
              "Integrasi Form & API",
              "Support Prioritas",
            ],
          },
        ].map((pkg, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                borderRadius: "20px",
                border: "2px solid #31927b",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                p: 2,
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#31927b", mb: 1 }}
                >
                  {pkg.name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#fcb81c", fontWeight: 700, mb: 2 }}
                >
                  {pkg.price}
                </Typography>

                {/* === Fitur dengan Icon Centang === */}
                <Box
                  component="ul"
                  sx={{ listStyle: "none", pl: 0, color: "#333" }}
                >
                  {pkg.features.map((f, j) => (
                    <Box
                      key={j}
                      component="li"
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        mb: 1.2,
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid #31927b",
                          borderRadius: "50%",
                          width: 24,
                          height: 24,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          mt: "2px",
                        }}
                      >
                        <CheckIcon sx={{ color: "#31927b", fontSize: 16 }} />
                      </Box>
                      <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.95rem", lineHeight: 1.5 }}
                        >
                          {f}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  onClick={() => handleOpen(pkg)}
                  sx={{
                    bgcolor: "#31927b",
                    color: "#fff",
                    mt: 3,
                    borderRadius: "10px",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#267864" },
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* === POPUP DENGAN FORM === */}
     <Dialog
  open={open}
  TransitionComponent={Zoom}
  keepMounted
  onClose={handleClose}
  maxWidth="sm"
  fullWidth
  sx={{ "& .MuiDialog-paper": { border: "3px solid #31927b", borderRadius: "20px", p: 3 } }}
>
  <DialogTitle sx={{ fontWeight: 700, color: "#31927b", textAlign: "center", fontSize: "1.8rem" }}>
    {loading ? "Sedang Mengirim..." : result === "success" ? "Berhasil!" : result === "error" ? "Gagal!" : "Paket yang Dipilih"}
  </DialogTitle>

  <DialogContent sx={{ px: 5, py: 3, textAlign: "center" }}>
    {loading && (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        {/* Animasi loading bisa pakai CircularProgress */}
        <CircularProgress sx={{ color: "#31927b" }} />
      </Box>
    )}

    {result === "success" && (
      <Box sx={{ mt: 3 }}>
        <CheckCircleOutlineOutlined sx={{ fontSize: 80, color: "#31927b" }} />
        <Typography sx={{ mt: 2, fontWeight: 600, color: "#31927b" }}>Pengajuan berhasil!</Typography>
      </Box>
    )}

    {result === "error" && (
      <Box sx={{ mt: 3 }}>
        <CancelOutlined sx={{ fontSize: 80, color: "#fcb81c" }} />
        <Typography sx={{ mt: 2, fontWeight: 600, color: "#fcb81c" }}>Gagal Pengajuan!</Typography>
      </Box>
    )}

    {!loading && !result && selectedPaket && (
      <>
        <Typography variant="h5" sx={{ color: "#fcb81c", fontWeight: 700, mb: 1 }}>{selectedPaket.name}</Typography>
        <Typography variant="h6" sx={{ color: "#31927b", fontWeight: 600, mb: 3 }}>{selectedPaket.price}</Typography>

        {/* FORM INPUT */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mx: "auto", mt: 1 }}>
          <TextField 
          label="Nama Lengkap" 
          name="customer" 
          value={formData.customer} 
          type="text" 
          onChange={handleChange} 
          fullWidth 
          variant="outlined" 
          error={!!errors.customer}
          helperText={errors.customer}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#31927b" }, "&:hover fieldset": { borderColor: "#267864" }, "&.Mui-focused fieldset": { borderColor: "#31927b" } } }} />
          <TextField 
          label="Nomor HP / WhatsApp" 
          name="hp" 
          value={formData.hp} 
          type="number" 
          onChange={handleChange} 
          fullWidth 
          variant="outlined" 
          error={!!errors.hp}
          helperText={errors.hp}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#31927b" }, "&:hover fieldset": { borderColor: "#267864" }, "&.Mui-focused fieldset": { borderColor: "#31927b" } } }} />
          <TextField 
          label="Alamat Email" 
          name="email" 
          value={formData.email} 
          type="email" 
          onChange={handleChange} 
          fullWidth 
          variant="outlined" 
          error={!!errors.email}
          helperText={errors.email}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#31927b" }, "&:hover fieldset": { borderColor: "#267864" }, "&.Mui-focused fieldset": { borderColor: "#31927b" } } }} />
        </Box>
      </>
    )}
  </DialogContent>

  {!loading && !result && (
    <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
      <Button type="submit" onClick={handleSubmit} variant="contained" sx={{ bgcolor: "#267864", color: "white", fontWeight: 700, px: 4, py: 1.2, borderRadius: "10px" }}>
        Lakukan Pengajuan
      </Button>
    </DialogActions>
  )}
</Dialog>

    </Box>

      {/* ===== TESTIMONI ===== */}
     <Box
  id="testimoni"
  sx={{
    bgcolor: "#f7f7f7",
    py: 10,
    px: { xs: 3, md: 10 },
    textAlign: "center",
  }}
>
  <Typography variant="h4" sx={{ fontWeight: 700, color: "#31927b" }}>
    Testimoni Pelanggan
  </Typography>

  <Grid
    container
    spacing={4}
    sx={{
      mt: 5,
      justifyContent: "center",
    }}
  >
    {testimonials.slice(0, 6).map((t, i) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        key={i}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            p: 3,
            width: "100%",
            maxWidth: 330,
            textAlign: "center",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Avatar
            src={t.img}
            alt={t.name}
            sx={{
              width: 80,
              height: 80,
              mx: "auto",
              mb: 2,
              border: "3px solid #31927b",
            }}
          />
          <Typography
            sx={{
              fontStyle: "italic",
              mb: 2,
              color: "#333",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            "{t.text}"
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#31927b",
              fontSize: "1.05rem",
            }}
          >
            {t.name}
          </Typography>
          <Typography sx={{ color: "#777", fontSize: "0.9rem" }}>
            {t.role}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


      {/* ===== FOOTER ===== */}
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
      <IconButton
        onClick={handleClick}
        sx={{
          bgcolor: "#25D366",
          "&:hover": { bgcolor: "#1ebe5d" },
          color: "#fff",
          width: 60,
          height: 60,
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
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
    </Box>
  );
}
