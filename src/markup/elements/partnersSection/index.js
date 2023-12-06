import React from "react";
import { ReactComponent as Illumina } from "../../../images/logos/illumina.svg";

import "./index.scss";
export const PartnersSection = () => {
  return (
    <div className="partner_section">
      <h2 style={{
        fontWeight: "normal",
      }}>Our Clients</h2>
      <div style={{ height: "48px" }} />
      <div className="partner_section_logo_section">
        <div className="partner_section_logo_sub_section">
          <Illumina className="partner_section_brand_logo" />{" "}
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/ZKOtJtBQ431UgtCWFVFg"
            className="partner_section_brand_logo"
            alt="Agilent Technologies"
          />
        </div>
        <div className="partner_section_logo_sub_section">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/J1Xz5MKR3ivjAO1PkXgO"
            alt="Helix"
            className="partner_section_brand_logo"
            style={{
              objectFit: "contain",
            }}
          />
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gLtn2UwSOHeFehFTl7nQ"
            alt="Helix"
            className="partner_section_brand_logo"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="partner_section_logo_sub_section">
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Qt9WwwjoTmygjYirjkaj"
            alt="10x Genomics"
            className="partner_section_brand_logo" style={{
              objectFit: "contain",
            }}
          />
          <img
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/jbNVCm0SdG3bPXc3rowA"
            alt="10x Genomics"
            className="partner_section_brand_logo" style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>{" "}
      <div style={{ height: "64px" }} />
    </div>
  );
};
