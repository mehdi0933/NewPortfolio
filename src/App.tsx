import { Navbar } from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
  );
}

export default App;