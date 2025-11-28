import React from 'react'

import { Link } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";

function Index() {
  return (
    <main className="container">
      <section id="home" className="default">
        <div className="hero">
          <div className="left">
            <div className="badge">Catálogo de Créditos</div>
            <h1>Encuentra el crédito que se ajusta a ti</h1>
            <p className="small muted">
              Comparación rápida de productos crediticios con montos, tasas y plazos.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="small muted">
              Estado: Datos fijos • Diseño HTML5 + CSS
            </div>
          </div>
        </div>

        <div className="grid">
          <ProductCard
            icon="PI"
            name="Crédito Libre Inversión"
            description="Préstamo para uso personal o inversión"
            rate="Tasa: 11.64% anual"
            meta="Monto: $1.000.000 - $50.000.000 • Plazo hasta 60 meses"
            requisitos="Edad mínima 18 años, documento de identidad, certificado de ingresos."
          />

          <ProductCard
            icon="VH"
            name="Crédito Vehículo"
            description="Financiación para compra de vehículo nuevo o usado"
            rate="Tasa: 15.25% anual"
            meta="Monto: $5.000.000 - $80.000.000 • Plazo hasta 72 meses"
            requisitos="Edad mínima 21 años, SOAT/Registro del vehículo eventual, comprobante de ingresos."
          />

          <ProductCard
            icon="VH"
            name="Crédito Vivienda"
            description="Soluciones para adquisición de vivienda"
            rate="Tasa: 9.60% anual"
            meta="Monto: $20.000.000 - $300.000.000 • Plazo hasta 240 meses"
            requisitos="Edad mínima 21 años, escritura o promesa, historial crediticio."
          />

          <ProductCard
            icon="ED"
            name="Crédito Educativo"
            description="Financiación para matrícula y estudios"
            rate="Tasa: 14.67% anual"
            meta="Monto: $500.000 - $40.000.000 • Plazo hasta 48 meses"
            requisitos="Edad mínima 18 años, matrícula o carta de aceptación, información de ingresos."
          />

          <ProductCard
            icon="EM" <
            name="Crédito Empresarial"
            description="Líneas de crédito para micro y pequeñas empresas"
            rate="Tasa: 13.0% anual"
            meta="Monto: $3.000.000 - $150.000.000 • Plazo hasta 60 meses"
            requisitos="Documentos de la empresa, estados financieros, representante legal."
          />
        </div>
      </section>
    </main>
  );
}

export default Index;
