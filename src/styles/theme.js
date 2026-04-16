export const theme = {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceHover: '#2a2a2a',
    border: '#333333',
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      muted: '#999999',
    },
    accent: '#ffffff',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    hero: 'clamp(2.5rem, 6vw, 5rem)',
    h1: 'clamp(2rem, 5vw, 4rem)',
    h2: 'clamp(1.5rem, 4vw, 3rem)',
    h3: 'clamp(1.2rem, 3vw, 2rem)',
    body: '1rem',
    small: '0.875rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    full: '9999px',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  }
};
