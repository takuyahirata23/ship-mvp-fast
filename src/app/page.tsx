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
        <p className="text-muted-foreground mt-4 mb-6 md:mb-8 md:text-lg">Bring your idea to life in weeks. We work and ship fast!</p>
        <Button className="font-bold rounded-full" size="lg" asChild>
          <a href="https://cal.com/takuya-hirata-plf82x/15min" target="_blank" rel="noopener">
            Book a call
          </a>
        </Button>
        <p className="text-muted-foreground mt-4 text-sm md:text-base">Free 15 minutes call to learn how we can help your build your MVP fast</p>
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
          <div className="flex flex-col items-center mt-10">
            <h3 className="font-bold text-xl mb-4 md:text-2xl">Need to ship your MVP fast?</h3>
            <Button className="font-bold rounded-full" size="lg" asChild>
              <a href="https://cal.com/takuya-hirata-plf82x/15min" target="_blank" rel="noopener">
                Book a call
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
