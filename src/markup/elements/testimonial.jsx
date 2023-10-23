import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png";
import testPic1 from "../../images/testimonials/pic1.png";
import testPic2 from "../../images/testimonials/pic2.png";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import testPic5 from "../../images/testimonials/pic5.jpg";
import testPic6 from "../../images/testimonials/pic6.jpg";

class testimonialSection extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="section-area section-sp3 testimonial-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Testimonial</h6>
              <h2 className="title m-b0">
                See What Our Clients <br />
                Say About us
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <div className="thumb-wraper">
                  <img className="bg-img" src={testShape} alt="" />
                  <ul>
                    <li data-member="1">
                      <Link to="#">
                        <img src={testPic1} alt="" />
                      </Link>
                    </li>
                    <li data-member="2">
                      <Link to="#">
                        <img src={testPic2} alt="" />
                      </Link>
                    </li>
                    <li data-member="3">
                      <Link to="#">
                        <img src={"https://sa1s3optim.patientpop.com/assets/images/provider/photos/2404113.jpeg"} alt="" />
                      </Link>
                    </li>
                    <li data-member="4">
                      <Link to="#">
                        <img src={"https://photos.healthgrades.com/img/prov/2/f/f/2ffq4_w120h160_vrkxOg2elaL.jpg"} alt="" />
                      </Link>
                    </li>
                    <li data-member="5">
                      <Link to="#">
                        <img src={"https://bsd-data.prod.uchicago.edu/sites/cdr/files/styles/faculty_image/public/faculty-images/6AF89BD7EF.jpg?itok=KW0r8Yct"} alt="" />
                      </Link>
                    </li>
                    <li data-member="6">
                      <Link to="#">
                        <img src={"https://lirp.cdn-website.com/e5e2073b/dms3rep/multi/opt/Theodore+M.+Mazer+M.D.+-+San+Diego%2C+CA-620w.PNG"} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <Slider {...settings} className="testimonial-slide">
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Sean and his team were wonderful to work with, and
                          they went out of their way to make Julie and everyone
                          feel comfortable and relaxed.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Debbie</h5>
                        <p>Media Relations/Engagement </p>
                        <p>HonorHealth </p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          I give DigiVid360 the highest review. I’ve been very
                          happy with your services.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Anna Eslami</h5>
                        <p>Marketing Manager</p>
                        <p>Autoimmunity InovaDX</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          If you need an incredible video marketing resource to
                          partner with, I highly recommend DigiVid…I’ve worked
                          with the group many times and they are stellar with
                          great creative marketing solutions.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Jeff Holman</h5>
                        <p>Sr. Director, Marketing & Communications</p>
                        <p>Honor Health</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Sean and his team have been incredible to work with.
                          Not only does DigiVidBIO produce high quality work, Sean
                          is truly a thought partner from pre to post
                          production. He leads physician interviews in a
                          thoughtful and professional way, working hard to
                          understand the subject matter in advance. I recommend
                          DigiVidBIO to all of my colleagues.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Marina Nekhendzy-Basin</h5>
                        <p>Senior Marketing Manager, Organ Transplantation</p>
                        <p>Natera</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          {/* <img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/> */}
        </section>
      </>
    );
  }
}

export default testimonialSection;
