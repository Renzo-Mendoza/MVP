# Brújula Digital — Base de Conocimiento

> Plataforma de alfabetización digital para docentes. Gamifica el aprendizaje tecnológico con 3 niveles, 8 módulos, insignias y comunidad.

---

## Índice General

| # | Documento | Descripción |
|---|-----------|-------------|
| 01 | [Visión y Producto](./01-vision-producto.md) | Propósito, público objetivo, propuesta de valor, modelo de negocio |
| 02 | [Arquitectura Técnica](./02-arquitectura-tecnica.md) | Stack tecnológico, estructura de archivos, patrones de código |
| 03 | [Sistema de Diseño](./03-sistema-diseno.md) | Tokens de color, tipografía, sombras, bordes, animaciones, responsive |
| 04 | [Páginas y Componentes](./04-paginas-componentes.md) | Todas las páginas, componentes reutilizables, íconos SVG |
| 05 | [Gamificación](./05-gamificacion.md) | Niveles, módulos, insignias, racha, progreso |
| 06 | [Datos y Contenido](./06-datos-contenido.md) | Constantes hardcoded, posts, recursos, diagnóstico |
| 07 | [Navegación y UX](./07-navegacion-ux.md) | Flujos de usuario, sistema de rutas SPA, accesibilidad |
| 08 | [Estado Actual y Roadmap](./08-estado-actual-roadmap.md) | Funcionalidades implementadas, limitaciones, bugs conocidos, próximos pasos |

---

## Inicio Rápido

```bash
npm run dev      # Servidor de desarrollo — http://localhost:3000
npm run build    # Build de producción
npm start        # Servir build de producción
```

**Despliegue**: `npx vercel --prod`

---

## Estructura del Proyecto

```
MVP/
├── app/
│   ├── layout.jsx              # RootLayout con metadata en español
│   └── page.jsx                # Entry point — importa BrujulaDigital
├── brujula-digital-mvp.jsx     # Componente monolítico (~2480 líneas)
├── knowledge-base/             # ← Estás aquí
│   ├── INDEX.md
│   ├── 01-vision-producto.md
│   ├── 02-arquitectura-tecnica.md
│   ├── 03-sistema-diseno.md
│   ├── 04-paginas-componentes.md
│   ├── 05-gamificacion.md
│   ├── 06-datos-contenido.md
│   ├── 07-navegacion-ux.md
│   └── 08-estado-actual-roadmap.md
├── next.config.mjs             # Config mínima (devIndicators: false)
├── package.json                # next@16.1.6, react@19, zero UI deps
├── pencil-new.pen              # Archivo de diseño Pencil
└── .github/
    ├── copilot-instructions.md # Guidelines para agentes IA
    └── skills/                 # Skills de Vercel para agentes
```

---

## Convenciones Clave

- **Todo en español**: UI, comentarios, variables descriptivas
- **Un solo archivo**: MVP monolítico en `brujula-digital-mvp.jsx`
- **Inline styles**: No CSS externo, no Tailwind — usar `tokens`
- **SPA manual**: Navegación vía `useState(currentPage)` + `setPage()`
- **Datos hardcoded**: Sin backend, todo son constantes JS
- **Mobile-first**: Responsive vía hook `useResponsive()`
