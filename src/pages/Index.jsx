import React from 'react'

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="Logo">CS</div>
          <div>
            <div>CreditSmart</div>
            <div className="muted">SivleTech Solutions S.A.S</div>
          </div>
        </div>

        <nav>
          <Link to="/" className="active">Inicio</Link>
          <Link to="/simulador">Simulador</Link>
          <Link to="/solicitar">Solicitar Crédito</Link>
        </nav>

        <div className="actions">
          <Link className="btn" to="/solicitar">Solicitar</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
