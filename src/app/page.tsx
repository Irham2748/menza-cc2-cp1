import CompanyOverview from "./company_overview/page";
import HeroSection from "./hero_section/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  ),
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
    </>
  );
}
