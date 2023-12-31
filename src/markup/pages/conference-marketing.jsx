import React from "react";


import LatestNewsSection from "../elements/latest-news-slider";
import { ContactSection } from "../elements/contact-section";
import ConferenceMarketingBanner from "../elements/conference-marketing/main-banner";
import { ConferenceMarketingDetail } from "../elements/conference-marketing/detail";
import ConferenceMarketingServicesDetails from "../elements/conference-marketing/services-slider";
function ConferenceMarketing() {
  return (
    <>
      <ConferenceMarketingBanner />
      {ConferenceMarketingDetail}

      <ConferenceMarketingServicesDetails />

      <LatestNewsSection />
      <ContactSection />
    </>
  );
}

export default ConferenceMarketing;
