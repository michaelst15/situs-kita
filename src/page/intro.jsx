import React from 'react';
import { Box, Card } from '@mui/material';
import Lottie from 'lottie-react';
import loadingAnim from '../animasi/loading.json';
import Logo from '../image/logo.png'; // ✅ import logo

export default function LoadingPage() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        gap: { xs: 2, md: 1.5 }, // jarak antar elemen (lebih rapat di desktop)
      }}
    >
      {/* Logo di atas animasi */}
      <Box
        component="img"
        src={Logo}
        alt="Logo SitusKita"
        sx={{
          width: { xs: 200, sm: 200, md: 180 },
          mb: { xs: 1, md: 0.5 }, // lebih dekat di layar besar
          userSelect: 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      />

      {/* Card transparan berisi animasi */}
      <Card
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            width: { xs: 240, sm: 320, md: 360 },
            filter: 'invert(41%) sepia(17%) saturate(992%) hue-rotate(120deg) brightness(94%) contrast(92%)',
            // filter di atas menghasilkan warna mendekati #31927b
          }}
        >
          <Lottie animationData={loadingAnim} loop autoplay />
        </Box>
      </Card>
    </Box>
  );
}
