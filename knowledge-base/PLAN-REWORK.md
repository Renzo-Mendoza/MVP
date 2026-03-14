# Plan de Rework Completo — Brújula Digital

> Documento de planificación para el rediseño integral de diseño y contenido de la plataforma.

---

## Tabla de Contenidos

1. [Diagnóstico del Estado Actual](#1-diagnóstico-del-estado-actual)
2. [Principios del Rework](#2-principios-del-rework)
3. [Cambios Globales (Diseño y UX)](#3-cambios-globales)
4. [Plan Vista por Vista](#4-plan-vista-por-vista)
5. [Nuevo Contenido Curricular](#5-nuevo-contenido-curricular)
6. [MCPs Recomendados](#6-mcps-recomendados)
7. [Fases de Implementación](#7-fases-de-implementación)

---

## 1. Diagnóstico del Estado Actual

### Lo que funciona bien (MANTENER)
- Paleta de colores cálida y no intimidante (ocean, sand, coral, forest)
- Tipografías Playfair Display + Nunito
- Hook `useResponsive()` y diseño mobile-first
- Patrón de diagnóstico paso-a-paso (una pregunta a la vez)
- Tono de voz empático ("No hay respuestas correctas", "Aprender no tiene edad")
- Accesibilidad básica (aria, focus-visible, reduced-motion)
- Animaciones tasteful (fadeInUp, scaleIn)
- Componentes reutilizables (Button, Card, ProgressBar, LevelBadge)

### Problemas Críticos (P0)
| # | Problema | Impacto |
|---|---------|---------|
| 1 | `SectionTitle` no muestra títulos en PageInicio | Dos secciones del landing sin heading |
| 2 | Diagnóstico nunca evalúa respuestas — siempre "Explorador" | Feature principal falso |
| 3 | `MODULES` (8 mods) vs `rutaModules` (4 mods Canva) — datos contradictorios | Confusión total de currículo |
| 4 | Explorador muestra contenido estático — cambiar lección no cambia nada | La experiencia de aprendizaje es nula |
| 5 | Sin persistencia — todo se pierde al recargar | Destruye confianza del usuario |
| 6 | 15+ elementos decorativos (tabs, búsqueda, filtros, links) que no hacen nada | Refuerza el miedo "hago algo mal" |
| 7 | Botón de ayuda completamente falso | El recurso más importante para el público es mentira |

### Datos que No Cuadran
| Fuente | Dice | Real |
|--------|------|------|
| Perfil | 1/8 módulos, 9/37 lecciones | Ruta muestra 4 módulos, 16 lecciones |
| Landing | "8 módulos prácticos" | Ruta muestra 4 módulos de Canva |
| Badges | "Correo enviado", "Primera videollamada" | No existen esas actividades en la ruta |
| Comunidad | "340+ conversaciones" | Solo 3 posts visibles |
| Biblioteca | "58 recursos" | Solo 2 visibles |

---

## 2. Principios del Rework

### Para el público (docentes 48-55+)

1. **Cada click debe hacer algo.** Si un elemento parece interactivo, debe serlo. Eliminar todo lo decorativo-falso.
2. **Texto mínimo 16px.** Nunca menos de 16px en ningún lugar. Contenido de lecciones a 18px.
3. **Touch targets 48px mínimo.** Botones, pills, items de lista.
4. **Lenguaje de confianza constante.** "Tómate tu tiempo", "Puedes volver cuando quieras", "Los errores son parte del aprendizaje."
5. **Progreso visible siempre.** El usuario debe saber en todo momento dónde está y cuánto le falta.
6. **Máximo 5 items de navegación.** Reducir carga cognitiva.
7. **Gamificación profesional, no infantil.** Competencias, no stickers. Certificados, no confetti.

### Para el producto

8. **Un currículo coherente.** Eliminar `MODULES` muerto o unificarlo con `rutaModules`.
9. **localStorage como mínimo.** Persistir progreso, nivel, likes, racha.
10. **Contenido por módulo en el Explorador.** Cada módulo carga su propio contenido.

---

## 3. Cambios Globales

### 3.1 Navegación — De 7 a 5 items

**Actual (7 items):**
Inicio | Mi Ruta | Explorador | Biblioteca | Comunidad | Logros | Perfil

**Propuesta (5 items):**
Inicio | Mi Ruta | Biblioteca | Comunidad | Mi Perfil

| Cambio | Razón |
|--------|-------|
| Eliminar "Explorador" de nav | Se accede DENTRO de "Mi Ruta" al abrir un módulo — no es una sección top-level |
| Mover "Logros" dentro de "Mi Perfil" | Reduce nav. Perfil muestra logros como una sección |
| Renombrar "Perfil" → "Mi Perfil" | Más personal y claro |

### 3.2 Tipografía — Aumentar mínimos

| Elemento | Actual | Propuesta |
|----------|--------|-----------|
| Texto muted/secundario | 13px | **16px** |
| Botón sm | 14px | **15px** |
| Texto de cuerpo | 16px | **16-17px** |
| Contenido de lecciones | 16px | **18px** |
| Labels de formularios | variable | **16px mínimo** |
| Line-height general | 1.5 | **1.6-1.7** |

### 3.3 Contraste — Fixes críticos

| Token | Actual | Problema | Propuesta |
|-------|--------|----------|-----------|
| `textMuted` | `#A0AEC0` | Ratio 2.7:1 — **FALLA AA** | `#6B7A8D` (~4.5:1) |
| Blanco sobre `coralSoft` | `#FFF` en `#E8927C` | Ratio 2.6:1 — **FALLA AA** | Oscurecer coral a `#C97A65` o usar texto oscuro |

### 3.4 Persistencia con localStorage

Guardar en localStorage:
- `brujula_nivel`: nivel diagnosticado
- `brujula_progreso`: objeto con progreso por módulo
- `brujula_likes`: IDs de posts likeados
- `brujula_racha`: { ultimoAcceso, diasConsecutivos }
- `brujula_leccionesCompletadas`: array de IDs
- `brujula_insignias`: array de IDs ganadas
- `brujula_nombre`: nombre del usuario (capturado en diagnóstico o perfil)

### 3.5 Currículo Unificado — 6 Módulos

Eliminar `MODULES` (8 mods genéricos) y `rutaModules` (4 mods Canva). Crear un currículo unificado coherente:

| # | Módulo | Nivel | Lecciones | Herramientas |
|---|--------|-------|-----------|-------------|
| 1 | Navegando el Mundo Digital | Explorador | 4 | Navegador, Google, YouTube |
| 2 | Correo y Comunicación | Explorador | 4 | Gmail, Google Drive |
| 3 | Presentaciones con Canva | Integrador | 5 | Canva |
| 4 | Tu Aula Virtual | Integrador | 5 | Google Classroom |
| 5 | Evaluación Digital | Integrador | 4 | Google Forms, Quizizz |
| 6 | Proyecto Final Integrador | Autónomo | 3 | Todas las anteriores |

**Total: 25 lecciones, 6 módulos, 3 niveles**

Cada módulo tiene: Lecciones teóricas + Actividades prácticas + Ejercicio evaluado.

---

## 4. Plan Vista por Vista

### 4.1 PageInicio (Landing) — Rediseño

**Problemas actuales:**
- SectionTitle bug — secciones sin título
- Stats falsos (127+ docentes)
- No distingue usuario nuevo vs retorno

**Cambios propuestos:**

```
┌─────────────────────────────────────────────────┐
│                   NAVBAR (5 items)               │
├─────────────────────────────────────────────────┤
│                                                  │
│  HERO SECTION                                    │
│  ┌─────────────────────┬──────────────────────┐ │
│  │ Tagline             │   Brújula animada    │ │
│  │ "Para docentes..."  │                      │ │
│  │                     │                      │ │
│  │ CTA Principal:      │                      │ │
│  │ [Descubre tu nivel] │                      │ │
│  │                     │                      │ │
│  │ CTA Secundario:     │                      │ │
│  │ "Ya empecé → "      │                      │ │
│  └─────────────────────┴──────────────────────┘ │
│                                                  │
│  ¿CÓMO FUNCIONA? (3 pasos)                      │
│  ┌──────────┬──────────┬──────────┐             │
│  │ 1. Haz   │ 2. Sigue │ 3. Gana  │             │
│  │ tu       │ tu ruta  │ tus      │             │
│  │ diagn.   │ paso a   │ compet.  │             │
│  │          │ paso     │          │             │
│  └──────────┴──────────┴──────────┘             │
│                                                  │
│  TU CAMINO DE 3 NIVELES                          │
│  ┌──────────┬──────────┬──────────┐             │
│  │ 🧭       │ 🔗       │ ⭐       │             │
│  │ Explorad.│ Integrad.│ Autónomo │             │
│  │ 2 mods   │ 3 mods   │ 1 mod    │             │
│  └──────────┴──────────┴──────────┘             │
│                                                  │
│  VOCES DE DOCENTES (3 testimonios)               │
│  [Mantener — funcionan bien]                     │
│                                                  │
│  NÚMEROS REALES (o eliminar)                     │
│  En lugar de stats falsos, mostrar:              │
│  "Plataforma 100% gratuita"                      │
│  "6 módulos paso a paso"                          │
│  "Desde lo básico hasta tu proyecto"              │
│                                                  │
├─────────────────────────────────────────────────┤
│                   FOOTER (limpio)                │
└─────────────────────────────────────────────────┘
```

**Cambios específicos:**
1. Fix SectionTitle: pasar texto como `children`
2. Reemplazar stats falsos ("127+ docentes") por propuestas de valor verificables
3. CTA diferenciado: usuario nuevo → "Descubre tu nivel"; usuario retorno → "Continuar mi ruta"
4. Actualizar cards de niveles con 6 módulos reales
5. Mantener testimonios (funcionan bien para reducir ansiedad)

---

### 4.2 PageDiagnostico — Hacer Real

**Problemas actuales:**
- No evalúa respuestas
- Siempre asigna "Explorador"
- No se puede retroceder
- Solo 5 preguntas

**Cambios propuestos:**

```
┌─────────────────────────────────────────┐
│  DIAGNÓSTICO (8 preguntas)              │
│                                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━ 3/8           │
│  Pregunta 3 de 8                        │
│                                         │
│  "Imagina que necesitas compartir       │
│   un documento con tus colegas.         │
│   ¿Qué harías?"                         │
│                                         │
│  ○ Le pido a alguien que lo haga        │
│  ○ Lo imprimo y se lo doy en mano       │
│  ○ Lo envío por WhatsApp o correo       │
│  ○ Lo subo a Google Drive y             │
│    comparto el enlace                   │
│                                         │
│  [← Anterior]         [Siguiente →]     │
│                                         │
│  💬 "No hay respuestas correctas.       │
│      Queremos conocer tu punto de       │
│      partida para personalizar tu       │
│      experiencia."                      │
└─────────────────────────────────────────┘
```

**PANTALLA DE RESULTADO (personalizada):**

```
┌─────────────────────────────────────────┐
│                                         │
│  🧭 ¡Tu punto de partida!              │
│                                         │
│  Nivel: EXPLORADOR DIGITAL              │
│  (o INTEGRADOR según score)             │
│                                         │
│  "Basado en tus respuestas, tu ruta     │
│   se enfocará en:"                      │
│                                         │
│  ✅ Navegación básica y correo          │
│  ✅ Videoconferencias                   │
│  → Presentaciones con Canva             │
│  → Tu Aula Virtual                      │
│  🔒 Evaluación Digital                  │
│  🔒 Proyecto Integrador                 │
│                                         │
│  [Ver mi ruta personalizada →]          │
│                                         │
│  "Puedes cambiar tu nivel en            │
│   cualquier momento desde tu perfil"    │
└─────────────────────────────────────────┘
```

**Cambios específicos:**
1. Expandir a 8 preguntas basadas en escenarios reales del aula
2. Implementar scoring: cada opción vale 0-3 puntos; suma total determina nivel
   - 0-8 → Explorador (empieza módulo 1)
   - 9-16 → Integrador (empieza módulo 3)
   - 17-24 → Autónomo (empieza módulo 5)
3. Agregar botón "Anterior" para retroceder
4. Eliminar auto-avance de 400ms — dejar que el usuario confirme con "Siguiente"
5. Resultado muestra ruta personalizada real con módulos desbloqueados según nivel
6. Guardar nivel en localStorage
7. Permitir nombre opcional: "¿Cómo te gustaría que te llamemos?"

---

### 4.3 PageRuta (Mi Ruta) — Reestructurar

**Problemas actuales:**
- Usa rutaModules (4 mods Canva) en vez de currículo real
- No hay desbloqueo progresivo
- El botón "Continuar" siempre va al mismo contenido
- Celebration banner siempre visible

**Cambios propuestos:**

```
┌─────────────────────────────────────────┐
│  MI RUTA DE APRENDIZAJE                 │
│                                         │
│  [Explorador] [Racha: 5 días]  40% ◉   │
│                                         │
│  ━━ Nivel Explorador ━━                 │
│                                         │
│  ✅ ① Navegando el Mundo Digital        │
│  │   4/4 lecciones · Completado         │
│  │                                      │
│  🔵 ② Correo y Comunicación            │
│  │   2/4 lecciones · 50%               │
│  │   [Continuar →]                      │
│  │                                      │
│  ━━ Nivel Integrador ━━                 │
│                                         │
│  🔒 ③ Presentaciones con Canva          │
│  │   Completa el módulo anterior        │
│  │                                      │
│  🔒 ④ Tu Aula Virtual                  │
│  │                                      │
│  🔒 ⑤ Evaluación Digital               │
│  │                                      │
│  ━━ Nivel Autónomo ━━                   │
│                                         │
│  🔒 ⑥ Proyecto Final Integrador        │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ 📊 Tu progreso                      ││
│  │ Tiempo invertido: 3h 20min          ││
│  │ Competencias: Navegación, Correo     ││
│  │ Próxima meta: Completar Módulo 2    ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

**Cambios específicos:**
1. Usar currículo unificado de 6 módulos
2. Agrupar módulos visualmente por nivel (Explorador/Integrador/Autónomo)
3. Desbloqueo real: completar módulo N desbloquea módulo N+1
4. Botón "Continuar" navega al Explorador CON el ID del módulo
5. Celebration banner solo aparece cuando se acaba de completar algo
6. Agregar card resumen de progreso real
7. Mostrar competencias adquiridas en lugar de solo porcentajes
8. Mostrar tiempo estimado restante por módulo

---

### 4.4 PageExplorador — Contenido Dinámico

**Problemas actuales:**
- Contenido estático (siempre el mismo independientemente de la lección)
- No se puede marcar como completado
- Sin ejercicios ni actividades interactivas

**Cambios propuestos:**

```
┌──────────────┬──────────────────────────────────┐
│  SIDEBAR     │  CONTENIDO                        │
│  300px       │                                    │
│              │  Mi Ruta › Módulo 2 › Lección 2    │
│  Módulo 2    │                                    │
│  Correo y    │  📧 Cómo enviar tu primer correo  │
│  Comunicación│                                    │
│              │  ┌────────────────────────────────┐│
│  ◉ 40%      │  │ CONTENIDO DE LA LECCIÓN        ││
│  2/4 lecc.   │  │ (texto, pasos, imágenes)       ││
│              │  │                                 ││
│  ✅ 1. Intro │  │ Paso 1: Abre Gmail...          ││
│  🔵 2. Enviar│  │ Paso 2: Haz clic en...         ││
│  ○ 3. Adjunt.│  │ Paso 3: Escribe el...          ││
│  🔒 4. Org.  │  └────────────────────────────────┘│
│              │                                    │
│              │  💡 Consejo práctico               │
│              │  [tip contextual a la lección]     │
│              │                                    │
│              │  📝 ACTIVIDADES                    │
│              │  ┌────────────────────────────────┐│
│              │  │ ✅ Act 1: Crear cuenta Gmail    ││
│              │  │ 🔵 Act 2: Enviar correo a X    ││
│              │  │ ○  Act 3: Adjuntar un archivo  ││
│              │  └────────────────────────────────┘│
│              │                                    │
│              │  ✏️ AUTOEVALUACIÓN                 │
│              │  Mini-quiz de 3 preguntas          │
│              │  [solo para lección N, no todas]   │
│              │                                    │
│              │  [← Anterior] 2/4 [Completar ✓ →] │
└──────────────┴──────────────────────────────────┘
```

**Cambios específicos:**
1. Crear un objeto `CONTENIDO_LECCIONES` con contenido real por cada lección de cada módulo
2. El sidebar muestra las lecciones del módulo actual (no un módulo fijo)
3. Seleccionar una lección carga su contenido real
4. Cada lección tiene 3 secciones:
   - **Contenido teórico** (texto con pasos claros, imágenes/emojis)
   - **Actividades prácticas** (checklist interactivo)
   - **Autoevaluación** (mini-quiz de 2-3 preguntas en lecciones clave)
5. Botón "Completar y continuar" marca lección como completada en localStorage
6. Breadcrumb dinámico que refleja módulo y lección actual
7. Tip box contextual por lección

---

### 4.5 PageComunidad — Hacer Funcional

**Problemas actuales:**
- Tabs decorativos
- No se puede escribir ni responder
- Solo 3 posts estáticos

**Cambios propuestos:**

```
┌─────────────────────────────────────────┐
│  COMUNIDAD DOCENTE                      │
│                                         │
│  [Foro] [Experiencias] [Recursos]       │
│   ^^^^ activo                           │
│                                         │
│  ┌─────────────────┬──────────────────┐ │
│  │ POSTS (izq)     │ SIDEBAR (der)    │ │
│  │                 │                  │ │
│  │ ┌─────────────┐ │ Experiencias     │ │
│  │ │ Escribir... │ │ de la Semana     │ │
│  │ │ [Publicar]  │ │ ┌──────────────┐ │ │
│  │ └─────────────┘ │ │ Ana García   │ │ │
│  │                 │ │ "Zoom ya no  │ │ │
│  │ Post 1 (9 posts│ │ │ me asusta"  │ │ │
│  │ si tab=foro)   │ └──────────────┘ │ │
│  │                 │                  │ │
│  │ Post 2         │ ¿Tienes una      │ │
│  │                 │ historia?        │ │
│  │ Post 3         │ [Compartir →]    │ │
│  │                 │                  │ │
│  └─────────────────┴──────────────────┘ │
└─────────────────────────────────────────┘
```

**Cambios específicos:**
1. **Tabs funcionales:** cada tab filtra contenido distinto
   - Foro: Posts de preguntas/discusión (expandir a 6-9 posts)
   - Experiencias: Testimonios/historias de éxito (expandir a 4-6)
   - Recursos: Recursos compartidos (mover desde Biblioteca)
2. **Composición real:** Input funcional que guarda posts en localStorage
3. **Likes persistentes** en localStorage
4. **"Responder"** muestra campo de respuesta (localStorage)
5. Más posts variados que cubran todos los módulos del currículo
6. Recibir `setPage` para linkear a módulos relevantes

---

### 4.6 PageBiblioteca — Búsqueda Funcional

**Problemas actuales:**
- Búsqueda decorativa
- Filtros decorativos
- No se puede hacer drill-down en áreas
- Counts falsos

**Cambios propuestos:**

```
┌─────────────────────────────────────────┐
│  BIBLIOTECA DIGITAL                     │
│                                         │
│  🔍 [Buscar recursos...       ]        │
│  [Todos] [Plantillas] [Por Materia]     │
│                                         │
│  ÁREAS ACADÉMICAS                       │
│  ┌──────┬──────┬──────┬──────┬──────┐  │
│  │Matem.│Cienc.│Leng. │Hist. │Tecno.│  │
│  │3 rec.│2 rec.│4 rec.│2 rec.│3 rec.│  │
│  └──────┴──────┴──────┴──────┴──────┘  │
│                                         │
│  RECURSOS (filtrados por área/búsqueda) │
│  ┌─────────────────────────────────────┐│
│  │ 📄 Plantilla Álgebra — PDF         ││
│  │    Por: Patricia A. · 34 descargas ││
│  ├─────────────────────────────────────┤│
│  │ 📊 Presentación Sistema Solar — PPT││
│  │    Por: Roberto G. · 21 descargas  ││
│  ├─────────────────────────────────────┤│
│  │ 📝 Examen Lenguaje — Google Forms  ││
│  │    Por: María C. · 15 descargas    ││
│  └─────────────────────────────────────┘│
│                                         │
│  [+ Compartir un recurso]               │
└─────────────────────────────────────────┘
```

**Cambios específicos:**
1. **Búsqueda funcional:** Filtrar recursos por texto en título/descripción/área
2. **Filtros funcionales:** "Todos", "Plantillas", "Por materia" filtran la lista
3. **Drill-down de áreas:** Click en un área muestra sus recursos
4. **Counts reales:** Mostrar cantidad real de recursos que existen (no inventar)
5. **Expandir recursos:** Agregar 8-12 recursos reales con links (aunque sean URLs placeholder con disclaimer "próximamente")
6. Cada recurso indica: tipo (PDF, PPT, Forms), materia, autor, descargas

---

### 4.7 PagePerfil + PageLogros (Fusionados: Mi Perfil)

**Problemas actuales:**
- Datos hardcoded
- Logros es página aparte con poca información
- No puede editar nada

**Cambios propuestos:**

```
┌─────────────────────────────────────────┐
│  MI PERFIL                              │
│                                         │
│  ┌──────────────────┬──────────────────┐│
│  │ TARJETA PERFIL   │ PROGRESO         ││
│  │                  │                  ││
│  │  (CZ)           │ Nivel: Explorador ││
│  │  Carla Zúñiga   │ ━━━━━━━━━ 40%    ││
│  │  Docente Inglés  │                  ││
│  │  [Editar nombre] │ Módulos: 1/6     ││
│  │                  │ Lecciones: 6/25  ││
│  │  Miembro desde   │ Tiempo: 3h 20m   ││
│  │  Feb 2026        │                  ││
│  └──────────────────┴──────────────────┘│
│                                         │
│  MIS COMPETENCIAS                       │
│  ┌──────────┬──────────┬──────────┐     │
│  │ ✅ Nav.  │ 🔵 Correo│ 🔒 Canva│     │
│  │ digital  │ digital  │         │     │
│  │ Ganada   │ En prog. │ Bloq.   │     │
│  └──────────┴──────────┴──────────┘     │
│  ┌──────────┬──────────┬──────────┐     │
│  │ 🔒 Aula │ 🔒 Eval. │ 🔒 Proy.│     │
│  │ Virtual  │ Digital  │ Final   │     │
│  └──────────┴──────────┴──────────┘     │
│                                         │
│  ACTIVIDAD RECIENTE                     │
│  • Completó "Enviar primer correo"      │
│  • Ganó competencia "Navegación Digital"│
│  • Publicó en la comunidad              │
│                                         │
│  [🔄 Repetir diagnóstico]              │
└─────────────────────────────────────────┘
```

**Cambios específicos:**
1. Fusionar Logros dentro de Perfil como sección "Mis Competencias"
2. Renombrar "Insignias" → "Competencias" (más profesional)
3. Competencias ligadas a módulos reales: completar módulo = ganar competencia
4. Progreso calculado desde localStorage (no hardcoded)
5. Campo editable para nombre
6. Botón para repetir diagnóstico
7. Actividad reciente generada desde datos reales de localStorage

---

### 4.8 Footer — Limpiar

**Problemas actuales:**
- 15+ links que no van a ningún lado

**Cambios propuestos:**
1. Reducir a links que realmente funcionan:
   - **Plataforma:** Inicio, Mi Ruta, Comunidad, Biblioteca
   - **Contacto:** Email real, WhatsApp (si existe)
2. Eliminar "Blog", "Eventos", "FAQ", "Accesibilidad" hasta que existan
3. Mantener: CompassIcon, nombre, tagline, © 2026

---

### 4.9 HelpButton — Una Opción Real

**Problemas actuales:**
- 3 opciones todas falsas

**Cambios propuestos:**
1. "Chat con un mentor" → Abrir enlace de WhatsApp real (si existe) o formulario de contacto
2. "Ver guías rápidas" → Navegar a Biblioteca
3. "Solicitar llamada" → Mostrar correo/teléfono de contacto
4. Si no hay contacto real disponible, mostrar solo "Ver guías rápidas" (que funciona)

---

## 5. Nuevo Contenido Curricular

### Módulo 1: Navegando el Mundo Digital (Explorador)

| Lección | Título | Tipo | Duración | Contenido |
|---------|--------|------|----------|-----------|
| 1.1 | ¿Qué es internet? | Texto + visual | 5 min | Conceptos básicos, navegador, buscador |
| 1.2 | Tu primer búsqueda en Google | Guía paso a paso | 8 min | Cómo buscar, evaluar resultados |
| 1.3 | Guardar y organizar favoritos | Guía práctica | 6 min | Marcadores, carpetas |
| 1.4 | YouTube como herramienta educativa | Video guía | 7 min | Buscar videos educativos, crear listas |
| **Act** | Encontrar 3 videos para tu materia | Ejercicio | 10 min | Checklist práctico |

### Módulo 2: Correo y Comunicación (Explorador)

| Lección | Título | Tipo | Duración | Contenido |
|---------|--------|------|----------|-----------|
| 2.1 | Tu correo electrónico | Texto + pasos | 5 min | Crear/acceder a Gmail |
| 2.2 | Enviar tu primer correo | Guía paso a paso | 8 min | Componer, destinatario, asunto |
| 2.3 | Archivos adjuntos | Guía práctica | 7 min | Adjuntar, tamaño, Google Drive |
| 2.4 | Organizar tu bandeja | Guía práctica | 6 min | Etiquetas, carpetas, buscar |
| **Act** | Enviar correo con adjunto a un colega | Ejercicio | 10 min | Tarea práctica real |

### Módulo 3: Presentaciones con Canva (Integrador)

| Lección | Título | Tipo | Duración | Contenido |
|---------|--------|------|----------|-----------|
| 3.1 | ¿Qué es Canva? | Texto + visual | 5 min | Intro, crear cuenta |
| 3.2 | Tu primera presentación | Guía paso a paso | 8 min | Plantilla, editar texto |
| 3.3 | Imágenes y elementos | Guía práctica | 7 min | Buscar, añadir, redimensionar |
| 3.4 | Animaciones y transiciones | Video guía | 6 min | Efectos de entrada/salida |
| 3.5 | Compartir y presentar | Guía práctica | 5 min | Link, PDF, presentar en clase |
| **Act** | Crear presentación de 5 slides para tu clase | Proyecto | 15 min | Proyecto práctico |

### Módulo 4: Tu Aula Virtual (Integrador)

| Lección | Título | Tipo | Duración | Contenido |
|---------|--------|------|----------|-----------|
| 4.1 | ¿Qué es Google Classroom? | Texto + visual | 5 min | Concepto, acceso |
| 4.2 | Crear tu primera clase | Guía paso a paso | 8 min | Configurar clase, código |
| 4.3 | Publicar material | Guía práctica | 7 min | Anuncios, material, Drive |
| 4.4 | Crear y revisar tareas | Guía práctica | 8 min | Asignar, calificar, devolver |
| 4.5 | Comunicarte con estudiantes | Guía práctica | 5 min | Comentarios, correos masivos |
| **Act** | Configurar una clase completa | Proyecto | 15 min | Tarea integradora |

### Módulo 5: Evaluación Digital (Integrador)

| Lección | Título | Tipo | Duración | Contenido |
|---------|--------|------|----------|-----------|
| 5.1 | Formas de evaluar digitalmente | Texto | 5 min | Panorama, herramientas |
| 5.2 | Google Forms para evaluaciones | Guía paso a paso | 8 min | Crear formulario evaluativo |
| 5.3 | Quizizz: evaluación gamificada | Guía práctica | 8 min | Crear quiz interactivo |
| 5.4 | Analizar resultados | Guía práctica | 6 min | Hojas de cálculo, gráficos |
| **Act** | Crear una evaluación digital | Proyecto | 15 min | Tarea integradora |

### Módulo 6: Proyecto Final Integrador (Autónomo)

| Lección | Título | Tipo | Duración | Contenido |
|---------|--------|------|----------|-----------|
| 6.1 | Planifica tu clase digital | Guía | 10 min | Esquema de clase con herramientas |
| 6.2 | Crea los materiales | Proyecto guiado | 15 min | Presentación + evaluación |
| 6.3 | Comparte con la comunidad | Social | 10 min | Publicar en la comunidad + reflexión |
| **Cert** | Certificado de Docente Digital | Certificado | — | Descargable PDF |

---

## 6. MCPs Recomendados

### Para esta tarea de rework (diseño + contenido)

| Prioridad | MCP | Para qué lo usaríamos | Costo |
|-----------|-----|----------------------|-------|
| **1** | **Pencil MCP** (ya disponible) | Crear mockups de cada vista rediseñada en archivos .pen | Incluido |
| **2** | **Context7** | Documentación actualizada de Next.js 16 + React 19 al implementar | Gratis |
| **3** | **Framelink Figma** | Si se crean diseños en Figma, convertirlos directo a código React | Gratis (necesita Figma token) |
| **4** | **21st.dev Magic** | Generar componentes UI pulidos desde descripción natural | Gratis (beta) |
| **5** | **Playwright (Microsoft)** | Capturar screenshots de Duolingo, Khan Academy para referencia visual | Gratis |
| **6** | **Mermaid MCP** | Diagramas de flujo de usuario, arquitectura de componentes | Gratis |

### Instalación rápida de los recomendados

**Context7** (docs actualizadas de librerías):
```bash
npx ctx7 setup
```

**Playwright** (navegación web + screenshots):
```bash
claude mcp add playwright npx @playwright/mcp@latest
```

**21st.dev** (generación de componentes UI):
```bash
npx @21st-dev/cli@latest install cursor --api-key TU_KEY
```

**Figma MCP** (si usas Figma):
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=TU_KEY", "--stdio"]
    }
  }
}
```

---

## 7. Fases de Implementación

### Fase 1: Fundamentos (1-2 sesiones)
- [ ] Fix SectionTitle bug
- [ ] Unificar currículo: crear `CURRICULUM` con 6 módulos
- [ ] Implementar localStorage para persistencia
- [ ] Fix de contraste (textMuted, coral)
- [ ] Aumentar tamaños de texto mínimos
- [ ] Reducir navbar a 5 items

### Fase 2: Diagnóstico Real (1 sesión)
- [ ] Expandir a 8 preguntas basadas en escenarios
- [ ] Implementar scoring y asignación de nivel real
- [ ] Agregar botón "Anterior"
- [ ] Resultado personalizado con ruta real
- [ ] Guardar nivel en localStorage

### Fase 3: Ruta y Explorador (2-3 sesiones)
- [ ] Reestructurar PageRuta con 6 módulos + niveles
- [ ] Implementar desbloqueo progresivo real
- [ ] Crear contenido de lecciones para los 6 módulos
- [ ] Explorador dinámico: contenido cambia por lección
- [ ] Actividades interactivas (checklist)
- [ ] Mini-autoevaluaciones
- [ ] Botón "Completar" funcional con localStorage

### Fase 4: Comunidad y Biblioteca (1-2 sesiones)
- [ ] Tabs funcionales en Comunidad
- [ ] Composición de posts con localStorage
- [ ] Expandir posts (6-9 variados)
- [ ] Búsqueda funcional en Biblioteca
- [ ] Filtros funcionales
- [ ] Expandir recursos (8-12)
- [ ] Drill-down de áreas

### Fase 5: Perfil, Footer, Ayuda (1 sesión)
- [ ] Fusionar Logros en Perfil como "Competencias"
- [ ] Datos reales desde localStorage
- [ ] Limpiar Footer (solo links funcionales)
- [ ] HelpButton con al menos 1 opción real
- [ ] Botón "Repetir diagnóstico"

### Fase 6: Pulido (1 sesión)
- [ ] Verificar todos los flujos end-to-end
- [ ] Verificar responsive en mobile/tablet
- [ ] Verificar contraste y tamaños de texto
- [ ] Eliminar código muerto (MODULES viejo, useRef, ChatIcon)
- [ ] Deploy final

---

> **Tiempo estimado total:** 7-10 sesiones de trabajo
> **Resultado:** Una plataforma donde cada interacción es real, el contenido es coherente, y un docente de 50 años puede completar su primer módulo sin sentir que algo "no funciona".
