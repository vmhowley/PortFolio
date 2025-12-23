import Snowfall from 'react-snowfall';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <AboutMe />
        <Contact />
        <Footer />
        <Snowfall
          style={{
            position: 'fixed',

          }}
        />
      </div>
    </>
  );
}

export default App;
