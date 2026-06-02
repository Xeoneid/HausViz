import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { ToursGallery } from "@/components/tours-gallery"
import { ForWho } from "@/components/for-who"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <ToursGallery />
      <ForWho />
      <Pricing />
      <FAQ />
      <ContactFooter />
    </main>
  )
}
