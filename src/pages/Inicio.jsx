import { Link, useNavigate } from 'react-router';
import CursoCard from '../components/CursoCard.jsx';
import { cursos } from '../data/cursos.js';
export default function Inicio(){
  const navigate = useNavigate();
  return <><section className="hero"><span className="sobretitulo">APRENDE A TU RITMO</span><h1>Tu futuro comienza<br/><span>aquí.</span></h1><p>Descubre cursos prácticos en tecnología y desarrolla habilidades para tu futuro profesional.</p><button className="boton boton-claro" onClick={() => navigate('/cursos')}>Explorar cursos</button></section>
    <section className="seccion"><div className="seccion-titulo"><div><span className="sobretitulo">RECOMENDADOS</span><h2>Cursos destacados</h2></div><Link to="/cursos">Ver todos</Link></div><div className="cuadricula">{cursos.slice(0,3).map(c => <CursoCard key={c.id} curso={c}/>)}</div></section></>;
}
