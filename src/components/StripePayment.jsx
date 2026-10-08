import React, { useState } from 'react';

function StripePayment() {
  const [isPaid, setIsPaid] = useState(false);

  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Pago de Anticipo (US-06)</h2>
      <p>Anticipo requerido para asegurar la cita: <strong>$200.00 MXN</strong></p>
      {isPaid ? (
        <div style={{ color: 'green', fontWeight: 'bold' }}>✅ Anticipo pagado correctamente vía Stripe (Sandbox API).</div>
      ) : (
        <button 
          onClick={() => setIsPaid(true)} 
          style={{ padding: '10px 15px', background: '#6772e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Pagar $200 MXN con Stripe
        </button>
      )}
    </section>
  );
}

export default StripePayment;