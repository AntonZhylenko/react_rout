import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// --------
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about*" element={<About />} />
          <Route path="/contact*" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
