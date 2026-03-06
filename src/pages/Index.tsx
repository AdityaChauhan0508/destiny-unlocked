import { useState } from "react";
import StickyNavbar from "@/components/StickyNavbar";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import FreeReportSection from "@/components/FreeReportSection";
import HowItWorks from "@/components/HowItWorks";
import AboutExpert from "@/components/AboutExpert";
import Testimonials from "@/components/Testimonials";
import PaidServices from "@/components/PaidServices";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";
import LeadPopup from "@/components/LeadPopup";

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);

  return (
    <>
      <StickyNavbar onCTA={openPopup} />
      <main>
        <HeroSection onCTA={openPopup} />
        <PainPointSection onCTA={openPopup} />
        <FreeReportSection onCTA={openPopup} />
        <HowItWorks />
        <AboutExpert onCTA={openPopup} />
        <Testimonials />
        <PaidServices />
        <FinalCTA onCTA={openPopup} />
      </main>
      <SiteFooter />
      <LeadPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </>
  );
};

export default Index;
