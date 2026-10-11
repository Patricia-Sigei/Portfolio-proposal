import Hero from './sections/Hero'
import Offer from './sections/Offer'
import Portfolio from './sections/Portfolio'
import Clients from './sections/Clients'
import Testimonials from './sections/Testimonials'
import Closing from './sections/Closing'
import Footer from './sections/Footer'

// The page, top to bottom. Reorder or remove sections here.
export default function App() {
  return (
    <>
      <Hero />
      <Offer />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Closing />
      <Footer />
    </>
  )
}
