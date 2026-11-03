import About from '../pages/About'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../pages/Hero'
import Projects from '../pages/Projects'
import Testimonials from '../pages/Testimonals'
import ClientsAnalytics from '../pages/ClientsAnalytics'

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ClientsAnalytics/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
