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
            src="https://research.ncsu.edu/metric/files/2020/11/Agilent-Technologies-logo.jpg"
            className="partner_section_brand_logo"
            alt="Agilent Technologies"
          />
        </div>
        <div className="partner_section_logo_sub_section">
          <img
            src="https://cdn.cookielaw.org/logos/fcbe7ec9-f74a-4af1-9be6-e0726dcc9df6/baaab0cf-0f35-4a8c-8910-1fb31bcfd73a/518220b0-6a7b-4ace-94d9-0288bb5e308f/logo-helix.png"
            alt="Helix"
            className="partner_section_brand_logo"
            style={{
              objectFit: "contain",
            }}
          />
          <img
            src="https://mma.prnewswire.com/media/2166479/T_BCT_Stack_CMYK_Large.jpg?p=facebook"
            alt="Helix"
            className="partner_section_brand_logo"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="partner_section_logo_sub_section">
          <img
            src="https://ef4hea9dc2b.exactdn.com/wp-content/uploads/2015/09/Myriad-Logo-lowRes.png"
            alt="10x Genomics"
            className="partner_section_brand_logo" style={{
              objectFit: "contain",
            }}
          />
          <img
            src="https://mma.prnewswire.com/media/286881/Natera_Inc___Logo.jpg?p=facebook"
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
