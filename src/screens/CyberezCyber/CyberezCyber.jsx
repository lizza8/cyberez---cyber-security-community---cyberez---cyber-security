import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection/CustomerTestimonialsSection";
import { DigitalAssetProtectionFeaturesSection } from "./sections/DigitalAssetProtectionFeaturesSection/DigitalAssetProtectionFeaturesSection";
import { DigitalEmpowermentHeroSection } from "./sections/DigitalEmpowermentHeroSection/DigitalEmpowermentHeroSection";
import { JourneyOverviewSection } from "./sections/JourneyOverviewSection/JourneyOverviewSection";
import { KeyServiceFeaturesSection } from "./sections/KeyServiceFeaturesSection/KeyServiceFeaturesSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";
import { SubscriptionPricingSection } from "./sections/SubscriptionPricingSection/SubscriptionPricingSection";

export const CyberezCyber = () => {
  return (
    <div className="w-full min-w-[1440px] relative" data-model-id="0:194">
      <DigitalEmpowermentHeroSection />
      <JourneyOverviewSection />
      <DigitalAssetProtectionFeaturesSection />
      <KeyServiceFeaturesSection />
      <SubscriptionPricingSection />
      <CustomerTestimonialsSection />
      <SiteFooterSection />
    </div>
  );
};
