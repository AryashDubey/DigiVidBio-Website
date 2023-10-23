import { Image } from "react-bootstrap";
import { MiroculusTestimonial } from "../case-study-2";

export const DigitalMediaDetails = (
  <section className="section-sp1 about-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-30">
          <div className="heading-bx">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <h6 className="title-ext text-secondary">
                Pre to Post Conference Marketing Solutions{" "}
              </h6>
            </div>
            <p>
              Increase your event's impact with our suite of services, including
              pre-conference video ads, KOL/SME testimonials, product
              theater/workshop recordings, and animated poster presentations. We
              ensure your message resonates long after the event concludes.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature1">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">Pre Conference Video Ads</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature2">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">Capture KOL/SME testimonials</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature1">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">
                    Record Product Theaters/Workshops
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature2">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">Animated Poster Presentations</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-30">
          <Image
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
            src={
              "https://healthitmarketingconference.com/wp-content/uploads/2021/06/HITMC19BreakoutSession.jpg"
            }
            alt="Conference Marketing"
          />
        </div>
        <div className="conference-marketing-bx">
          <div className="conference-marketing-content">
            <h2>Increase Booth Attendance and Booked Meetings</h2>
            <ul>
              <li>• Eye-Catching Booth Loop Videos</li>
              <li>• Event Landing Pages</li>
              <li>• Geofencing Conferences</li>
            </ul>
          </div>
          <div className="conference-marketing-bx-image">
            <Image
              src={
                "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/biotech.png"
              }
              alt="Rebus Bio Systems"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
    {/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/> */}
  </section>
);
