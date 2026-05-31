import { HeroSection } from "../components/hero.section";
import { QuickActions } from "../components/quick.actions";
import { FeaturedProperties } from "../components/featured.properties";
import { TrustSection } from "../components/trust.section";
import { CtaBanner } from "../components/cta.banner";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <FeaturedProperties />
      <TrustSection />
      <CtaBanner />
    </>
  );              
};
