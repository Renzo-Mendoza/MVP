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

const LIBRARY_RESOURCES = [
  { id: 1, area: "Matemáticas", color: "#E8927C", count: 12, icon: "📐", desc: "Recursos para enseñanza de matemáticas" },
  { id: 2, area: "Ciencias", color: "#4A9B9C", count: 8, icon: "🔬", desc: "Experimentos y material científico" },
  { id: 3, area: "Lenguaje", color: "#F2C94C", count: 15, icon: "📝", desc: "Plantillas y actividades de lectoescritura" },
  { id: 4, area: "Historia", color: "#5B8A72", count: 7, icon: "🏛️", desc: "Líneas de tiempo y recursos históricos" },
  { id: 5, area: "Arte y Música", color: "#9B59B6", count: 6, icon: "🎨", desc: "Material creativo y audiovisual" },
  { id: 6, area: "Tecnología", color: "#2C6E6F", count: 10, icon: "💻", desc: "Tutoriales y herramientas digitales" },
];

const SHARED_RESOURCES = [
  { id: 1, title: "Plantilla de examen — Álgebra", author: "Patricia A.", downloads: 34, type: "PDF", icon: "📄" },
  { id: 2, title: "Presentación — Sistema Solar", author: "Roberto G.", downloads: 21, type: "PPT", icon: "📊" },
];

const EXPLORER_LESSONS = [
  { id: 1, title: "¿Qué es lo digital?", type: "Video", duration: "5 min", completed: true },
  { id: 2, title: "Navegador y buscador", type: "PDF guía", duration: "3 min", completed: false, active: true },
  { id: 3, title: "Correo electrónico", type: "Ejercicio", duration: "10 min", completed: false },
  { id: 4, title: "Almacenamiento en la nube", type: "Video", duration: "8 min", completed: false },
];

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

