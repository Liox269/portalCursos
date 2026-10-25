import { Link, useNavigate, useParams } from 'react-router';
import { cursos } from '../data/cursos.js';

export default function CursoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const curso = cursos.find(c => c.id === id);
  if (!curso) return <div className="vacio"><span className="sobretitulo">CURSO NO ENCONTRADO</span><h1>Este curso no existe</h1><p>No hay un curso con el identificador {id}.</p><Link className="boton boton-primario" to="/cursos">Volver al catálogo</Link></div>;
  return <article className="detalle-curso">
    <button className="enlace-volver" type="button" onClick={() => navigate(-1)}>← Volver</button>
    <div className="detalle-contenido"><span className="etiqueta">{curso.area}</span><h1>{curso.titulo}</h1><p className="texto-grande">{curso.descripcion}</p>
    <div className="datos-curso"><span><strong>Duración</strong>{curso.duracion} horas</span><span><strong>Modalidad</strong>{curso.modalidad}</span></div>
    <h2>¿Qué aprenderás?</h2><ul className="temario">{curso.temario.map(tema => <li key={tema}>✓ {tema}</li>)}</ul>
    <button className="boton boton-primario" type="button" onClick={() => navigate(`/matricula?curso=${curso.id}`)}>Matricularme →</button></div>
  </article>;
}
