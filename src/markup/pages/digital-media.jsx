import React from "react";

// Elements
import LatestNewsSection from "../elements/latest-news-slider";
import { ContactSection } from "../elements/contact-section";
import { ConferenceMarketingDetail } from "../elements/conference-marketing/detail";
import ConferenceMarketingServicesDetails from "../elements/conference-marketing/services-slider";
import DigitalMediaBanner from "../elements/digital-media/main-banner";
import { DigitalMediaDetails } from "../elements/digital-media/detail";
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
