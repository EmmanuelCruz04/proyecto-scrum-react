import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'US-01: Catálogo de Servicios',
      description: 'Mostrar servicios de maquillaje, peinado, cejas y pestañas con precios y tiempos.',
      status: 'Completado'
    },
    {
      id: 2,
      title: 'US-02: Reserva de Citas',
      description: 'Permitir al cliente seleccionar fecha, hora y servicio para agendar una cita.',
      status: 'En Progreso'
    },
    {
      id: 3,
      title: 'US-03: Galería / Portafolio',
      description: 'Mostrar fotografías de trabajos previos para transmitir confianza al cliente.',
      status: 'Completado'
    },
    {
      id: 4,
      title: 'US-04: Ubicación y Contacto',
      description: 'Agregar WhatsApp y Google Maps con la ubicación del estudio.',
      status: 'Completado'
    },
    {
      id: 5,
      title: 'US-05: Reseñas de Clientes',
      description: 'Mostrar testimonios y reseñas de clientas.',
      status: 'Por Hacer'
    }
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      description: 'Nueva tarea del proyecto',
      status: 'Por Hacer'
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const renderTasks = (status) => {
    return tasks
      .filter(task => task.status === status)
      .map(task => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ));
  };

  return (
    <div className="App">

      <header className="header">
        <h1>Tablero Scrum - Glam Studio by Dafne</h1>
        <p>Proyecto II | Sprint 1</p>
      </header>

      <section className="project-info">
        <h2>Gestión del Sprint 1</h2>
        <p>
          Objetivo: desarrollar la estructura base y las funcionalidades
          principales del sitio web.
        </p>
      </section>

      <section className="task-form">
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Agregar nueva tarea..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button type="submit">
            Agregar Tarea
          </button>
        </form>
      </section>

      <section className="board">

        <div className="column column-todo">
          <h2>📝 Por Hacer</h2>
          {renderTasks('Por Hacer')}
        </div>

        <div className="column column-progress">
          <h2>⚙️ En Progreso</h2>
          {renderTasks('En Progreso')}
        </div>

        <div className="column column-done">
          <h2>✅ Completado</h2>
          {renderTasks('Completado')}
        </div>

      </section>

    </div>
  );
}

export default App;