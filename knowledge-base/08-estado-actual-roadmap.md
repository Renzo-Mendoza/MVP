# 08 — Estado Actual y Roadmap

## Funcionalidades Implementadas

### Completas (UI + Interacción)
| Feature | Estado | Detalle |
|---------|--------|---------|
| Navegación SPA | Funcional | 8 páginas con navbar responsive |
| Diagnóstico | UI completa | 5 preguntas, selección con delay, animación de resultado |
| Likes en comunidad | Funcional | Toggle de corazón en posts del foro |
| Vista mobile/tablet | Funcional | Hook responsive + hamburger menu |
| Animaciones CSS | Funcional | 10 keyframes con soporte reduced-motion |
| Help button | UI completa | FAB con panel de opciones |

### Solo Visual (UI sin funcionalidad real)
| Feature | Estado | Detalle |
|---------|--------|---------|
| Tabs de comunidad | Decorativo | 3 tabs se resaltan pero el contenido no cambia |
| Filtros de biblioteca | Decorativo | 3 filtros + búsqueda capturan estado pero no filtran |
| Búsqueda en biblioteca | Decorativo | Input captura texto pero no busca |
| Composición de posts | Decorativo | Input placeholder, no permite escribir |
| Opciones de ayuda | Decorativo | 3 opciones sin acción asociada |
| Links del footer | Decorativo | `cursor: pointer` pero sin `onClick` |
| Cambio de lección | Parcial | Seleccionar lección cambia estado pero no actualiza contenido |
| Descargar recursos | Decorativo | Botones de descarga sin funcionalidad |
| Botón "Responder" | Decorativo | En posts del foro, sin acción |

## Bugs Conocidos

### Bug 1: SectionTitle no muestra título en PageInicio
- **Ubicación**: Líneas ~919-922 y ~982-985
- **Descripción**: `SectionTitle` recibe `title` como prop, pero el componente usa `children` para renderizar el texto del heading. El título "¿Cómo funciona?" y "Explora las etapas" no se muestran.
- **Impacto**: Medio — secciones sin título visible
- **Fix**: Cambiar `<SectionTitle title="..." subtitle="...">` a `<SectionTitle subtitle="...">Texto del título</SectionTitle>`

### Bug 2: Constante MODULES no utilizada
- **Ubicación**: Líneas ~42-131
- **Descripción**: `MODULES` define 8 módulos completos pero ningún componente lo referencia. `PageRuta` usa `rutaModules` (datos locales de 4 módulos sobre Canva).
- **Impacto**: Bajo — código muerto, posible confusión
- **Nota**: Puede ser intencional (iteración de diseño P1)

### Bug 3: useRef importado pero no usado
- **Ubicación**: Línea 1
- **Descripción**: `useRef` se importa de React pero nunca se usa en ningún componente.
- **Impacto**: Nulo — solo limpieza de código

### Bug 4: ChatIcon definido pero no usado
- **Ubicación**: Línea ~409
- **Descripción**: Componente SVG `ChatIcon` está definido pero nunca se renderiza.
- **Impacto**: Nulo — solo limpieza de código

### Bug 5: Diagnóstico no evalúa respuestas
- **Ubicación**: Líneas ~1108-1273
- **Descripción**: Las respuestas se guardan en estado `answers` pero nunca se procesan. El resultado siempre es "Explorador Digital".
- **Impacto**: Medio — la funcionalidad principal no es realista
- **Nota**: Esperado para MVP

## Limitaciones del MVP

| Limitación | Detalle |
|------------|---------|
| Sin backend | Todo es frontend, datos hardcoded |
| Sin autenticación | Un solo usuario simulado (Carla Zúñiga) |
| Sin persistencia | Estado se pierde al recargar |
| Sin base de datos | No hay almacenamiento de datos |
| Sin tests | No hay configuración de testing |
| Sin linting | No hay ESLint ni Prettier |
| Sin CI/CD | No hay GitHub Actions ni pipelines |
| Sin i18n | Solo español, sin framework de internacionalización |
| Sin SEO dinámico | Metadata estática en layout.jsx |
| Sin analytics | No hay tracking de uso |
| Archivo monolítico | ~2480 líneas en un solo archivo |

## Oportunidades de Mejora Técnica

### Corto Plazo
1. **Corregir bug de SectionTitle** — fix de 2 minutos
2. **Implementar evaluación del diagnóstico** — sumar puntajes de opciones y asignar nivel real
3. **Hacer tabs funcionales** — filtrar contenido de comunidad según tab activo
4. **Hacer búsqueda funcional** — filtrar recursos de biblioteca por query
5. **Conectar `MODULES` a PageRuta** — o eliminar la constante si no se necesita
6. **Limpiar imports no usados** — `useRef`, `ChatIcon`

### Mediano Plazo
7. **Agregar localStorage** — persistir progreso, likes, nivel diagnosticado
8. **Modularizar componentes** — separar en archivos por responsabilidad
9. **Agregar tests básicos** — al menos snapshot tests de componentes
10. **Implementar contenido dinámico en Explorador** — cambiar contenido según lección seleccionada
11. **Agregar ESLint + Prettier** — consistencia de código

### Largo Plazo
12. **Backend** — API para autenticación, progreso, comunidad
13. **Base de datos** — almacenar usuarios, progreso, posts
14. **Sistema de XP** — puntos de experiencia con desbloqueos reales
15. **Notificaciones** — recordatorios de racha, nuevos contenidos
16. **Leaderboard** — tabla de posiciones entre docentes
17. **Contenido real** — videos, PDFs, ejercicios interactivos
18. **PWA** — funcionamiento offline
19. **Analytics** — tracking de engagement y progreso

## Estado del Despliegue

| Aspecto | Estado |
|---------|--------|
| Plataforma | Vercel |
| Comando | `npx vercel --prod` |
| Dominio custom | No configurado |
| Variables de entorno | `STITCH_API_KEY` en `.env` (no usada) |
| SSL | Incluido con Vercel |
| CDN | Incluido con Vercel |

## Historial de Decisiones

| Decisión | Razón |
|----------|-------|
| Archivo monolítico | Velocidad de desarrollo MVP |
| Inline styles | Cero configuración, sin CSS externo |
| SPA manual | Simplicidad sobre file-based routing |
| Datos hardcoded | Sin necesidad de backend para validar concepto |
| React 19 + Next.js 16 | Stack moderno, soporte Vercel nativo |
| Sin TypeScript | Reducir complejidad para MVP |
| Sin deps UI | Control total del diseño, bundle mínimo |
