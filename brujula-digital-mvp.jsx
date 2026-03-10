import { useState, useEffect, useRef } from "react";

// ========== DESIGN TOKENS ==========
const tokens = {
  colors: {
    oceanDeep: "#2C6E6F",
    oceanDarker: "#1A4E4F",
    oceanLight: "#4A9B9C",
    oceanMist: "#E8F4F4",
    sandWarm: "#F5E6D3",
    sandLight: "#FDF8F3",
    coralSoft: "#E8927C",
    coralDeep: "#D4735C",
    goldBadge: "#F2C94C",
    goldLight: "#FFF8E1",
    forestCalm: "#5B8A72",
    forestLight: "#E8F5E9",
    textPrimary: "#1A2024",
    textBody: "#2D3748",
    textSecondary: "#4A5568",
    textMuted: "#A0AEC0",
    white: "#FFFFFF",
    bgAlt: "#FFFFFF",
  },
  shadows: {
    sm: "0 2px 8px rgba(0,0,0,0.06)",
    md: "0 4px 24px rgba(0,0,0,0.08)",
    lg: "0 8px 40px rgba(0,0,0,0.12)",
    coral: "0 4px 16px rgba(232,146,124,0.35)",
    teal: "0 4px 16px rgba(44,110,111,0.25)",
  },
  radii: {
    sm: 8,
    md: 14,
    lg: 20,
    xl: 28,
    pill: 999,
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
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    :root {
      --ocean-deep: #2C6E6F;
      --ocean-darker: #1A4E4F;
      --ocean-light: #4A9B9C;
      --ocean-mist: #E8F4F4;
      --sand-warm: #F5E6D3;
      --sand-light: #FDF8F3;
      --coral-soft: #E8927C;
      --coral-deep: #D4735C;
      --gold-badge: #F2C94C;
      --forest-calm: #5B8A72;
      --text-primary: #1A2024;
      --text-body: #2D3748;
      --text-secondary: #4A5568;
      --text-muted: #A0AEC0;
    }
    
    body {
      font-family: 'Nunito', sans-serif;
      color: var(--text-primary);
      background: var(--sand-light);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    button { touch-action: manipulation; }

    :focus-visible {
      outline: 3px solid #4A9B9C;
      outline-offset: 2px;
      border-radius: 4px;
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

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    @keyframes celebrate {
      0% { transform: scale(1); }
      25% { transform: scale(1.1) rotate(-3deg); }
      50% { transform: scale(1.15) rotate(3deg); }
      75% { transform: scale(1.1) rotate(-1deg); }
      100% { transform: scale(1); }
    }

    @keyframes streak {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.2); }
    }

    footer a:hover, footer div[style*="cursor: pointer"]:hover {
      opacity: 0.85 !important;
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

// ========== DECORATIVE COMPONENTS ==========
const WaveDivider = ({ color = tokens.colors.sandLight, flip = false }) => (
  <div style={{ lineHeight: 0, overflow: "hidden", transform: flip ? "rotate(180deg)" : "none" }}>
    <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
      <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill={color} />
    </svg>
  </div>
);

const FloatingDecoration = ({ top, left, right, size = 120, color = tokens.colors.coralSoft, opacity = 0.08 }) => (
  <div style={{
    position: "absolute", top, left, right, width: size, height: size,
    borderRadius: "50%", pointerEvents: "none",
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    opacity, animation: "float 6s ease-in-out infinite",
  }} />
);

const StreakBadge = ({ days = 5 }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "6px 14px", background: tokens.colors.goldLight,
    borderRadius: tokens.radii.pill, fontSize: 14, fontWeight: 700,
    color: "#B7791F",
  }}>
    <span style={{ animation: "streak 2s ease-in-out infinite" }}>🔥</span> {days} días seguidos
  </div>
);

const CircularProgress = ({ value, size = 64, strokeWidth = 5, color = tokens.colors.oceanDeep }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E0E0E0" strokeWidth={strokeWidth} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1.2s ease" }} />
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central"
        style={{ transform: "rotate(90deg)", transformOrigin: "center", fontSize: size * 0.24, fontWeight: 700, fill: color, fontFamily: "'Nunito', sans-serif" }}>
        {value}%
      </text>
    </svg>
  );
};

const SectionTitle = ({ children, subtitle, align = "left" }) => (
  <div style={{ marginBottom: 28, textAlign: align }}>
    <h2 style={{
      fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700,
      color: tokens.colors.textPrimary, letterSpacing: "-0.02em", marginBottom: subtitle ? 8 : 0,
      textWrap: "balance",
    }}>
      {children}
    </h2>
    {subtitle && (
      <p style={{ fontSize: 17, color: tokens.colors.textSecondary, lineHeight: 1.6, maxWidth: 600, margin: align === "center" ? "0 auto" : undefined }}>
        {subtitle}
      </p>
    )}
  </div>
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
  const normalizedLevel = level.toLowerCase();
  const config = {
    explorador: { bg: tokens.colors.oceanMist, color: tokens.colors.oceanDeep, label: "Explorador Digital", icon: "🧭" },
    integrador: { bg: "#FFF3E0", color: tokens.colors.coralSoft, label: "Integrador Estratégico", icon: "🔗" },
    autonomo: { bg: `${tokens.colors.forestCalm}20`, color: tokens.colors.forestCalm, label: "Docente Autónomo", icon: "⭐" },
  };
  const c = config[normalizedLevel] || config.explorador;
  const sz = size === "sm" ? { p: "6px 14px", fs: 13 } : { p: "8px 18px", fs: 15 };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: sz.p,
        background: c.bg,
        color: c.color,
        borderRadius: tokens.radii.pill,
        fontSize: sz.fs,
        fontWeight: 700,
      }}
    >
      {c.icon} {c.label}
    </span>
  );
};

const Button = ({ children, variant = "primary", onClick, style: customStyle, size = "md", ariaLabel }) => {
  const [hovered, setHovered] = useState(false);
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: size === "lg" ? "16px 36px" : size === "sm" ? "10px 20px" : "14px 28px",
    fontSize: size === "lg" ? 18 : size === "sm" ? 15 : 16,
    fontWeight: 700,
    fontFamily: "'Nunito', sans-serif",
    borderRadius: tokens.radii.md,
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
    boxShadow: hovered ? tokens.shadows.teal : tokens.shadows.sm,
    minHeight: 44,
  };
  const variants = {
    primary: {
      background: hovered ? tokens.colors.oceanLight : tokens.colors.oceanDeep,
      color: "white",
    },
    secondary: {
      background: hovered ? tokens.colors.oceanMist : "transparent",
      color: tokens.colors.oceanDeep,
      border: `2px solid ${tokens.colors.oceanDeep}`,
      boxShadow: "none",
    },
    coral: {
      background: hovered ? tokens.colors.coralDeep : tokens.colors.coralSoft,
      color: "white",
      boxShadow: hovered ? tokens.shadows.coral : tokens.shadows.sm,
    },
  };
  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...customStyle }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

