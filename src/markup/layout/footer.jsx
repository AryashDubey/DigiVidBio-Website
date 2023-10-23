import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../images/logo.png";
import footerBg from "../../images/background/footer.jpg";
import ptImg1 from "../../images/shap/wave-blue.png";
import ptImg2 from "../../images/shap/circle-dots.png";
import ptImg3 from "../../images/shap/plus-blue.png";
import ptImg4 from "../../images/shap/wave-blue.png";

// Social Images
import facebook from "../../images/social/facebook.png";
import twitter from "../../images/social/twitter.png";
import instagram from "../../images/social/instagram.png";
import linkedin from "../../images/social/linkedin.png";
import { dvBioNumber } from "../../images/const";
import { Image } from "react-bootstrap";

class aboutSection extends Component {
  render() {
    return (
      <>
        <footer
          className="footer"
          style={{ backgroundImage: "url(" + footerBg + ")" }}
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="widget widget_info">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={Logo} alt="" />
                      </Link>
                    </div>
                    <div className="ft-contact">
                      <p>
                        DigiVidBIO™ is a digital marketing firm dedicated to
                        Life Sciences, Healthcare and MedTech.
                      </p>{" "}
                      <h3> Proud Members of</h3>{" "}
                      <Image
                        src={
                          "https://s11759.pcdn.co/wp-content/uploads/2023/01/AZBio-20-years-no-bold-Tight.png"
                        }
                        style={{
                          marginTop: "32px",
                          marginBottom: "16px ",
                          width: "200px",
                          objectFit: "contain",
                        }}
                        alt="Rebus Bio Systems"
                      />
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/pick-a-class.appspot.com/o/images-removebg-preview.png?alt=media&token=04c241d7-ab2d-46bb-9a35-822489a0635b&_gl=1*ky2fjw*_ga*OTIxMzQyMTU0LjE2OTc1Nzc2MTY.*_ga_CW55HF8NVT*MTY5NzU3NzYxNi4xLjEuMTY5NzU3ODI0OC41MS4wLjA."
                        }
                        style={{
                          marginBottom: "32px ",

                          width: "200px",
                          objectFit: "contain",
                        }}
                        alt="ASCO"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-6">
                  <div className="widget footer_widget ml-50">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul>
                      <li>
                        <Link to="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/conference-marketing">
                          <span>Conference Marketing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/video-portfolio">
                          <span>Video Portfolio</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/about-us">
                          <span>About Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-6">
                  <div className="widget footer_widget">
                    <h3 className="footer-title">Our Services</h3>
                    <ul>
                      <li>
                        <Link to="/ai">
                          <span>Artificial Intelligence</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-grid">
                          <span>Blogs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies">
                          <span>Case Studies</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/team">
                          <span>Our Team</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact-us">
                          <span>Contact</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="widget widget_form">
                    <h3 className="footer-title">Get Our Newsletter</h3>
                    <form className="subscribe-form subscription-form mb-30">
                      <div className="ajax-message"></div>
                      <div className="input-group">
                        <input
                          name="email"
                          required="required"
                          className="form-control"
                          placeholder="Email Address"
                          type="email"
                        />
                      </div>
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn btn-secondary shadow w-100"
                      >
                        Join the Newsletter
                      </button>
                    </form>
                    <div className="footer-social-link">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/DigiVidBIO"
                          >
                            <img src={twitter} alt="" />
                          </a>
                        </li>

                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/company/DigiVidBIO/"
                          >
                            <img src={linkedin} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="copyright-text">
                    Copyright © 2023 Design & Developed by DigiVidBIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default aboutSection;
