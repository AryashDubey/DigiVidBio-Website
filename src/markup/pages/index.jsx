import React from "react";

// Elements
import MainBannerSection from "../elements/main-banner";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";
import CaseStudy1 from "../elements/case-study-1";
import CaseStudy2 from "../elements/case-study-2";
import OurTeam from "../elements/our-team";
import { Contact } from "./contact-widget";
import { Image } from "react-bootstrap";
import { joinLinkedInGroup } from "../elements/linkedInGroupCTA";
import { PartnersSection } from "../elements/partnersSection";

function Index() {
  return (
    <>
      <MainBannerSection />
      <PartnersSection />

      <CaseStudy1 />
      <CaseStudy2 />
      <ServicesSliderSection />

      <TestimonialSection />
      <OurTeam />

      <LatestNewsSection />
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "200px",
        }}
      >
        Contact Us
      </h1>
      {Contact()}

      {joinLinkedInGroup}
    </>
  );
}

export default Index;
