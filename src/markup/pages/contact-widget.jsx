import { Link } from "react-router-dom";
import {
  dvBioAddressL1,
  dvBioAddressL2,
  dvBioAddressL3,
  dvBioEmail,
  dvBioNumber,
} from "../../images/const";
import pic1 from "../../images/about/pic-1.jpg";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  function textFieldChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setCompanyName(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  }
  return (
    <section className="">
      <div className="container">
        {" "}
        <div className="contact-wraper">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <form
                className="form-wraper contact-form ajax-form"
                onSubmit={async (e) => {
                  e.preventDefault();

                  alert(
                    "Thank you for contacting us. We will get back to you shortly."
                  );
                  console.log(name, email, companyName, message);
                }}
              >
                <div className="ajax-message"></div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      name="name"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Your Name"
                      onChange={textFieldChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      name="email"
                      type="email"
                      required
                      className="form-control"
                      placeholder="Email"
                      onChange={textFieldChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      name="company"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Company Name"
                      onChange={textFieldChange}
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <textarea
                      name="message"
                      required
                      className="form-control"
                      placeholder="Tell us about your project"
                      onChange={textFieldChange}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      defaultValue="Submit"
                      className="btn w-100 btn-secondary btn-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 mb-30">
              <div
                className="contact-info ovpr-dark"
                style={{ backgroundImage: "url(" + pic1 + ")" }}
              >
                <div className="info-inner">
                  <h4 className="title mb-30">Contact Us</h4>
                  <div className="icon-box">
                    <h6 className="title">
                      <i className="ti-map-alt"></i>Location
                    </h6>
                    <p>
                      {dvBioAddressL1}
                      <br />
                      {dvBioAddressL2}
                      <br />
                      {dvBioAddressL3}
                    </p>
                  </div>
                  <div className="icon-box">
                    <h6 className="title">
                      <i className="ti-id-badge"></i>Email &amp; Phone
                    </h6>
                    <Link
                      to={`mailto:${dvBioEmail}?subject=More Information About DigiVidBio`}
                      className="text-white"
                    >
                      {dvBioEmail}{" "}
                    </Link>
                    <p>{dvBioNumber}</p>
                  </div>
                  <div className="icon-box">
                    <h6 className="title">
                      <i className="ti-world"></i>Follow Us
                    </h6>
                    <ul className="social-media">
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://twitter.com/DigiVidBIO"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/company/DigiVidBIO/"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
