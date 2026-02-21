import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-dark-500 text-gray-200">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
