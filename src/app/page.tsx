import PersonalOverview from "./personal_overview/page";
import HeroSection from "./hero_section/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="border border-red-500"/>
      <PersonalOverview />
    </>
  );
}
