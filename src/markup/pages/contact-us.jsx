import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import {
  dvBioAddressL1,
  dvBioAddressL2,
  dvBioAddressL3,
  dvBioEmail,
  dvBioNumber,
} from "../../images/const";
import { Contact } from "./contact-widget";

function ContactUs() {
  return (
    <>
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner banner-lg contact-banner"
            style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Contact Us</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>{" "}
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {Contact()}

       
      </div>
    </>
  );
}

export default ContactUs;
