import { Link } from 'react-router';

// El estado de favoritos vive en Cursos.jsx y se controla mediante una prop.
export default function CursoCard({ curso, favorito = false, onToggleFavorito }) {
  return <article className="tarjeta">
    <div className="tarjeta-cabecera"><span className="etiqueta">{curso.area}</span><span className="modalidad">{curso.modalidad}</span></div>
    <h3>{curso.titulo}</h3>
    <p>{curso.descripcion}</p>
    <div className="detalles"><span>◷ {curso.duracion} horas</span><span>• {curso.modalidad}</span></div>
    <div className="acciones">
      <Link className="boton boton-primario" to={`/cursos/${curso.id}`}>Ver detalle</Link>
      {onToggleFavorito && <button type="button" className={'boton boton-favorito' + (favorito ? ' seleccionado' : '')} onClick={() => onToggleFavorito(curso.id)} aria-pressed={favorito} aria-label={favorito ? `Quitar ${curso.titulo} de favoritos` : `Añadir ${curso.titulo} a favoritos`}>{favorito ? '♥ Favorito' : '♡ Guardar'}</button>}
    </div>
  </article>;
}
