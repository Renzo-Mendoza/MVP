# 05 — Gamificación

## Sistema de Niveles

La plataforma tiene 3 niveles progresivos que representan la madurez digital del docente:

| Nivel | Nombre | Color | Ícono | Módulos | Descripción |
|-------|--------|-------|-------|---------|-------------|
| 1 | **Explorador Digital** | Teal (`oceanMist`/`oceanDeep`) | Brújula | 1-3 | Primeros pasos en el mundo digital |
| 2 | **Integrador Estratégico** | Coral/Naranja (`#FFF3E0`/`coralSoft`) | Cadena | 4-6 | Integra herramientas en su práctica docente |
| 3 | **Docente Autónomo** | Verde (`forestCalm`) | Estrella | 7-8 | Dominio independiente de tecnología educativa |

### Componente `LevelBadge`
Muestra el nivel actual como un pill badge con ícono emoji, colores por nivel, y dos tamaños (`sm`/`md`).

## Módulos de Aprendizaje

### Constante Global `MODULES` (8 módulos)

> **Nota**: Esta constante está definida pero NO se usa en la implementación actual. `PageRuta` usa su propio array `rutaModules`.

| ID | Nivel | Título | Lecciones | Completadas | Progreso | Desbloqueado |
|----|-------|--------|-----------|-------------|----------|-------------|
| 1 | Explorador | Primeros pasos digitales | 4 | 4 | 100% | Si |
| 2 | Explorador | Correo y comunicación | 5 | 3 | 75% | Si |
| 3 | Explorador | Videoconferencias sin estrés | 6 | 2 | 30% | Si |
| 4 | Integrador | Google Classroom esencial | 5 | 0 | 0% | No |
| 5 | Integrador | Presentaciones dinámicas | 4 | 0 | 0% | No |
| 6 | Integrador | Evaluación digital | 6 | 0 | 0% | No |
| 7 | Autónomo | Seguridad y privacidad | 4 | 0 | 0% | No |
| 8 | Autónomo | Proyecto integrador | 3 | 0 | 0% | No |

### Array Local `rutaModules` (4 módulos — usado en PageRuta)

| ID | Título | Lecciones | Completadas | Progreso | Desbloqueado |
|----|--------|-----------|-------------|----------|-------------|
| 1 | Introducción a Canva | 4 | 4 | 100% | Si |
| 2 | Presentaciones en Canva | 5 | 3 | 60% | Si |
| 3 | Infografías Educativas | 4 | 0 | 0% | No |
| 4 | Videos Educativos con Canva | 3 | 0 | 0% | No |

## Sistema de Insignias

8 insignias totales, 3 desbloqueadas:

| ID | Nombre | Ícono | Ganada | Fecha |
|----|--------|-------|--------|-------|
| 1 | Primer inicio | ⭐ star | Si | 15 Feb 2026 |
| 2 | Correo enviado | ✉️ letter | Si | 18 Feb 2026 |
| 3 | Primera videollamada | 📷 camera | Si | 20 Feb 2026 |
| 4 | Explorador digital | 🧭 compass | No | — |
| 5 | Integrador estratégico | 🔗 link | No | — |
| 6 | Docente autónomo | ⭐ star | No | — |
| 7 | Mentor activo | 🤝 handshake | No | — |
| 8 | Resiliencia digital | 💪 muscle | No | — |

### Visualización en PageLogros
- Insignias ganadas: Brillo dorado, gradiente de fondo, animación `scaleIn`
- Insignias no ganadas: Opacidad 0.5, ícono de candado superpuesto

## Sistema de Racha (Streak)

- Componente `StreakBadge` con emoji de fuego 🔥 animado
- Muestra días consecutivos (hardcoded: 5 días)
- Background dorado (`goldLight`) con texto `goldBadge`
- Animación CSS `streak` para el emoji de fuego

## Indicadores de Progreso

### Global
- `CircularProgress`: SVG circular que muestra % completado del total
- Contador de módulos completados (ej: "1/4 módulos")

### Por Módulo
- `ProgressBar`: Barra horizontal con gradiente teal
- Texto de lecciones ("3/5 lecciones completadas")
- Porcentaje numérico

### En Perfil
- Progreso general: 68%
- Módulos: 1/8
- Lecciones: 9/37
- Horas de práctica: 12h
- Días activa: 18

## Diagnóstico Inicial

### Flujo
1. Usuario accede desde CTA en PageInicio
2. 5 preguntas de opción múltiple (una a la vez)
3. Barra de progreso superior
4. Selección con animación, avance automático (400ms)
5. Pantalla de resultado con animación `badgeUnlock`

### Resultado
- **Siempre** asigna nivel "Explorador Digital" (respuestas no se evalúan)
- Muestra nombre hardcoded: "¡Bienvenida, Carla!"
- CTA para ir a "Mi Ruta Personalizada"

## Elementos de Celebración

- **Banner de celebración**: Aparece en PageRuta cuando hay módulos completados
- **Animación badgeUnlock**: Se reproduce al completar el diagnóstico
- **Animación celebrate**: Scale + rotate wobble para momentos especiales
- **Confetti visual**: Emojis de estrella ⭐ como decoración

## Mecánicas No Implementadas (Oportunidades)

- Sistema de XP (puntos de experiencia) — no existe actualmente
- Leaderboard / tabla de posiciones
- Logros desbloqueables vía interacción real
- Racha dinámica basada en actividad real
- Evaluación real del diagnóstico
- Desbloqueo progresivo de módulos basado en completar anteriores
