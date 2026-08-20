import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { HowWeWork } from './components/HowWeWork';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Projects />
          <HowWeWork />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
