import React from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import CatalogCard from './components/CatalogCard';
import BookingForm from './components/BookingForm';
import PortfolioGallery from './components/PortfolioGallery';
import ContactMap from './components/ContactMap';
import Reviews from './components/Reviews';
import StripePayment from './components/StripePayment';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* 1. Tablero de control Scrum */}
      <KanbanBoard />

      <hr style={{ margin: '40px 0' }} />

      {/* 2. Componentes de la aplicación Glam Studio */}
      <header>
        <h1>Glam Studio by Dafne - Aplicación Web</h1>
      </header>

      <main>
        <CatalogCard />
        <PortfolioGallery />
        <BookingForm />
        <StripePayment />
        <Reviews />
        <ContactMap />
        <AdminDashboard />
      </main>
    </div>
  );
}

export default App;