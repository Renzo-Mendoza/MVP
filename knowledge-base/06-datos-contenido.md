# 06 — Datos y Contenido

## Resumen de Constantes

Todos los datos están hardcoded como constantes JavaScript en `brujula-digital-mvp.jsx`. No hay backend, API, ni persistencia.

| Constante | Líneas | Items | Usado por |
|-----------|--------|-------|-----------|
| `MODULES` | ~42-131 | 8 | **No usado** (ver nota) |
| `BADGES` | ~133-142 | 8 | PageLogros |
| `COMMUNITY_POSTS` | ~144-175 | 3 | PageComunidad |
| `LIBRARY_RESOURCES` | ~177-184 | 6 | PageBiblioteca |
| `SHARED_RESOURCES` | ~186-189 | 2 | PageBiblioteca |
| `EXPLORER_LESSONS` | ~191-196 | 4 | PageExplorador |
| `DIAGNOSTIC_QUESTIONS` | ~198-249 | 5 | PageDiagnostico |

> **Nota**: `MODULES` está definido pero nunca referenciado. `PageRuta` define su propio `rutaModules` (4 módulos sobre Canva).

## COMMUNITY_POSTS — Posts del Foro

3 posts simulados de la comunidad docente:

| ID | Autor | Avatar | Tiempo | Resumen | Likes | Respuestas | Color |
|----|-------|--------|--------|---------|-------|-----------|-------|
| 1 | Patricia A. | PA | 2 horas | Compartió pantalla en Zoom sin ayuda | 12 | 3 | coral |
| 2 | María del Carmen O. | MC | 5 horas | Problema adjuntando archivos pesados en Gmail | 4 | 7 | teal |
| 3 | Roberto G. | RG | Ayer | El módulo de videoconferencia le cambió la vida | 23 | 5 | forest |

## LIBRARY_RESOURCES — Áreas Académicas

6 categorías de la biblioteca digital:

| ID | Área | Color | Recursos | Ícono | Descripción |
|----|------|-------|----------|-------|-------------|
| 1 | Matemáticas | coral | 12 | 📏 regla | Recursos para enseñanza |
| 2 | Ciencias | teal | 8 | 🔬 microscopio | Experimentos y material científico |
| 3 | Lenguaje | gold | 15 | ✏️ escritura | Plantillas y actividades |
| 4 | Historia | forest | 7 | 🏛️ edificio | Líneas de tiempo |
| 5 | Arte y Música | `#9B59B6` (purple) | 6 | 🎨 arte | Material creativo |
| 6 | Tecnología | oceanDeep | 10 | 💻 laptop | Tutoriales y herramientas |

## SHARED_RESOURCES — Recursos Compartidos

2 recursos de la sección de intercambio:

| ID | Título | Autor | Descargas | Tipo | Ícono |
|----|--------|-------|-----------|------|-------|
| 1 | Plantilla de examen — Álgebra | Patricia A. | 34 | PDF | 📄 documento |
| 2 | Presentación — Sistema Solar | Roberto G. | 21 | PPT | 📊 gráfico |

## EXPLORER_LESSONS — Lecciones del Módulo 1

4 lecciones del explorador digital:

| ID | Título | Tipo | Duración | Completada | Activa |
|----|--------|------|----------|-----------|--------|
| 1 | ¿Qué es lo digital? | Video | 5 min | Si | — |
| 2 | Navegador y buscador | PDF guía | 3 min | No | Si |
| 3 | Correo electrónico | Ejercicio | 10 min | No | — |
| 4 | Almacenamiento en la nube | Video | 8 min | No | — |

## DIAGNOSTIC_QUESTIONS — Preguntas del Diagnóstico

5 preguntas con 4 opciones cada una (ordenadas de menor a mayor competencia digital):

### Pregunta 1: Frecuencia de uso
> "¿Con qué frecuencia usas herramientas digitales en tu trabajo?"
- Casi nunca, me da inseguridad
- Algunas veces a la semana, lo básico
- Frecuentemente, para varias tareas
- Todos los días, con varias herramientas

### Pregunta 2: Resolución de problemas
> "Cuando algo falla en tu computadora o plataforma, ¿qué haces primero?"
- Pido ayuda inmediatamente
- Intento reiniciar o cerrar y abrir
- Busco en Google cómo solucionarlo
- Investigo y pruebo diferentes soluciones

### Pregunta 3: Confianza ante lo nuevo
> "¿Cómo te sientes al usar una plataforma nueva por primera vez?"
- Muy inseguro/a, prefiero no intentarlo
- Nervioso/a pero lo intento con ayuda
- Con algo de curiosidad, exploro poco a poco
- Emocionado/a por aprender algo nuevo

### Pregunta 4: Herramientas actuales
> "¿Qué herramientas digitales usas actualmente?"
- Solo WhatsApp y llamadas
- WhatsApp, correo electrónico, y alguna app
- Correo, navegador, apps de video, documentos en línea
- Múltiples herramientas de productividad y educación

### Pregunta 5: Clase online
> "Si tuvieras que dar una clase online mañana, ¿cómo te sentirías?"
- Aterrorizado/a, no sabría por dónde empezar
- Preocupado/a pero buscaría ayuda
- Algo preparado/a, conozco lo básico
- Seguro/a, ya tengo experiencia

## Datos Locales en Componentes

### PageRuta — `rutaModules`
Array de 4 módulos sobre Canva (no usa `MODULES`):
- Introducción a Canva (100% completado)
- Presentaciones en Canva (60% completado)
- Infografías Educativas (0%, bloqueado)
- Videos Educativos con Canva (0%, bloqueado)

### PageComunidad — `experiencias`
2 testimonios locales en el sidebar:
- **Ana García** (Arequipa): Experiencia con videoconferencias
- **Pedro Sánchez** (Lima): Experiencia con Google Classroom

### PageInicio — Testimonios
3 testimonios hardcoded:
- **Patricia A.** (52, comunicación): Las videoconferencias ya no le dan miedo
- **María del Carmen O.** (48, coordinadora): Google Classroom le cambió la vida
- **Patricia R.** (55, inglés): A sus 55 años usa Canva y Quizizz

### PagePerfil — Datos de Usuario
| Campo | Valor |
|-------|-------|
| Nombre | Carla Zúñiga |
| Iniciales | CZ |
| Rol | Docente de Inglés |
| Nivel | Explorador |
| Experiencia | 28 años |
| Edad | 50 años |
| Miembro desde | Febrero 2026 |
| Progreso | 68% |
| Módulos | 1/8 |
| Lecciones | 9/37 |
| Horas de práctica | 12h |

### PagePerfil — Actividad Reciente
4 actividades simuladas:
1. Completó lección "Navegador y buscador" — Hace 2 horas
2. Obtuvo insignia "Primera videollamada" — Ayer
3. Completó módulo "Primeros pasos digitales" — Hace 3 días
4. Publicó en la comunidad — Hace 5 días
