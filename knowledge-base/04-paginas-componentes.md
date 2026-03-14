# 04 — Páginas y Componentes

## Páginas de la Aplicación

### PageInicio (Líneas ~807-1107)
**Ruta**: `"inicio"` (página por defecto)

Landing page con 4 secciones:

1. **Hero**: Gradiente teal con decoraciones flotantes. Lado izquierdo: tagline, heading, texto descriptivo, 2 CTAs, 3 stats. Lado derecho: brújula flotante animada.

2. **"¿Cómo funciona?"**: 3 tarjetas de pasos (Diagnostica tu nivel → Recorre tu ruta → Obtén tus logros).

3. **"Explora las etapas"**: 3 tarjetas para los 3 niveles (Explorador, Integrador, Autónomo) con borde superior de color, ícono y descripción.

4. **"Voces de docentes como tú"**: 3 testimonios con foto, nombre, edad, cargo y cita.

**Props**: `setPage` — permite navegar a "diagnostico" y "ruta"

---

### PageDiagnostico (Líneas ~1108-1273)
**Ruta**: `"diagnostico"` (accesible solo vía CTA en inicio)

Quiz de 5 preguntas con selección múltiple:
- Barra de progreso superior
- Una pregunta a la vez con 4 opciones
- Transición automática (400ms delay)
- Pantalla de resultado con animación `badgeUnlock`

**Estado local**: `step`, `answers`, `showResult`, `selectedOption`

**Nota**: El resultado es siempre "Explorador Digital" independientemente de las respuestas.

**Props**: `setPage` — navega a "ruta" al finalizar

---

### PageRuta (Líneas ~1275-1448)
**Ruta**: `"ruta"`

Vista de ruta de aprendizaje lineal tipo timeline vertical:
- Header con LevelBadge, StreakBadge, CircularProgress
- Banner de celebración (si hay módulos completados)
- Timeline vertical con 4 módulos (datos locales `rutaModules`, NO usa la constante global `MODULES`)
- Cada módulo: círculo numerado + Card con progreso + botón "Continuar"
- Módulos bloqueados con ícono de candado

**Props**: `setPage` — navega a "explorador"

---

### PageComunidad (Líneas ~1450-1661)
**Ruta**: `"comunidad"`

Página de comunidad con foro y experiencias:
- Hero banner con stats
- 3 tabs pill (Foro / Experiencias / Recursos) — **no funcionales** (contenido no cambia)
- Layout 2 columnas:
  - Izquierda: Caja de composición + 3 posts del foro con likes (toggle funcional) y respuestas
  - Derecha: Sidebar con experiencias reales + CTA para compartir

**Estado local**: `likedPosts`, `activeTab`

**Props**: Ninguno (no recibe `setPage`)

---

### PageBiblioteca (Líneas ~1663-1818)
**Ruta**: `"biblioteca"`

Biblioteca digital con recursos por área académica:
- Hero header con buscador y filtros pill — **no funcionales**
- Grid de 6 áreas académicas (Matemáticas, Ciencias, Lenguaje, Historia, Arte, Tecnología)
- Sección de intercambio de recursos con 2 recursos compartidos

**Estado local**: `activeFilter`, `searchQuery`

**Props**: `setPage`

---

### PageExplorador (Líneas ~1820-2006)
**Ruta**: `"explorador"`

Visor de lecciones estilo PDF viewer:
- Sidebar (300px desktop): título del módulo, progreso circular, lista de 4 lecciones con estados (completada/activa/bloqueada)
- Contenido principal: Breadcrumb, título de lección, info del archivo, contenido de la lección estilizado como PDF, caja de consejo
- Navegación inferior entre lecciones

**Estado local**: `currentLesson`

**Nota**: El contenido es estático — cambiar la lección seleccionada no cambia el contenido mostrado.

**Props**: `setPage` — navega a "ruta"

---

### PageLogros (Líneas ~2008-2074)
**Ruta**: `"logros"`

Página de insignias/logros:
- 3 stats cards (Insignias: 3/8, Nivel: Explorador, Días activa: 18)
- Grid de 8 insignias: ganadas con brillo dorado + animación, no ganadas en opacidad baja con candado

**Props**: Ninguno

---

### PagePerfil (Líneas ~2076-2207)
**Ruta**: `"perfil"`

Perfil de usuario con 2 columnas:
- Izquierda: Tarjeta de perfil (avatar "CZ", nombre, rol, nivel, stats personales)
- Derecha: Progreso en la ruta (68%) + Actividad reciente (4 items con timestamps)

**Props**: Ninguno

---

## Componentes Reutilizables

### Componentes de UI

| Componente | Líneas | Props | Descripción |
|-----------|--------|-------|-------------|
| `ProgressBar` | ~500 | `value`, `height`, `showLabel` | Barra horizontal con gradiente teal |
| `LevelBadge` | ~538 | `level`, `size` | Pill badge con 3 variantes (explorador/integrador/autonomo) |
| `Button` | ~566 | `variant`, `size`, `onClick`, `style`, `ariaLabel` | 3 variantes (primary/secondary/coral), 3 tamaños |
| `Card` | ~615 | `children`, `style`, `customStyle`, `delay` | Contenedor blanco con sombra, fadeInUp, hover lift |

### Componentes Decorativos

| Componente | Líneas | Props | Descripción |
|-----------|--------|-------|-------------|
| `WaveDivider` | ~436 | `color`, `flip` | SVG wave separator entre secciones |
| `FloatingDecoration` | ~444 | `top`, `left`, `right`, `size`, `color`, `opacity` | Círculo decorativo flotante con gradiente |
| `StreakBadge` | ~453 | `days` | Pill badge dorado con racha y emoji de fuego |
| `CircularProgress` | ~464 | `value`, `size`, `strokeWidth`, `color` | Indicador de progreso circular SVG |
| `SectionTitle` | ~482 | `children`, `subtitle`, `align` | Encabezado de sección con subtítulo opcional |

### Componentes Globales

| Componente | Líneas | Descripción |
|-----------|--------|-------------|
| `Navbar` | ~640-805 | Navegación sticky con 7 tabs + hamburger mobile |
| `Footer` | ~2279-2437 | Pie de página con 4 columnas de links + wave divider |
| `HelpButton` | ~2209-2277 | FAB coral flotante con 3 opciones de ayuda |

## Íconos SVG

Todos son componentes React que renderizan SVG inline:

| Componente | Tamaño | Descripción |
|-----------|--------|-------------|
| `CompassIcon` | 32px (configurable) | Brújula brand con marcadores N/E/S/O |
| `HelpIcon` | 20px | Signo de interrogación en círculo |
| `HeartIcon` | 16px | Corazón (filled/outline toggle) |
| `ChatIcon` | 16px | Burbuja de chat (**no usado**) |
| `CheckIcon` | 16px | Check mark |
| `LockIcon` | 18px | Candado |
| `ArrowRightIcon` | 18px | Flecha derecha |
