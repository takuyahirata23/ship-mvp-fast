import { Button } from '@/components/ui/button'
import {
  ComparisonCards,
  ReactWorks
} from "@/components"

export default function Home() {
  return (
    <div className="grid">
      <section className="py-12 text-center">
        <h1 className="font-bold text-xl">🚀 Ship MVP Fast</h1>
        <p className="text-muted-foreground mt-4 mb-6">Bring your idea to life in weeks. We work and ship fast!</p>
        <Button className="font-bold rounded-full">Book a call</Button>
      </section>
      <div className="space-y-16">
        <section>
          <h2 className="font-bold text-xl mb-4 text-center">Recent Works</h2>
          <ReactWorks />
        </section>
        <section>
          <h2 className="font-bold text-xl mb-4 text-center">Why Ship MVP Fast?</h2>
          <ComparisonCards />
        </section>
      </div>
    </div>
  );
}
