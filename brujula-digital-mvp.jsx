import { useState, useEffect, useRef } from "react";

// ========== DESIGN TOKENS ==========
const tokens = {
  colors: {
    oceanDeep: "#2C6E6F",
    oceanLight: "#4A9B9C",
    oceanMist: "#E8F4F4",
    sandWarm: "#F5E6D3",
    sandLight: "#FDF8F3",
    coralSoft: "#E8927C",
    coralDeep: "#D4735C",
    goldBadge: "#F2C94C",
    forestCalm: "#5B8A72",
    textPrimary: "#2D3436",
    textSecondary: "#636E72",
    textMuted: "#B2BEC3",
    white: "#FFFFFF",
  },
};

// ========== DUMMY DATA ==========
const MODULES = [
  {
    id: 1,
    level: "explorador",
    title: "Primeros pasos digitales",
    desc: "Aprende a navegar con confianza por tu computadora y el navegador web.",
    progress: 100,
    lessons: 4,
    completed: 4,
    icon: "🧭",
    unlocked: true,
  },
  {
    id: 2,
    level: "explorador",
    title: "Correo y comunicación",
    desc: "Domina Gmail, adjuntar archivos y organizar tu bandeja de entrada.",
    progress: 75,
    lessons: 5,
    completed: 3,
    icon: "📧",
    unlocked: true,
  },
  {
    id: 3,
    level: "explorador",
    title: "Videoconferencias sin estrés",
    desc: "Zoom y Google Meet: desde unirte hasta compartir pantalla.",
    progress: 30,
    lessons: 6,
    completed: 2,
    icon: "📹",
    unlocked: true,
  },
  {
    id: 4,
    level: "integrador",
    title: "Google Classroom esencial",
    desc: "Crea clases, comparte material y gestiona tareas con facilidad.",
    progress: 0,
    lessons: 5,
    completed: 0,
    icon: "📚",
    unlocked: false,
  },
  {
    id: 5,
    level: "integrador",
    title: "Presentaciones dinámicas",
    desc: "Google Slides, Canva y herramientas para clases visuales.",
    progress: 0,
    lessons: 4,
    completed: 0,
    icon: "🎨",
    unlocked: false,
  },
  {
    id: 6,
    level: "integrador",
    title: "Evaluación digital",
    desc: "Quizizz, Wordwall y formularios para evaluar de forma entretenida.",
    progress: 0,
    lessons: 6,
    completed: 0,
    icon: "✅",
    unlocked: false,
  },
  {
    id: 7,
    level: "autonomo",
    title: "Seguridad y privacidad",
    desc: "Protege tu información y la de tus estudiantes en el mundo digital.",
    progress: 0,
    lessons: 4,
    completed: 0,
    icon: "🔒",
    unlocked: false,
  },
  {
    id: 8,
    level: "autonomo",
    title: "Proyecto integrador",
    desc: "Diseña una clase completa usando todas las herramientas aprendidas.",
    progress: 0,
    lessons: 3,
    completed: 0,
    icon: "🏆",
    unlocked: false,
  },
];

const BADGES = [
  { id: 1, name: "Primer inicio", icon: "🌟", earned: true, date: "15 Feb 2026" },
  { id: 2, name: "Correo enviado", icon: "💌", earned: true, date: "18 Feb 2026" },
  { id: 3, name: "Primera videollamada", icon: "📹", earned: true, date: "20 Feb 2026" },
  { id: 4, name: "Explorador digital", icon: "🧭", earned: false, date: null },
  { id: 5, name: "Integrador estratégico", icon: "🔗", earned: false, date: null },
  { id: 6, name: "Docente autónomo", icon: "⭐", earned: false, date: null },
  { id: 7, name: "Mentor activo", icon: "🤝", earned: false, date: null },
  { id: 8, name: "Resiliencia digital", icon: "💪", earned: false, date: null },
];

const COMMUNITY_POSTS = [
  {
    id: 1,
    author: "Patricia A.",
    avatar: "PA",
    time: "Hace 2 horas",
    text: "¡Hoy logré compartir pantalla en Zoom sin ayuda! Mis alumnos aplaudieron 😊",
    likes: 12,
    replies: 3,
    color: "#E8927C",
  },
  {
    id: 2,
    author: "María del Carmen O.",
    avatar: "MC",
    time: "Hace 5 horas",
    text: "¿Alguien más tiene problemas para adjuntar archivos pesados en Gmail? Me aparece un error que no entiendo.",
    likes: 4,
    replies: 7,
    color: "#4A9B9C",
  },
  {
    id: 3,
    author: "Roberto G.",
    avatar: "RG",
    time: "Ayer",
    text: "El módulo de Videoconferencias me cambió la vida. Antes le tenía terror a las clases virtuales.",
    likes: 23,
    replies: 5,
    color: "#5B8A72",
  },
];

const BIBLIOTECA_ITEMS_P3 = [
  { id: 1, titulo: "Examen de fracciones", materia: "📐 Matemáticas", icon: "📄", bgColor: "#E8F4F4", iconColor: tokens.colors.oceanDeep, descargas: 34, tipo: "Oficial" },
  { id: 2, titulo: "Sistema Solar PPT", materia: "🔬 Ciencias", icon: "📊", bgColor: "#F5E6D3", iconColor: "#8B6914", descargas: 41, tipo: "Popular" },
  { id: 3, titulo: "Comprensión lectora", materia: "📖 Lenguaje", icon: "📖", bgColor: "#E8927C20", iconColor: tokens.colors.coralSoft, descargas: 19, tipo: "Oficial" },
  { id: 4, titulo: "Línea de tiempo", materia: "🌍 Historia", icon: "🗺️", bgColor: "#5B8A7220", iconColor: tokens.colors.forestCalm, descargas: 15, tipo: "Popular" },
];

const RUTA_MODULES_P3 = [
  { id: 1, titulo: "Primeros Pasos", desc: "Registro en Canva, navegación de la interfaz y tu primer diseño educativo.", estado: "completado", progreso: 100, lecciones: 4, completadas: 4 },
  { id: 2, titulo: "Diseños para el Aula", desc: "Plantillas educativas, personalización avanzada y formatos para cada materia.", estado: "en-progreso", progreso: 50, lecciones: 4, completadas: 2 },
  { id: 3, titulo: "Presentaciones", desc: "Crea presentaciones interactivas con animaciones y transiciones.", estado: "bloqueado", progreso: 0, lecciones: 4, completadas: 0 },
];

