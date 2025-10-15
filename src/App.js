import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./page/AppBar";
import Portofolio from "./page/portofolio";
import Home from "./page/home";
import LoadingPage from "./page/intro";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulasi waktu loading 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Header />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
