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
  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "diagnostico", label: "Diagnóstico" },
    { id: "ruta", label: "Mi Ruta" },
    { id: "comunidad", label: "Comunidad" },
    { id: "logros", label: "Logros" },
    { id: "perfil", label: "Mi Cuenta" },
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
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
          onClick={() => setPage("inicio")}
        >
          <CompassIcon size={40} />
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 700,
                color: tokens.colors.oceanDeep,
                lineHeight: 1.1,
              }}
            >
              BRÚJULA DIGITAL
            </div>
            <div style={{ fontSize: 11, color: tokens.colors.textSecondary, fontWeight: 500 }}>
              Autonomía digital para docentes
            </div>
          </div>
        </div>

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
      </div>
    </nav>
  );
};

// ========== PAGE: INICIO ==========
const PageInicio = ({ setPage }) => (
  <div>
    {/* Hero */}
    <section
      style={{
        background: `linear-gradient(135deg, ${tokens.colors.sandWarm}40, ${tokens.colors.oceanMist}60)`,
        padding: "80px 24px 60px",
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
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 60 }}>
        <div style={{ flex: 1, animation: "fadeInUp 0.8s ease" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 48,
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
              fontSize: 19,
              color: tokens.colors.textSecondary,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 500,
            }}
          >
            Aprende a usar herramientas digitales con criterio pedagógico, seguridad y autonomía.
            A tu ritmo, sin presiones.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Button size="lg" onClick={() => setPage("diagnostico")}>
              Comenzar diagnóstico <ArrowRightIcon />
            </Button>
            <Button variant="secondary" onClick={() => setPage("ruta")}>
              Ver mi ruta
            </Button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            animation: "fadeInUp 0.8s ease 0.2s both",
          }}
        >
          <div
            style={{
              width: 340,
              height: 340,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${tokens.colors.oceanMist}, ${tokens.colors.sandWarm})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 4s ease-in-out infinite",
              boxShadow: "0 20px 60px rgba(44,110,111,0.15)",
            }}
          >
            <CompassIcon size={180} />
          </div>
        </div>
      </div>
    </section>

    {/* ¿Cómo funciona? */}
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 36,
          textAlign: "center",
          marginBottom: 16,
          color: tokens.colors.textPrimary,
        }}
      >
        ¿Cómo funciona?
      </h2>
      <p style={{ textAlign: "center", color: tokens.colors.textSecondary, marginBottom: 48, fontSize: 17 }}>
        Tres pasos simples hacia tu autonomía digital
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
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
        padding: "80px 24px",
        background: `linear-gradient(180deg, white 0%, ${tokens.colors.oceanMist}40 100%)`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Explora las etapas
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
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
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 36,
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        Voces de docentes como tú
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
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
  const levels = [
    { key: "explorador", label: "Explorador Digital", color: tokens.colors.oceanDeep },
    { key: "integrador", label: "Integrador Estratégico", color: tokens.colors.coralSoft },
    { key: "autonomo", label: "Docente Autónomo", color: tokens.colors.forestCalm },
  ];

  const totalProgress = Math.round(
    MODULES.reduce((acc, m) => acc + m.progress, 0) / MODULES.length
  );

  return (
    <div style={{ padding: "48px 24px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 40, animation: "fadeInUp 0.6s ease" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            marginBottom: 8,
          }}
        >
          Tu ruta hacia la autonomía digital
        </h1>
        <p style={{ fontSize: 17, color: tokens.colors.textSecondary, marginBottom: 24 }}>
          Avanza paso a paso desarrollando seguridad, criterio pedagógico y autonomía.
        </p>
        <Card style={{ display: "flex", alignItems: "center", gap: 24, padding: "20px 28px" }}>
          <div>
            <div style={{ fontSize: 14, color: tokens.colors.textSecondary, marginBottom: 4 }}>Progreso general</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: tokens.colors.oceanDeep }}>{totalProgress}%</div>
          </div>
          <div style={{ flex: 1 }}>
            <ProgressBar value={totalProgress} height={12} />
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, color: tokens.colors.textSecondary }}>Nivel actual</div>
            <LevelBadge level="explorador" size="sm" />
          </div>
        </Card>
      </div>

      {/* Modules by level */}
      {levels.map((level, li) => (
        <div key={level.key} style={{ marginBottom: 48, animation: `fadeInUp 0.6s ease ${0.2 + li * 0.15}s both` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div
              style={{
                width: 4,
                height: 28,
                borderRadius: 2,
                background: level.color,
              }}
            />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: level.color }}>
              {level.label}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingLeft: 20 }}>
            {MODULES.filter((m) => m.level === level.key).map((mod, mi) => (
              <div
                key={mod.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  position: "relative",
                }}
              >
                {/* Connector line */}
                {mi > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 19,
                      top: -16,
                      width: 2,
                      height: 16,
                      background: mod.unlocked ? level.color + "40" : "#E0E0E0",
                    }}
                  />
                )}

                {/* Node */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: mod.progress === 100
                      ? tokens.colors.forestCalm
                      : mod.unlocked
                      ? level.color
                      : "#E0E0E0",
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {mod.progress === 100 ? <CheckIcon /> : mod.unlocked ? mod.id : <LockIcon />}
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: mod.unlocked ? "white" : "#F5F5F5",
                    borderRadius: 14,
                    padding: "18px 22px",
                    opacity: mod.unlocked ? 1 : 0.6,
                    boxShadow: mod.unlocked ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                    transition: "all 0.3s ease",
                    cursor: mod.unlocked ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => {
                    if (mod.unlocked) e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (mod.unlocked) e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 6 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 20 }}>{mod.icon}</span>
                        <h3 style={{ fontSize: 17, fontWeight: 700 }}>{mod.title}</h3>
                      </div>
                      <p style={{ fontSize: 14, color: tokens.colors.textSecondary }}>{mod.desc}</p>
                    </div>
                    {mod.unlocked && mod.progress < 100 && (
                      <Button size="sm" variant={mod.progress > 0 ? "primary" : "secondary"}>
                        {mod.progress > 0 ? "Continuar" : "Iniciar"}
                      </Button>
                    )}
                    {mod.progress === 100 && (
                      <span style={{ fontSize: 13, fontWeight: 600, color: tokens.colors.forestCalm }}>
                        ✓ Completado
                      </span>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ========== PAGE: COMUNIDAD ==========
const PageComunidad = () => {
  const [likedPosts, setLikedPosts] = useState({});

  return (
    <div style={{ padding: "48px 24px", maxWidth: 720, margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 36,
          marginBottom: 8,
          animation: "fadeInUp 0.6s ease",
        }}
      >
        Comunidad docente
      </h1>
      <p style={{ fontSize: 17, color: tokens.colors.textSecondary, marginBottom: 32, animation: "fadeInUp 0.6s ease 0.1s both" }}>
        Comparte experiencias, haz preguntas y aprende junto a otros docentes.
      </p>

      {/* Compose */}
      <Card style={{ marginBottom: 24, animation: "fadeInUp 0.6s ease 0.2s both" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "start" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: tokens.colors.oceanDeep,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 16,
              flexShrink: 0,
            }}
          >
            CZ
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: "100%",
                padding: "14px 18px",
                border: `2px solid #E0E0E0`,
                borderRadius: 12,
                fontSize: 15,
                color: tokens.colors.textMuted,
                background: "#FAFAFA",
                cursor: "text",
              }}
            >
              ¿Qué quieres compartir hoy, Carla?
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
              <Button size="sm">Publicar</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Posts */}
      {COMMUNITY_POSTS.map((post, i) => (
        <Card key={post.id} style={{ marginBottom: 16 }} delay={0.3 + i * 0.1}>
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: post.color,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              {post.avatar}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>{post.author}</span>
                <span style={{ fontSize: 13, color: tokens.colors.textMuted }}>{post.time}</span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: tokens.colors.textPrimary, marginBottom: 14 }}>
                {post.text}
              </p>
              <div style={{ display: "flex", gap: 20 }}>
                <button
                  onClick={() => setLikedPosts((p) => ({ ...p, [post.id]: !p[post.id] }))}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    color: likedPosts[post.id] ? tokens.colors.coralSoft : tokens.colors.textSecondary,
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <HeartIcon filled={likedPosts[post.id]} />
                  {post.likes + (likedPosts[post.id] ? 1 : 0)}
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    color: tokens.colors.textSecondary,
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <ChatIcon /> {post.replies} respuestas
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

// ========== PAGE: LOGROS ==========
const PageLogros = () => (
  <div style={{ padding: "48px 24px", maxWidth: 900, margin: "0 auto" }}>
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 36,
        marginBottom: 8,
        animation: "fadeInUp 0.6s ease",
      }}
    >
      Tus logros
    </h1>
    <p style={{ fontSize: 17, color: tokens.colors.textSecondary, marginBottom: 40, animation: "fadeInUp 0.6s ease 0.1s both" }}>
      Cada insignia representa un paso en tu camino. ¡Celebra tu progreso!
    </p>

    {/* Stats */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
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

// ========== PAGE: PERFIL ==========
const PagePerfil = () => (
  <div style={{ padding: "48px 24px", maxWidth: 800, margin: "0 auto" }}>
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 36,
        marginBottom: 32,
        animation: "fadeInUp 0.6s ease",
      }}
    >
      Mi cuenta
    </h1>

    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 20 }}>
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
const Footer = () => (
  <footer
    style={{
      background: tokens.colors.textPrimary,
      color: "white",
      padding: "48px 24px",
      marginTop: 64,
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: 40,
      }}
    >
      <div>
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
