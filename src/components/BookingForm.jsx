import React, { useState } from 'react';

function BookingForm() {
  const [booking, setBooking] = useState({ name: '', service: 'Maquillaje Social', date: '', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Cita registrada con éxito para ${booking.name} el día ${booking.date} a las ${booking.time}!`);
  };

  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Agendamiento de Citas (US-02)</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '350px' }}>
        <input 
          type="text" 
          placeholder="Nombre completo" 
          value={booking.name} 
          onChange={(e) => setBooking({ ...booking, name: e.target.value })} 
          required 
          style={{ padding: '8px' }}
        />
        <select 
          value={booking.service} 
          onChange={(e) => setBooking({ ...booking, service: e.target.value })}
          style={{ padding: '8px' }}>
          <option value="Maquillaje Social">Maquillaje Social</option>
          <option value="Peinado Profesional">Peinado Profesional</option>
          <option value="Diseño de Cejas">Diseño de Cejas</option>
        </select>
        <input 
          type="date" 
          value={booking.date} 
          onChange={(e) => setBooking({ ...booking, date: e.target.value })} 
          required 
          style={{ padding: '8px' }}
        />
        <input 
          type="time" 
          value={booking.time} 
          onChange={(e) => setBooking({ ...booking, time: e.target.value })} 
          required 
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px', background: '#e91e63', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Confirmar Reserva
        </button>
      </form>
    </section>
  );
}

export default BookingForm;