const Card = ({ children, style, customStyle, delay = 0 }) => (
  <div
    style={{
      background: "white",
      borderRadius: tokens.radii.lg,
      padding: 28,
      boxShadow: tokens.shadows.md,
      animation: `fadeInUp 0.6s ease ${delay}s both`,
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      ...style,
      ...customStyle,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = tokens.shadows.lg;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = tokens.shadows.md;
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
        background: "rgba(253, 248, 243, 0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: `2px solid ${tokens.colors.oceanMist}`,
        padding: "0 24px",
        boxShadow: "0 1px 8px rgba(44,110,111,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isMobile ? 64 : 80,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
          onClick={() => { setPage("inicio"); setMenuOpen(false); }}
          role="button"
          aria-label="Ir al inicio"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { setPage("inicio"); setMenuOpen(false); } }}
        >
          <CompassIcon size={isMobile ? 34 : 42} />
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? 17 : 21,
                fontWeight: 700,
                color: tokens.colors.oceanDarker,
                lineHeight: 1.1,
                letterSpacing: "0.5px",
              }}
            >
              BRÚJULA DIGITAL
            </div>
            {!isMobile && (
              <div style={{ fontSize: 12, color: tokens.colors.textSecondary, fontWeight: 600 }}>
                Autonomía digital para docentes
              </div>
            )}
          </div>
        </div>

        {!isMobile ? (
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                aria-current={currentPage === item.id ? "page" : undefined}
                style={{
                  padding: "10px 18px",
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: currentPage === item.id ? 700 : 600,
                  color: currentPage === item.id ? "white" : tokens.colors.textBody,
                  background: currentPage === item.id ? tokens.colors.oceanDeep : "transparent",
                  border: "none",
                  borderRadius: tokens.radii.pill,
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.2px",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.id) {
                    e.currentTarget.style.background = tokens.colors.oceanMist;
                    e.currentTarget.style.color = tokens.colors.oceanDarker;
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.id) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = tokens.colors.textBody;
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 10,
              minHeight: 44,
              minWidth: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <div style={{ width: 24, height: 2.5, background: tokens.colors.oceanDarker, borderRadius: 2, transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div style={{ width: 24, height: 2.5, background: tokens.colors.oceanDarker, borderRadius: 2, transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 24, height: 2.5, background: tokens.colors.oceanDarker, borderRadius: 2, transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ background: "white", borderTop: `2px solid ${tokens.colors.oceanMist}`, animation: "slideDown 0.3s ease", paddingBottom: 8 }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setMenuOpen(false); }}
              aria-current={currentPage === item.id ? "page" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "16px 24px",
                minHeight: 48,
                fontSize: 17,
                fontWeight: currentPage === item.id ? 700 : 600,
                color: currentPage === item.id ? "white" : tokens.colors.textBody,
                background: currentPage === item.id ? tokens.colors.oceanDeep : "transparent",
                border: "none",
                borderRadius: currentPage === item.id ? tokens.radii.md : 0,
                margin: currentPage === item.id ? "4px 12px" : "0",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                textAlign: "left",
                transition: "all 0.15s ease",
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
        padding: isMobile ? "52px 20px 44px" : "88px 24px 68px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingDecoration top="8%" right="12%" size={80} color={tokens.colors.coralSoft} delay={0} />
      <FloatingDecoration top="70%" left="5%" size={50} color={tokens.colors.oceanLight} delay={1.5} />
      <FloatingDecoration top="30%" right="3%" size={35} color={tokens.colors.goldBadge} delay={2.5} />
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: isMobile ? 36 : 64, flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left", position: "relative", zIndex: 1 }}>
        <div style={{ flex: 1, animation: "fadeInUp 0.8s ease" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: tokens.colors.coralSoft + "18", padding: "8px 18px",
            borderRadius: tokens.radii.pill, marginBottom: 20,
            fontSize: 14, fontWeight: 700, color: tokens.colors.coralSoft,
            fontFamily: "'Nunito', sans-serif",
          }}>
            🧭 Para docentes que quieren crecer
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 32 : 52,
              fontWeight: 700,
              color: tokens.colors.textPrimary,
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            Encuentra tu rumbo
            <br />
            <span style={{ color: tokens.colors.oceanDarker }}>en la educación digital</span>
          </h1>
          <p
            style={{
              fontSize: isMobile ? 17 : 20,
              color: tokens.colors.textBody,
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: isMobile ? "100%" : 520,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Aprende a usar herramientas digitales con criterio pedagógico, seguridad y autonomía.
            A tu ritmo, sin presiones. <strong>Porque enseñar merece las mejores herramientas.</strong>
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
            <Button size={isMobile ? "md" : "lg"} onClick={() => setPage("diagnostico")} aria-label="Comenzar el diagnóstico de nivel digital">
              Comenzar diagnóstico <ArrowRightIcon />
            </Button>
            <Button variant="secondary" onClick={() => setPage("ruta")} aria-label="Ver mi ruta de aprendizaje">
              Ver mi ruta
            </Button>
          </div>
          <div style={{
            display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap",
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            {[
              { num: "127+", label: "docentes activos" },
              { num: "8", label: "módulos prácticos" },
              { num: "100%", label: "gratuito" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: tokens.colors.oceanDarker, fontFamily: "'Nunito', sans-serif" }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: 13, color: tokens.colors.textSecondary, fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
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
              width: isMobile ? 210 : 350,
              height: isMobile ? 210 : 350,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${tokens.colors.oceanMist}, ${tokens.colors.sandWarm})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 4s ease-in-out infinite",
              boxShadow: `0 24px 64px rgba(44,110,111,0.18)`,
            }}
          >
            <CompassIcon size={isMobile ? 115 : 190} />
          </div>
        </div>
      </div>
    </section>

    {/* ¿Cómo funciona? */}
    <section style={{ padding: isMobile ? "52px 20px" : "88px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle
        title="¿Cómo funciona?"
        subtitle="Tres pasos simples hacia tu autonomía digital"
      />
      <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: isMobile ? 22 : 36 }}>
        {[
          {
            step: "01",
            icon: "📋",
            title: "Diagnostica tu nivel",
            desc: "Identifica tu nivel de autonomía y seguridad digital docente con un test rápido y amigable. Sin juicios, solo claridad.",
          },
          {
            step: "02",
            icon: "🗺️",
            title: "Recorre tu ruta",
            desc: "Avanza por una ruta de aprendizaje adaptada a tu nivel. Cada lección es práctica y aplicable a tu aula.",
          },
          {
            step: "03",
            icon: "🏅",
            title: "Obtén tus logros",
            desc: "Gana insignias mientras fortaleces tu autonomía digital. Cada pequeño paso merece ser celebrado.",
          },
        ].map((item, i) => (
          <Card key={i} delay={i * 0.15}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: tokens.colors.coralSoft,
                marginBottom: 14,
                letterSpacing: 2,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              PASO {item.step}
            </div>
            <div style={{ fontSize: 52, marginBottom: 18 }}>{item.icon}</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 23,
                marginBottom: 14,
                color: tokens.colors.textPrimary,
              }}
            >
              {item.title}
            </h3>
            <p style={{ color: tokens.colors.textBody, lineHeight: 1.7, fontSize: 16, fontFamily: "'Nunito', sans-serif" }}>{item.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    {/* Niveles */}
    <section
      style={{
        padding: isMobile ? "52px 20px" : "88px 24px",
        background: `linear-gradient(180deg, white 0%, ${tokens.colors.oceanMist}40 100%)`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle
          title="Explora las etapas"
          subtitle="Tu camino hacia la autonomía digital, paso a paso"
        />
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 22 : 36 }}>
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
            <Card key={i} delay={i * 0.15} customStyle={{ textAlign: "center", borderTop: `4px solid ${item.color}` }}>
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                  fontSize: 40,
                }}
              >
                {item.level === "explorador" ? "🧭" : item.level === "integrador" ? "🔗" : "⭐"}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 23,
                  marginBottom: 14,
                  color: item.color,
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: tokens.colors.textBody, lineHeight: 1.7, fontSize: 16, marginBottom: 18, fontFamily: "'Nunito', sans-serif" }}>
                {item.desc}
              </p>
              <div style={{ fontSize: 14, fontWeight: 700, color: tokens.colors.textSecondary, fontFamily: "'Nunito', sans-serif" }}>
                {item.modules} módulos
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonios */}
    <section style={{ padding: isMobile ? "52px 20px" : "88px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle
        title="Voces de docentes como tú"
        subtitle="Historias reales de quienes ya encontraron su rumbo digital"
      />
      <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 18 : 28 }}>
        {[
          {
            quote:
              "Antes le tenía miedo a Zoom. Ahora doy clases en línea con confianza. El secreto fue aprender paso a paso, sin presión.",
            author: "Patricia A.",
            role: "Docente de Comunicación, 52 años",
            emoji: "👩‍🏫",
          },
          {
            quote:
              "Lo mejor de Brújula Digital es que no te hacen sentir tonta. El lenguaje es claro, los ejercicios son reales y siempre hay alguien que te ayuda.",
            author: "María del Carmen O.",
            role: "Coordinadora Académica, 48 años",
            emoji: "💛",
          },
          {
            quote:
              "Mis alumnos notaron el cambio. Ahora uso Quizizz para evaluaciones y Google Classroom para organizar todo. ¡Me siento actualizada!",
            author: "Patricia R.",
            role: "Docente de Inglés, 55 años",
            emoji: "🌟",
          },
        ].map((item, i) => (
          <Card key={i} delay={i * 0.15} customStyle={{
            background: `linear-gradient(135deg, ${tokens.colors.sandWarm}40, ${tokens.colors.sandLight})`,
            borderLeft: `4px solid ${tokens.colors.coralSoft}50`,
          }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>{item.emoji}</div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: tokens.colors.textBody,
                marginBottom: 22,
                fontStyle: "italic",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              &ldquo;{item.quote}&rdquo;
            </p>
            <div style={{ fontWeight: 700, fontSize: 15, color: tokens.colors.oceanDarker }}>{item.author}</div>
            <div style={{ fontSize: 14, color: tokens.colors.textSecondary, fontWeight: 500 }}>{item.role}</div>
          </Card>
        ))}
      </div>
    </section>
  </div>
  );
};

// ========== PAGE: DIAGNÓSTICO ==========
const PageDiagnostico = ({ setPage }) => {
  const { isMobile } = useResponsive();
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
      <div style={{ padding: isMobile ? "48px 20px" : "72px 24px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "badgeUnlock 0.8s ease both" }}>
          <div
            style={{
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${tokens.colors.oceanMist}, ${tokens.colors.sandWarm}40)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
              fontSize: 60,
              boxShadow: `0 0 0 6px ${tokens.colors.oceanDeep}15, 0 0 0 12px ${tokens.colors.oceanDeep}08`,
            }}
          >
            🧭
          </div>
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? 32 : 40,
            marginBottom: 14,
            color: tokens.colors.oceanDarker,
            animation: "fadeInUp 0.6s ease 0.3s both",
          }}
        >
          ¡Bienvenida, Carla!
        </h2>
        <p style={{ fontSize: 18, color: tokens.colors.textBody, marginBottom: 10, animation: "fadeInUp 0.6s ease 0.5s both", fontFamily: "'Nunito', sans-serif" }}>
          Tu nivel actual es:
        </p>
        <div style={{ animation: "fadeInUp 0.6s ease 0.6s both", marginBottom: 28 }}>
          <LevelBadge level="explorador" size="md" />
        </div>
        <p
          style={{
            fontSize: 17,
            color: tokens.colors.textBody,
            lineHeight: 1.8,
            marginBottom: 36,
            animation: "fadeInUp 0.6s ease 0.7s both",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Estás comenzando tu camino digital y eso es algo muy valioso.
          Tu ruta personalizada tiene <strong>3 módulos</strong> diseñados especialmente
          para que ganes confianza paso a paso. No hay prisa — cada logro cuenta.
        </p>
        <div style={{ animation: "fadeInUp 0.6s ease 0.9s both" }}>
          <Button size="lg" onClick={() => setPage("ruta")} aria-label="Ver mi ruta personalizada">
            Ver mi ruta personalizada <ArrowRightIcon />
          </Button>
        </div>
      </div>
    );
  }

  const currentQ = DIAGNOSTIC_QUESTIONS[step];
  const progress = ((step) / DIAGNOSTIC_QUESTIONS.length) * 100;

  return (
    <div style={{ padding: isMobile ? "40px 20px" : "56px 24px", maxWidth: 700, margin: "0 auto" }}>
      <div style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 15, color: tokens.colors.textBody, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
          <span>Pregunta {step + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} height={8} />
      </div>

      <div key={step} style={{ animation: "fadeInUp 0.5s ease" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? 24 : 30,
            marginBottom: 36,
            lineHeight: 1.4,
            color: tokens.colors.oceanDarker,
          }}
        >
          {currentQ.question}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }} role="radiogroup" aria-label="Opciones de respuesta">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(currentQ.id, i)}
              role="radio"
              aria-checked={selectedOption === i}
              style={{
                padding: "20px 24px",
                minHeight: 52,
                background: selectedOption === i ? tokens.colors.oceanDeep : "white",
                color: selectedOption === i ? "white" : tokens.colors.textBody,
                border: `2px solid ${selectedOption === i ? tokens.colors.oceanDeep : "#D4D8DD"}`,
                borderRadius: tokens.radii.md,
                fontSize: 16,
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease",
                transform: selectedOption === i ? "scale(0.98)" : "scale(1)",
                boxShadow: selectedOption === i ? tokens.shadows.teal : tokens.shadows.sm,
              }}
              onMouseEnter={(e) => {
                if (selectedOption === null) {
                  e.currentTarget.style.borderColor = tokens.colors.oceanLight;
                  e.currentTarget.style.background = tokens.colors.oceanMist;
                  e.currentTarget.style.boxShadow = tokens.shadows.md;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedOption === null) {
                  e.currentTarget.style.borderColor = "#D4D8DD";
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.boxShadow = tokens.shadows.sm;
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
          marginTop: 36,
          textAlign: "center",
          fontSize: 15,
          color: tokens.colors.textSecondary,
          fontFamily: "'Nunito', sans-serif",
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
  const completedCount = rutaModules.filter(m => m.progress === 100).length;

  return (
    <div style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header with circular progress */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        flexDirection: isMobile ? "column" : "row",
        gap: 20,
        marginBottom: 40,
        animation: "fadeInUp 0.6s ease",
      }}>
        <div>
          <SectionTitle
            title="Tu Ruta de Aprendizaje"
            subtitle="Cada paso te acerca a la autonomía digital"
          />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
            <LevelBadge level="Explorador" size="md" />
            <StreakBadge days={5} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <CircularProgress value={totalProgress} size={isMobile ? 72 : 88} label="general" />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: tokens.colors.oceanDeep, fontFamily: "'Nunito', sans-serif" }}>
              {completedCount}/{rutaModules.length}
            </div>
            <div style={{ fontSize: 13, color: tokens.colors.textSecondary, fontWeight: 600 }}>
              módulos
            </div>
          </div>
        </div>
      </div>

      {/* Celebration banner if any module completed */}
      {completedCount > 0 && (
        <div
          style={{
            background: `linear-gradient(135deg, ${tokens.colors.forestCalm}15, ${tokens.colors.goldBadge}15)`,
            borderRadius: tokens.radii.lg,
            padding: isMobile ? "16px 18px" : "18px 24px",
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 14,
            border: `1px solid ${tokens.colors.forestCalm}30`,
            animation: "fadeInUp 0.6s ease 0.2s both",
          }}
        >
          <span style={{ fontSize: 28 }}>🎉</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: tokens.colors.forestCalm, fontFamily: "'Nunito', sans-serif" }}>
              ¡Felicidades! Llevas {completedCount} módulo{completedCount > 1 ? "s" : ""} completado{completedCount > 1 ? "s" : ""}
            </div>
            <div style={{ fontSize: 14, color: tokens.colors.textSecondary, marginTop: 2 }}>
              Sigue así, cada lección cuenta ✨
            </div>
          </div>
        </div>
      )}

      {/* Module timeline */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {rutaModules.map((mod, i) => (
          <div key={mod.id} style={{ display: "flex", gap: isMobile ? 16 : 24, animation: `fadeInUp 0.6s ease ${i * 0.12 + 0.3}s both` }}>
            {/* Numbered circle + connector */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 52, flexShrink: 0 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: mod.progress === 100 ? tokens.colors.forestCalm : mod.unlocked ? tokens.colors.oceanDeep : "#DDD",
                color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 17, flexShrink: 0,
                boxShadow: mod.progress === 100
                  ? `0 3px 12px ${tokens.colors.forestCalm}40`
                  : mod.unlocked ? tokens.shadows.teal : "none",
                transition: "all 0.3s ease",
              }}>
                {mod.progress === 100 ? <CheckIcon /> : mod.id}
              </div>
              {i < rutaModules.length - 1 && (
                <div style={{
                  width: 3, flex: 1, minHeight: 40,
                  background: mod.progress === 100
                    ? `linear-gradient(180deg, ${tokens.colors.forestCalm}, ${tokens.colors.forestCalm}30)`
                    : mod.unlocked ? tokens.colors.oceanDeep + "30" : "#E0E0E0",
                  borderRadius: 2,
                }} />
              )}
            </div>

            {/* Module card */}
            <Card delay={i * 0.12 + 0.3} customStyle={{
              flex: 1,
              background: mod.unlocked ? "white" : "#FAFAFA",
              marginBottom: 20,
              opacity: mod.unlocked ? 1 : 0.6,
              borderLeft: mod.unlocked && mod.progress > 0 && mod.progress < 100
                ? `4px solid ${tokens.colors.coralSoft}`
                : mod.progress === 100
                  ? `4px solid ${tokens.colors.forestCalm}`
                  : "4px solid transparent",
              padding: isMobile ? "20px 18px" : "24px 28px",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 12 : 0, marginBottom: 8,
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 24 }}>{mod.icon}</span>
                    <h3 style={{
                      fontSize: isMobile ? 17 : 19, fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                      color: mod.unlocked ? tokens.colors.textPrimary : tokens.colors.textMuted,
                    }}>
                      Módulo {mod.id}: {mod.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 15, color: tokens.colors.textSecondary, lineHeight: 1.5, fontFamily: "'Nunito', sans-serif" }}>{mod.desc}</p>
                </div>
                {mod.unlocked && mod.progress < 100 && mod.progress > 0 && (
                  <Button size="sm" onClick={() => setPage("explorador")} aria-label={`Continuar módulo ${mod.title}`}>
                    Continuar →
                  </Button>
                )}
                {mod.progress === 100 && (
                  <span style={{
                    fontSize: 14, fontWeight: 700, color: tokens.colors.forestCalm,
                    whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6,
                    background: `${tokens.colors.forestCalm}12`, padding: "6px 14px",
                    borderRadius: tokens.radii.pill,
                  }}>
                    ✓ Completado
                  </span>
                )}
              </div>
              {mod.unlocked && (
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: tokens.colors.textSecondary, marginBottom: 6, fontWeight: 600 }}>
                    <span>{mod.completed}/{mod.lessons} lecciones</span>
                    <span style={{ color: mod.progress === 100 ? tokens.colors.forestCalm : tokens.colors.oceanDeep }}>{mod.progress}%</span>
                  </div>
                  <ProgressBar value={mod.progress} height={8} />
                </div>
              )}
              {!mod.unlocked && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10, fontSize: 14, color: tokens.colors.textMuted, fontWeight: 500 }}>
                  <LockIcon /> Completa el módulo anterior para desbloquear
                </div>
              )}
            </Card>
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
    { id: "foro", label: "💬 Foro de Preguntas", emoji: "💬" },
    { id: "experiencias", label: "💛 Experiencias Reales", emoji: "💛" },
    { id: "recursos", label: "📎 Recursos Compartidos", emoji: "📎" },
  ];

  const experiencias = [
    { id: 1, author: "Ana García", avatar: "AG", color: tokens.colors.coralSoft, role: "Docente de Matemáticas · Arequipa", text: "Gracias a Brújula Digital aprendí a usar Canva para mis materiales. Ahora mis estudiantes prestan más atención y mis colegas me piden ayuda. ¡Es un cambio increíble!", years: "28 años enseñando" },
    { id: 2, author: "Pedro Sánchez", avatar: "PS", color: tokens.colors.forestCalm, role: "Docente de Ciencias · Lima", text: "Al principio tenía mucho miedo de usar tecnología en clase. El Módulo de videoconferencias me ayudó paso a paso. Ahora mis clases en línea fluyen con naturalidad.", years: "22 años enseñando" },
  ];

  return (
    <div>
      {/* Hero banner */}
      <section style={{
        background: `linear-gradient(135deg, ${tokens.colors.sandWarm}50, ${tokens.colors.oceanMist}60)`,
        padding: isMobile ? "36px 20px" : "48px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <FloatingDecoration top="10%" left="5%" size={60} color={tokens.colors.coralSoft} delay={0} />
        <FloatingDecoration top="20%" right="8%" size={40} color={tokens.colors.goldBadge} delay={1} />
        <div style={{ maxWidth: 1100, margin: "0 auto", animation: "fadeInUp 0.6s ease", position: "relative", zIndex: 1 }}>
          <SectionTitle
            title="Comunidad Docente"
            subtitle="No estás solo(a) en este camino. Aquí encontrarás colegas que comparten tus mismas preguntas y entusiasmo."
          />
          <div style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, fontSize: 15,
              color: tokens.colors.oceanDarker, fontWeight: 600, fontFamily: "'Nunito', sans-serif",
            }}>
              <span style={{ fontSize: 20 }}>👥</span> 127 docentes activos
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, fontSize: 15,
              color: tokens.colors.oceanDarker, fontWeight: 600, fontFamily: "'Nunito', sans-serif",
            }}>
              <span style={{ fontSize: 20 }}>💬</span> 340+ conversaciones
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: isMobile ? "32px 20px" : "48px 24px", maxWidth: 1100, margin: "0 auto" }}>
        {/* Pill Tabs */}
        <div style={{
          display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap",
          animation: "fadeInUp 0.6s ease 0.1s both",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              style={{
                padding: "12px 24px", borderRadius: tokens.radii.pill,
                fontSize: 15, fontWeight: 700, minHeight: 48,
                fontFamily: "'Nunito', sans-serif", cursor: "pointer", transition: "all 0.2s ease",
                background: activeTab === tab.id ? tokens.colors.oceanDeep : "white",
                color: activeTab === tab.id ? "white" : tokens.colors.textBody,
                border: `2px solid ${activeTab === tab.id ? tokens.colors.oceanDeep : "#E0E0E0"}`,
                boxShadow: activeTab === tab.id ? tokens.shadows.teal : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 360px", gap: 32 }}>
          {/* Left — Forum */}
          <div>
            {/* Compose */}
            <Card customStyle={{ marginBottom: 24 }} delay={0.2}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: tokens.colors.oceanDarker, fontFamily: "'Nunito', sans-serif" }}>
                📝 Comparte tu pregunta
              </div>
              <div style={{
                width: "100%", padding: "16px 20px", border: `2px solid ${tokens.colors.oceanMist}`, borderRadius: tokens.radii.md,
                fontSize: 15, color: tokens.colors.textMuted, background: tokens.colors.sandLight, marginBottom: 14,
                fontFamily: "'Nunito', sans-serif", lineHeight: 1.5,
              }}>
                ¿Tienes alguna duda? Escribe aquí con confianza, todos pasamos por lo mismo...
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button size="sm" aria-label="Publicar pregunta">Publicar →</Button>
              </div>
            </Card>

            {/* Posts */}
            {COMMUNITY_POSTS.map((post, i) => (
              <Card key={post.id} customStyle={{ marginBottom: 20 }} delay={0.3 + i * 0.1}>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", background: post.color,
                    color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 14, flexShrink: 0,
                  }}>
                    {post.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: tokens.colors.oceanDarker }}>{post.author}</span>
                      <span style={{ fontSize: 13, color: tokens.colors.textMuted }}>{post.time}</span>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: tokens.colors.textBody, marginBottom: 14, fontFamily: "'Nunito', sans-serif" }}>
                      {post.text}
                    </p>
                    <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
                      <button
                        onClick={() => setLikedPosts((p) => ({ ...p, [post.id]: !p[post.id] }))}
                        aria-label={likedPosts[post.id] ? "Quitar me gusta" : "Dar me gusta"}
                        style={{
                          display: "flex", alignItems: "center", gap: 6, background: "none", border: "none",
                          cursor: "pointer", fontSize: 14, fontWeight: 600,
                          color: likedPosts[post.id] ? tokens.colors.coralSoft : tokens.colors.textSecondary,
                          fontFamily: "'Nunito', sans-serif", minHeight: 36, padding: "4px 8px",
                        }}
                      >
                        <HeartIcon filled={likedPosts[post.id]} /> {post.likes + (likedPosts[post.id] ? 1 : 0)}
                      </button>
                      <span style={{ fontSize: 14, color: tokens.colors.textSecondary, fontWeight: 500 }}>💬 {post.replies} respuestas</span>
                      <button
                        aria-label={`Responder a ${post.author}`}
                        style={{
                          marginLeft: "auto", padding: "8px 18px", borderRadius: tokens.radii.pill,
                          fontSize: 13, fontWeight: 700, minHeight: 36,
                          background: tokens.colors.oceanMist, color: tokens.colors.oceanDarker,
                          border: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                          transition: "all 0.2s ease",
                        }}
                      >
                        Responder
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right sidebar — Experiencias Reales */}
          <div style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
            }}>
              <span style={{ fontSize: 24 }}>💛</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: tokens.colors.oceanDarker }}>
                Experiencias Reales
              </h3>
            </div>
            {experiencias.map((exp, i) => (
              <Card key={exp.id} customStyle={{
                marginBottom: 20,
                background: `linear-gradient(135deg, ${tokens.colors.sandWarm}20, ${tokens.colors.sandLight})`,
                borderLeft: `4px solid ${exp.color}`,
              }} delay={0.4 + i * 0.15}>
                <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", background: exp.color,
                    color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 14, flexShrink: 0,
                  }}>
                    {exp.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: tokens.colors.textPrimary }}>{exp.author}</div>
                    <div style={{ fontSize: 13, color: tokens.colors.textSecondary, fontWeight: 500 }}>{exp.role}</div>
                    <div style={{ fontSize: 12, color: tokens.colors.textMuted, fontStyle: "italic" }}>{exp.years}</div>
                  </div>
                </div>
                <p style={{
                  fontSize: 14, lineHeight: 1.7, color: tokens.colors.textBody,
                  fontStyle: "italic", fontFamily: "'Nunito', sans-serif",
                  borderLeft: `3px solid ${exp.color}30`, paddingLeft: 14,
                }}>
                  &ldquo;{exp.text}&rdquo;
                </p>
              </Card>
            ))}

            {/* Quick join CTA */}
            <div style={{
              background: `linear-gradient(135deg, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
              borderRadius: tokens.radii.lg, padding: "24px 20px", textAlign: "center", color: "white",
              animation: "fadeInUp 0.6s ease 0.7s both",
            }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🤝</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>
                ¿Tienes una historia para compartir?
              </div>
              <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 16, lineHeight: 1.5 }}>
                Tu experiencia puede inspirar a otro docente
              </div>
              <Button variant="coral" size="sm" aria-label="Compartir mi experiencia">
                Compartir mi historia
              </Button>
            </div>
          </div>
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
    { id: "todos", label: "📚 Todos los Temas" },
    { id: "plantillas", label: "📋 Plantillas y Recursos" },
    { id: "compartir", label: "🤝 Compartir e Intercambiar" },
  ];

  return (
    <div>
      {/* Hero Header */}
      <section style={{
        background: `linear-gradient(135deg, ${tokens.colors.oceanDarker}, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
        padding: isMobile ? "40px 20px" : "52px 24px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <FloatingDecoration top="15%" right="10%" size={80} color="rgba(255,255,255,0.08)" delay={0} />
        <FloatingDecoration top="60%" left="5%" size={50} color="rgba(255,255,255,0.06)" delay={1.5} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: 24 }}>
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 28 : 36, marginBottom: 10, fontWeight: 700 }}>
                📚 Biblioteca Digital
              </h1>
              <p style={{ fontSize: 16, opacity: 0.9, lineHeight: 1.6, maxWidth: 500, fontFamily: "'Nunito', sans-serif" }}>
                Recursos clasificados por Área Académica. Comparte, descarga y adapta plantillas creadas por docentes como tú.
              </p>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "rgba(255,255,255,0.15)", borderRadius: tokens.radii.lg, padding: "14px 20px",
              width: isMobile ? "100%" : 300,
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
            }}>
              <span style={{ fontSize: 18 }}>🔍</span>
              <input
                type="text"
                placeholder="Buscar recurso, plantilla o tema..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar recursos en la biblioteca"
                style={{
                  background: "transparent", border: "none", outline: "none", color: "white",
                  fontSize: 15, fontFamily: "'Nunito', sans-serif", width: "100%",
                  fontWeight: 500,
                }}
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                aria-pressed={activeFilter === f.id}
                style={{
                  padding: "10px 22px", borderRadius: tokens.radii.pill,
                  fontSize: 14, fontWeight: 700, minHeight: 44,
                  fontFamily: "'Nunito', sans-serif", cursor: "pointer", transition: "all 0.2s ease",
                  background: activeFilter === f.id ? "white" : "rgba(255,255,255,0.12)",
                  color: activeFilter === f.id ? tokens.colors.oceanDarker : "rgba(255,255,255,0.9)",
                  border: `1px solid ${activeFilter === f.id ? "white" : "rgba(255,255,255,0.2)"}`,
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Areas */}
      <section style={{ padding: isMobile ? "36px 20px" : "52px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
          <SectionTitle
            title="Áreas Académicas"
            subtitle="Explora recursos organizados por tu área de enseñanza"
          />
          <Button size="sm" variant="coral" aria-label="Subir un recurso a la biblioteca">+ Subir recurso</Button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
          gap: isMobile ? 14 : 18,
          marginBottom: isMobile ? 44 : 60,
        }}>
          {LIBRARY_RESOURCES.map((res, i) => (
            <Card key={res.id} delay={i * 0.08} customStyle={{
              padding: 0, overflow: "hidden", cursor: "pointer", textAlign: "center",
              border: "1px solid transparent",
            }}>
              <div style={{ height: 6, background: res.color, borderRadius: `${tokens.radii.lg}px ${tokens.radii.lg}px 0 0` }} />
              <div style={{ padding: "20px 14px" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{res.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: tokens.colors.textPrimary, fontFamily: "'Nunito', sans-serif" }}>{res.area}</div>
                <div style={{ fontSize: 13, color: tokens.colors.textSecondary, fontWeight: 500 }}>{res.count} recursos</div>
                <div style={{ fontSize: 12, color: tokens.colors.textMuted, marginTop: 2 }}>{Math.floor(res.count / 3)} plantillas</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Resource Exchange */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", marginBottom: 24, gap: 12 }}>
            <SectionTitle
              title="Intercambio de Recursos"
              subtitle="Recursos compartidos por docentes de la comunidad"
            />
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 14, color: tokens.colors.oceanDeep, fontWeight: 600,
              background: tokens.colors.oceanMist, padding: "8px 16px",
              borderRadius: tokens.radii.pill, fontFamily: "'Nunito', sans-serif",
            }}>
              📈 58 recursos · 45 docentes
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 18 }}>
            {SHARED_RESOURCES.map((res, i) => (
              <Card key={res.id} delay={0.4 + i * 0.1} customStyle={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: tokens.radii.md,
                  background: tokens.colors.sandWarm, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 26, flexShrink: 0,
                }}>
                  {res.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: tokens.colors.textPrimary }}>{res.title}</div>
                  <div style={{ fontSize: 13, color: tokens.colors.textSecondary, fontWeight: 500 }}>
                    Por {res.author} · {res.type} · ⬇ {res.downloads}
                  </div>
                </div>
                <Button size="sm" variant="secondary" aria-label={`Descargar ${res.title}`}>
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
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "calc(100vh - 80px)" }}>
      {/* Sidebar */}
      <aside style={{
        width: isMobile ? "100%" : 300, flexShrink: 0,
        background: `linear-gradient(180deg, ${tokens.colors.oceanMist}, ${tokens.colors.sandLight})`,
        padding: "28px 22px",
        borderRight: isMobile ? "none" : `2px solid ${tokens.colors.oceanMist}`,
        borderBottom: isMobile ? `2px solid ${tokens.colors.oceanMist}` : "none",
      }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, color: tokens.colors.textSecondary, marginBottom: 6, fontWeight: 600, fontFamily: "'Nunito', sans-serif", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            Módulo 1
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: tokens.colors.oceanDarker, marginBottom: 8, lineHeight: 1.3 }}>
            Herramientas Digitales Básicas
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <CircularProgress value={progressPct} size={52} label="" />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: tokens.colors.oceanDarker }}>{progressPct}% completado</div>
              <div style={{ fontSize: 13, color: tokens.colors.textSecondary }}>{completedCount}/{EXPLORER_LESSONS.length} lecciones</div>
            </div>
          </div>
        </div>

        {/* Lesson List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {EXPLORER_LESSONS.map((lesson, i) => (
            <div
              key={lesson.id}
              onClick={() => lesson.completed || lesson.active ? setCurrentLesson(i) : null}
              role={lesson.completed || lesson.active ? "button" : undefined}
              tabIndex={lesson.completed || lesson.active ? 0 : undefined}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && (lesson.completed || lesson.active)) setCurrentLesson(i);
              }}
              aria-label={`Lección ${lesson.id}: ${lesson.title}${lesson.completed ? " (completada)" : lesson.active ? " (en progreso)" : " (bloqueada)"}`}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                borderRadius: tokens.radii.md, cursor: lesson.completed || lesson.active ? "pointer" : "default",
                background: lesson.active ? "white" : "transparent",
                border: lesson.active ? `2px solid ${tokens.colors.coralSoft}` : "2px solid transparent",
                opacity: !lesson.completed && !lesson.active ? 0.45 : 1,
                transition: "all 0.2s ease",
                boxShadow: lesson.active ? tokens.shadows.sm : "none",
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12,
                background: lesson.completed ? tokens.colors.forestCalm : lesson.active ? tokens.colors.oceanDeep : "#D0D0D0",
                color: "white", fontWeight: 800,
                boxShadow: lesson.completed ? `0 2px 6px ${tokens.colors.forestCalm}40` : "none",
              }}>
                {lesson.completed ? "✓" : lesson.active ? i + 1 : <LockIcon />}
              </div>
              <div>
                <div style={{
                  fontSize: 14, fontWeight: lesson.active ? 700 : 600,
                  color: lesson.active ? tokens.colors.textPrimary : tokens.colors.textSecondary,
                  fontFamily: "'Nunito', sans-serif",
                }}>
                  {lesson.id}. {lesson.title}
                </div>
                <div style={{ fontSize: 12, color: tokens.colors.textMuted, fontWeight: 500 }}>
                  {lesson.type} · {lesson.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content — PDF Viewer Style */}
      <main style={{ flex: 1, padding: isMobile ? "28px 20px" : "36px 48px", background: "white" }}>
        {/* Breadcrumb */}
        <nav aria-label="Migas de pan" style={{ fontSize: 14, color: tokens.colors.textMuted, marginBottom: 24, fontFamily: "'Nunito', sans-serif", fontWeight: 500 }}>
          <span style={{ cursor: "pointer", color: tokens.colors.oceanDeep, fontWeight: 600 }} onClick={() => setPage("ruta")}>
            Mi Ruta
          </span>
          <span style={{ margin: "0 10px", color: tokens.colors.textMuted }}>›</span>
          <span style={{ cursor: "pointer", color: tokens.colors.oceanDeep, fontWeight: 600 }} onClick={() => setPage("ruta")}>
            Módulo 1
          </span>
          <span style={{ margin: "0 10px", color: tokens.colors.textMuted }}>›</span>
          <span>Lección 2</span>
        </nav>

        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 24 : 30,
          color: tokens.colors.textPrimary, marginBottom: 10, lineHeight: 1.2,
        }}>
          Guía: Cómo usar el navegador
        </h2>
        <div style={{
          fontSize: 14, color: tokens.colors.textSecondary, marginBottom: 32,
          display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
          fontFamily: "'Nunito', sans-serif", fontWeight: 500,
        }}>
          <span>📄 guia-navegador.pdf</span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: tokens.colors.textMuted }} />
          <span>Página 1 de 5</span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: tokens.colors.textMuted }} />
          <span>⏱ 15 min lectura</span>
        </div>

        {/* PDF-like content */}
        <div style={{
          background: tokens.colors.sandLight, borderRadius: tokens.radii.lg,
          padding: isMobile ? "28px 22px" : "40px 44px",
          border: `1px solid ${tokens.colors.oceanMist}`, marginBottom: 28, lineHeight: 1.9,
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 22,
            color: tokens.colors.oceanDarker, marginBottom: 18,
          }}>
            Capítulo 1: ¿Qué es un navegador web?
          </h3>
          <p style={{ fontSize: 16, color: tokens.colors.textBody, marginBottom: 18, fontFamily: "'Nunito', sans-serif" }}>
            Un navegador web es una aplicación que te permite acceder a páginas de internet.
            Los más comunes son <strong>Google Chrome</strong>, <strong>Mozilla Firefox</strong> y <strong>Microsoft Edge</strong>.
          </p>
          <p style={{ fontWeight: 700, fontSize: 16, color: tokens.colors.textPrimary, marginBottom: 10, fontFamily: "'Nunito', sans-serif" }}>
            Pasos para abrir el navegador:
          </p>
          <ol style={{ paddingLeft: 24, fontSize: 16, color: tokens.colors.textBody, fontFamily: "'Nunito', sans-serif" }}>
            <li style={{ marginBottom: 8, paddingLeft: 4 }}>Busca el ícono del navegador en tu escritorio</li>
            <li style={{ marginBottom: 8, paddingLeft: 4 }}>Haz doble clic sobre él</li>
            <li style={{ paddingLeft: 4 }}>Espera a que se abra la ventana principal</li>
          </ol>
        </div>

        {/* Tip Box — improved */}
        <div style={{
          background: `linear-gradient(135deg, ${tokens.colors.coralSoft}12, ${tokens.colors.sandWarm}25)`,
          border: `2px solid ${tokens.colors.coralSoft}30`,
          borderRadius: tokens.radii.lg, padding: "18px 22px", marginBottom: 36,
          display: "flex", gap: 14, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>💡</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: tokens.colors.coralSoft, marginBottom: 4, fontFamily: "'Nunito', sans-serif" }}>
              Consejo práctico
            </div>
            <p style={{ fontSize: 15, color: tokens.colors.textBody, lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: 0 }}>
              Si no encuentras el ícono, puedes buscarlo en el menú Inicio escribiendo el nombre del navegador. ¡No tengas miedo de explorar!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, borderTop: `1px solid ${tokens.colors.oceanMist}`,
        }}>
          <button
            aria-label="Ir a la lección anterior"
            style={{
              display: "flex", alignItems: "center", gap: 8, background: "none", border: "none",
              cursor: "pointer", fontSize: 15, color: tokens.colors.textSecondary,
              fontFamily: "'Nunito', sans-serif", fontWeight: 600, minHeight: 44, padding: "8px 12px",
              borderRadius: tokens.radii.md, transition: "all 0.2s ease",
            }}
          >
            ← Lección anterior
          </button>
          <span style={{ fontSize: 14, color: tokens.colors.textMuted, fontWeight: 600 }}>
            2 de {EXPLORER_LESSONS.length}
          </span>
          <Button size="sm" variant="coral" onClick={() => setPage("ruta")} aria-label="Completar lección y continuar">
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
    <SectionTitle
      title="Tus logros"
      subtitle="Cada insignia representa un paso en tu camino. ¡Celebra tu progreso!"
    />

    {/* Stats */}
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 22, marginBottom: isMobile ? 36 : 52, marginTop: 36 }}>
      {[
        { label: "Insignias obtenidas", value: "3 / 8", color: tokens.colors.goldBadge, emoji: "🏅" },
        { label: "Nivel actual", value: "Explorador", color: tokens.colors.oceanDeep, emoji: "🧭" },
        { label: "Días activa", value: "18", color: tokens.colors.coralSoft, emoji: "🔥" },
      ].map((stat, i) => (
        <Card key={i} delay={0.2 + i * 0.1} customStyle={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.emoji}</div>
          <div style={{ fontSize: 34, fontWeight: 800, color: stat.color, marginBottom: 6, fontFamily: "'Nunito', sans-serif" }}>{stat.value}</div>
          <div style={{ fontSize: 15, color: tokens.colors.textBody, fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}>{stat.label}</div>
        </Card>
      ))}
    </div>

    {/* Badges Grid */}
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 14 : 22 }}>
      {BADGES.map((badge, i) => (
        <Card
          key={badge.id}
          delay={0.3 + i * 0.08}
          customStyle={{
            textAlign: "center",
            opacity: badge.earned ? 1 : 0.5,
            background: badge.earned ? `linear-gradient(135deg, white, ${tokens.colors.sandWarm}30)` : "#F5F5F5",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: badge.earned
                ? `linear-gradient(135deg, ${tokens.colors.goldBadge}30, ${tokens.colors.sandWarm})`
                : "#ECECEC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px",
              fontSize: 36,
              boxShadow: badge.earned ? `0 0 0 4px ${tokens.colors.goldBadge}40, 0 4px 12px ${tokens.colors.goldBadge}20` : "none",
              animation: badge.earned ? "scaleIn 0.5s ease both" : "none",
              animationDelay: `${0.3 + i * 0.08}s`,
            }}
          >
            {badge.earned ? badge.icon : "🔒"}
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: tokens.colors.textBody, fontFamily: "'Nunito', sans-serif" }}>{badge.name}</div>
          <div style={{ fontSize: 13, color: badge.earned ? tokens.colors.forestCalm : tokens.colors.textMuted, fontWeight: 600 }}>
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
    <SectionTitle
      title="Mi cuenta"
      subtitle="Tu espacio personal en Brújula Digital"
    />

    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr", gap: isMobile ? 22 : 32, marginTop: 36 }}>
      {/* Profile Card */}
      <Card customStyle={{ textAlign: "center" }} delay={0.1}>
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 700,
            margin: "0 auto 18px",
            fontFamily: "'Playfair Display', serif",
            boxShadow: `0 0 0 4px ${tokens.colors.oceanDeep}15, ${tokens.shadows.md}`,
          }}
        >
          CZ
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, color: tokens.colors.oceanDarker, fontFamily: "'Playfair Display', serif" }}>Carla Zuñiga</h2>
        <p style={{ fontSize: 15, color: tokens.colors.textBody, marginBottom: 18, fontFamily: "'Nunito', sans-serif" }}>Docente de Inglés</p>
        <LevelBadge level="explorador" size="sm" />
        <div style={{ marginTop: 22, paddingTop: 22, borderTop: `1px solid ${tokens.colors.oceanMist}` }}>
          {[
            { label: "Experiencia", value: "28 años" },
            { label: "Edad", value: "50 años" },
            { label: "Miembro desde", value: "Feb 2026" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 15, marginBottom: i < 2 ? 10 : 0, fontFamily: "'Nunito', sans-serif" }}>
              <span style={{ color: tokens.colors.textSecondary }}>{item.label}</span>
              <span style={{ fontWeight: 700, color: tokens.colors.textBody }}>{item.value}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Info Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Card delay={0.2}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              marginBottom: 18,
              color: tokens.colors.oceanDarker,
            }}
          >
            Progreso en la ruta
          </h3>
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>
              <span style={{ color: tokens.colors.textBody, fontWeight: 600 }}>Nivel Explorador</span>
              <span style={{ fontWeight: 800, color: tokens.colors.oceanDeep }}>68%</span>
            </div>
            <ProgressBar value={68} height={10} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 14, marginTop: 22 }}>
            {[
              { label: "Módulos completados", value: "1 / 8", emoji: "📚" },
              { label: "Lecciones terminadas", value: "9 / 37", emoji: "✅" },
              { label: "Horas de práctica", value: "12h", emoji: "⏱️" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: 14,
                  background: `linear-gradient(135deg, ${tokens.colors.sandLight}, ${tokens.colors.oceanMist}40)`,
                  borderRadius: tokens.radii.md,
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 4 }}>{stat.emoji}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: tokens.colors.oceanDeep, fontFamily: "'Nunito', sans-serif" }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: tokens.colors.textSecondary, marginTop: 4, fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card delay={0.3}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              marginBottom: 18,
              color: tokens.colors.oceanDarker,
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
                gap: 14,
                padding: "14px 0",
                borderBottom: i < 3 ? `1px solid ${tokens.colors.oceanMist}` : "none",
              }}
            >
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: tokens.colors.textBody, fontFamily: "'Nunito', sans-serif" }}>{item.action}</div>
                <div style={{ fontSize: 13, color: tokens.colors.textSecondary, fontWeight: 500, marginTop: 2 }}>{item.time}</div>
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
        aria-label={open ? "Cerrar ayuda" : "Abrir ayuda"}
        aria-expanded={open}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${tokens.colors.coralSoft}, #E07A62)`,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 4px 24px rgba(232,146,124,0.45)`,
          zIndex: 200,
          transition: "all 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0)",
        }}
      >
        <HelpIcon />
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Panel de ayuda"
          style={{
            position: "fixed",
            bottom: 96,
            right: 24,
            width: 320,
            background: "white",
            borderRadius: tokens.radii.lg,
            padding: 28,
            boxShadow: tokens.shadows.lg,
            zIndex: 200,
            animation: "slideDown 0.3s ease",
          }}
        >
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 14, color: tokens.colors.oceanDarker }}>
            ¿Necesitas ayuda?
          </h3>
          <p style={{ fontSize: 15, color: tokens.colors.textBody, lineHeight: 1.7, marginBottom: 20, fontFamily: "'Nunito', sans-serif" }}>
            No te preocupes, estamos aquí para acompañarte. Elige cómo prefieres recibir ayuda:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Button size="sm" aria-label="Iniciar chat con un mentor" style={{ width: "100%", justifyContent: "center" }}>
              💬 Chat con un mentor
            </Button>
            <Button size="sm" variant="secondary" aria-label="Ver guías rápidas" style={{ width: "100%", justifyContent: "center" }}>
              📋 Ver guías rápidas
            </Button>
            <Button size="sm" variant="secondary" aria-label="Solicitar una llamada de ayuda" style={{ width: "100%", justifyContent: "center" }}>
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
  <footer style={{ marginTop: isMobile ? 40 : 64 }}>
    {/* Wave divider */}
    <WaveDivider color={tokens.colors.oceanDeep} />

    {/* Motivational banner */}
    <div
      style={{
        background: tokens.colors.oceanDeep,
        padding: isMobile ? "28px 20px" : "32px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 18 : 22,
          color: "white",
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        Impulsando la transformación digital docente
      </p>
      <p
        style={{
          fontSize: isMobile ? 14 : 15,
          color: tokens.colors.oceanMist,
          margin: "8px 0 0",
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 500,
        }}
      >
        Formación práctica diseñada por y para educadores
      </p>
    </div>

    {/* Main footer content */}
    <div
      style={{
        background: `linear-gradient(180deg, ${tokens.colors.oceanDeep} 0%, ${tokens.colors.oceanDarker} 100%)`,
        color: "white",
        padding: isMobile ? "40px 20px 32px" : "56px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "2.5fr 1fr 1fr 1fr",
          gap: isMobile ? 32 : 48,
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <CompassIcon size={36} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>
              BRÚJULA DIGITAL
            </span>
          </div>
          <p style={{ fontSize: 15, color: "rgba(232,244,244,0.8)", lineHeight: 1.7, maxWidth: 300, fontFamily: "'Nunito', sans-serif" }}>
            Tu compañera de viaje hacia la autonomía digital. Aprendizaje práctico, accesible y a tu ritmo.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {["📧", "💬", "📱"].map((emoji, i) => (
              <div
                key={i}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: tokens.radii.md,
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                className="footer-link"
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Links columns */}
        {[
          { title: "Plataforma", items: ["Inicio", "Diagnóstico", "Mi Ruta", "Logros", "Biblioteca"] },
          { title: "Comunidad", items: ["Foro docente", "Mentores", "Eventos", "Blog", "Historias de éxito"] },
          { title: "Soporte", items: ["Centro de ayuda", "Contacto", "Guías rápidas", "FAQ", "Accesibilidad"] },
        ].map((col, i) => (
          <div key={i}>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: tokens.colors.sandWarm,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {col.title}
            </h4>
            {col.items.map((item, j) => (
              <div
                key={j}
                className="footer-link"
                style={{
                  fontSize: 14,
                  color: "rgba(232,244,244,0.7)",
                  marginBottom: 12,
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 500,
                  transition: "color 0.2s ease, padding-left 0.2s ease",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(232,244,244,0.15)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 13, color: "rgba(232,244,244,0.5)", fontFamily: "'Nunito', sans-serif" }}>
          © 2026 Brújula Digital · Chispas Estratégicas
        </div>
        <div style={{ fontSize: 13, color: "rgba(232,244,244,0.5)", fontFamily: "'Nunito', sans-serif" }}>
          Aprender no tiene edad 🌟
        </div>
      </div>
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