const QUIZ_DATA_P3 = {
  modulo: 3,
  leccion: 3,
  titulo: "Ejercicio: Crea tu primer correo",
  xp: 20,
  preguntaActual: 2,
  totalPreguntas: 5,
  pregunta: "¿Cuál es el primer paso para crear una cuenta de correo electrónico?",
  opciones: [
    { letra: "A", texto: "Escribir un correo a un amigo", correcta: false },
    { letra: "B", texto: "Ir a la página del proveedor (Gmail, Outlook)", correcta: true },
    { letra: "C", texto: "Descargar una aplicación de mensajería", correcta: false },
    { letra: "D", texto: "Pedir a un compañero que lo haga", correcta: false },
  ],
  feedback: "¡Correcto! El primer paso es visitar la página del proveedor.",
  tip: "Tip: Los más comunes son Gmail (Google) y Outlook (Microsoft).",
};

const DIAGNOSTIC_QUESTIONS = [
  {
    id: 1,
    question: "¿Con qué frecuencia usas herramientas digitales en tu trabajo?",
    options: [
      "Casi nunca, prefiero métodos tradicionales",
      "Solo cuando es obligatorio",
      "Regularmente, pero solo lo básico",
      "Todos los días, con varias herramientas",
    ],
  },
  {
    id: 2,
    question: "Cuando algo falla en tu computadora o plataforma, ¿qué haces primero?",
    options: [
      "Pido ayuda inmediatamente",
      "Intento resolverlo pero me frustro rápido",
      "Busco un tutorial o pregunto a un colega",
      "Investigo y pruebo diferentes soluciones",
    ],
  },
  {
    id: 3,
    question: "¿Cómo te sientes al usar una plataforma nueva por primera vez?",
    options: [
      "Muy inseguro/a, prefiero que alguien me guíe",
      "Nervioso/a pero lo intento",
      "Curioso/a aunque con algo de cautela",
      "Emocionado/a por aprender algo nuevo",
    ],
  },
  {
    id: 4,
    question: "¿Qué herramientas digitales usas actualmente?",
    options: [
      "Solo WhatsApp y llamadas",
      "WhatsApp, correo y alguna red social",
      "Correo, Zoom, Google Docs y alguna plataforma educativa",
      "Múltiples herramientas de productividad y educación",
    ],
  },
  {
    id: 5,
    question: "Si tuvieras que dar una clase online mañana, ¿cómo te sentirías?",
    options: [
      "Aterrorizado/a, no sabría por dónde empezar",
      "Preocupado/a, necesitaría mucha ayuda",
      "Algo nervioso/a, pero podría hacerlo con preparación",
      "Seguro/a, ya tengo experiencia",
    ],
  },
];

