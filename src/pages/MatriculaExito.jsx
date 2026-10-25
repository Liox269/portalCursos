import { Link, Navigate, useLocation } from "react-router";
import { cursos } from "../data/cursos.js";
import "./formularios.css";

export default function MatriculaExito() {
  const { state } = useLocation(); // datos enviados con navigate(..., { state })

  // Si alguien entra directo a esta URL, lo devolvemos al formulario
  if (!state) return <Navigate to="/matricula" replace />;

  const curso = cursos.find((c) => c.id === state.curso);

  return (
    <section>
      <div className="encabezado-pagina">
        <div>
          <span className="sobretitulo">TODO LISTO</span>
          <h1>¡Matrícula registrada!</h1>
          <p className="exito">Gracias, {state.nombre}. Estos son tus datos:</p>
        </div>
      </div>

      <ul className="resumen">
        <li><strong>Curso:</strong> {curso ? curso.titulo : state.curso}</li>
        <li><strong>Turno:</strong> {state.turno}</li>
        <li><strong>Correo:</strong> {state.email}</li>
        <li><strong>DNI:</strong> {state.dni}</li>
        <li><strong>Celular:</strong> {state.telefono}</li>
      </ul>

      <Link className="boton boton-primario" to="/cursos">Ver más cursos</Link>
    </section>
  );
}