import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./page/AppBar";
import Portofolio from "./page/portofolio";
import Home from "./page/home";
import LoadingPage from "./page/intro";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // ✅ tambahkan ini
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: "'Quicksand', sans-serif",
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <div style={{ marginTop: "80px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portofolio" element={<Portofolio />} />
          </Routes>
        </div>
      </Router>
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
