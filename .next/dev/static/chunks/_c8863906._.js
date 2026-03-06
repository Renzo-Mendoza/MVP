(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/brujula-digital-mvp.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrujulaDigital
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
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
        white: "#FFFFFF"
    }
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
        unlocked: true
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
        unlocked: true
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
        unlocked: true
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
        unlocked: false
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
        unlocked: false
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
        unlocked: false
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
        unlocked: false
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
        unlocked: false
    }
];
const BADGES = [
    {
        id: 1,
        name: "Primer inicio",
        icon: "🌟",
        earned: true,
        date: "15 Feb 2026"
    },
    {
        id: 2,
        name: "Correo enviado",
        icon: "💌",
        earned: true,
        date: "18 Feb 2026"
    },
    {
        id: 3,
        name: "Primera videollamada",
        icon: "📹",
        earned: true,
        date: "20 Feb 2026"
    },
    {
        id: 4,
        name: "Explorador digital",
        icon: "🧭",
        earned: false,
        date: null
    },
    {
        id: 5,
        name: "Integrador estratégico",
        icon: "🔗",
        earned: false,
        date: null
    },
    {
        id: 6,
        name: "Docente autónomo",
        icon: "⭐",
        earned: false,
        date: null
    },
    {
        id: 7,
        name: "Mentor activo",
        icon: "🤝",
        earned: false,
        date: null
    },
    {
        id: 8,
        name: "Resiliencia digital",
        icon: "💪",
        earned: false,
        date: null
    }
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
        color: "#E8927C"
    },
    {
        id: 2,
        author: "María del Carmen O.",
        avatar: "MC",
        time: "Hace 5 horas",
        text: "¿Alguien más tiene problemas para adjuntar archivos pesados en Gmail? Me aparece un error que no entiendo.",
        likes: 4,
        replies: 7,
        color: "#4A9B9C"
    },
    {
        id: 3,
        author: "Roberto G.",
        avatar: "RG",
        time: "Ayer",
        text: "El módulo de Videoconferencias me cambió la vida. Antes le tenía terror a las clases virtuales.",
        likes: 23,
        replies: 5,
        color: "#5B8A72"
    }
];
const DIAGNOSTIC_QUESTIONS = [
    {
        id: 1,
        question: "¿Con qué frecuencia usas herramientas digitales en tu trabajo?",
        options: [
            "Casi nunca, prefiero métodos tradicionales",
            "Solo cuando es obligatorio",
            "Regularmente, pero solo lo básico",
            "Todos los días, con varias herramientas"
        ]
    },
    {
        id: 2,
        question: "Cuando algo falla en tu computadora o plataforma, ¿qué haces primero?",
        options: [
            "Pido ayuda inmediatamente",
            "Intento resolverlo pero me frustro rápido",
            "Busco un tutorial o pregunto a un colega",
            "Investigo y pruebo diferentes soluciones"
        ]
    },
    {
        id: 3,
        question: "¿Cómo te sientes al usar una plataforma nueva por primera vez?",
        options: [
            "Muy inseguro/a, prefiero que alguien me guíe",
            "Nervioso/a pero lo intento",
            "Curioso/a aunque con algo de cautela",
            "Emocionado/a por aprender algo nuevo"
        ]
    },
    {
        id: 4,
        question: "¿Qué herramientas digitales usas actualmente?",
        options: [
            "Solo WhatsApp y llamadas",
            "WhatsApp, correo y alguna red social",
            "Correo, Zoom, Google Docs y alguna plataforma educativa",
            "Múltiples herramientas de productividad y educación"
        ]
    },
    {
        id: 5,
        question: "Si tuvieras que dar una clase online mañana, ¿cómo te sentirías?",
        options: [
            "Aterrorizado/a, no sabría por dónde empezar",
            "Preocupado/a, necesitaría mucha ayuda",
            "Algo nervioso/a, pero podría hacerlo con preparación",
            "Seguro/a, ya tengo experiencia"
        ]
    }
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
  `
};
// ========== ICON COMPONENTS ==========
const CompassIcon = ({ size = 32 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "22",
                stroke: "#2C6E6F",
                strokeWidth: "2.5",
                fill: "#E8F4F4"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 279,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "18",
                stroke: "#B2BEC3",
                strokeWidth: "0.5",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 280,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "24,6 27,22 24,26 21,22",
                fill: "#E8927C"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 281,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "24,42 27,26 24,22 21,26",
                fill: "#2C6E6F"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 282,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "3",
                fill: "#2C6E6F"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 283,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "1.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 284,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            [
                "N",
                "E",
                "S",
                "O"
            ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: [
                        24,
                        43,
                        24,
                        5
                    ][i],
                    y: [
                        5,
                        25.5,
                        46,
                        25.5
                    ][i],
                    textAnchor: "middle",
                    fill: "#636E72",
                    fontSize: "5",
                    fontWeight: "700",
                    fontFamily: "Nunito",
                    children: d
                }, d, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 286,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 278,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CompassIcon;
const HelpIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "2",
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 304,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 305,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 306,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 303,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = HelpIcon;
const HeartIcon = ({ filled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: filled ? "#E8927C" : "none",
        stroke: "#E8927C",
        strokeWidth: "2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        }, void 0, false, {
            fileName: "[project]/brujula-digital-mvp.jsx",
            lineNumber: 312,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 311,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = HeartIcon;
const ChatIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#636E72",
        strokeWidth: "2",
        strokeLinecap: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }, void 0, false, {
            fileName: "[project]/brujula-digital-mvp.jsx",
            lineNumber: 318,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 317,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ChatIcon;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "3",
        strokeLinecap: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/brujula-digital-mvp.jsx",
            lineNumber: 324,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 323,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CheckIcon;
const LockIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#B2BEC3",
        strokeWidth: "2",
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "11",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 330,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11V7a5 5 0 0 1 10 0v4"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 331,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 329,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = LockIcon;
const ArrowRightIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 337,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 5 19 12 12 19"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 338,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 336,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = ArrowRightIcon;
// ========== SUB-COMPONENTS ==========
const ProgressBar = ({ value, height = 8, showLabel = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height,
                    background: "#E0E0E0",
                    borderRadius: height,
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "100%",
                        width: `${value}%`,
                        background: `linear-gradient(90deg, ${tokens.colors.oceanDeep}, ${tokens.colors.oceanLight})`,
                        borderRadius: height,
                        transition: "width 1s ease",
                        animation: "progressFill 1.5s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 353,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 345,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    right: 0,
                    top: -20,
                    fontSize: 13,
                    fontWeight: 600,
                    color: tokens.colors.oceanDeep
                },
                children: [
                    value,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 365,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 344,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = ProgressBar;
const LevelBadge = ({ level, size = "md" })=>{
    const config = {
        explorador: {
            bg: "#E8F4F4",
            color: "#2C6E6F",
            label: "Explorador Digital",
            icon: "🧭"
        },
        integrador: {
            bg: "#FFF3E0",
            color: "#E8927C",
            label: "Integrador Estratégico",
            icon: "🔗"
        },
        autonomo: {
            bg: "#E8F5E9",
            color: "#5B8A72",
            label: "Docente Autónomo",
            icon: "⭐"
        }
    };
    const c = config[level];
    const sz = size === "sm" ? {
        p: "4px 10px",
        fs: 11
    } : {
        p: "6px 14px",
        fs: 13
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: sz.p,
            background: c.bg,
            color: c.color,
            borderRadius: 20,
            fontSize: sz.fs,
            fontWeight: 600
        },
        children: [
            c.icon,
            " ",
            c.label
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 390,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = LevelBadge;
const Button = ({ children, variant = "primary", onClick, style: customStyle, size = "md" })=>{
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        boxShadow: hovered ? "0 6px 20px rgba(44,110,111,0.25)" : "0 2px 8px rgba(44,110,111,0.12)"
    };
    const variants = {
        primary: {
            background: hovered ? tokens.colors.oceanLight : tokens.colors.oceanDeep,
            color: "white"
        },
        secondary: {
            background: "transparent",
            color: tokens.colors.oceanDeep,
            border: `2px solid ${tokens.colors.oceanDeep}`,
            boxShadow: "none"
        },
        coral: {
            background: hovered ? tokens.colors.coralDeep : tokens.colors.coralSoft,
            color: "white"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            ...baseStyle,
            ...variants[variant],
            ...customStyle
        },
        onClick: onClick,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: children
    }, void 0, false, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 442,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Button, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c9 = Button;
const Card = ({ children, style: customStyle, delay = 0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "white",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            animation: `fadeInUp 0.6s ease ${delay}s both`,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            ...customStyle
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 454,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = Card;
// ========== NAVBAR ==========
const Navbar = ({ currentPage, setPage })=>{
    const navItems = [
        {
            id: "inicio",
            label: "Inicio"
        },
        {
            id: "diagnostico",
            label: "Diagnóstico"
        },
        {
            id: "ruta",
            label: "Mi Ruta"
        },
        {
            id: "comunidad",
            label: "Comunidad"
        },
        {
            id: "logros",
            label: "Logros"
        },
        {
            id: "perfil",
            label: "Mi Cuenta"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "rgba(253, 248, 243, 0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(44,110,111,0.1)",
            padding: "0 24px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 72
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        cursor: "pointer"
                    },
                    onClick: ()=>setPage("inicio"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompassIcon, {
                            size: 40
                        }, void 0, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: tokens.colors.oceanDeep,
                                        lineHeight: 1.1
                                    },
                                    children: "BRÚJULA DIGITAL"
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: tokens.colors.textSecondary,
                                        fontWeight: 500
                                    },
                                    children: "Autonomía digital para docentes"
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 515,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 510,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 4,
                        alignItems: "center"
                    },
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPage(item.id),
                            style: {
                                padding: "8px 16px",
                                fontSize: 14,
                                fontWeight: currentPage === item.id ? 700 : 500,
                                color: currentPage === item.id ? tokens.colors.oceanDeep : tokens.colors.textSecondary,
                                background: currentPage === item.id ? tokens.colors.oceanMist : "transparent",
                                border: "none",
                                borderRadius: 8,
                                cursor: "pointer",
                                fontFamily: "'Nunito', sans-serif",
                                transition: "all 0.2s ease"
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 535,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 533,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/brujula-digital-mvp.jsx",
            lineNumber: 500,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 489,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c11 = Navbar;
// ========== PAGE: INICIO ==========
const PageInicio = ({ setPage })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: `linear-gradient(135deg, ${tokens.colors.sandWarm}40, ${tokens.colors.oceanMist}60)`,
                    padding: "80px 24px 60px",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -60,
                            right: -60,
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            background: `radial-gradient(circle, ${tokens.colors.coralSoft}15, transparent 70%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 572,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: -40,
                            left: -40,
                            width: 200,
                            height: 200,
                            borderRadius: "50%",
                            background: `radial-gradient(circle, ${tokens.colors.oceanLight}10, transparent 70%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 583,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: "0 auto",
                            display: "flex",
                            alignItems: "center",
                            gap: 60
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    animation: "fadeInUp 0.8s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 48,
                                            fontWeight: 700,
                                            color: tokens.colors.textPrimary,
                                            lineHeight: 1.2,
                                            marginBottom: 20
                                        },
                                        children: [
                                            "Encuentra tu rumbo",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 607,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: tokens.colors.oceanDeep
                                                },
                                                children: "en la educación digital"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 608,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 596,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 19,
                                            color: tokens.colors.textSecondary,
                                            lineHeight: 1.7,
                                            marginBottom: 32,
                                            maxWidth: 500
                                        },
                                        children: "Aprende a usar herramientas digitales con criterio pedagógico, seguridad y autonomía. A tu ritmo, sin presiones."
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 610,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 16,
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                size: "lg",
                                                onClick: ()=>setPage("diagnostico"),
                                                children: [
                                                    "Comenzar diagnóstico ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 624,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 623,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "secondary",
                                                onClick: ()=>setPage("ruta"),
                                                children: "Ver mi ruta"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 626,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 622,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 595,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    animation: "fadeInUp 0.8s ease 0.2s both"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 340,
                                        height: 340,
                                        borderRadius: "50%",
                                        background: `linear-gradient(135deg, ${tokens.colors.oceanMist}, ${tokens.colors.sandWarm})`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        animation: "float 4s ease-in-out infinite",
                                        boxShadow: "0 20px 60px rgba(44,110,111,0.15)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompassIcon, {
                                        size: 180
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 639,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 631,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 594,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 564,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 24px",
                    maxWidth: 1200,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 36,
                            textAlign: "center",
                            marginBottom: 16,
                            color: tokens.colors.textPrimary
                        },
                        children: "¿Cómo funciona?"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 660,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: "center",
                            color: tokens.colors.textSecondary,
                            marginBottom: 48,
                            fontSize: 17
                        },
                        children: "Tres pasos simples hacia tu autonomía digital"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 671,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 32
                        },
                        children: [
                            {
                                step: "01",
                                icon: "📋",
                                title: "Diagnostica tu nivel",
                                desc: "Identifica tu nivel de autonomía y seguridad digital docente con un test rápido y amigable."
                            },
                            {
                                step: "02",
                                icon: "🗺️",
                                title: "Recorre tu ruta",
                                desc: "Avanza por una ruta de aprendizaje adaptada a tu nivel. Sin presión, a tu propio ritmo."
                            },
                            {
                                step: "03",
                                icon: "🏅",
                                title: "Obtén tus logros",
                                desc: "Gana insignias mientras fortaleces tu autonomía digital y celebra cada avance."
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                delay: i * 0.15,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: tokens.colors.coralSoft,
                                            marginBottom: 12,
                                            letterSpacing: 2
                                        },
                                        children: [
                                            "PASO ",
                                            item.step
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 696,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 48,
                                            marginBottom: 16
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 707,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 22,
                                            marginBottom: 12,
                                            color: tokens.colors.textPrimary
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: tokens.colors.textSecondary,
                                            lineHeight: 1.6,
                                            fontSize: 15
                                        },
                                        children: item.desc
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 674,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 659,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 24px",
                    background: `linear-gradient(180deg, white 0%, ${tokens.colors.oceanMist}40 100%)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1200,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 36,
                                textAlign: "center",
                                marginBottom: 48
                            },
                            children: "Explora las etapas"
                        }, void 0, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 732,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: 32
                            },
                            children: [
                                {
                                    level: "explorador",
                                    title: "Explorador Digital",
                                    desc: "Estás comenzando a explorar el mundo digital educativo. Aquí ganarás confianza con las herramientas básicas.",
                                    modules: 3,
                                    color: tokens.colors.oceanDeep,
                                    bg: tokens.colors.oceanMist
                                },
                                {
                                    level: "integrador",
                                    title: "Integrador Estratégico",
                                    desc: "Estás integrando tecnología de manera reflexiva en tus clases. Aprenderás a elegir la herramienta adecuada.",
                                    modules: 3,
                                    color: tokens.colors.coralSoft,
                                    bg: "#FFF3E0"
                                },
                                {
                                    level: "autonomo",
                                    title: "Docente Autónomo",
                                    desc: "Has alcanzado autonomía digital y criterio pedagógico. Resuelves problemas y guías a otros.",
                                    modules: 2,
                                    color: tokens.colors.forestCalm,
                                    bg: "#E8F5E9"
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    delay: i * 0.15,
                                    style: {
                                        textAlign: "center",
                                        borderTop: `4px solid ${item.color}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 80,
                                                height: 80,
                                                borderRadius: "50%",
                                                background: item.bg,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0 auto 20px",
                                                fontSize: 36
                                            },
                                            children: item.level === "explorador" ? "🧭" : item.level === "integrador" ? "🔗" : "⭐"
                                        }, void 0, false, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: 22,
                                                marginBottom: 12,
                                                color: item.color
                                            },
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 785,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: tokens.colors.textSecondary,
                                                lineHeight: 1.6,
                                                fontSize: 15,
                                                marginBottom: 16
                                            },
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 795,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                fontWeight: 600,
                                                color: tokens.colors.textMuted
                                            },
                                            children: [
                                                item.modules,
                                                " módulos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 798,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 769,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 742,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 731,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 725,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 24px",
                    maxWidth: 1200,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 36,
                            textAlign: "center",
                            marginBottom: 48
                        },
                        children: "Voces de docentes como tú"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 809,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 24
                        },
                        children: [
                            {
                                quote: "Antes le tenía miedo a Zoom. Ahora doy clases en línea con confianza. El secreto fue aprender paso a paso, sin presión.",
                                author: "Patricia A.",
                                role: "Docente de Comunicación, 52 años"
                            },
                            {
                                quote: "Lo mejor de Brújula Digital es que no te hacen sentir tonta. El lenguaje es claro, los ejercicios son reales y siempre hay alguien que te ayuda.",
                                author: "María del Carmen O.",
                                role: "Coordinadora Académica, 48 años"
                            },
                            {
                                quote: "Mis alumnos notaron el cambio. Ahora uso Quizizz para evaluaciones y Google Classroom para organizar todo. ¡Me siento actualizada!",
                                author: "Patricia R.",
                                role: "Docente de Inglés, 55 años"
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                delay: i * 0.15,
                                style: {
                                    background: tokens.colors.sandWarm + "60"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 36,
                                            marginBottom: 12,
                                            opacity: 0.3
                                        },
                                        children: '"'
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 841,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 15,
                                            lineHeight: 1.7,
                                            color: tokens.colors.textPrimary,
                                            marginBottom: 20,
                                            fontStyle: "italic"
                                        },
                                        children: item.quote
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 842,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 14,
                                            color: tokens.colors.oceanDeep
                                        },
                                        children: item.author
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 853,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            color: tokens.colors.textSecondary
                                        },
                                        children: item.role
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 854,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 840,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 819,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 808,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 562,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = PageInicio;
// ========== PAGE: DIAGNÓSTICO ==========
const PageDiagnostico = ({ setPage })=>{
    _s1();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleAnswer = (qId, optionIndex)=>{
        setSelectedOption(optionIndex);
        setTimeout(()=>{
            setAnswers((prev)=>({
                    ...prev,
                    [qId]: optionIndex
                }));
            setSelectedOption(null);
            if (step < DIAGNOSTIC_QUESTIONS.length - 1) {
                setStep((s)=>s + 1);
            } else {
                setShowResult(true);
            }
        }, 400);
    };
    if (showResult) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "60px 24px",
                maxWidth: 640,
                margin: "0 auto",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: "badgeUnlock 0.8s ease both"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            background: tokens.colors.oceanMist,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 24px",
                            fontSize: 56,
                            boxShadow: `0 0 0 8px ${tokens.colors.oceanDeep}20`
                        },
                        children: "🧭"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 886,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 885,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 36,
                        marginBottom: 12,
                        color: tokens.colors.oceanDeep,
                        animation: "fadeInUp 0.6s ease 0.3s both"
                    },
                    children: "¡Bienvenida, Carla!"
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 903,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 18,
                        color: tokens.colors.textSecondary,
                        marginBottom: 8,
                        animation: "fadeInUp 0.6s ease 0.5s both"
                    },
                    children: "Tu nivel actual es:"
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 914,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: "fadeInUp 0.6s ease 0.6s both",
                        marginBottom: 24
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelBadge, {
                        level: "explorador",
                        size: "md"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 918,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 917,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: tokens.colors.textSecondary,
                        lineHeight: 1.7,
                        marginBottom: 32,
                        animation: "fadeInUp 0.6s ease 0.7s both"
                    },
                    children: [
                        "Estás comenzando tu camino digital y eso es algo muy valioso. Tu ruta personalizada tiene ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "3 módulos"
                        }, void 0, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 930,
                            columnNumber: 39
                        }, ("TURBOPACK compile-time value", void 0)),
                        " diseñados especialmente para que ganes confianza paso a paso. No hay prisa — cada logro cuenta."
                    ]
                }, void 0, true, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 920,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: "fadeInUp 0.6s ease 0.9s both"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        size: "lg",
                        onClick: ()=>setPage("ruta"),
                        children: [
                            "Ver mi ruta personalizada ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 935,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 934,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 933,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/brujula-digital-mvp.jsx",
            lineNumber: 884,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const currentQ = DIAGNOSTIC_QUESTIONS[step];
    const progress = step / DIAGNOSTIC_QUESTIONS.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "48px 24px",
            maxWidth: 700,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 8,
                            fontSize: 14,
                            color: tokens.colors.textSecondary
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Pregunta ",
                                    step + 1,
                                    " de ",
                                    DIAGNOSTIC_QUESTIONS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 949,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    Math.round(progress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 950,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 948,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                        value: progress,
                        height: 6
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 952,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 947,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "fadeInUp 0.5s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 28,
                            marginBottom: 32,
                            lineHeight: 1.4,
                            color: tokens.colors.textPrimary
                        },
                        children: currentQ.question
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 956,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                        },
                        children: currentQ.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAnswer(currentQ.id, i),
                                style: {
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
                                    transform: selectedOption === i ? "scale(0.98)" : "scale(1)"
                                },
                                onMouseEnter: (e)=>{
                                    if (selectedOption === null) {
                                        e.currentTarget.style.borderColor = tokens.colors.oceanLight;
                                        e.currentTarget.style.background = tokens.colors.oceanMist;
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (selectedOption === null) {
                                        e.currentTarget.style.borderColor = "#E0E0E0";
                                        e.currentTarget.style.background = "white";
                                    }
                                },
                                children: opt
                            }, i, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 970,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 968,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, step, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 955,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 32,
                    textAlign: "center",
                    fontSize: 14,
                    color: tokens.colors.textMuted
                },
                children: "No hay respuestas correctas o incorrectas. Elige la que mejor te represente."
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1005,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 946,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(PageDiagnostico, "FhVBlsDifQOZRqg/5OQV+rRguFI=");
_c13 = PageDiagnostico;
// ========== PAGE: MI RUTA ==========
const PageRuta = ({ setPage })=>{
    const levels = [
        {
            key: "explorador",
            label: "Explorador Digital",
            color: tokens.colors.oceanDeep
        },
        {
            key: "integrador",
            label: "Integrador Estratégico",
            color: tokens.colors.coralSoft
        },
        {
            key: "autonomo",
            label: "Docente Autónomo",
            color: tokens.colors.forestCalm
        }
    ];
    const totalProgress = Math.round(MODULES.reduce((acc, m)=>acc + m.progress, 0) / MODULES.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "48px 24px",
            maxWidth: 900,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 40,
                    animation: "fadeInUp 0.6s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 36,
                            marginBottom: 8
                        },
                        children: "Tu ruta hacia la autonomía digital"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1035,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 17,
                            color: tokens.colors.textSecondary,
                            marginBottom: 24
                        },
                        children: "Avanza paso a paso desarrollando seguridad, criterio pedagógico y autonomía."
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 24,
                            padding: "20px 28px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            color: tokens.colors.textSecondary,
                                            marginBottom: 4
                                        },
                                        children: "Progreso general"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1049,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 32,
                                            fontWeight: 700,
                                            color: tokens.colors.oceanDeep
                                        },
                                        children: [
                                            totalProgress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1050,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    value: totalProgress,
                                    height: 12
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1053,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1052,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            color: tokens.colors.textSecondary
                                        },
                                        children: "Nivel actual"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1056,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelBadge, {
                                        level: "explorador",
                                        size: "sm"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1057,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1055,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1034,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            levels.map((level, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 48,
                        animation: `fadeInUp 0.6s ease ${0.2 + li * 0.15}s both`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginBottom: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 4,
                                        height: 28,
                                        borderRadius: 2,
                                        background: level.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1066,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 24,
                                        color: level.color
                                    },
                                    children: level.label
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1074,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 1065,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 16,
                                paddingLeft: 20
                            },
                            children: MODULES.filter((m)=>m.level === level.key).map((mod, mi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                        position: "relative"
                                    },
                                    children: [
                                        mi > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                left: 19,
                                                top: -16,
                                                width: 2,
                                                height: 16,
                                                background: mod.unlocked ? level.color + "40" : "#E0E0E0"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 1092,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                flexShrink: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: mod.progress === 100 ? tokens.colors.forestCalm : mod.unlocked ? level.color : "#E0E0E0",
                                                color: "white",
                                                fontSize: 14,
                                                fontWeight: 700
                                            },
                                            children: mod.progress === 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1124,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)) : mod.unlocked ? mod.id : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockIcon, {}, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1124,
                                                columnNumber: 83
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 1105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                background: mod.unlocked ? "white" : "#F5F5F5",
                                                borderRadius: 14,
                                                padding: "18px 22px",
                                                opacity: mod.unlocked ? 1 : 0.6,
                                                boxShadow: mod.unlocked ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                                                transition: "all 0.3s ease",
                                                cursor: mod.unlocked ? "pointer" : "default"
                                            },
                                            onMouseEnter: (e)=>{
                                                if (mod.unlocked) e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                                            },
                                            onMouseLeave: (e)=>{
                                                if (mod.unlocked) e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "start",
                                                        marginBottom: 6
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: 8,
                                                                        marginBottom: 4
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: 20
                                                                            },
                                                                            children: mod.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                                            lineNumber: 1149,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            style: {
                                                                                fontSize: 17,
                                                                                fontWeight: 700
                                                                            },
                                                                            children: mod.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                                            lineNumber: 1150,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                                    lineNumber: 1148,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: 14,
                                                                        color: tokens.colors.textSecondary
                                                                    },
                                                                    children: mod.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        mod.unlocked && mod.progress < 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            size: "sm",
                                                            variant: mod.progress > 0 ? "primary" : "secondary",
                                                            children: mod.progress > 0 ? "Continuar" : "Iniciar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        mod.progress === 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 13,
                                                                fontWeight: 600,
                                                                color: tokens.colors.forestCalm
                                                            },
                                                            children: "✓ Completado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1160,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                mod.unlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                fontSize: 12,
                                                                color: tokens.colors.textMuted,
                                                                marginBottom: 4
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        mod.completed,
                                                                        "/",
                                                                        mod.lessons,
                                                                        " lecciones"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                                    lineNumber: 1168,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        mod.progress,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                                    lineNumber: 1169,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1167,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                            value: mod.progress,
                                                            height: 6
                                                        }, void 0, false, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                    lineNumber: 1166,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 1128,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, mod.id, true, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1081,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 1079,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, level.key, true, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1064,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 1032,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c14 = PageRuta;
// ========== PAGE: COMUNIDAD ==========
const PageComunidad = ()=>{
    _s2();
    const [likedPosts, setLikedPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "48px 24px",
            maxWidth: 720,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    marginBottom: 8,
                    animation: "fadeInUp 0.6s ease"
                },
                children: "Comunidad docente"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1190,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 17,
                    color: tokens.colors.textSecondary,
                    marginBottom: 32,
                    animation: "fadeInUp 0.6s ease 0.1s both"
                },
                children: "Comparte experiencias, haz preguntas y aprende junto a otros docentes."
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                style: {
                    marginBottom: 24,
                    animation: "fadeInUp 0.6s ease 0.2s both"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 12,
                        alignItems: "start"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
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
                                flexShrink: 0
                            },
                            children: "CZ"
                        }, void 0, false, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 1207,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        padding: "14px 18px",
                                        border: `2px solid #E0E0E0`,
                                        borderRadius: 12,
                                        fontSize: 15,
                                        color: tokens.colors.textMuted,
                                        background: "#FAFAFA",
                                        cursor: "text"
                                    },
                                    children: "¿Qué quieres compartir hoy, Carla?"
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1225,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginTop: 10
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        size: "sm",
                                        children: "Publicar"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1240,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1239,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 1224,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1206,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            COMMUNITY_POSTS.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    style: {
                        marginBottom: 16
                    },
                    delay: 0.3 + i * 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
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
                                    flexShrink: 0
                                },
                                children: post.avatar
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1250,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 15
                                                },
                                                children: post.author
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1269,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 13,
                                                    color: tokens.colors.textMuted
                                                },
                                                children: post.time
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1270,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1268,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 15,
                                            lineHeight: 1.6,
                                            color: tokens.colors.textPrimary,
                                            marginBottom: 14
                                        },
                                        children: post.text
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1272,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLikedPosts((p)=>({
                                                            ...p,
                                                            [post.id]: !p[post.id]
                                                        })),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: 14,
                                                    color: likedPosts[post.id] ? tokens.colors.coralSoft : tokens.colors.textSecondary,
                                                    fontFamily: "'Nunito', sans-serif"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartIcon, {
                                                        filled: likedPosts[post.id]
                                                    }, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 1290,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    post.likes + (likedPosts[post.id] ? 1 : 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1276,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: 14,
                                                    color: tokens.colors.textSecondary,
                                                    fontFamily: "'Nunito', sans-serif"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatIcon, {}, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 1306,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    post.replies,
                                                    " respuestas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1293,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1275,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1267,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1249,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, post.id, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1248,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 1189,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(PageComunidad, "kbX8t51jm50sUhXxYs84YofNRcc=");
_c15 = PageComunidad;
// ========== PAGE: LOGROS ==========
const PageLogros = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "48px 24px",
            maxWidth: 900,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    marginBottom: 8,
                    animation: "fadeInUp 0.6s ease"
                },
                children: "Tus logros"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1320,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 17,
                    color: tokens.colors.textSecondary,
                    marginBottom: 40,
                    animation: "fadeInUp 0.6s ease 0.1s both"
                },
                children: "Cada insignia representa un paso en tu camino. ¡Celebra tu progreso!"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1330,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 20,
                    marginBottom: 48
                },
                children: [
                    {
                        label: "Insignias obtenidas",
                        value: "3 / 8",
                        color: tokens.colors.goldBadge
                    },
                    {
                        label: "Nivel actual",
                        value: "Explorador",
                        color: tokens.colors.oceanDeep
                    },
                    {
                        label: "Días activa",
                        value: "18",
                        color: tokens.colors.coralSoft
                    }
                ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        delay: 0.2 + i * 0.1,
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 32,
                                    fontWeight: 700,
                                    color: stat.color,
                                    marginBottom: 4
                                },
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1342,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 14,
                                    color: tokens.colors.textSecondary
                                },
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1343,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1341,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1335,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 20
                },
                children: BADGES.map((badge, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        delay: 0.3 + i * 0.08,
                        style: {
                            textAlign: "center",
                            opacity: badge.earned ? 1 : 0.45,
                            background: badge.earned ? "white" : "#F5F5F5"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 72,
                                    height: 72,
                                    borderRadius: "50%",
                                    background: badge.earned ? `linear-gradient(135deg, ${tokens.colors.goldBadge}30, ${tokens.colors.sandWarm})` : "#ECECEC",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 12px",
                                    fontSize: 32,
                                    boxShadow: badge.earned ? `0 0 0 3px ${tokens.colors.goldBadge}40` : "none"
                                },
                                children: badge.earned ? badge.icon : "🔒"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1360,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: 14,
                                    marginBottom: 4
                                },
                                children: badge.name
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1378,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: tokens.colors.textMuted
                                },
                                children: badge.earned ? badge.date : "Por desbloquear"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1379,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, badge.id, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1351,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1349,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 1319,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = PageLogros;
