import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

import '@fontsource/plus-jakarta-sans';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
