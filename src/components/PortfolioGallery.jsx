import React from 'react';

function PortfolioGallery() {
  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Galería & Portafolio (US-03)</h2>
      <p>Trabajos previos realizados a nuestras clientas:</p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{ width: '150px', height: '150px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Maquillaje 1</div>
        <div style={{ width: '150px', height: '150px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Peinado 1</div>
        <div style={{ width: '150px', height: '150px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Cejas 1</div>
      </div>
    </section>
  );
}

export default PortfolioGallery;