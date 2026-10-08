import React from 'react';

function ContactMap() {
  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Ubicación y Contacto Directo (US-04)</h2>
      <a 
        href="https://wa.me/523310392723" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ display: 'inline-block', padding: '10px 15px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: '5px', marginBottom: '15px' }}>
        Contactar por WhatsApp
      </a>
      <div>
        <iframe 
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.700629834835!2d-103.38641732475395!3d20.641055880913044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adc025d00da7%3A0x7068170fe7e33f41!2sDAFNE'S%20GLAM%20STUDIO!5e0!3m2!1ses-419!2smx!4v1791424905325!5m2!1ses-419!2smx"
          height="200" 
          style={{ border: 0, borderRadius: '8px' }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
}

export default ContactMap;