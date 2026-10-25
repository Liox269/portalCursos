import { useSearchParams, Link } from 'react-router';
import { cursos } from '../data/cursos.js';
// Pantalla provisional: formulario real corresponde a la Persona B (fases 8-11).
export default function Matricula(){
  const [params] = useSearchParams();
  const curso = cursos.find(c => c.id === params.get('curso'));
  return <div className="vacio"><span className="sobretitulo">PRÓXIMA FASE</span><h1>Matrícula en línea</h1><p>{curso ? `Curso elegido: ${curso.titulo}. ` : ''}El formulario validado con Formik y Yup se integra en las fases posteriores.</p><Link className="boton boton-primario" to="/cursos">Explorar cursos</Link></div>;
}
