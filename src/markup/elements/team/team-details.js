import React, { Component } from "react";
// Import Images

import { Image } from "react-bootstrap";
import { teamMembers } from "../../pages/team";

class TeamInfoSection extends Component {
  render() {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            marginTop: "32px",
            marginBottom: "32px ",
          }}
        >
          Our Executive Team
        </h1>
        {teamMembers.map((teamMember, index) => (
          <section className="section-sp1 about-area">
            <div className="container">
              <div className="row align-items-center">
                <div key={index} className="col-lg-4 col-sm-6">
                  <div className="team-member mb-30">
                    <div className="team-media">
                      <img src={teamMember.image} alt="" />
                    </div>
                    <div className="team-info">
                      <div className="team-info-comntent">
                        <h4 className="title">{teamMember.name}</h4>
                        <span className="text-secondary">
                          {teamMember.subtitle}
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
                <div className="col-lg-8 mb-30">
                  <div className="heading-bx">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <h2 className="title-ext text-secondary">
                        {teamMember.name}
                      </h2>
                      <h6>{teamMember.subtitle}</h6>
                    </div>
                    <h6
                      style={{
                        marginTop: "32px",
                        marginBottom: "32px ",
                        fontWeight: "400",
                      }}
                    >
                      {teamMember.bio.map((paragraph, index) => (
                        <p 
                        style={{
                          wordSpacing: "2px",
                          lineHeight: "2",
                        }}
                        
                        key={index}>{paragraph}</p>
                      ))}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/> */}
          </section>
        ))}
      </>
    );
  }
}

export default TeamInfoSection;
