import React from 'react';

function AdminDashboard() {
  return (
    <section style={{ padding: '20px', background: '#fafafa', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Panel de Administración (US-07)</h2>
      <p>Citas registradas en el sistema:</p>
      <ul>
        <li><strong>Ana López:</strong> Maquillaje Social - 12 de Octubre - <span style={{ color: 'green' }}>Confirmada</span></li>
        <li><strong>Carla Méndez:</strong> Peinado - 14 de Octubre - <span style={{ color: 'orange' }}>Pendiente</span></li>
      </ul>
    </section>
  );
}

export default AdminDashboard;