// ========== PAGE: MI RUTA (P1 — Linear Path) ==========
const PageRuta = ({ setPage }) => {
  const { isMobile } = useResponsive();

  const rutaModules = [
    { id: 1, title: "Introducción a Canva", desc: "Aprende a crear tu primer diseño con la herramienta más intuitiva de la educación.", lessons: 4, completed: 4, progress: 100, unlocked: true, icon: "🎨" },
    { id: 2, title: "Presentaciones en Canva", desc: "Crea presentaciones interactivas y atractivas que reflejen tu estilo de enseñanza.", lessons: 5, completed: 3, progress: 60, unlocked: true, icon: "📊" },
    { id: 3, title: "Infografías Educativas", desc: "Diseña infografías claras y visuales para tus clases.", lessons: 4, completed: 0, progress: 0, unlocked: false, icon: "📋" },
    { id: 4, title: "Videos Educativos con Canva", desc: "Aprende a crear videos cortos para tus estudiantes.", lessons: 3, completed: 0, progress: 0, unlocked: false, icon: "🎬" },
  ];

  const totalProgress = Math.round(rutaModules.reduce((acc, m) => acc + m.progress, 0) / rutaModules.length);

  return (
    <div style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: 16, marginBottom: 40, animation: "fadeInUp 0.6s ease" }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 26 : 36, marginBottom: 4 }}>
            Tu Ruta de Aprendizaje
          </h1>
          <p style={{ fontSize: 15, color: tokens.colors.textSecondary }}>
            Nivel actual: Explorador 🧭
          </p>
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 18px", background: tokens.colors.oceanMist, borderRadius: 20,
          fontSize: 14, fontWeight: 600, color: tokens.colors.oceanDeep,
        }}>
          Progreso General: {totalProgress}%
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {rutaModules.map((mod, i) => (
          <div key={mod.id} style={{ display: "flex", gap: isMobile ? 16 : 24, animation: `fadeInUp 0.6s ease ${i * 0.12}s both` }}>
            {/* Numbered circle + connector */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 48, flexShrink: 0 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: mod.progress === 100 ? tokens.colors.forestCalm : mod.unlocked ? tokens.colors.oceanDeep : "#DDD",
                color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: 16, flexShrink: 0,
              }}>
                {mod.progress === 100 ? <CheckIcon /> : mod.id}
              </div>
              {i < rutaModules.length - 1 && (
                <div style={{ width: 3, flex: 1, minHeight: 40, background: mod.unlocked ? tokens.colors.oceanDeep + "30" : "#E0E0E0", borderRadius: 2 }} />
              )}
            </div>

            {/* Module card */}
            <div style={{
              flex: 1, background: mod.unlocked ? "white" : "#F8F8F8",
              borderRadius: 14, padding: isMobile ? "18px 16px" : "20px 24px",
              marginBottom: 20,
              opacity: mod.unlocked ? 1 : 0.55,
              boxShadow: mod.unlocked ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
              borderLeft: mod.active || (mod.unlocked && mod.progress > 0 && mod.progress < 100) ? `4px solid ${tokens.colors.coralSoft}` : "4px solid transparent",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 0, marginBottom: 8 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 20 }}>{mod.icon}</span>
                    <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: mod.unlocked ? tokens.colors.textPrimary : tokens.colors.textMuted }}>
                      Módulo {mod.id}: {mod.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 14, color: tokens.colors.textSecondary }}>{mod.desc}</p>
                </div>
                {mod.unlocked && mod.progress < 100 && mod.progress > 0 && (
                  <Button size="sm" onClick={() => setPage("explorador")}>Continuar</Button>
                )}
                {mod.progress === 100 && (
                  <span style={{ fontSize: 13, fontWeight: 600, color: tokens.colors.forestCalm, whiteSpace: "nowrap" }}>✓ Completado</span>
                )}
              </div>
              {mod.unlocked && (
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: tokens.colors.textMuted, marginBottom: 4 }}>
                    <span>{mod.completed}/{mod.lessons} lecciones</span>
                    <span>{mod.progress}%</span>
                  </div>
                  <ProgressBar value={mod.progress} height={6} />
                </div>
              )}
              {!mod.unlocked && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, fontSize: 13, color: tokens.colors.textMuted }}>
                  <LockIcon /> Completa el módulo anterior para desbloquear
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========== PAGE: COMUNIDAD (P1 — Two-column with Tabs) ==========
const PageComunidad = () => {
  const { isMobile } = useResponsive();
  const [likedPosts, setLikedPosts] = useState({});
  const [activeTab, setActiveTab] = useState("foro");

  const tabs = [
    { id: "foro", label: "Foro de Preguntas" },
    { id: "experiencias", label: "Experiencias Reales" },
    { id: "recursos", label: "Recursos Compartidos" },
  ];

  const experiencias = [
    { id: 1, author: "Ana García", avatar: "AG", color: tokens.colors.coralSoft, role: "Docente de Matemáticas, Arequipa", text: "Gracias a Brújula Digital aprendí a usar Canva para mis materiales. Ahora mis estudiantes prestan más atención y mis colegas me piden ayuda. ¡Es un cambio increíble!" },
    { id: 2, author: "Pedro Sánchez", avatar: "PS", color: tokens.colors.forestCalm, role: "Docente de Ciencias, Lima", text: "Al principio tenía mucho miedo de usar tecnología en clase. El Módulo de videoconferencias me ayudó paso a paso. Ahora mis clases en línea fluyen con naturalidad." },
  ];

  return (
    <div style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: 32, animation: "fadeInUp 0.6s ease" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 26 : 36, marginBottom: 8 }}>
          Comunidad Docente
        </h1>
        <p style={{ fontSize: 16, color: tokens.colors.textSecondary }}>
          Comparte, pregunta y aprende junto a otros docentes que están en tu mismo camino digital.
        </p>
      </div>

      {/* Pill Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap", animation: "fadeInUp 0.6s ease 0.1s both" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "8px 20px", borderRadius: 20, fontSize: 14, fontWeight: 600,
              fontFamily: "'Nunito', sans-serif", cursor: "pointer", transition: "all 0.2s ease",
              background: activeTab === tab.id ? tokens.colors.oceanDeep : "white",
              color: activeTab === tab.id ? "white" : tokens.colors.textSecondary,
              border: `1px solid ${activeTab === tab.id ? tokens.colors.oceanDeep : "#DDD"}`,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 340px", gap: 28 }}>
        {/* Left — Forum */}
        <div>
          {/* Compose */}
          <Card style={{ marginBottom: 20, animation: "fadeInUp 0.6s ease 0.2s both" }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: tokens.colors.oceanDeep }}>📝 Nueva Pregunta</div>
            <div style={{
              width: "100%", padding: "14px 18px", border: "2px solid #E0E0E0", borderRadius: 12,
              fontSize: 15, color: tokens.colors.textMuted, background: "#FAFAFA", marginBottom: 12,
            }}>
              ¿Tienes alguna duda? Describe tu pregunta aquí...
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button size="sm">Publicar</Button>
            </div>
          </Card>

          {/* Posts */}
          {COMMUNITY_POSTS.map((post, i) => (
            <Card key={post.id} style={{ marginBottom: 16 }} delay={0.3 + i * 0.1}>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: post.color,
                  color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, flexShrink: 0,
                }}>
                  {post.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: tokens.colors.oceanDeep }}>{post.author}</span>
                    <span style={{ fontSize: 12, color: tokens.colors.textMuted }}>{post.time}</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: tokens.colors.textPrimary, marginBottom: 12 }}>
                    {post.text}
                  </p>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <button onClick={() => setLikedPosts((p) => ({ ...p, [post.id]: !p[post.id] }))} style={{
                      display: "flex", alignItems: "center", gap: 4, background: "none", border: "none",
                      cursor: "pointer", fontSize: 13, color: likedPosts[post.id] ? tokens.colors.coralSoft : tokens.colors.textSecondary,
                      fontFamily: "'Nunito', sans-serif",
                    }}>
                      <HeartIcon filled={likedPosts[post.id]} /> {post.likes + (likedPosts[post.id] ? 1 : 0)}
                    </button>
                    <span style={{ fontSize: 13, color: tokens.colors.textSecondary }}>💬 {post.replies} respuestas</span>
                    <button style={{
                      marginLeft: "auto", padding: "5px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                      background: tokens.colors.oceanMist, color: tokens.colors.oceanDeep,
                      border: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                    }}>
                      Responder
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Right — Experiencias Reales */}
        <div style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 16, color: tokens.colors.oceanDeep }}>
            ✨ Experiencias Reales
          </h3>
          {experiencias.map((exp, i) => (
            <Card key={exp.id} style={{ marginBottom: 16, background: tokens.colors.sandWarm + "30" }} delay={0.4 + i * 0.12}>
              <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", background: exp.color,
                  color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 12, flexShrink: 0,
                }}>
                  {exp.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{exp.author}</div>
                  <div style={{ fontSize: 11, color: tokens.colors.textMuted }}>{exp.role}</div>
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: tokens.colors.textSecondary, fontStyle: "italic" }}>
                "{exp.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========== PAGE: BIBLIOTECA DIGITAL (P1 — Hero + Academic Areas) ==========
