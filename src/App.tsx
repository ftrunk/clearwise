import ContactCTA from './sections/ContactCTA/ContactCTA'
import FAQ from './sections/FAQ/FAQ'
import Hero from './sections/Hero/Hero'
import Outcome from './sections/Outcome/Outcome'
import Problems from './sections/Problems/Problems'
import ProcessTimeline from './sections/Process/ProcessTimeline'

export default function App() {
  return (
    <>
      <Hero />
      <Problems />
      <ProcessTimeline />
      <Outcome />
      <ContactCTA />
      <FAQ />
    </>
  )
}
