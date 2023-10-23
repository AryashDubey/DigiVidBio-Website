import React from "react";

// Elements
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";
import CaseStudy2 from "../elements/case-study-2";
import OurTeam from "../elements/our-team";
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
