import { useState } from "react";
import "./formularios.css";

const inicial = { nombre: "", correo: "", mensaje: "" };

// Validación manual: se recalcula en cada render
function validar(v) {
  const e = {};
  if (v.nombre.trim().length < 3) e.nombre = "Escribe al menos 3 letras";
  if (!/^\S+@\S+\.\S+$/.test(v.correo)) e.correo = "Correo no válido";
  if (v.mensaje.trim().length < 10) e.mensaje = "El mensaje debe tener al menos 10 caracteres";
  return e;
}

export default function Contacto() {
  const [valores, setValores] = useState(inicial);
  const [tocados, setTocados] = useState({});
  const [enviado, setEnviado] = useState(false);

  const errores = validar(valores);

  // Un solo manejador para todos los campos: [name] es una clave calculada
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setValores((actual) => ({ ...actual, [name]: value }));
    setEnviado(false);
  };

  // Marca el campo como visitado al salir de él
  const manejarBlur = (e) => {
    const { name } = e.target;
    setTocados((actual) => ({ ...actual, [name]: true }));
  };

  const enviar = (e) => {
    e.preventDefault();
    setTocados({ nombre: true, correo: true, mensaje: true });
    if (Object.keys(errores).length > 0) return;
    setEnviado(true);
    setValores(inicial);
    setTocados({});
  };

  return (
    <section>
      <div className="encabezado-pagina">
        <div>
          <span className="sobretitulo">ESCRÍBENOS</span>
          <h1>Contacto</h1>
          <p>Envíanos tu consulta y te responderemos pronto.</p>
        </div>
      </div>

      <form onSubmit={enviar} noValidate className="formulario">
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" value={valores.nombre}
            onChange={manejarCambio} onBlur={manejarBlur} />
          {tocados.nombre && errores.nombre && <small className="error">{errores.nombre}</small>}
        </div>

        <div className="campo">
          <label htmlFor="correo">Correo</label>
          <input id="correo" name="correo" type="email" value={valores.correo}
            onChange={manejarCambio} onBlur={manejarBlur} />
          {tocados.correo && errores.correo && <small className="error">{errores.correo}</small>}
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="4" maxLength="200"
            value={valores.mensaje} onChange={manejarCambio} onBlur={manejarBlur} />
          <small className="ayuda">{valores.mensaje.length}/200 caracteres</small>
          {tocados.mensaje && errores.mensaje && <small className="error">{errores.mensaje}</small>}
        </div>

        <button type="submit" className="boton boton-primario">Enviar consulta</button>
        {enviado && <p className="exito">¡Consulta enviada! Gracias por escribirnos.</p>}
      </form>
    </section>
  );
}