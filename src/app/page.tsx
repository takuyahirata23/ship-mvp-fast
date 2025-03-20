import { Button } from '@/components/ui/button'
import {
  ComparisonCards
} from "@/components"

export default function Home() {
  return (
    <div className="grid gap-y-6">
      <section className="py-12 text-center">
        <h1 className="font-bold text-xl">🚀 Ship Your MVP Fast</h1>
        <p className="text-muted-foreground mt-4 mb-6">Bring your idea to life with a fast, high-quality MVP. Validate your concept, and get real user feedback.</p>
        <Button className="font-bold rounded-full">Book a call</Button>
      </section>
      <section>
        <h2 className="font-bold text-xl mb-4 text-center">Why Ship MVP Fast?</h2>
        <ComparisonCards />
      </section>
    </div>
  );
}
