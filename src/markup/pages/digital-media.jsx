import React from "react";

// Elements
import { ContactSection } from "../elements/contact-section";
import DigitalMediaBanner from "../elements/digital-media/main-banner";
import DigitalMediaServicesSlider from "../elements/digital-media/services-slider";
function DigitalMarketingPage() {
  return (
    <>
      <DigitalMediaBanner />

      <DigitalMediaServicesSlider />

      <ContactSection />
    </>
  );
}

export default DigitalMarketingPage;
