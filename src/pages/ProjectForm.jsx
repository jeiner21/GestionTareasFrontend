import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectForm.css"; 

export default function ProjectForm() {
  const [project, setProject] = useState({ name:"", description:"", ready:"Pendiente", date:"", assignedEmail:"" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/projects/${id}`)
        .then(res => setProject(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => setProject({...project, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:8080/api/projects/${id}`, project);
    } else {
      await axios.post("http://localhost:8080/api/projects", project);
    }
    navigate("/"); // redirige a ver todas las tareas
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">{id ? "Editar" : "Crear"} tarea</h2>

        <div className="form-group">
          <label>Nombre</label>
          <input
            name="name"
            value={project.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Descripción"
            required
          />
        </div>

        <div className="form-group">
          <label>Estado</label>
          <select name="ready" value={project.ready} onChange={handleChange}>
            <option>Pendiente</option>
            <option>Terminado</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fecha de entrega</label>
          <input
            type="date"
            name="date"
            value={project.date || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            name="assignedEmail"
            value={project.assignedEmail}
            onChange={handleChange}
            placeholder="Correo asignado"
            required
          />
        </div>

        <button type="submit" className="form-button">
          Guardar
        </button>
      </form>
    </div>
  );
}