// ========== STYLES ==========
const styles = {
  global: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@400;500;600;700&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    :root {
      --ocean-deep: #2C6E6F;
      --ocean-light: #4A9B9C;
      --ocean-mist: #E8F4F4;
      --sand-warm: #F5E6D3;
      --sand-light: #FDF8F3;
      --coral-soft: #E8927C;
      --coral-deep: #D4735C;
      --gold-badge: #F2C94C;
      --forest-calm: #5B8A72;
      --text-primary: #2D3436;
      --text-secondary: #636E72;
      --text-muted: #B2BEC3;
    }
    
    body {
      font-family: 'Nunito', sans-serif;
      color: var(--text-primary);
      background: var(--sand-light);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    @keyframes progressFill {
      from { width: 0%; }
    }

    @keyframes badgeUnlock {
      0% { transform: scale(0) rotate(-180deg); opacity: 0; }
      60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
  `,
};

// ========== RESPONSIVE HOOK ==========
const useResponsive = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return { isMobile: width < 768, isTablet: width < 1024 };
};

// ========== ICON COMPONENTS ==========
const CompassIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" stroke="#2C6E6F" strokeWidth="2.5" fill="#E8F4F4" />
    <circle cx="24" cy="24" r="18" stroke="#B2BEC3" strokeWidth="0.5" fill="none" />
    <polygon points="24,6 27,22 24,26 21,22" fill="#E8927C" />
    <polygon points="24,42 27,26 24,22 21,26" fill="#2C6E6F" />
    <circle cx="24" cy="24" r="3" fill="#2C6E6F" />
    <circle cx="24" cy="24" r="1.5" fill="white" />
    {["N", "E", "S", "O"].map((d, i) => (
      <text
        key={d}
        x={[24, 43, 24, 5][i]}
        y={[5, 25.5, 46, 25.5][i]}
        textAnchor="middle"
        fill="#636E72"
        fontSize="5"
        fontWeight="700"
        fontFamily="Nunito"
      >
        {d}
      </text>
    ))}
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#E8927C" : "none"} stroke="#E8927C" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#636E72" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ========== SUB-COMPONENTS ==========
const ProgressBar = ({ value, height = 8, showLabel = false }) => (
  <div style={{ position: "relative" }}>
    <div
      style={{
        height,
        background: "#E0E0E0",
        borderRadius: height,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${value}%`,
          background: `linear-gradient(90deg, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
          borderRadius: height,
          transition: "width 1s ease",
          animation: "progressFill 1.5s ease",
        }}
      />
    </div>
    {showLabel && (
      <span
        style={{
          position: "absolute",
          right: 0,
          top: -20,
          fontSize: 13,
          fontWeight: 600,
          color: tokens.colors.oceanDeep,
        }}
      >
        {value}%
      </span>
    )}
  </div>
);

const LevelBadge = ({ level, size = "md" }) => {
  const config = {
    explorador: { bg: "#E8F4F4", color: "#2C6E6F", label: "Explorador Digital", icon: "🧭" },
    integrador: { bg: "#FFF3E0", color: "#E8927C", label: "Integrador Estratégico", icon: "🔗" },
    autonomo: { bg: "#E8F5E9", color: "#5B8A72", label: "Docente Autónomo", icon: "⭐" },
  };
  const c = config[level];
  const sz = size === "sm" ? { p: "4px 10px", fs: 11 } : { p: "6px 14px", fs: 13 };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: sz.p,
        background: c.bg,
        color: c.color,
        borderRadius: 20,
        fontSize: sz.fs,
        fontWeight: 600,
      }}
    >
      {c.icon} {c.label}
    </span>
  );
};

const Button = ({ children, variant = "primary", onClick, style: customStyle, size = "md" }) => {
  const [hovered, setHovered] = useState(false);
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: size === "lg" ? "16px 32px" : size === "sm" ? "8px 16px" : "12px 24px",
    fontSize: size === "lg" ? 18 : size === "sm" ? 14 : 16,
    fontWeight: 700,
    fontFamily: "'Nunito', sans-serif",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
    boxShadow: hovered ? "0 6px 20px rgba(44,110,111,0.25)" : "0 2px 8px rgba(44,110,111,0.12)",
  };
  const variants = {
    primary: {
      background: hovered ? tokens.colors.oceanLight : tokens.colors.oceanDeep,
      color: "white",
    },
    secondary: {
      background: "transparent",
      color: tokens.colors.oceanDeep,
      border: `2px solid ${tokens.colors.oceanDeep}`,
      boxShadow: "none",
    },
    coral: {
      background: hovered ? tokens.colors.coralDeep : tokens.colors.coralSoft,
      color: "white",
    },
  };
  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...customStyle }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};

const Card = ({ children, style: customStyle, delay = 0 }) => (
  <div
    style={{
      background: "white",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      animation: `fadeInUp 0.6s ease ${delay}s both`,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ...customStyle,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
    }}
  >
    {children}
  </div>
);

// ========== NAVBAR ==========
const Navbar = ({ currentPage, setPage }) => {
  const { isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "ruta", label: "Ruta" },
    { id: "explorador", label: "Explorador" },
    { id: "biblioteca", label: "Biblioteca" },
    { id: "comunidad", label: "Comunidad" },
    { id: "logros", label: "Logros" },
    { id: "perfil", label: "Perfil" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(253, 248, 243, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(44,110,111,0.1)",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isMobile ? 60 : 72,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
          onClick={() => { setPage("inicio"); setMenuOpen(false); }}
        >
          <CompassIcon size={isMobile ? 32 : 40} />
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? 16 : 20,
                fontWeight: 700,
                color: tokens.colors.oceanDeep,
                lineHeight: 1.1,
              }}
            >
              BRÚJULA DIGITAL
            </div>
            {!isMobile && (
              <div style={{ fontSize: 11, color: tokens.colors.textSecondary, fontWeight: 500 }}>
                Autonomía digital para docentes
              </div>
            )}
          </div>
        </div>

        {!isMobile ? (
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                style={{
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: currentPage === item.id ? 700 : 500,
                  color: currentPage === item.id ? tokens.colors.oceanDeep : tokens.colors.textSecondary,
                  background: currentPage === item.id ? tokens.colors.oceanMist : "transparent",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  transition: "all 0.2s ease",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <div style={{ width: 24, height: 2, background: tokens.colors.oceanDeep, borderRadius: 2, transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: tokens.colors.oceanDeep, borderRadius: 2, transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 24, height: 2, background: tokens.colors.oceanDeep, borderRadius: 2, transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ background: "white", borderTop: `1px solid ${tokens.colors.oceanMist}`, animation: "slideDown 0.3s ease" }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setMenuOpen(false); }}
              style={{
                display: "block",
                width: "100%",
                padding: "14px 20px",
                fontSize: 16,
                fontWeight: currentPage === item.id ? 700 : 500,
                color: currentPage === item.id ? tokens.colors.oceanDeep : tokens.colors.textPrimary,
                background: currentPage === item.id ? tokens.colors.oceanMist : "transparent",
                border: "none",
                borderBottom: `1px solid ${tokens.colors.oceanMist}`,
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// ========== PAGE: INICIO ==========
const PageInicio = ({ setPage }) => {
  const { isMobile, isTablet } = useResponsive();
  return (
  <div>
    {/* Hero */}
    <section
      style={{
        background: `linear-gradient(135deg, ${tokens.colors.sandWarm}40, ${tokens.colors.oceanMist}60)`,
        padding: isMobile ? "48px 20px 40px" : "80px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${tokens.colors.coralSoft}15, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${tokens.colors.oceanLight}10, transparent 70%)`,
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: isMobile ? 32 : 60, flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
        <div style={{ flex: 1, animation: "fadeInUp 0.8s ease" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 30 : 48,
              fontWeight: 700,
              color: tokens.colors.textPrimary,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Encuentra tu rumbo
            <br />
            <span style={{ color: tokens.colors.oceanDeep }}>en la educación digital</span>
          </h1>
          <p
            style={{
              fontSize: isMobile ? 16 : 19,
              color: tokens.colors.textSecondary,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: isMobile ? "100%" : 500,
            }}
          >
            Aprende a usar herramientas digitales con criterio pedagógico, seguridad y autonomía.
            A tu ritmo, sin presiones.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
            <Button size={isMobile ? "md" : "lg"} onClick={() => setPage("diagnostico")}>
              Comenzar diagnóstico <ArrowRightIcon />
            </Button>
            <Button variant="secondary" onClick={() => setPage("ruta")}>
              Ver mi ruta
            </Button>
          </div>
        </div>
        <div
          style={{
            flex: isMobile ? "none" : 1,
            display: "flex",
            justifyContent: "center",
            animation: "fadeInUp 0.8s ease 0.2s both",
          }}
        >
          <div
            style={{
              width: isMobile ? 200 : 340,
              height: isMobile ? 200 : 340,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${tokens.colors.oceanMist}, ${tokens.colors.sandWarm})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 4s ease-in-out infinite",
              boxShadow: "0 20px 60px rgba(44,110,111,0.15)",
            }}
          >
            <CompassIcon size={isMobile ? 110 : 180} />
          </div>
        </div>
      </div>
    </section>

    {/* ¿Cómo funciona? */}
    <section style={{ padding: isMobile ? "48px 20px" : "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 26 : 36,
          textAlign: "center",
          marginBottom: 16,
          color: tokens.colors.textPrimary,
        }}
      >
        ¿Cómo funciona?
      </h2>
      <p style={{ textAlign: "center", color: tokens.colors.textSecondary, marginBottom: 40, fontSize: isMobile ? 15 : 17 }}>
        Tres pasos simples hacia tu autonomía digital
      </p>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: isMobile ? 20 : 32 }}>
        {[
          {
            step: "01",
            icon: "📋",
            title: "Diagnostica tu nivel",
            desc: "Identifica tu nivel de autonomía y seguridad digital docente con un test rápido y amigable.",
          },
          {
            step: "02",
            icon: "🗺️",
            title: "Recorre tu ruta",
            desc: "Avanza por una ruta de aprendizaje adaptada a tu nivel. Sin presión, a tu propio ritmo.",
          },
          {
            step: "03",
            icon: "🏅",
            title: "Obtén tus logros",
            desc: "Gana insignias mientras fortaleces tu autonomía digital y celebra cada avance.",
          },
        ].map((item, i) => (
          <Card key={i} delay={i * 0.15}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: tokens.colors.coralSoft,
                marginBottom: 12,
                letterSpacing: 2,
              }}
            >
              PASO {item.step}
            </div>
            <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                marginBottom: 12,
                color: tokens.colors.textPrimary,
              }}
            >
              {item.title}
            </h3>
            <p style={{ color: tokens.colors.textSecondary, lineHeight: 1.6, fontSize: 15 }}>{item.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    {/* Niveles */}
    <section
      style={{
        padding: isMobile ? "48px 20px" : "80px 24px",
        background: `linear-gradient(180deg, white 0%, ${tokens.colors.oceanMist}40 100%)`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? 26 : 36,
            textAlign: "center",
            marginBottom: isMobile ? 32 : 48,
          }}
        >
          Explora las etapas
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 20 : 32 }}>
          {[
            {
              level: "explorador",
              title: "Explorador Digital",
              desc: "Estás comenzando a explorar el mundo digital educativo. Aquí ganarás confianza con las herramientas básicas.",
              modules: 3,
              color: tokens.colors.oceanDeep,
              bg: tokens.colors.oceanMist,
            },
            {
              level: "integrador",
              title: "Integrador Estratégico",
              desc: "Estás integrando tecnología de manera reflexiva en tus clases. Aprenderás a elegir la herramienta adecuada.",
              modules: 3,
              color: tokens.colors.coralSoft,
              bg: "#FFF3E0",
            },
            {
              level: "autonomo",
              title: "Docente Autónomo",
              desc: "Has alcanzado autonomía digital y criterio pedagógico. Resuelves problemas y guías a otros.",
              modules: 2,
              color: tokens.colors.forestCalm,
              bg: "#E8F5E9",
            },
          ].map((item, i) => (
            <Card key={i} delay={i * 0.15} style={{ textAlign: "center", borderTop: `4px solid ${item.color}` }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: 36,
                }}
              >
                {item.level === "explorador" ? "🧭" : item.level === "integrador" ? "🔗" : "⭐"}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  marginBottom: 12,
                  color: item.color,
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: tokens.colors.textSecondary, lineHeight: 1.6, fontSize: 15, marginBottom: 16 }}>
                {item.desc}
              </p>
              <div style={{ fontSize: 13, fontWeight: 600, color: tokens.colors.textMuted }}>
                {item.modules} módulos
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonios */}
    <section style={{ padding: isMobile ? "48px 20px" : "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 26 : 36,
          textAlign: "center",
          marginBottom: isMobile ? 32 : 48,
        }}
      >
        Voces de docentes como tú
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
        {[
          {
            quote:
              "Antes le tenía miedo a Zoom. Ahora doy clases en línea con confianza. El secreto fue aprender paso a paso, sin presión.",
            author: "Patricia A.",
            role: "Docente de Comunicación, 52 años",
          },
          {
            quote:
              "Lo mejor de Brújula Digital es que no te hacen sentir tonta. El lenguaje es claro, los ejercicios son reales y siempre hay alguien que te ayuda.",
            author: "María del Carmen O.",
            role: "Coordinadora Académica, 48 años",
          },
          {
            quote:
              "Mis alumnos notaron el cambio. Ahora uso Quizizz para evaluaciones y Google Classroom para organizar todo. ¡Me siento actualizada!",
            author: "Patricia R.",
            role: "Docente de Inglés, 55 años",
          },
        ].map((item, i) => (
          <Card key={i} delay={i * 0.15} style={{ background: tokens.colors.sandWarm + "60" }}>
            <div style={{ fontSize: 36, marginBottom: 12, opacity: 0.3 }}>"</div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: tokens.colors.textPrimary,
                marginBottom: 20,
                fontStyle: "italic",
              }}
            >
              {item.quote}
            </p>
            <div style={{ fontWeight: 700, fontSize: 14, color: tokens.colors.oceanDeep }}>{item.author}</div>
            <div style={{ fontSize: 13, color: tokens.colors.textSecondary }}>{item.role}</div>
          </Card>
        ))}
      </div>
    </section>
  </div>
  );
};

