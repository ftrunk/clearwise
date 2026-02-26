import ContactCTA from '../sections/ContactCTA/ContactCTA'
import FAQ from '../sections/FAQ/FAQ'
import Footer from '../sections/Footer/Footer'
import Hero from '../sections/Hero/Hero'
import Outcome from '../sections/Outcome/Outcome'
import Problems from '../sections/Problems/Problems'
import ProcessTimeline from '../sections/Process/ProcessTimeline'

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <ProcessTimeline />
      <Outcome />
      <ContactCTA />
      <FAQ />
      <Footer />
    </>
  )
}
