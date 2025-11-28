import React from 'react';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          CreditSmart • Diseño de Interfaces Web – S20 • SivleTech Solutions S.A.S
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank">
            <img src="/src/assets/f.jpg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="/src/assets/inst.jpg" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src="/src/assets/twtt.jpg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img src="/src/assets/linkedin.jpg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;