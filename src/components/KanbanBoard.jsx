import React, { useState, useEffect } from 'react';

const DEFAULT_TASKS = [
  { id: 'US-01', title: 'US-01: Catálogo de Servicios (2 pts)', description: 'Mostrar servicios de maquillaje, peinado, cejas y pestañas con precios y tiempos.', status: 'Completado' },
  { id: 'US-02', title: 'US-02: Reserva de Citas (5 pts)', description: 'Permitir al cliente seleccionar fecha, hora y servicio para agendar una cita.', status: 'Completado' },
  { id: 'US-03', title: 'US-03: Galería / Portafolio (2 pts)', description: 'Mostrar fotografías de trabajos previos para transmitir confianza al cliente.', status: 'Completado' },
  { id: 'US-04', title: 'US-04: Ubicación y Contacto (1 pt)', description: 'Agregar WhatsApp y Google Maps con la ubicación del estudio.', status: 'Completado' },
  { id: 'US-05', title: 'US-05: Reseñas de Clientes (3 pts)', description: 'Mostrar testimonios y reseñas de clientas.', status: 'Completado' },
  { id: 'US-06', title: 'US-06: Registro e Inicio de Sesión (3 pts)', description: 'Permitir a los usuarios crear una cuenta e iniciar sesión con correo, contraseña y teléfono.', status: 'Completado' },
  { id: 'US-07', title: 'US-07: Cancelación y Reagendamiento (3 pts)', description: 'Permitir al cliente modificar o cancelar su cita con al menos 24 horas de anticipación.', status: 'Completado' },
  { id: 'US-08', title: 'US-08: Panel de Administración (8 pts)', description: 'Permitir al administrador visualizar, filtrar y cambiar el estado de todas las citas.', status: 'Completado' },
  { id: 'US-09', title: 'US-09: Confirmaciones y Recordatorios (5 pts)', description: 'Enviar notificaciones automáticas por correo o WhatsApp con los detalles de la reserva.', status: 'Completado' },
  { id: 'US-10', title: 'US-10: Pago de Anticipo en Línea (5 pts)', description: 'Integrar pasarela de pago para cobro de depósitos o reservas para asegurar la cita.', status: 'Completado' }
];
function KanbanBoard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('glam_studio_tasks');
    return savedTasks ? JSON.parse(savedTasks) : DEFAULT_TASKS;
  });

  useEffect(() => {
    localStorage.setItem('glam_studio_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const changeTaskStatus = (id, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

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
        <div key={task.id} className="task-card" style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <select 
            value={task.status} 
            onChange={(e) => changeTaskStatus(task.id, e.target.value)}> 
            <option value="Por Hacer">Por Hacer</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>
      ));
  };

  return (
    <section className="kanban-container" style={{ margin: '20px 0' }}>
      <header className="header">
        <h1>Tablero Scrum - Glam Studio by Dafne</h1>
        <p>Proyecto II | Control de Sprints</p>
      </header>

      <section className="task-form" style={{ marginBottom: '15px' }}>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Agregar nueva tarea..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ padding: '8px', marginRight: '8px' }}
          />
          <button type="submit" style={{ padding: '8px 15px' }}>Agregar Tarea</button>
        </form>
      </section>

      <section className="board" style={{ display: 'flex', gap: '15px' }}>
        <div className="column column-todo" style={{ flex: 1, background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <h2>Por Hacer</h2>
          {renderTasks('Por Hacer')}
        </div>
        <div className="column column-progress" style={{ flex: 1, background: '#fff3cd', padding: '10px', borderRadius: '5px' }}>
          <h2>En Progreso</h2>
          {renderTasks('En Progreso')}
        </div>
        <div className="column column-done" style={{ flex: 1, background: '#d4edda', padding: '10px', borderRadius: '5px' }}>
          <h2>Completado</h2>
          {renderTasks('Completado')}
        </div>
      </section>
    </section>
  );
}

export default KanbanBoard;