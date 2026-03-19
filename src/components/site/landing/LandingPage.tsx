import { Features } from "./Features";
import { Hero } from "./Hero";
import { LandingCTA } from "./LandingCTA";
import { LandingFooter } from "./LandingFooter";
import { LandingHeader } from "./LandingHeader";
import { WhyVibeCodingFails } from "./WhyVibeCodingFails";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100 transition-colors">
      <LandingHeader />
      <main className="relative">
        <Hero />
        <Features />
        <WhyVibeCodingFails />
        <LandingCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
