import React from 'react';

function CatalogCard() {
  const services = [
    { id: 1, title: 'Maquillaje Social', price: '$800 MXN', time: '60 min' },
    { id: 2, title: 'Peinado Profesional', price: '$600 MXN', time: '45 min' },
    { id: 3, title: 'Diseño de Cejas & Pestañas', price: '$450 MXN', time: '40 min' }
  ];

  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Catálogo de Servicios (US-01)</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {services.map(s => (
          <div key={s.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '200px' }}>
            <h3>{s.title}</h3>
            <p><strong>Precio:</strong> {s.price}</p>
            <p><strong>Duración:</strong> {s.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CatalogCard;