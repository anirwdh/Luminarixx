import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: #0e0e0e;
    color: #ffffff;
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4d6d;
    }
  }

  .gradient-text {
    background: linear-gradient(135deg, #ff4d6d, #00fff7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 100px 0;
    position: relative;
  }

  .btn {
    display: inline-block;
    padding: 15px 40px;
    background: linear-gradient(135deg, #ff4d6d, #00fff7);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 77, 109, 0.3);
    }
  }

  .btn-secondary {
    background: transparent;
    border: 2px solid #ffffff;
    color: #ffffff;

    &:hover {
      background: #ffffff;
      color: #0e0e0e;
      border-color: #ffffff;
    }
  }

  
  /* Selection styling */
  ::selection {
    background: rgba(255, 77, 109, 0.3);
    color: #ffffff;
  }

  /* Loading animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out;
  }

  .animate-pulse {
    animation: pulse 2s infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes rotate-reverse {
    from {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;
