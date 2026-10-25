import { useState } from 'react';
import { useSearchParams } from 'react-router';
import CursoCard from '../components/CursoCard.jsx';
import { cursos } from '../data/cursos.js';

const areas = ['Todas', ...new Set(cursos.map(curso => curso.area))];
export default function Cursos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const [area, setArea] = useState('Todas');
  const [favoritos, setFavoritos] = useState([]);

  // Formulario NO controlado: el dato se obtiene del DOM únicamente al enviarlo.
  function buscar(e) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const texto = String(datos.get('q') ?? '').trim();
    setSearchParams(texto ? { q: texto } : {});
  }
  function alternarFavorito(id) {
    setFavoritos(actual => actual.includes(id) ? actual.filter(x => x !== id) : [...actual, id]);
  }
  const filtrados = cursos.filter(curso => {
    const coincideTexto = `${curso.titulo} ${curso.descripcion} ${curso.area}`.toLocaleLowerCase('es').includes(q.toLocaleLowerCase('es'));
    return coincideTexto && (area === 'Todas' || curso.area === area);
  });

  return <section>
    <div className="encabezado-pagina"><div><span className="sobretitulo">FORMACIÓN PARA TU FUTURO</span><h1>Catálogo de cursos</h1><p>Encuentra tu próxima oportunidad de aprendizaje.</p></div><span className="contador">Favoritos: {favoritos.length}</span></div>
    <form className="buscador" onSubmit={buscar}>
      <label htmlFor="q" className="sr-only">Buscar cursos</label>
      <input key={q} id="q" type="search" name="q" defaultValue={q} placeholder="Buscar por curso, descripción o área…" />
      <button className="boton boton-primario" type="submit">Buscar</button>
    </form>
    <div className="filtros" aria-label="Filtrar por área">{areas.map(item => <button key={item} type="button" className={'filtro' + (area === item ? ' filtro-activo' : '')} onClick={() => setArea(item)}>{item}</button>)}</div>
    <p className="resultados">{filtrados.length} {filtrados.length === 1 ? 'curso encontrado' : 'cursos encontrados'}</p>
    {filtrados.length ? <div className="cuadricula">{filtrados.map(curso => <CursoCard key={curso.id} curso={curso} favorito={favoritos.includes(curso.id)} onToggleFavorito={alternarFavorito}/>)}</div> : <div className="vacio"><h2>No encontramos resultados</h2><p>Prueba otra búsqueda o selecciona otra área.</p></div>}
  </section>;
}
