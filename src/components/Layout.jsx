import { NavLink, Outlet } from 'react-router';
const claseEnlace = ({ isActive }) => isActive ? 'enlace activo' : 'enlace';

export default function Layout() {
  return <div className="app">
    <header className="cabecera">
      <div className="contenedor nav">
        <NavLink to="/" className="marca">Portal de Cursos</NavLink>
        <nav aria-label="Navegación principal">
          <NavLink to="/" end className={claseEnlace}>Inicio</NavLink>
          <NavLink to="/cursos" className={claseEnlace}>Cursos</NavLink>
          <NavLink to="/matricula" className={claseEnlace}>Matrícula</NavLink>
          <NavLink to="/contacto" className={claseEnlace}>Contacto</NavLink>
        </nav>
      </div>
    </header>
    <main className="contenedor contenido"><Outlet /></main>
    <footer className="pie"><div className="contenedor">Portal de Cursos - Proyecto académico</div></footer>
  </div>;
}
