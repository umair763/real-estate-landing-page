import { HeroSection } from "../components/hero.section";
import { QuickActions } from "../components/quick.actions";
import { FeaturedProperties } from "../components/featured.properties";
import { TrustSection } from "../components/trust.section";
import { TestimonialsSection } from "../components/testimonials.section";
import { CtaBanner } from "../components/cta.banner";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <FeaturedProperties />
      <TrustSection />
      <CtaBanner />
      <div className="relative">
        <TestimonialsSection />
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black via-black/95 to-transparent z-20 pointer-events-none" />{" "}
      </div>
    </>
  );
};
