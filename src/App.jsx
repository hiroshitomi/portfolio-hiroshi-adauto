import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import SectionContainer from './components/SectionContainer'
import Layout from './layouts/Layout'

function App() {

  return (
    <Layout>
      <Header/>
      <SectionContainer id="top" className="py-44 pb-32">
        <Presentation/>
      </SectionContainer>
      <SectionContainer id="experiencia" className="py-44 pb-32">
        <Experience/>
      </SectionContainer>
      <SectionContainer id="proyectos" className="py-44 pb-32">
        <Projects/>
      </SectionContainer>
      <SectionContainer id="contacto" className="py-44 pb-32">
        <Contact/>
      </SectionContainer>
      <Footer/>
    </Layout>
  )
}

export default App
