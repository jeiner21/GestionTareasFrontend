import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProjectList.css";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:8080/api/projects/${id}`);
    setProjects(projects.filter(p => p.idhomework !== id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr><th>Nombre</th><th>Descripción</th><th>Estado</th><th>Fecha</th><th>Editar</th><th>Eliminar</th></tr>
        </thead>
        <tbody>
          {projects.map(p => (
            <tr key={p.idhomework}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.ready}</td>
              <td>{p.date}</td>
              <td><Link to={`/edit/${p.idhomework}`}>Modificar</Link></td>
              <td><button onClick={() => deleteProject(p.idhomework)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
