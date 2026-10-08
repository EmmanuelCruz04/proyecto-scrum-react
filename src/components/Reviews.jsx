import React from 'react';

function Reviews() {
  const reviewsList = [
    { id: 1, name: 'Sofía R.', rating: '⭐⭐⭐⭐⭐', comment: 'Excelente atención, el maquillaje me duró toda la fiesta.' },
    { id: 2, name: 'Mariana G.', rating: '⭐⭐⭐⭐⭐', comment: 'El peinado quedó idéntico a la foto que pedí. Muy recomendada.' }
  ];

  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Reseñas de Clientes (US-05)</h2>
      {reviewsList.map(r => (
        <div key={r.id} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
          <strong>{r.name}</strong> - <span>{r.rating}</span>
          <p style={{ margin: '4px 0' }}>{r.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;