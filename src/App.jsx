import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F12] text-white selection:bg-[#3A6DFF] selection:text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-[120px]" style={{ background: '#3A6DFF33' }} />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full blur-[120px]" style={{ background: '#7A5CFF33' }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-[120px]" style={{ background: '#43F2C833' }} />
      </div>

      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
