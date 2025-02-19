import Hero from "./components/Hero";
import { PrizesSection } from "./components/PrizesSection";
import { HowItWorks } from "./components/HowItWorks";
import { Leaderboard } from "./components/Leaderboard";
import { SecondHero } from "./components/SecondHero";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow  bg-[#121212]">
      <Header />
      <Hero />
      <SecondHero />
      <PrizesSection />
      <HowItWorks />
      <Leaderboard />
    </div>
  );
}
