# Portal de Cursos — Persona A (fases 0 a 7)

Proyecto académico desarrollado con React 19 + Vite + React Router 7.

## Ejecutar en VS Code (CachyOS / Linux)

1. Descomprimir la carpeta y abrir `portal-cursos-persona-a` en VS Code.
2. Abrir la terminal integrada (`Ctrl` + `ñ` o menú Terminal > Nueva terminal).
3. Ejecutar:

```bash
npm install
npm run dev
```

4. Abrir el enlace mostrado en la terminal, normalmente http://localhost:5173.

## Fases entregadas

- Fase 0: requisitos del entorno (Node.js y npm)
- Fase 1: estructura de Vite + React
- Fase 2: dependencias React Router 7, Formik y Yup (estas últimas se usarán en fases posteriores)
- Fase 3: `BrowserRouter` en `main.jsx`
- Fase 4: rutas, `Layout`, `Outlet`, `NavLink` y ruta comodín 404
- Fase 5: detalle con `useParams` y manejo de ID inexistente
- Fase 6: navegación con `Link`, `useNavigate` y parámetros de búsqueda
- Fase 7: formulario NO controlado con `FormData`, `defaultValue` y `useSearchParams`
- Extra de interacción: favoritos mediante `onClick` y estado levantado a `Cursos.jsx`.

## Probar

- `/` pantalla de inicio
- `/cursos` catálogo, filtros y favoritos
- `/cursos?q=react` búsqueda por URL
- `/cursos/1` detalle válido
- `/cursos/99` curso no encontrado
- `/ruta-que-no-existe` página 404

## Alcance / trabajo pendiente

`Matricula.jsx`, `MatriculaExito.jsx` y `Contacto.jsx` son **pantallas provisionales** para mantener la estructura de rutas requerida. El formulario controlado de contacto y la matrícula con Formik/Yup corresponden a las **fases 8 y 9**, fuera de la asignación de la Persona A. En `Matricula.jsx` se conserva la lectura de `?curso=ID` para integración posterior.

Los datos de los seis cursos son ejemplos académicos creados para demostrar el funcionamiento; la guía no contiene un dataset íntegro que se pueda copiar literalmente.
