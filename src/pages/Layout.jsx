// src/components/Layout.jsx
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>Gestión de Tareas</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Inicio</Link>
          <Link to="/add" style={styles.link}>Agregar Tarea</Link>
        </nav>
      </header>

      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  header: {
    padding: "15px",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    margin: 0
  },
  nav: {
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  },
  main: {
    padding: "20px"
  }
};

export default Layout;