// ========== PAGE: DIAGNÓSTICO ==========
const PageDiagnostico = ({ setPage }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (qId, optionIndex) => {
    setSelectedOption(optionIndex);
    setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
      setSelectedOption(null);
      if (step < DIAGNOSTIC_QUESTIONS.length - 1) {
        setStep((s) => s + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  if (showResult) {
    return (
      <div style={{ padding: "60px 24px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "badgeUnlock 0.8s ease both" }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: tokens.colors.oceanMist,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 56,
              boxShadow: `0 0 0 8px ${tokens.colors.oceanDeep}20`,
            }}
          >
            🧭
          </div>
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            marginBottom: 12,
            color: tokens.colors.oceanDeep,
            animation: "fadeInUp 0.6s ease 0.3s both",
          }}
        >
          ¡Bienvenida, Carla!
        </h2>
        <p style={{ fontSize: 18, color: tokens.colors.textSecondary, marginBottom: 8, animation: "fadeInUp 0.6s ease 0.5s both" }}>
          Tu nivel actual es:
        </p>
        <div style={{ animation: "fadeInUp 0.6s ease 0.6s both", marginBottom: 24 }}>
          <LevelBadge level="explorador" size="md" />
        </div>
        <p
          style={{
            fontSize: 16,
            color: tokens.colors.textSecondary,
            lineHeight: 1.7,
            marginBottom: 32,
            animation: "fadeInUp 0.6s ease 0.7s both",
          }}
        >
          Estás comenzando tu camino digital y eso es algo muy valioso.
          Tu ruta personalizada tiene <strong>3 módulos</strong> diseñados especialmente
          para que ganes confianza paso a paso. No hay prisa — cada logro cuenta.
        </p>
        <div style={{ animation: "fadeInUp 0.6s ease 0.9s both" }}>
          <Button size="lg" onClick={() => setPage("ruta")}>
            Ver mi ruta personalizada <ArrowRightIcon />
          </Button>
        </div>
      </div>
    );
  }

  const currentQ = DIAGNOSTIC_QUESTIONS[step];
  const progress = ((step) / DIAGNOSTIC_QUESTIONS.length) * 100;

  return (
    <div style={{ padding: "48px 24px", maxWidth: 700, margin: "0 auto" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: tokens.colors.textSecondary }}>
          <span>Pregunta {step + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} height={6} />
      </div>

      <div key={step} style={{ animation: "fadeInUp 0.5s ease" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            marginBottom: 32,
            lineHeight: 1.4,
            color: tokens.colors.textPrimary,
          }}
        >
          {currentQ.question}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(currentQ.id, i)}
              style={{
                padding: "18px 24px",
                background: selectedOption === i ? tokens.colors.oceanDeep : "white",
                color: selectedOption === i ? "white" : tokens.colors.textPrimary,
                border: `2px solid ${selectedOption === i ? tokens.colors.oceanDeep : "#E0E0E0"}`,
                borderRadius: 12,
                fontSize: 16,
                fontFamily: "'Nunito', sans-serif",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease",
                transform: selectedOption === i ? "scale(0.98)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                if (selectedOption === null) {
                  e.currentTarget.style.borderColor = tokens.colors.oceanLight;
                  e.currentTarget.style.background = tokens.colors.oceanMist;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedOption === null) {
                  e.currentTarget.style.borderColor = "#E0E0E0";
                  e.currentTarget.style.background = "white";
                }
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <p
        style={{
          marginTop: 32,
          textAlign: "center",
          fontSize: 14,
          color: tokens.colors.textMuted,
        }}
      >
        No hay respuestas correctas o incorrectas. Elige la que mejor te represente.
      </p>
    </div>
  );
};

// ========== PAGE: MI RUTA ==========
const PageRuta = ({ setPage }) => {
  const { isMobile, isTablet } = useResponsive();

  const dotColor = (mod) => mod.estado === "completado" ? tokens.colors.forestCalm : mod.estado === "en-progreso" ? tokens.colors.coralSoft : "#E0E0E0";
  const lineColor = (mod) => mod.estado === "completado" ? tokens.colors.forestCalm : "#E0E0E0";

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "calc(100vh - 64px)" }}>
      {/* Sidebar oscuro */}
      <div style={{
        width: isMobile ? "100%" : 260,
        background: tokens.colors.oceanDeep,
        padding: isMobile ? "24px 20px" : "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        flexShrink: 0,
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: tokens.colors.oceanMist, letterSpacing: 2, textTransform: "uppercase" }}>
          Tu Nivel
        </div>
        {/* Level Card */}
        <div style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>
            🧭 Explorador
          </div>
          <div style={{ fontSize: 12, color: tokens.colors.oceanMist }}>Nivel 1 de 3</div>
          <div style={{ background: "rgba(255,255,255,0.19)", borderRadius: 4, height: 8 }}>
            <div style={{ width: "42%", height: "100%", borderRadius: 4, background: tokens.colors.goldBadge }} />
          </div>
          <div style={{ fontSize: 11, color: tokens.colors.goldBadge }}>1,250 / 3,000 XP</div>
        </div>
        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.13)" }} />
        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { emoji: "📚", label: "Lecciones", value: "7 / 20" },
            { emoji: "🏆", label: "Insignias", value: "2 / 8" },
            { emoji: "⏱", label: "Tiempo total", value: "4.5 hrs" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20 }}>{s.emoji}</span>
              <div>
                <div style={{ fontSize: 11, color: tokens.colors.oceanMist }}>{s.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main timeline */}
      <div style={{ flex: 1, padding: isMobile ? "24px 20px" : "32px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 22 : 26, color: tokens.colors.oceanDeep, marginBottom: 4 }}>
            Ruta: Dominando Canva
          </h1>
          <p style={{ fontSize: 14, color: "#666666" }}>Sigue tu camino paso a paso hacia la maestría digital</p>
        </div>

        {RUTA_MODULES_P3.map((mod, i) => (
          <div key={mod.id} style={{ display: "flex", gap: 20, opacity: mod.estado === "bloqueado" ? 0.5 : 1 }}>
            {/* Dot + Line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, background: dotColor(mod), flexShrink: 0 }} />
              {i < RUTA_MODULES_P3.length - 1 && (
                <div style={{ width: 3, height: mod.estado === "en-progreso" ? 120 : 80, background: lineColor(mod) }} />
              )}
            </div>
            {/* Card */}
            <div style={{
              flex: 1,
              background: "white",
              borderRadius: 12,
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: mod.estado === "bloqueado" ? "#AAAAAA" : tokens.colors.oceanDeep }}>
                  Módulo {mod.id}: {mod.titulo}
                </h3>
                {mod.estado === "completado" && (
                  <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: tokens.colors.forestCalm, borderRadius: 8, padding: "4px 10px" }}>
                    Completado
                  </span>
                )}
                {mod.estado === "en-progreso" && (
                  <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: tokens.colors.coralSoft, borderRadius: 8, padding: "4px 10px" }}>
                    En Progreso
                  </span>
                )}
                {mod.estado === "bloqueado" && <LockIcon />}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.3, color: mod.estado === "bloqueado" ? "#CCCCCC" : "#666666" }}>
                {mod.desc}
              </p>
              {mod.estado === "en-progreso" && (
                <>
                  <div style={{ background: tokens.colors.sandWarm, borderRadius: 3, height: 6 }}>
                    <div style={{ width: `${mod.progreso}%`, height: "100%", borderRadius: 3, background: tokens.colors.coralSoft }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: tokens.colors.coralSoft }}>{mod.completadas} de {mod.lecciones} lecciones</span>
                    <Button size="sm" variant="coral" onClick={() => setPage("explorador")}>Continuar</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========== PAGE: COMUNIDAD ==========
const PageComunidad = () => {
  const { isMobile } = useResponsive();
  const [activeTab, setActiveTab] = useState("foro");
  const [likedPosts, setLikedPosts] = useState({});

  const posts = [
    { id: 1, autor: "María García", subtitulo: "Profesora de Historia", avatar: tokens.colors.forestCalm, tag: "Pregunta", tagBg: tokens.colors.oceanMist, tagColor: tokens.colors.oceanDeep, texto: "¿Cómo puedo usar Canva para crear presentaciones interactivas para mis alumnos de historia?", respuestas: 5, likes: 12 },
    { id: 2, autor: "Carlos López", subtitulo: "Profesor de Matemáticas", avatar: tokens.colors.coralSoft, tag: "Experiencia", tagBg: tokens.colors.sandWarm, tagColor: "#8B6914", texto: "💡 Mi experiencia usando Google Classroom: Después de 3 meses de uso, logré organizar mis cursos de matemáticas de forma eficiente. Los estudiantes ahora entregan tareas a tiempo y la comunicación mejoró un 80%.", respuestas: 8, likes: 24, bgColor: tokens.colors.sandLight },
    { id: 3, autor: "Ana Rodríguez", subtitulo: "Profesora de Ciencias", avatar: tokens.colors.goldBadge, tag: "Pregunta", tagBg: tokens.colors.oceanMist, tagColor: tokens.colors.oceanDeep, texto: "¿Alguien ha probado usar Kahoot para evaluaciones? Me gustaría saber si funciona bien con grupos grandes de 40+ estudiantes.", respuestas: 3, likes: 7 },
  ];

  const menuItems = [
    { id: "foro", label: "Foro de Preguntas", icon: "💬" },
    { id: "experiencias", label: "Experiencias", icon: "❤️" },
    { id: "recursos", label: "Recursos", icon: "📁" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "calc(100vh - 64px)", background: tokens.colors.sandLight }}>
      {/* Sidebar */}
      <div style={{
        width: isMobile ? "100%" : 240,
        padding: isMobile ? "16px" : "0",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        gap: 12,
        flexShrink: 0,
      }}>
        {/* Profile Card */}
        {!isMobile && (
          <div style={{
            background: "white",
            borderRadius: 16,
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
          }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: tokens.colors.oceanLight }} />
            <div style={{ fontWeight: 700, fontSize: 14, color: tokens.colors.oceanDeep }}>Docente</div>
            <div style={{ fontSize: 12, color: "#8E8E93" }}>Nivel: Explorador</div>
            <div style={{ width: "100%", background: tokens.colors.oceanMist, borderRadius: 4, height: 8 }}>
              <div style={{ width: "60%", height: "100%", borderRadius: 4, background: tokens.colors.oceanDeep }} />
            </div>
          </div>
        )}
        {/* Menu Card */}
        <div style={{
          background: "white",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          width: isMobile ? "100%" : "auto",
        }}>
          {menuItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                fontWeight: activeTab === item.id ? 700 : 500,
                color: activeTab === item.id ? tokens.colors.oceanDeep : "#6B6B6B",
                background: activeTab === item.id ? tokens.colors.oceanMist : "transparent",
                borderRadius: idx === 0 ? (isMobile ? "16px 0 0 16px" : "16px 16px 0 0") : idx === menuItems.length - 1 ? (isMobile ? "0 16px 16px 0" : "0 0 16px 16px") : 0,
                flex: isMobile ? 1 : "none",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div style={{ flex: 1, padding: isMobile ? "0 16px 24px" : "24px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Compose Box */}
        <div style={{
          background: "white",
          borderRadius: 16,
          padding: "16px 20px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: tokens.colors.oceanLight, flexShrink: 0 }} />
            <div style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: 20,
              background: tokens.colors.sandWarm,
              fontSize: 13,
              color: "#9E8E7E",
              cursor: "text",
            }}>
              ¿Qué quieres compartir con la comunidad?
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: tokens.colors.oceanDeep, background: tokens.colors.oceanMist, borderRadius: 16, padding: "6px 12px", cursor: "pointer" }}>
              ❓ Pregunta
            </span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#8B6914", background: tokens.colors.sandWarm, borderRadius: 16, padding: "6px 12px", cursor: "pointer" }}>
              ❤️ Experiencia
            </span>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} style={{
            background: post.bgColor || "white",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: post.bgColor ? "none" : "0 2px 12px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: post.avatar, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{post.autor}</div>
                  <div style={{ fontSize: 11, color: "#8E8E93" }}>{post.subtitulo}</div>
                </div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: post.tagColor, background: post.tagBg, borderRadius: 12, padding: "4px 10px" }}>
                {post.tag}
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.4, color: post.bgColor ? "#555555" : "#333333" }}>
              {post.texto}
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <button
                onClick={() => setLikedPosts((p) => ({ ...p, [post.id]: !p[post.id] }))}
                style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", fontSize: 12, color: likedPosts[post.id] ? tokens.colors.coralSoft : "#8E8E93", fontFamily: "'Nunito', sans-serif" }}
              >
                <HeartIcon filled={likedPosts[post.id]} /> {post.likes + (likedPosts[post.id] ? 1 : 0)}
              </button>
              <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#8E8E93" }}>
                <ChatIcon /> {post.respuestas} respuestas
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========== PAGE: BIBLIOTECA ==========
const PageBiblioteca = ({ setPage }) => {
  const { isMobile } = useResponsive();
  const [activeTab, setActiveTab] = useState("todos");
  const tabs = ["Todos", "Mis recursos", "Favoritos"];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 64px)" }}>
      {/* Hero */}
      <div style={{
        background: tokens.colors.oceanDeep,
        padding: isMobile ? "20px 16px" : "24px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 20 : 22, fontWeight: 700, color: "white" }}>
          Mi Colección Digital
        </h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          Comparte tus mejores recursos y descubre los de otros docentes
        </p>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "white",
          borderRadius: 20,
          padding: "0 14px",
          height: 40,
          width: isMobile ? "100%" : 420,
        }}>
          <span style={{ fontSize: 16, color: "#8E8E93" }}>🔍</span>
          <span style={{ fontSize: 12, color: "#8E8E93" }}>Buscar plantillas, guías, presentaciones...</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["📚 77 recursos", "👥 45 docentes activos", "⬇ 320 descargas"].map((stat) => (
            <span key={stat} style={{ fontSize: 12, fontWeight: 600, color: "white" }}>{stat}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: isMobile ? "16px" : "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Tab row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: activeTab === tab.toLowerCase() ? 700 : 400,
                  fontFamily: "'Nunito', sans-serif",
                  background: activeTab === tab.toLowerCase() ? tokens.colors.oceanDeep : tokens.colors.oceanMist,
                  color: activeTab === tab.toLowerCase() ? "white" : tokens.colors.oceanDeep,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 20,
            border: "none",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "'Nunito', sans-serif",
            background: tokens.colors.coralSoft,
            color: "white",
          }}>
            📤 Compartir recurso
          </button>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: 14,
        }}>
          {BIBLIOTECA_ITEMS_P3.map((item) => (
            <div key={item.id} style={{
              background: "white",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
            >
              <div style={{
                height: 80,
                background: item.bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
              }}>
                {item.icon}
              </div>
              <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#333333" }}>{item.titulo}</div>
                <div style={{ fontSize: 10, color: "#8E8E93" }}>{item.materia}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, color: tokens.colors.oceanLight }}>⬇ {item.descargas}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: item.tipo === "Oficial" ? tokens.colors.oceanDeep : tokens.colors.coralSoft }}>
                    {item.tipo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========== PAGE: EXPLORADOR ==========
const PageExplorador = ({ setPage }) => {
  const { isMobile } = useResponsive();
  const [selectedOption, setSelectedOption] = useState(1);
  const [showFeedback, setShowFeedback] = useState(true);
  const quiz = QUIZ_DATA_P3;
  const progreso = (quiz.preguntaActual / quiz.totalPreguntas) * 100;

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", padding: isMobile ? "16px" : "24px 32px", display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Header Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ fontSize: 11, color: "#8E8E93" }}>Módulo {quiz.modulo} · Lección {quiz.leccion}</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 18 : 20, fontWeight: 700, color: tokens.colors.oceanDeep }}>
            {quiz.titulo}
          </h1>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#8B6914", background: "rgba(242,201,76,0.13)", borderRadius: 20, padding: "6px 12px" }}>
            ⭐ +{quiz.xp} XP
          </span>
          <span style={{ fontSize: 12, color: tokens.colors.oceanDeep, background: tokens.colors.oceanMist, borderRadius: 20, padding: "6px 12px" }}>
            Pregunta {quiz.preguntaActual} de {quiz.totalPreguntas}
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div style={{ background: tokens.colors.oceanMist, borderRadius: 3, height: 6 }}>
        <div style={{ width: `${progreso}%`, height: "100%", borderRadius: 3, background: tokens.colors.oceanLight }} />
      </div>

      {/* Question Card */}
      <div style={{
        background: "white",
        borderRadius: 12,
        padding: isMobile ? "16px" : "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "#333333" }}>
          {quiz.pregunta}
        </h2>
        {quiz.opciones.map((opt, i) => (
          <button
            key={i}
            onClick={() => { setSelectedOption(i); setShowFeedback(opt.correcta); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 18px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background: selectedOption === i ? tokens.colors.oceanMist : "white",
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              fontWeight: selectedOption === i ? 700 : 400,
              color: selectedOption === i ? tokens.colors.oceanDeep : "#555555",
              textAlign: "left",
              width: "100%",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: selectedOption === i ? tokens.colors.oceanLight : "white",
              border: selectedOption === i ? "none" : "2px solid #E0E0E0",
              flexShrink: 0,
            }} />
            {opt.letra}. {opt.texto}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(91,138,114,0.08)",
          borderRadius: 10,
          padding: "14px 18px",
        }}>
          <span style={{ fontSize: 16 }}>✅</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3D6B52" }}>{quiz.feedback}</div>
            <div style={{ fontSize: 11, color: tokens.colors.forestCalm }}>{quiz.tip}</div>
          </div>
        </div>
      )}

      {/* Button Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{
          padding: "0 16px",
          height: 38,
          borderRadius: 8,
          border: "none",
          background: "white",
          cursor: "pointer",
          fontSize: 12,
          color: "#888888",
          fontFamily: "'Nunito', sans-serif",
          width: 160,
        }}>
          ← Pregunta anterior
        </button>
        <button style={{
          padding: "0 16px",
          height: 38,
          borderRadius: 8,
          border: "none",
          background: tokens.colors.coralSoft,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 700,
          color: "white",
          fontFamily: "'Nunito', sans-serif",
          width: 180,
        }}>
          Siguiente pregunta →
        </button>
      </div>
    </div>
  );
};

// ========== PAGE: LOGROS ==========
const PageLogros = () => {
  const { isMobile } = useResponsive();
  return (
  <div style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 900, margin: "0 auto" }}>
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: isMobile ? 28 : 36,
        marginBottom: 8,
        animation: "fadeInUp 0.6s ease",
      }}
    >
      Tus logros
    </h1>
    <p style={{ fontSize: isMobile ? 15 : 17, color: tokens.colors.textSecondary, marginBottom: isMobile ? 28 : 40, animation: "fadeInUp 0.6s ease 0.1s both" }}>
      Cada insignia representa un paso en tu camino. ¡Celebra tu progreso!
    </p>

    {/* Stats */}
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 12 : 20, marginBottom: isMobile ? 32 : 48 }}>
      {[
        { label: "Insignias obtenidas", value: "3 / 8", color: tokens.colors.goldBadge },
        { label: "Nivel actual", value: "Explorador", color: tokens.colors.oceanDeep },
        { label: "Días activa", value: "18", color: tokens.colors.coralSoft },
      ].map((stat, i) => (
        <Card key={i} delay={0.2 + i * 0.1} style={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: stat.color, marginBottom: 4 }}>{stat.value}</div>
          <div style={{ fontSize: 14, color: tokens.colors.textSecondary }}>{stat.label}</div>
        </Card>
      ))}
    </div>

    {/* Badges Grid */}
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 12 : 20 }}>
      {BADGES.map((badge, i) => (
        <Card
          key={badge.id}
          delay={0.3 + i * 0.08}
          style={{
            textAlign: "center",
            opacity: badge.earned ? 1 : 0.45,
            background: badge.earned ? "white" : "#F5F5F5",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: badge.earned
                ? `linear-gradient(135deg, ${tokens.colors.goldBadge}30, ${tokens.colors.sandWarm})`
                : "#ECECEC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              fontSize: 32,
              boxShadow: badge.earned ? `0 0 0 3px ${tokens.colors.goldBadge}40` : "none",
            }}
          >
            {badge.earned ? badge.icon : "🔒"}
          </div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{badge.name}</div>
          <div style={{ fontSize: 12, color: tokens.colors.textMuted }}>
            {badge.earned ? badge.date : "Por desbloquear"}
          </div>
        </Card>
      ))}
    </div>
  </div>
  );
};

