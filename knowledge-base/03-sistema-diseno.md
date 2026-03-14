# 03 — Sistema de Diseño

## Paleta de Colores

### Colores Principales

| Token | Hex | Uso |
|-------|-----|-----|
| `oceanDeep` | `#2C6E6F` | Color primario / Brand teal |
| `oceanDarker` | `#1A4E4F` | Teal oscuro (hover, navbar) |
| `oceanLight` | `#4A9B9C` | Teal claro (gradientes, acentos) |
| `oceanMist` | `#E8F4F4` | Fondos muy claros teal |

### Colores Cálidos

| Token | Hex | Uso |
|-------|-----|-----|
| `sandWarm` | `#F5E6D3` | Acentos cálidos, fondos secundarios |
| `sandLight` | `#FDF8F3` | Fondo principal de la app |
| `coralSoft` | `#E8927C` | CTA secundaria, acción coral |
| `coralDeep` | `#D4735C` | Coral profundo (hover) |

### Colores de Estado

| Token | Hex | Uso |
|-------|-----|-----|
| `goldBadge` | `#F2C94C` | Logros, insignias |
| `goldLight` | `#FFF8E1` | Fondo dorado claro |
| `forestCalm` | `#5B8A72` | Éxito, completado |
| `forestLight` | `#E8F5E9` | Fondo verde claro |

### Colores de Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `textPrimary` | `#1A2024` | Encabezados |
| `textBody` | `#2D3748` | Texto de cuerpo |
| `textSecondary` | `#4A5568` | Texto secundario |
| `textMuted` | `#A0AEC0` | Texto silenciado / placeholder |
| `white` | `#FFFFFF` | Blanco |
| `bgAlt` | `#FFFFFF` | Fondo alternativo |

## Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `shadows.sm` | `0 2px 8px rgba(0,0,0,0.06)` | Elevación sutil |
| `shadows.md` | `0 4px 24px rgba(0,0,0,0.08)` | Cards normales |
| `shadows.lg` | `0 8px 40px rgba(0,0,0,0.12)` | Hover, elementos prominentes |
| `shadows.coral` | `0 4px 16px rgba(232,146,124,0.35)` | Botón coral hover |
| `shadows.teal` | `0 4px 16px rgba(44,110,111,0.25)` | Botón teal hover |

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `radii.sm` | `8px` | Elementos pequeños |
| `radii.md` | `14px` | Cards, contenedores |
| `radii.lg` | `20px` | Contenedores grandes |
| `radii.xl` | `28px` | Elementos hero |
| `radii.pill` | `999px` | Botones pill, badges |

## Tipografía

| Fuente | Tipo | Uso |
|--------|------|-----|
| **Playfair Display** | Serif (Google Fonts) | Encabezados (h1, h2, títulos) |
| **Nunito** | Sans-serif (Google Fonts) | Texto de cuerpo, botones, UI |

### Tamaños Típicos

| Contexto | Tamaño | Fuente |
|----------|--------|--------|
| Hero heading | 48px (mobile: 32px) | Playfair Display |
| Section title (h2) | 28px | Playfair Display |
| Subtítulos | 17px | Nunito |
| Cuerpo | 16px | Nunito |
| Botón sm | 14px | Nunito |
| Botón md | 16px | Nunito |
| Botón lg | 17px | Nunito |
| Pequeño/muted | 13-14px | Nunito |

## Animaciones CSS

| Nombre | Efecto | Duración | Uso |
|--------|--------|----------|-----|
| `fadeInUp` | Opacidad 0 + translateY(20px) → visible | 0.6s | Cards, secciones |
| `scaleIn` | Opacidad 0 + scale(0.9) → visible | 0.5s | Badges ganados |
| `pulse` | Scale 1 → 1.05 → 1 | 2s infinite | Elementos destacados |
| `slideDown` | Opacidad 0 + translateY(-10px) → visible | 0.3s | Menú hamburguesa, diálogos |
| `float` | TranslateY 0 → -8px → 0 | 6s infinite | Decoraciones flotantes |
| `progressFill` | Width de 0% | 1s | Barras de progreso |
| `badgeUnlock` | Scale(0) + rotate(-180°) → scale(1) + rotate(0) | 0.6s | Desbloqueo de insignia |
| `shimmer` | Background-position -200% → 200% | 2s infinite | Efecto de carga |
| `celebrate` | Scale + rotate wobble | 0.6s | Celebración |
| `streak` | Opacidad + scale pulse | 1.5s infinite | Emoji de fuego (racha) |

### Accesibilidad de Animaciones
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Sistema Responsive

### Breakpoints

| Nombre | Condición | Valor |
|--------|-----------|-------|
| `isMobile` | `width < 768px` | Teléfonos |
| `isTablet` | `width < 1024px` | Tablets |
| Desktop | `width >= 1024px` | Default |

### Hook `useResponsive()`
```jsx
const useResponsive = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  // listener en resize
  return { isMobile: width < 768, isTablet: width < 1024 };
};
```

### Patrones Responsive Comunes

| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Contenedor máx. | 100% | 100% | 1200px |
| Padding horizontal | 16px | 24px | 40px+ |
| Grid de cards | 1 col | 2 cols | 3 cols |
| Grid de badges | 2 cols | 3 cols | 4 cols |
| Áreas biblioteca | 2 cols | 3 cols | 6 cols |
| Navbar | Hamburger | Horizontal | Horizontal |
| Hero | Stack vertical | Stack vertical | 2 columnas |
| Comunidad | 1 col | 1 col | 2 cols (posts + sidebar) |
| Explorer | Stack vertical | Stack vertical | Sidebar 300px + contenido |

## Variables CSS

Todos los tokens se replican como CSS custom properties:
```css
:root {
  --ocean-deep: #2C6E6F;
  --ocean-light: #4A9B9C;
  --ocean-mist: #E8F4F4;
  --sand-warm: #F5E6D3;
  --sand-light: #FDF8F3;
  --coral-soft: #E8927C;
  --gold-badge: #F2C94C;
  --forest-calm: #5B8A72;
  --text-primary: #1A2024;
  --text-body: #2D3748;
  --text-secondary: #4A5568;
  --text-muted: #A0AEC0;
}
```

## Principio Fundamental

> **Siempre usar `tokens.colors.*`, nunca valores hex directos en el código.**
