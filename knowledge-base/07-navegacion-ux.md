# 07 — Navegación y UX

## Sistema de Navegación

### Routing SPA Manual

La app **NO** usa el file-based router de Next.js para páginas internas. Toda la navegación es manual vía estado React:

```jsx
const [currentPage, setCurrentPage] = useState("inicio");

const setPage = (page) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
```

### Mapa de Páginas

| ID de Página | Componente | Recibe `setPage` | Acceso |
|-------------|-----------|-------------------|--------|
| `"inicio"` | PageInicio | Si | Navbar + default |
| `"diagnostico"` | PageDiagnostico | Si | Solo vía CTA en inicio |
| `"ruta"` | PageRuta | Si | Navbar |
| `"explorador"` | PageExplorador | Si | Navbar + desde ruta |
| `"biblioteca"` | PageBiblioteca | Si | Navbar |
| `"comunidad"` | PageComunidad | No | Navbar |
| `"logros"` | PageLogros | No | Navbar |
| `"perfil"` | PagePerfil | No | Navbar |

### Estructura del Layout

```
┌──────────────────────────────────┐
│          Navbar (sticky)         │
├──────────────────────────────────┤
│                                  │
│     <main> renderPage() </main>  │
│                                  │
├──────────────────────────────────┤
│           Footer                 │
├──────────────────────────────────┤
│    HelpButton (fixed, z:200)     │
└──────────────────────────────────┘
```

## Navbar

### Desktop
- Sticky top, fondo semi-transparente con backdrop blur
- Logo: CompassIcon + "BRÚJULA DIGITAL"
- 7 items de navegación como pills horizontales
- Item activo: fondo `oceanDeep`, texto blanco
- Item inactivo: texto `textSecondary`

### Mobile
- Logo + botón hamburger (3 barras → animación a X)
- Menú desplegable vertical con `slideDown`
- Se cierra al seleccionar item o click fuera

### Items de Navegación

| Orden | Label | Página | Ícono |
|-------|-------|--------|-------|
| 1 | Inicio | inicio | 🏠 |
| 2 | Mi Ruta | ruta | 🗺️ |
| 3 | Explorador | explorador | 🧭 |
| 4 | Biblioteca | biblioteca | 📚 |
| 5 | Comunidad | comunidad | 👥 |
| 6 | Logros | logros | 🏆 |
| 7 | Perfil | perfil | 👤 |

> **Nota**: "Diagnóstico" no aparece en la navbar — solo se accede vía CTA en inicio.

## Flujos de Usuario

### Flujo Principal (Happy Path)

```
Inicio → "Comenzar diagnóstico"
  → Diagnóstico (5 preguntas)
    → Resultado: "Explorador Digital"
      → "Ver mi ruta personalizada"
        → Mi Ruta (timeline de módulos)
          → "Continuar" en módulo activo
            → Explorador (visor de lecciones)
              → "Completar y continuar"
                → Volver a Mi Ruta
```

### Flujo Secundarios

```
Inicio → "Ver mi ruta" → Mi Ruta
Navbar → Cualquier página directamente
Mi Ruta → Explorador (módulo activo)
Explorador → Mi Ruta (vía breadcrumb o botón)
```

### Flujo de Comunidad
```
Navbar → Comunidad
  → Ver posts del foro
  → Like posts (toggle)
  → Ver experiencias (sidebar)
  (tabs y composición son decorativos)
```

### Flujo de Biblioteca
```
Navbar → Biblioteca
  → Ver áreas académicas
  → Ver recursos compartidos
  (búsqueda y filtros son decorativos)
```

## Accesibilidad

### Implementado
- `aria-current="page"` en nav item activo
- `aria-label` en botones con solo ícono
- `aria-expanded` en hamburger menu
- `prefers-reduced-motion: reduce` desactiva animaciones
- `:focus-visible` con outline de 3px `#4A9B9C`
- `touch-action: manipulation` en botones
- Semántica HTML: `<nav>`, `<main>`, `<footer>`, `<h1>`-`<h3>`

### No Implementado
- Skip navigation link
- Landmarks ARIA completos
- Alt text en elementos decorativos
- Anuncio de cambio de página para screen readers
- Keyboard navigation en todos los componentes interactivos

## HelpButton — Botón Flotante de Ayuda

- Posición: fixed, bottom-right (24px del borde)
- Estilo: círculo coral 60x60px, z-index 200
- Interacción: click para toggle panel
- Animación: rota 45° al abrir

### Opciones de Ayuda
1. 💬 Chat con un mentor
2. 📖 Ver guías rápidas
3. 📞 Solicitar llamada

> Todas las opciones son decorativas — no tienen funcionalidad real.

## Footer

4 columnas de enlaces (todos decorativos, sin funcionalidad):

| Columna | Links |
|---------|-------|
| **Plataforma** | Inicio, Diagnóstico, Mi Ruta, Logros, Biblioteca |
| **Comunidad** | Foro docente, Mentores, Eventos, Blog, Historias de éxito |
| **Soporte** | Centro de ayuda, Contacto, Guías rápidas, FAQ, Accesibilidad |
| **Brand** | CompassIcon + nombre + tagline + social icons (mail, chat, phone) |

Bottom bar: "© 2026 Brújula Digital, Chispas Estratégicas" + "Aprender no tiene edad"