// ========== PAGE: PERFIL ==========
const PagePerfil = () => {
  const { isMobile } = useResponsive();
  return (
  <div style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 800, margin: "0 auto" }}>
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: isMobile ? 28 : 36,
        marginBottom: isMobile ? 24 : 32,
        animation: "fadeInUp 0.6s ease",
      }}
    >
      Mi cuenta
    </h1>

    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr", gap: isMobile ? 20 : 32 }}>
      {/* Profile Card */}
      <Card style={{ textAlign: "center", animation: "fadeInUp 0.6s ease 0.1s both" }}>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 700,
            margin: "0 auto 16px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          CZ
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Carla Zuñiga</h2>
        <p style={{ fontSize: 14, color: tokens.colors.textSecondary, marginBottom: 16 }}>Docente de Inglés</p>
        <LevelBadge level="explorador" size="sm" />
        <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #EEE" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}>
            <span style={{ color: tokens.colors.textSecondary }}>Experiencia</span>
            <span style={{ fontWeight: 600 }}>28 años</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}>
            <span style={{ color: tokens.colors.textSecondary }}>Edad</span>
            <span style={{ fontWeight: 600 }}>50 años</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
            <span style={{ color: tokens.colors.textSecondary }}>Miembro desde</span>
            <span style={{ fontWeight: 600 }}>Feb 2026</span>
          </div>
        </div>
      </Card>

      {/* Info Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              marginBottom: 16,
              color: tokens.colors.oceanDeep,
            }}
          >
            Progreso en la ruta
          </h3>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}>
              <span style={{ color: tokens.colors.textSecondary }}>Nivel Explorador</span>
              <span style={{ fontWeight: 600 }}>68%</span>
            </div>
            <ProgressBar value={68} height={10} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12, marginTop: 20 }}>
            {[
              { label: "Módulos completados", value: "1 / 8" },
              { label: "Lecciones terminadas", value: "9 / 37" },
              { label: "Horas de práctica", value: "12h" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: 12,
                  background: tokens.colors.sandLight,
                  borderRadius: 10,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color: tokens.colors.oceanDeep }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: tokens.colors.textSecondary, marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              marginBottom: 16,
              color: tokens.colors.oceanDeep,
            }}
          >
            Actividad reciente
          </h3>
          {[
            { action: "Completó lección: Compartir pantalla en Zoom", time: "Hoy, 10:30 AM", icon: "📹" },
            { action: "Ganó insignia: Primera videollamada", time: "Ayer, 3:15 PM", icon: "🏅" },
            { action: "Completó módulo: Primeros pasos digitales", time: "12 Mar 2026", icon: "✅" },
            { action: "Publicó en la comunidad", time: "10 Mar 2026", icon: "💬" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 0",
                borderBottom: i < 3 ? "1px solid #F0F0F0" : "none",
              }}
            >
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{item.action}</div>
                <div style={{ fontSize: 12, color: tokens.colors.textMuted }}>{item.time}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  </div>
  );
};

// ========== HELP BUTTON (GLOBAL) ==========
const HelpButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: tokens.colors.coralSoft,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(232,146,124,0.4)",
          zIndex: 200,
          transition: "all 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0)",
        }}
      >
        <HelpIcon />
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            width: 300,
            background: "white",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            zIndex: 200,
            animation: "slideDown 0.3s ease",
          }}
        >
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 12, color: tokens.colors.oceanDeep }}>
            ¿Necesitas ayuda?
          </h3>
          <p style={{ fontSize: 14, color: tokens.colors.textSecondary, lineHeight: 1.6, marginBottom: 16 }}>
            No te preocupes, estamos aquí para acompañarte. Elige cómo prefieres recibir ayuda:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Button size="sm" style={{ width: "100%", justifyContent: "center" }}>
              💬 Chat con un mentor
            </Button>
            <Button size="sm" variant="secondary" style={{ width: "100%", justifyContent: "center" }}>
              📋 Ver guías rápidas
            </Button>
            <Button size="sm" variant="secondary" style={{ width: "100%", justifyContent: "center" }}>
              📞 Solicitar llamada
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

// ========== FOOTER ==========
const Footer = () => {
  const { isMobile, isTablet } = useResponsive();
  return (
  <footer
    style={{
      background: tokens.colors.textPrimary,
      color: "white",
      padding: isMobile ? "40px 20px" : "48px 24px",
      marginTop: isMobile ? 40 : 64,
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
        gap: isMobile ? 24 : 40,
      }}
    >
      <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <CompassIcon size={32} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>
            BRÚJULA DIGITAL
          </span>
        </div>
        <p style={{ fontSize: 14, color: "#AAA", lineHeight: 1.6, maxWidth: 280 }}>
          Autonomía digital para docentes. Aprendizaje práctico, accesible y acompañado.
        </p>
      </div>
      {[
        { title: "Plataforma", items: ["Inicio", "Diagnóstico", "Mi Ruta", "Logros"] },
        { title: "Comunidad", items: ["Foro docente", "Mentores", "Eventos", "Blog"] },
        { title: "Soporte", items: ["Centro de ayuda", "Contacto", "Guías rápidas", "FAQ"] },
      ].map((col, i) => (
        <div key={i}>
          <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, letterSpacing: 1, textTransform: "uppercase" }}>
            {col.title}
          </h4>
          {col.items.map((item, j) => (
            <div
              key={j}
              style={{
                fontSize: 14,
                color: "#AAA",
                marginBottom: 10,
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
    <div
      style={{
        maxWidth: 1200,
        margin: "32px auto 0",
        paddingTop: 24,
        borderTop: "1px solid #444",
        textAlign: "center",
        fontSize: 13,
        color: "#777",
      }}
    >
      © 2026 Brújula Digital · Chispas Estratégicas · Aprender sin Edad
    </div>
  </footer>
  );
};

// ========== MAIN APP ==========
export default function BrujulaDigital() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const setPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "inicio":
        return <PageInicio setPage={setPage} />;
      case "diagnostico":
        return <PageDiagnostico setPage={setPage} />;
      case "ruta":
        return <PageRuta setPage={setPage} />;
      case "explorador":
        return <PageExplorador setPage={setPage} />;
      case "biblioteca":
        return <PageBiblioteca setPage={setPage} />;
      case "comunidad":
        return <PageComunidad />;
      case "logros":
        return <PageLogros />;
      case "perfil":
        return <PagePerfil />;
      default:
        return <PageInicio setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: tokens.colors.sandLight }}>
      <style>{styles.global}</style>
      <Navbar currentPage={currentPage} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer />
      <HelpButton />
    </div>
  );
}