// ========== PAGE: PERFIL ==========
const PagePerfil = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "48px 24px",
            maxWidth: 800,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    marginBottom: 32,
                    animation: "fadeInUp 0.6s ease"
                },
                children: "Mi cuenta"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1391,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "280px 1fr",
                    gap: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        style: {
                            textAlign: "center",
                            animation: "fadeInUp 0.6s ease 0.1s both"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
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
                                    fontFamily: "'Playfair Display', serif"
                                },
                                children: "CZ"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1405,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 20,
                                    fontWeight: 700,
                                    marginBottom: 4
                                },
                                children: "Carla Zuñiga"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1423,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: tokens.colors.textSecondary,
                                    marginBottom: 16
                                },
                                children: "Docente de Inglés"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1424,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelBadge, {
                                level: "explorador",
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1425,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 20,
                                    paddingTop: 20,
                                    borderTop: "1px solid #EEE"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 14,
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: tokens.colors.textSecondary
                                                },
                                                children: "Experiencia"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1428,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600
                                                },
                                                children: "28 años"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1429,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1427,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 14,
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: tokens.colors.textSecondary
                                                },
                                                children: "Edad"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1432,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600
                                                },
                                                children: "50 años"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1433,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1431,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: tokens.colors.textSecondary
                                                },
                                                children: "Miembro desde"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1436,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600
                                                },
                                                children: "Feb 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1437,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1435,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1426,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1404,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                style: {
                                    animation: "fadeInUp 0.6s ease 0.2s both"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 20,
                                            marginBottom: 16,
                                            color: tokens.colors.oceanDeep
                                        },
                                        children: "Progreso en la ruta"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1445,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    fontSize: 14,
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: tokens.colors.textSecondary
                                                        },
                                                        children: "Nivel Explorador"
                                                    }, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 1457,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 600
                                                        },
                                                        children: "68%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1456,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                value: 68,
                                                height: 10
                                            }, void 0, false, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1460,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1455,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(3, 1fr)",
                                            gap: 16,
                                            marginTop: 20
                                        },
                                        children: [
                                            {
                                                label: "Módulos completados",
                                                value: "1 / 8"
                                            },
                                            {
                                                label: "Lecciones terminadas",
                                                value: "9 / 37"
                                            },
                                            {
                                                label: "Horas de práctica",
                                                value: "12h"
                                            }
                                        ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: "center",
                                                    padding: 12,
                                                    background: tokens.colors.sandLight,
                                                    borderRadius: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 22,
                                                            fontWeight: 700,
                                                            color: tokens.colors.oceanDeep
                                                        },
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 1477,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: tokens.colors.textSecondary,
                                                            marginTop: 2
                                                        },
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                                        lineNumber: 1478,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/brujula-digital-mvp.jsx",
                                                lineNumber: 1468,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1462,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1444,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                style: {
                                    animation: "fadeInUp 0.6s ease 0.3s both"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 20,
                                            marginBottom: 16,
                                            color: tokens.colors.oceanDeep
                                        },
                                        children: "Actividad reciente"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1485,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    [
                                        {
                                            action: "Completó lección: Compartir pantalla en Zoom",
                                            time: "Hoy, 10:30 AM",
                                            icon: "📹"
                                        },
                                        {
                                            action: "Ganó insignia: Primera videollamada",
                                            time: "Ayer, 3:15 PM",
                                            icon: "🏅"
                                        },
                                        {
                                            action: "Completó módulo: Primeros pasos digitales",
                                            time: "12 Mar 2026",
                                            icon: "✅"
                                        },
                                        {
                                            action: "Publicó en la comunidad",
                                            time: "10 Mar 2026",
                                            icon: "💬"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 12,
                                                padding: "12px 0",
                                                borderBottom: i < 3 ? "1px solid #F0F0F0" : "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 22
                                                    },
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                    lineNumber: 1511,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 14,
                                                                fontWeight: 600
                                                            },
                                                            children: item.action
                                                        }, void 0, false, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1513,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: tokens.colors.textMuted
                                                            },
                                                            children: item.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                                            lineNumber: 1514,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                                    lineNumber: 1512,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/brujula-digital-mvp.jsx",
                                            lineNumber: 1501,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1484,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1443,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1402,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 1390,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = PagePerfil;
