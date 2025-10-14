import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./page/AppBar";
import Portofolio from "./page/portofolio";
import Home from "./page/home"

// import Layanan from "./pages/Layanan";
// import Portofolio from "./pages/Portofolio";
// import Harga from "./pages/Harga";
// import Testimoni from "./pages/Testimoni";
// import Konsultasi from "./pages/Konsultasi";

import "./App.css";

function App() {
  return (
    <Router>
      {/* AppBar tetap tampil di setiap halaman */}
      <Header />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          {/* <Route path="/layanan" element={<Layanan />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/konsultasi" element={<Konsultasi />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
