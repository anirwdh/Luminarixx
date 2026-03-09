import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyLuminarix from './components/WhyLuminarix';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="why-luminarix">
          <WhyLuminarix />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