// ========== HELP BUTTON (GLOBAL) ==========
const HelpButton = ()=>{
    _s3();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                style: {
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
                    transform: open ? "rotate(45deg)" : "rotate(0)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpIcon, {}, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1550,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1529,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 92,
                    right: 24,
                    width: 300,
                    background: "white",
                    borderRadius: 16,
                    padding: 24,
                    boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                    zIndex: 200,
                    animation: "slideDown 0.3s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 18,
                            marginBottom: 12,
                            color: tokens.colors.oceanDeep
                        },
                        children: "¿Necesitas ayuda?"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1567,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 14,
                            color: tokens.colors.textSecondary,
                            lineHeight: 1.6,
                            marginBottom: 16
                        },
                        children: "No te preocupes, estamos aquí para acompañarte. Elige cómo prefieres recibir ayuda:"
                    }, void 0, false, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1570,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                size: "sm",
                                style: {
                                    width: "100%",
                                    justifyContent: "center"
                                },
                                children: "💬 Chat con un mentor"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1574,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                size: "sm",
                                variant: "secondary",
                                style: {
                                    width: "100%",
                                    justifyContent: "center"
                                },
                                children: "📋 Ver guías rápidas"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1577,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                size: "sm",
                                variant: "secondary",
                                style: {
                                    width: "100%",
                                    justifyContent: "center"
                                },
                                children: "📞 Solicitar llamada"
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1580,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1573,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1553,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s3(HelpButton, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c18 = HelpButton;
// ========== FOOTER ==========
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: tokens.colors.textPrimary,
            color: "white",
            padding: "48px 24px",
            marginTop: 64
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    gap: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompassIcon, {
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1611,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: 18,
                                            fontWeight: 700
                                        },
                                        children: "BRÚJULA DIGITAL"
                                    }, void 0, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1612,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1610,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: "#AAA",
                                    lineHeight: 1.6,
                                    maxWidth: 280
                                },
                                children: "Autonomía digital para docentes. Aprendizaje práctico, accesible y acompañado."
                            }, void 0, false, {
                                fileName: "[project]/brujula-digital-mvp.jsx",
                                lineNumber: 1616,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/brujula-digital-mvp.jsx",
                        lineNumber: 1609,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        {
                            title: "Plataforma",
                            items: [
                                "Inicio",
                                "Diagnóstico",
                                "Mi Ruta",
                                "Logros"
                            ]
                        },
                        {
                            title: "Comunidad",
                            items: [
                                "Foro docente",
                                "Mentores",
                                "Eventos",
                                "Blog"
                            ]
                        },
                        {
                            title: "Soporte",
                            items: [
                                "Centro de ayuda",
                                "Contacto",
                                "Guías rápidas",
                                "FAQ"
                            ]
                        }
                    ].map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: 14,
                                        fontWeight: 700,
                                        marginBottom: 16,
                                        letterSpacing: 1,
                                        textTransform: "uppercase"
                                    },
                                    children: col.title
                                }, void 0, false, {
                                    fileName: "[project]/brujula-digital-mvp.jsx",
                                    lineNumber: 1626,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                col.items.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            color: "#AAA",
                                            marginBottom: 10,
                                            cursor: "pointer"
                                        },
                                        children: item
                                    }, j, false, {
                                        fileName: "[project]/brujula-digital-mvp.jsx",
                                        lineNumber: 1630,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, i, true, {
                            fileName: "[project]/brujula-digital-mvp.jsx",
                            lineNumber: 1625,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1600,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "32px auto 0",
                    paddingTop: 24,
                    borderTop: "1px solid #444",
                    textAlign: "center",
                    fontSize: 13,
                    color: "#777"
                },
                children: "© 2026 Brújula Digital · Chispas Estratégicas · Aprender sin Edad"
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1645,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 1592,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = Footer;
function BrujulaDigital() {
    _s4();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inicio");
    const setPage = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const renderPage = ()=>{
        switch(currentPage){
            case "inicio":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageInicio, {
                    setPage: setPage
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1673,
                    columnNumber: 16
                }, this);
            case "diagnostico":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageDiagnostico, {
                    setPage: setPage
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1675,
                    columnNumber: 16
                }, this);
            case "ruta":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageRuta, {
                    setPage: setPage
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1677,
                    columnNumber: 16
                }, this);
            case "comunidad":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageComunidad, {}, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1679,
                    columnNumber: 16
                }, this);
            case "logros":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLogros, {}, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1681,
                    columnNumber: 16
                }, this);
            case "perfil":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PagePerfil, {}, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1683,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageInicio, {
                    setPage: setPage
                }, void 0, false, {
                    fileName: "[project]/brujula-digital-mvp.jsx",
                    lineNumber: 1685,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: tokens.colors.sandLight
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: styles.global
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                currentPage: currentPage,
                setPage: setPage
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1692,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: renderPage()
            }, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1693,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1694,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpButton, {}, void 0, false, {
                fileName: "[project]/brujula-digital-mvp.jsx",
                lineNumber: 1695,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/brujula-digital-mvp.jsx",
        lineNumber: 1690,
        columnNumber: 5
    }, this);
}
_s4(BrujulaDigital, "NLfJn+8s65nlQ/+e4OWuvdeKVok=");
_c20 = BrujulaDigital;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
__turbopack_context__.k.register(_c, "CompassIcon");
__turbopack_context__.k.register(_c1, "HelpIcon");
__turbopack_context__.k.register(_c2, "HeartIcon");
__turbopack_context__.k.register(_c3, "ChatIcon");
__turbopack_context__.k.register(_c4, "CheckIcon");
__turbopack_context__.k.register(_c5, "LockIcon");
__turbopack_context__.k.register(_c6, "ArrowRightIcon");
__turbopack_context__.k.register(_c7, "ProgressBar");
__turbopack_context__.k.register(_c8, "LevelBadge");
__turbopack_context__.k.register(_c9, "Button");
__turbopack_context__.k.register(_c10, "Card");
__turbopack_context__.k.register(_c11, "Navbar");
__turbopack_context__.k.register(_c12, "PageInicio");
__turbopack_context__.k.register(_c13, "PageDiagnostico");
__turbopack_context__.k.register(_c14, "PageRuta");
__turbopack_context__.k.register(_c15, "PageComunidad");
__turbopack_context__.k.register(_c16, "PageLogros");
__turbopack_context__.k.register(_c17, "PagePerfil");
__turbopack_context__.k.register(_c18, "HelpButton");
__turbopack_context__.k.register(_c19, "Footer");
__turbopack_context__.k.register(_c20, "BrujulaDigital");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brujula$2d$digital$2d$mvp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brujula-digital-mvp.jsx [app-client] (ecmascript)");
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$brujula$2d$digital$2d$mvp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c8863906._.js.map