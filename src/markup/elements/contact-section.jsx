import React from "react";
import { Link } from "react-router-dom";
import {
  dvBioAddressL1,
  dvBioAddressL2,
  dvBioAddressL3,
  dvBioEmail,
  dvBioKelleyHowardEmail,
  dvBioNumber,
} from "../../images/const";
import { Contact } from "../pages/contact-widget";

export const ContactSection = () => {
  return (
    <div className="page-content bg-white">
      <div className="banner-wraper">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Contact Us
        </h1>
        <div className="page-banner banner-sm contact-banner"></div>
      </div>

      {Contact()}

      <section className="section-area section-sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-container feature-bx4 feature4">
                <div className="icon-md feature-icon">
                  {/* <img src={icon1} alt=""/> */}
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Contact Number</h5>
                  <p>{dvBioNumber}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-container feature-bx4 feature3">
                <div className="icon-md feature-icon">
                  {/* <img src={icon3} alt=""/> */}
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Email Address</h5>
                  <Link
                    to={`mailto:${dvBioEmail}?subject=More Information About DigiVidBio`}
                    style={{
                      color: "#000",
                    }}
                  >
                    {dvBioEmail}{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-container feature-bx4 feature2">
                <div className="icon-md feature-icon">
                  {/* <img src={icon2} alt=""/> */}
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Address</h5>
                  <p>
                    {dvBioAddressL1}
                    <br />
                    {dvBioAddressL2}
                    <br />
                    {dvBioAddressL3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
