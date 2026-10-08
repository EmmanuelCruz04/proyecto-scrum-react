# Glam Studio by Dafne - Sistema de Gestión y Reservas en React

Este proyecto es una aplicación web interactiva desarrollada con **ReactJS** bajo el marco de trabajo ágil **Scrum**. Permite a las clientas explorar el catálogo de servicios, visualizar portafolios de trabajo, agendar citas en tiempo real y simular pagos de anticipos.

* **Alumno:** Emmanuel Cruz
* **Materia:** Proyecto II
* **Organización Scrum:** Glam Studio by Dafne

---

## Tecnologías Utilizadas
* **Frontend:** ReactJS (Functional Components, Hooks: `useState`, `useEffect`)
* **Estilos:** CSS3 / Módulos
* **Persistencia Local:** `localStorage` (para simulación de estado Kanban y citas)
* **Pasarela de Pagos:** Stripe API (Sandbox)
* **Control de Versiones:** Git & GitHub

---

## Resumen de Sprints Desarrollados

### 🔹 Sprint 1: Estructura Base, Kanban y Oferta Comercial
* **HU-01:** Catálogo de servicios y precios interactivo.
* **HU-04:** Integración de mapa interactivo (Google Maps) y widget de WhatsApp.
* Maquetación base y tablero Kanban de seguimiento técnico.

### 🔹 Sprint 2: Motor de Reservas y Galería Visual (MVP)
* **HU-02:** Formulario dinámico de agendamiento controlado mediante `useState`.
* **HU-03:** Galería de portafolio optimizada con imágenes WebP para alto rendimiento.
* **Refactorización:** Módulos independientes (`BookingForm.jsx`, `CatalogCard.jsx`).

### 🔹 Sprint 3: Fidelización, Pasarela de Pagos y Panel Administrador
* **HU-05:** Sistema interactivo de reseñas con puntuación de estrellas.
* **HU-06:** Pasarela de pago de anticipos conectada con Sandbox de Stripe.
* **HU-07:** Dashboard privado para consultar y cambiar el estado de citas.

---

## Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/EmmanuelCruz04/proyecto-scrum-react.git](https://github.com/EmmanuelCruz04/proyecto-scrum-react.git)