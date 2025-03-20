import { Button } from '@/components/ui/button'
import {
  ComparisonCards,
  HowWeWork,
  Pricing,
  ReactWorks
} from "@/components"

export default function Home() {
  return (
    <div className="grid">
      <section className="py-16 text-center md:py-24">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">🚀 Ship MVP Fast</h1>
        <p className="text-muted-foreground mt-4 mb-6 md:text-lg">Bring your idea to life in weeks. We work and ship fast!</p>
        <Button className="font-bold rounded-full" size="lg">Book a call</Button>
      </section>
      <div className="space-y-18 md:space-y-32">
        <section>
          <h2 className="font-bold text-2xl mb-4 text-center md:text-3xl md:mb-8">Recent Works</h2>
          <ReactWorks />
        </section>
        <section>
          <h2 className="font-bold text-2xl mb-4 text-center md:text-3xl md:mb-8">Why Ship MVP Fast?</h2>
          <ComparisonCards />
        </section>
        <section>
          <h2 className="font-bold text-2xl mb-4 text-center md:text-3xl md:mb-8">How We Work</h2>
          <HowWeWork />
        </section>
        <section>
          <h2 className="font-bold text-2xl mb-4 text-center md:text-3xl md:mb-8">Simple, Transparent Pricing</h2>
          <Pricing />
        </section>
      </div>
    </div>
  );
}
