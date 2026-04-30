import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WorkFlexibility from '@/components/sections/WorkFlexibility'
import Welcome from '@/components/sections/Welcome'
import USP from '@/components/sections/USP'
import Results from '@/components/sections/Results'
import Team from '@/components/sections/Team'
import Recruitment from '@/components/sections/Recruitment'
import ContactForm from '@/components/sections/ContactForm'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/sections/Footer'
import StickyMobileCTA from '@/components/sections/StickyMobileCTA'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Hero />
      <Services />
      <WorkFlexibility />
      <Welcome />
      <USP />
      <Results />
      <Team />
      <Recruitment />
      <ContactForm />
      <Newsletter />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
