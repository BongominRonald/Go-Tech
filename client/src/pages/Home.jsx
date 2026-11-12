import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import LiveSample from '../components/LiveSample.jsx'
import Process from '../components/Process.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials, { Trust } from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LiveSample />
      <Process />
      <Pricing />
      <Testimonials />
      <Trust />
      <Contact />
    </>
  )
}
