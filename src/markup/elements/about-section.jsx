import React, { Component } from "react";


class AboutSection extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <div className="about-thumb-area">
                  <ul>
                    <li>
                      <img
                        className="about-thumb1"
                        src={
                          "https://media.licdn.com/dms/image/D4E22AQEBHlVWUJKx8A/feedshare-shrink_800/0/1694617903489?e=1698883200&v=beta&t=EEMBaV_xNGF8vtR9IlohUx4hpxQ21otxTJKATiOOHRU"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="about-thumb2"
                        src={
                          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/9v8lyahkTDOsTm8sAW0g"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="about-thumb3"
                        src={
                          "https://media.graphassets.com/output=format:jpg/YkQSKGbSQhi5HD8nr30A"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="exp-bx"
                        src={
                          "https://media.graphassets.com/output=format:jpg/KKHxB71gTeyzJhruzn5Z"
                        }
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="heading-bx">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <h2 className="title-ext text-secondary">Our Culture</h2>
                  </div>
                  <h6
                    style={{
                      marginTop: "32px",
                      marginBottom: "32px ",
                      fontWeight: "400",
                    }}
                  >
                    The DigiVidBIO team is dedicated to the Life Sciences,
                    Healthcare, and MedTech spaces.
                    <br />
                    <br />
                    As a result, we are a strategic partner that is uniquely
                    positioned to provide video digital media and AI solutions
                    for the Healthcare, Life Sciences and MedTech industries.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/> */}
        </section>
      </>
    );
  }
}

export default AboutSection;
