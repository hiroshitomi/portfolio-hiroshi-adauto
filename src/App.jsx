import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import SectionContainer from "./components/SectionContainer";
import Layout from "./layouts/Layout";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(()=> {
    Aos.init()
  },[])
  
  return (
    <Layout>
      <Header />

      <SectionContainer id="top" className="py-44 h-screen">
        <Presentation />
      </SectionContainer>

      <SectionContainer id="sobre-mi" className="py-44 h-screen">
        <AboutMe />
      </SectionContainer>

      <SectionContainer id="experiencia" className="py-44 h-screen">
        <Experience />
      </SectionContainer>

      <SectionContainer id="proyectos" className="py-44 pb-32">
        <Projects />
      </SectionContainer>

      <SectionContainer id="contacto" className="py-44 h-screen">
        <Contact />
      </SectionContainer>

      <Footer />
    </Layout>
  );
}

export default App;
