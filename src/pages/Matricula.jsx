import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useSearchParams } from "react-router";
import { cursos } from "../data/cursos.js";
import "./formularios.css";

const turnos = ["Mañana", "Tarde", "Noche"];

// 1) Esquema con las reglas de validación
const esquema = Yup.object({
  nombre: Yup.string().trim().min(3, "Escribe al menos 3 letras").required("El nombre es obligatorio"),
  email: Yup.string().email("Correo no válido").required("El correo es obligatorio"),
  dni: Yup.string().matches(/^\d{8}$/, "El DNI tiene 8 dígitos").required("El DNI es obligatorio"),
  telefono: Yup.string()
    .matches(/^9\d{8}$/, "Celular de 9 dígitos que empiece con 9")
    .required("El celular es obligatorio"),
  curso: Yup.string().required("Elige un curso"),
  turno: Yup.string().oneOf(["Mañana", "Tarde", "Noche"], "Elige un turno").required("Elige un turno"),
  acepta: Yup.boolean().oneOf([true], "Debes aceptar los términos"),
});

export default function Matricula() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // Si vienes desde el detalle, el curso ya llega seleccionado (?curso=2)
  const cursoInicial = searchParams.get("curso") || "";

  return (
    <section>
      <div className="encabezado-pagina">
        <div>
          <span className="sobretitulo">INSCRÍBETE</span>
          <h1>Matrícula en línea</h1>
          <p>Completa tus datos para reservar tu vacante.</p>
        </div>
      </div>

      {/* 2) Formulario con Formik */}
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          dni: "",
          telefono: "",
          curso: cursoInicial,
          turno: "",
          acepta: false,
        }}
        validationSchema={esquema}
        onSubmit={(valores) => navigate("/matricula/exito", { state: valores })}
      >
        <Form className="formulario" noValidate>
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <Field id="nombre" name="nombre" type="text" />
            <ErrorMessage name="nombre" component="small" className="error" />
          </div>

          <div className="campo">
            <label htmlFor="email">Correo</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="small" className="error" />
          </div>

          <div className="campo">
            <label htmlFor="dni">DNI</label>
            <Field id="dni" name="dni" type="text" />
            <ErrorMessage name="dni" component="small" className="error" />
          </div>

          <div className="campo">
            <label htmlFor="telefono">Celular</label>
            <Field id="telefono" name="telefono" type="text" />
            <ErrorMessage name="telefono" component="small" className="error" />
          </div>

          <div className="campo">
            <label htmlFor="curso">Curso</label>
            <Field id="curso" name="curso" as="select">
              <option value="">Elige un curso</option>
              {cursos.map((c) => (
                <option key={c.id} value={c.id}>{c.titulo}</option>
              ))}
            </Field>
            <ErrorMessage name="curso" component="small" className="error" />
          </div>

          <fieldset className="campo">
            <legend>Turno</legend>
            <div>
              {turnos.map((t) => (
                <label key={t} className="en-linea">
                  <Field type="radio" name="turno" value={t} /> {t}
                </label>
              ))}
            </div>
            <ErrorMessage name="turno" component="small" className="error" />
          </fieldset>

          <div className="campo">
            <label className="en-linea">
              <Field type="checkbox" name="acepta" /> Acepto los términos y condiciones
            </label>
            <ErrorMessage name="acepta" component="small" className="error" />
          </div>

          <button type="submit" className="boton boton-primario">Enviar matrícula</button>
        </Form>
      </Formik>
    </section>
  );
}