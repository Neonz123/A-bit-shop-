import React from 'react';
import './BrandLogo.css'; // Import BrandLogos specific CSS

const BrandLogos: React.FC = () => {
  return (
    <section className="brands-section">
      <span className="brand-logo-item">VERSACE</span>
      <span className="brand-logo-item">ZARA</span>
      <span className="brand-logo-item">GUCCI</span>
      <span className="brand-logo-item">PRADA</span>
      <span className="brand-logo-item">Calvin Klein</span>
    </section>
  );
};

export default BrandLogos;