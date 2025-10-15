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
        gap: { xs: 2, md: 1.2 }, // jarak antar elemen
      }}
    >
      {/* Logo di atas animasi */}
      <Box
        component="img"
        src={Logo}
        alt="Logo SitusKita"
        sx={{
          width: { xs: 180, sm: 190, md: 160, lg: 150 },
          mb: { xs: 1, md: 0.5 },
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
            width: { xs: 220, sm: 260, md: 220, lg: 200 }, // ✅ lebih kecil di desktop
            filter:
              'invert(41%) sepia(17%) saturate(992%) hue-rotate(120deg) brightness(94%) contrast(92%)',
          }}
        >
          <Lottie animationData={loadingAnim} loop autoplay />
        </Box>
      </Card>
    </Box>
  );
}
