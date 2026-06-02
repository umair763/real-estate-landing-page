import { HeroSection } from "../components/hero.section";
import { QuickActions } from "../components/quick.actions";
import { FeaturedProperties } from "../components/featured.properties";
import { TrustSection } from "../components/trust.section";
import { TestimonialsSection } from "../components/testimonials.section";
import { CtaBanner } from "../components/cta.banner";
import { FeaturedNeighborhoods } from "../components/featured.neighborhoods";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <FeaturedProperties />
      <FeaturedNeighborhoods />
      <TrustSection />
      <CtaBanner />
      <div className="relative">
        <TestimonialsSection />
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#000000] via-[#000000]/65 to-transparent z-20 pointer-events-none" />{" "}
      </div>
    </>
  );
};
