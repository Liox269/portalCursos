import { Link, useLocation } from 'react-router';
export default function NoEncontrada(){ const location = useLocation(); return <div className="vacio"><h1>404</h1><h2>Página no encontrada</h2><p>No existe la ruta <code>{location.pathname}</code>.</p><Link to="/" className="boton boton-primario">Ir al inicio</Link></div>; }
