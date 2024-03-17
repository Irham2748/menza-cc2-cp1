import CompanyOverview from "./personal_overview/page";
import HeroSection from "./hero_section/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="border-2 border-lime-500" />
      <CompanyOverview />
    </>
  );
}