const PageBiblioteca = ({ setPage }) => {
  const { isMobile, isTablet } = useResponsive();
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "todos", label: "Todos los Temas" },
    { id: "plantillas", label: "Plantillas y Recursos" },
    { id: "compartir", label: "Compartir e Intercambiar" },
  ];

  return (
    <div>
      {/* Hero Header */}
      <section style={{
        background: `linear-gradient(135deg, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
        padding: isMobile ? "32px 20px" : "40px 24px",
        color: "white",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: 20 }}>
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 26 : 34, marginBottom: 6 }}>
                Biblioteca Digital
              </h1>
              <p style={{ fontSize: 15, opacity: 0.85 }}>
                Recursos clasificados por Área Académica. Comparte y descarga plantillas.
              </p>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 16px",
              width: isMobile ? "100%" : 280,
            }}>
              <span style={{ fontSize: 16 }}>🔍</span>
              <input
                type="text"
                placeholder="Buscar recurso..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: "transparent", border: "none", outline: "none", color: "white",
                  fontSize: 14, fontFamily: "'Nunito', sans-serif", width: "100%",
                }}
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: "7px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600,
                  fontFamily: "'Nunito', sans-serif", cursor: "pointer", transition: "all 0.2s ease",
                  background: activeFilter === f.id ? "white" : "rgba(255,255,255,0.15)",
                  color: activeFilter === f.id ? tokens.colors.oceanDeep : "white",
                  border: "none",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Areas */}
      <section style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 22 : 28 }}>
            Áreas Académicas
          </h2>
          <Button size="sm" variant="coral">+ Subir recurso</Button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
          gap: isMobile ? 12 : 16,
          marginBottom: isMobile ? 40 : 56,
        }}>
          {LIBRARY_RESOURCES.map((res, i) => (
            <Card key={res.id} delay={i * 0.08} style={{
              padding: 0, overflow: "hidden", cursor: "pointer", textAlign: "center",
            }}>
              <div style={{ height: 6, background: res.color }} />
              <div style={{ padding: "18px 12px" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{res.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{res.area}</div>
                <div style={{ fontSize: 12, color: tokens.colors.textMuted }}>{res.count} recursos · {Math.floor(res.count / 3)} plantillas</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Resource Exchange */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 20 : 24 }}>
              Intercambio de Recursos
            </h2>
            <span style={{ fontSize: 13, color: tokens.colors.textMuted }}>
              58 recursos compartidos por 45 docentes · Tendencia en alza 📈
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
            {SHARED_RESOURCES.map((res, i) => (
              <Card key={res.id} delay={0.4 + i * 0.1} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: tokens.colors.sandWarm, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 22, flexShrink: 0,
                }}>
                  {res.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{res.title}</div>
                  <div style={{ fontSize: 12, color: tokens.colors.textMuted }}>
                    Por {res.author} · {res.type} · ⬇ {res.downloads} descargas
                  </div>
                </div>
                <Button size="sm" variant="secondary" style={{ fontSize: 12, padding: "6px 12px" }}>
                  Descargar
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ========== PAGE: EXPLORADOR DIGITAL (P1 — Sidebar + PDF Viewer) ==========
const PageExplorador = ({ setPage }) => {
  const { isMobile } = useResponsive();
  const [currentLesson, setCurrentLesson] = useState(1);

  const activeLesson = EXPLORER_LESSONS.find((l) => l.active) || EXPLORER_LESSONS[currentLesson];
  const completedCount = EXPLORER_LESSONS.filter((l) => l.completed).length;
  const progressPct = Math.round((completedCount / EXPLORER_LESSONS.length) * 100);

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "calc(100vh - 72px)" }}>
      {/* Sidebar */}
      <aside style={{
        width: isMobile ? "100%" : 280, flexShrink: 0,
        background: tokens.colors.oceanMist, padding: "24px 20px",
        borderRight: isMobile ? "none" : `1px solid ${tokens.colors.oceanDeep}15`,
        borderBottom: isMobile ? `1px solid ${tokens.colors.oceanDeep}15` : "none",
      }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: tokens.colors.textMuted, marginBottom: 4 }}>Módulo 1</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: tokens.colors.oceanDeep, marginBottom: 4 }}>
            Herramientas Digitales Básicas
          </h3>
          <div style={{ fontSize: 13, color: tokens.colors.textSecondary, marginBottom: 14 }}>
            {progressPct}% completado
          </div>
          <ProgressBar value={progressPct} height={8} />
        </div>

        {/* Lesson List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {EXPLORER_LESSONS.map((lesson, i) => (
            <div
              key={lesson.id}
              onClick={() => lesson.completed || lesson.active ? setCurrentLesson(i) : null}
              style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                borderRadius: 10, cursor: lesson.completed || lesson.active ? "pointer" : "default",
                background: lesson.active ? "white" : "transparent",
                border: lesson.active ? `2px solid ${tokens.colors.coralSoft}` : "2px solid transparent",
                opacity: !lesson.completed && !lesson.active ? 0.5 : 1,
                transition: "all 0.2s ease",
              }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11,
                background: lesson.completed ? tokens.colors.forestCalm : lesson.active ? tokens.colors.oceanDeep : "#DDD",
                color: "white", fontWeight: 700,
              }}>
                {lesson.completed ? "✓" : lesson.active ? i + 1 : <LockIcon />}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: lesson.active ? 700 : 500, color: lesson.active ? tokens.colors.textPrimary : tokens.colors.textSecondary }}>
                  {lesson.id}. {lesson.title}
                </div>
                <div style={{ fontSize: 11, color: tokens.colors.textMuted }}>
                  {lesson.type} · {lesson.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content — PDF Viewer Style */}
      <main style={{ flex: 1, padding: isMobile ? "24px 20px" : "32px 40px", background: "white" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: tokens.colors.textMuted, marginBottom: 20 }}>
          <span style={{ cursor: "pointer" }} onClick={() => setPage("ruta")}>Módulo 1</span>
          <span style={{ margin: "0 8px" }}>›</span>
          <span>Lección 2: Navegador y buscador</span>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 22 : 28, color: tokens.colors.textPrimary, marginBottom: 8 }}>
          Guía: Cómo usar el navegador
        </h2>
        <div style={{ fontSize: 13, color: tokens.colors.textMuted, marginBottom: 28 }}>
          📄 guia-navegador.pdf — Página 1 de 5
        </div>

        {/* PDF-like content */}
        <div style={{
          background: tokens.colors.sandLight, borderRadius: 12, padding: isMobile ? "24px 20px" : "36px 40px",
          border: `1px solid ${tokens.colors.oceanMist}`, marginBottom: 24, lineHeight: 1.8,
        }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: tokens.colors.oceanDeep, marginBottom: 16 }}>
            Capítulo 1: ¿Qué es un navegador web?
          </h3>
          <p style={{ fontSize: 15, color: tokens.colors.textPrimary, marginBottom: 16 }}>
            Un navegador web es una aplicación que te permite acceder a páginas de internet.
            Los más comunes son <strong>Google Chrome</strong>, <strong>Mozilla Firefox</strong> y <strong>Microsoft Edge</strong>.
          </p>
          <p style={{ fontWeight: 700, fontSize: 15, color: tokens.colors.textPrimary, marginBottom: 8 }}>
            Pasos para abrir el navegador:
          </p>
          <ol style={{ paddingLeft: 20, fontSize: 15, color: tokens.colors.textPrimary }}>
            <li style={{ marginBottom: 4 }}>Busca el ícono del navegador en tu escritorio</li>
            <li style={{ marginBottom: 4 }}>Haz doble clic sobre él</li>
            <li>Espera a que se abra la ventana principal</li>
          </ol>
        </div>

        {/* Tip Box */}
        <div style={{
          background: tokens.colors.coralSoft + "15", border: `1px solid ${tokens.colors.coralSoft}40`,
          borderRadius: 10, padding: "14px 18px", marginBottom: 32, fontSize: 14,
          color: tokens.colors.textPrimary, lineHeight: 1.6,
        }}>
          <strong style={{ color: tokens.colors.coralSoft }}>Consejo:</strong> Si no encuentras el ícono, puedes buscarlo en el menú Inicio escribiendo el nombre.
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button style={{
            display: "flex", alignItems: "center", gap: 6, background: "none", border: "none",
            cursor: "pointer", fontSize: 14, color: tokens.colors.textSecondary, fontFamily: "'Nunito', sans-serif",
          }}>
            ← Lección anterior
          </button>
          <span style={{ fontSize: 13, color: tokens.colors.textMuted }}>
            2 de {EXPLORER_LESSONS.length} lecciones
          </span>
          <Button size="sm" variant="coral" onClick={() => setPage("ruta")}>
            Completar y continuar →
          </Button>
        </div>
      </main>
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
