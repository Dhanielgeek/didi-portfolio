import About from '../pages/About'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../pages/Hero'
import Projects from '../pages/Projects'
import Testimonials from '../pages/Testimonals'

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
