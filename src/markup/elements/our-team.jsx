import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../images/logos/rebus.png";
import clientImage from "../../images/testimonials/pic1.png";
import { ReactComponent as VideoCameraIcon } from "../../images/icon/Video_camera_icon.svg";
import { ReactComponent as ProductIcon } from "../../images/icon/product.svg";
// Import Images
import aboutThumb1 from "../../images/about/pic-1.jpg";
import aboutThumb2 from "../../images/about/pic-2.jpg";
import aboutThumb3 from "../../images/about/pic-3.jpg";
import ptImg1 from "../../images/shap/wave-orange.png";
import ptImg2 from "../../images/shap/circle-small-blue.png";
import ptImg4 from "../../images/shap/square-dots-orange.png";
import ptImg5 from "../../images/shap/square-blue.png";
import { Image } from "react-bootstrap";
import { jasonFairImage, kelleyHowardImage } from "../../images/const";
const teamMembers = [
  {
    name: "Kelley Howard",
    specialization: "Founder & Strategist",
    image: kelleyHowardImage,
    socialMedia: [
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/kelleyhoward/",
      },
    ],
  },
  {
    name: "Jason Fair",
    specialization: "VP Digital Strategy",
    image: jasonFairImage,
    socialMedia: [
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/jasonfair" },
    ],
  },
];
class OurTeam extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 about-area">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            The Difference: Our Team
          </h1>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <div className="row justify-content-center">
                  {teamMembers.map((teamMember, index) => (
                    <div key={index} className="col-lg-40 col-sm-6 mb-30">
                      <div className="team-member">
                        <div className="team-media">
                          <img src={teamMember.image} alt={teamMember.name} />
                        </div>
                        <div className="team-info">
                          <div className="team-info-content">
                            <h4 className="title">{teamMember.name}</h4>
                            <span className="text-secondary">
                              {teamMember.specialization}
                            </span>
                          </div>
                          <ul className="social-media mt-3">
                            {teamMember.socialMedia.map((social, index) => (
                              <li key={index}>
                                <a
                                  rel="noreferrer"
                                  target="_blank"
                                  href={social.link}
                                >
                                  <i
                                    className={`fab fa-${social.platform.toLowerCase()}`}
                                  />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="heading-bx">
                  <h6 className="title-ext text-secondary">Team </h6>
                  <p>
                    Since our founding, we have become the leading Life
                    Sciences, Healthcare, and MedTech digital marketing partner,
                    delivering experience, innovation, and results.
                  </p>{" "}
                  <p>
                    Our clients love working with DigiVidBio because they feel
                    like they have a true partner. Learn more about our team and
                    why.
                  </p>
                </div>
                <div className="row"></div>
                <Link to="/about-us" className="btn btn-primary shadow">
                  Meet the DigiVidBIO Team{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default OurTeam;
