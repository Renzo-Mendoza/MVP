# 02 — Arquitectura Técnica

## Stack Tecnológico

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| Next.js | 16.1.6 | Framework (App Router) |
| React | 19.x | UI Library |
| React DOM | 19.x | Renderizado |
| Vercel | — | Hosting/Despliegue |

### Lo que NO se usa (por diseño)
- TypeScript
- Tailwind CSS / CSS-in-JS / CSS Modules
- Component libraries (MUI, Chakra, etc.)
- Base de datos / Backend / API
- Testing framework
- Linter / Formatter
- State management externo (Redux, Zustand)

## Estructura de Archivos

```
MVP/
├── app/
│   ├── layout.jsx          # RootLayout — metadata + <html lang="es">
│   └── page.jsx            # "use client" — renderiza <BrujulaDigital />
├── brujula-digital-mvp.jsx # TODO la app (~2480 líneas)
├── next.config.mjs         # { devIndicators: false }
├── package.json            # 3 deps, 3 scripts
├── .env                    # STITCH_API_KEY (no usado actualmente)
└── .github/
    └── copilot-instructions.md
```

### Detalle de Archivos Clave

#### `app/layout.jsx`
```jsx
export const metadata = {
  title: "Brujula Digital",
  description: "Plataforma de alfabetizacion digital para docentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
```

#### `app/page.jsx`
```jsx
"use client";
import BrujulaDigital from "../brujula-digital-mvp";
export default function Page() {
  return <BrujulaDigital />;
}
```

## Patrón Arquitectónico: SPA Monolítica

La aplicación sigue un patrón deliberado de **MVP monolítico**:

1. **Un solo archivo** (`brujula-digital-mvp.jsx`) contiene todo:
   - Design tokens
   - Datos/constantes
   - Estilos globales (CSS inyectado vía `<style>`)
   - Hook de responsive
   - Íconos SVG
   - Componentes decorativos
   - Componentes de UI reutilizables
   - 8 páginas completas
   - Navbar + Footer + HelpButton
   - Componente principal con routing

2. **Routing manual**: No usa el file-based router de Next.js para páginas internas
   ```jsx
   const [currentPage, setCurrentPage] = useState("inicio");

   const renderPage = () => {
     switch (currentPage) {
       case "inicio": return <PageInicio setPage={setPage} />;
       case "diagnostico": return <PageDiagnostico setPage={setPage} />;
       // ... 8 páginas total
     }
   };
   ```

3. **Sin estado global**: Cada página maneja su propio estado local con `useState`

## Secciones del Archivo Principal

| Líneas | Sección | Descripción |
|--------|---------|-------------|
| 1-39 | Design Tokens | Colores, sombras, radii |
| 41-250 | Constantes/Datos | MODULES, BADGES, posts, recursos, diagnóstico |
| 251-357 | Estilos Globales | CSS keyframes, variables, base styles |
| 358-367 | useResponsive | Hook de breakpoints |
| 369-497 | Íconos y Decorativos | SVG icons, WaveDivider, FloatingDecoration |
| 499-638 | Componentes UI | ProgressBar, LevelBadge, Button, Card |
| 640-805 | Navbar | Navegación con hamburger mobile |
| 807-1107 | PageInicio | Landing page |
| 1108-1273 | PageDiagnostico | Quiz diagnóstico |
| 1275-1448 | PageRuta | Ruta de aprendizaje |
| 1450-1661 | PageComunidad | Foro y experiencias |
| 1663-1818 | PageBiblioteca | Biblioteca digital |
| 1820-2006 | PageExplorador | Visor de lecciones/PDF |
| 2008-2074 | PageLogros | Insignias/logros |
| 2076-2207 | PagePerfil | Perfil de usuario |
| 2209-2277 | HelpButton | Botón flotante de ayuda |
| 2279-2437 | Footer | Pie de página |
| 2439-2480 | BrujulaDigital | Componente principal + routing |

## Convenciones de Código

| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Componentes | PascalCase | `PageInicio`, `LevelBadge` |
| Constantes | UPPER_SNAKE_CASE | `MODULES`, `BADGES` |
| Variables/funciones | camelCase | `currentPage`, `setPage` |
| Archivos | kebab-case.jsx | `brujula-digital-mvp.jsx` |
| Íconos | ComponenteSVG inline | `CompassIcon`, `LockIcon` |
| Idioma de UI | Español | Todo texto visible |

## Scripts

```bash
npm run dev      # next dev — http://localhost:3000
npm run build    # next build — producción
npm start        # next start — servir producción
```

## Despliegue

- Plataforma: **Vercel**
- Comando: `npx vercel --prod`
- No hay `vercel.json` — configuración por defecto
- No hay CI/CD configurado (no `.github/workflows/`)
