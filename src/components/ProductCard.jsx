import React from 'react';
import { Link } from "react-router-dom";
function ProductCard({ icon, name, description, rate, meta, requisitos }) {
  return (
    <article className="card">
      <div className="media">
        <div className="icon">{icon}</div>
        <div>
          <div className="product-name">{name}</div>
          <div className="small">{description}</div>
        </div>
      </div>

      <div className="card-row">
        <div>
          <div className="rate">{rate}</div>
          <div className="meta">{meta}</div>
        </div>
      </div>

      <p className="small">{requisitos}</p>

      <div className="actions">
        <a className="ghost" href="/simulador">Ver detalles</a>
        <a className="btn" href="/solicitar">Solicitar</a>
      </div>
    </article>
  );
}

export default ProductCard;