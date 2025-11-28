import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Index from "./pages/Index.jsx";
import Simulador from "./pages/Simulador.jsx";
import Solicitar from "./pages/Solicitar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Navbar con Links */}
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/simulador">Simulador</Link>
        <Link to="/solicitar">Solicitar</Link>
      </nav>

      <h1>CreditSmart</h1>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/solicitar" element={<Solicitar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;