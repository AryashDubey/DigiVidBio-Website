import React, { Component } from "react";
import { Link } from "react-router-dom";

// Elements
import AboutSection from "../elements/about-section";
import LatestNewsSection from "../elements/latest-news-slider";
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import TeamInfoSection from "../elements/team/team-details";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";

class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Privacy Policy</h1>
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Privacy Policy
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <section className="section-sp1 about-area">
            <div className="container">
              Last Updated: June 2018 <br /> <br />
              Effective Date: May 2018 <br /> <br />
              This Privacy Policy explains how information about you is
              collected, used and disclosed by DigiVidBio, a division of
              DigiVid360 LLC (“Company,” “we,” “us” or “our”). This Privacy
              Policy applies to information we collect when you use our
              websites, mobile applications and the services, content, and
              materials made available through our websites or mobile
              applications (collectively, the “Services”), or when you otherwise
              interact with us. <br /> <br />
              We may change this Privacy Policy from time to time. If we make
              changes, we will notify you by revising the “Last Updated” date at
              the top of this policy and, in some cases, we may provide you with
              additional notice (such as by adding a statement to our website or
              by sending you a notification). We encourage you to review our
              Privacy Policy whenever you access the Services or otherwise
              interact with us to stay informed about our information practices
              and the ways you can help protect your privacy. <br /> <br />
              <h3>
                COLLECTION OF INFORMATION <br /> <br />
              </h3>
              DigiVid360 is the parent company of DigiVid. Information collected
              on DigiVid may be shared with DigiVid360. <br /> <br />
              <h3>
                Information You Provide to Us <br /> <br />
              </h3>
              We collect information you provide directly to us. For example, we
              collect information when you create an account, participate in any
              interactive features of the Services, subscribe to a newsletter or
              email list, participate in an event, survey, contest or promotion,
              make a purchase, communicate with us via third-party social media
              sites, request customer support or otherwise communicate with us.{" "}
              <br /> <br />
              The types of information we may collect include your name, email
              address, postal address, phone number, gender, date of birth,
              occupation, employer information, photo, discussion notes,
              messages, preference or interest data, and any other information
              you choose to provide. <br /> <br />
              <h3>
                Information We Collect Automatically <br /> <br />
              </h3>
              We do not automatically collect information about you directly.
              Online data is collected and stored by other 3rd parties. <br />{" "}
              <br />
              <h3>
                Information We Collect From Other Sources <br /> <br />
              </h3>
              We may also obtain information from other sources and combine that
              with information we collect through our Services. For example, if
              you create or log into your account through a third-party social
              media site, we will have access to certain information from that
              site, such as your name, account information and friends lists, in
              accordance with the authorization procedures determined by such
              social media site; we may also collect information about you when
              you post content to our pages/feeds on third-party social media
              sites. <br /> <br />
              <h3>
                USE OF INFORMATION <br /> <br />
              </h3>
              We may use information about you for various purposes, including
              to: <br /> <br />
              Provide, maintain, improve and promote our products and services;{" "}
              <br /> <br />
              Provide and deliver the information, products and services you
              request, process transactions and send you related information,
              including confirmations and receipts; <br /> <br />
              Send you technical notices, updates, security alerts, and support
              and administrative messages; <br /> <br />
              Respond to your comments, questions and requests, and provide
              customer service; <br /> <br />
              Communicate with you about products, services, surveys, offers,
              promotions, rewards and events offered by Company and others, and
              provide news and information we think will be of interest to you;{" "}
              <br /> <br />
              Monitor and analyze trends, usage and activities in connection
              with our Services; <br /> <br />
              Personalize and improve the Services and provide advertisements,
              content or features that match user profiles or interests; <br />{" "}
              <br />
              Facilitate contests, sweepstakes and promotions, and process and
              deliver entries and rewards; <br /> <br />
              Link or combine with information we get from others to help
              understand your needs and provide you with better service; and{" "}
              <br /> <br />
              Carry out any other purpose for which the information was
              collected. <br /> <br />
              We are based in the United States and the information we collect
              is governed by U.S. law. By accessing or using the Services or
              otherwise providing information to us, you consent to the
              processing and transfer of information in and to the U.S. and
              other countries. <br /> <br />
              We also use Google Analytics to help us understand how our
              customers use the Site–you can read more about how Google uses
              your Personal Information here:
              https://www.google.com/intl/en/policies/privacy/. You can also
              opt-out of Google Analytics here:
              https://tools.google.com/dlpage/gaoptout. <br /> <br />
              <h3>
                SHARING OF INFORMATION <br /> <br />
              </h3>
              We may share information about you as follows or as otherwise
              described in this Privacy Policy: <br /> <br />
              With vendors, consultants and other service providers who need
              access to such information to carry out work or perform services
              on our behalf; <br /> <br />
              When you participate in the interactive areas of our Services,
              certain information you provide may be displayed to other users,
              such as your name, photo, comments and other information you
              choose to provide; <br /> <br />
              In response to a request for information if we believe disclosure
              is in accordance with, or required by, any applicable law,
              regulation or legal process; <br /> <br />
              If we believe your actions are inconsistent with our user
              agreements or policies, or to protect the rights, property, and
              safety of Company or others; <br /> <br />
              In connection with, or during negotiations of, any merger, sale of
              company assets, financing or acquisition of all or a portion of
              our business by another company; and <br /> <br />
              With your consent or at your direction. <br /> <br />
              <h3>
                SOCIAL SHARING FEATURES <br /> <br />
              </h3>
              The Services may offer social sharing features and other
              integrated tools (such as the Facebook “Like” button), which let
              you share actions you take on our Services with other media, and
              vice versa. Your use of such features enables the sharing of
              information with your friends or the public, depending on the
              settings you establish with the entity that provides the social
              sharing feature. For more information about the purpose and scope
              of data collection and processing in connection with social
              sharing features, please visit the privacy policies of the
              entities that provide these features. <br /> <br />
              <h3>
                ADVERTISING AND ANALYTICS SERVICES PROVIDED BY OTHERS <br />{" "}
              </h3>
              <br />
              We may allow others to serve advertisements on our behalf across
              the Internet and to provide analytics services. These entities may
              use cookies, web beacons and other technologies to collect
              information about your use of the Services and other websites,
              including your IP address, web browser, pages viewed, time spent
              on pages, links clicked and conversion information. This
              information may be used by Company and others to, among other
              things, analyze and track data, determine the popularity of
              certain content, deliver advertising and content targeted to your
              interests on our Services and other websites and better understand
              your online activity. For more information about interest-based
              ads, or to opt out of having your web browsing information used
              for behavioral advertising purposes by companies that participate
              in the Digital Advertising Alliance, please visit
              www.aboutads.info/choices. <br /> <br />
              <h3>
                SECURITY <br /> <br />
              </h3>
              DigiVid360 takes reasonable measures to help protect information
              about you from loss, theft, misuse and unauthorized access,
              disclosure, alteration and destruction. <br /> <br />
              <h3>
                YOUR CHOICES <br /> <br />
              </h3>
              <h3>
                Account Information <br /> <br />
              </h3>
              You may review, correct or modify information maintained by us by
              emailing us at support@digivid360.com. If you wish to delete or
              deactivate your account, please email us at
              support@digivid360.com, but note that some information you provide
              through the Services may continue to be accessible (e.g., comments
              you submit through the Services) and that we may continue to store
              information about you as required by law or for legitimate
              business purposes. We may also retain cached or archived copies of
              information about you for a certain period of time. <br /> <br />
              <h3>
                Cookies <br /> <br />
              </h3>
              Most web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove or
              reject browser cookies. Please note that if you choose to remove
              or reject cookies, this could affect the availability or
              functionality of our Services <br /> <br />
              <h3>
                Promotional Communications <br /> <br />
              </h3>
              You may opt out of receiving promotional communications from us by
              following the instructions in those communications or by sending
              an email to support@digivid360.com. If you opt out, we may still
              send you non-promotional communications, such as those about your
              account or our ongoing business relations. <br /> <br />
              You can opt out of targeted advertising by visiting: <br /> <br />{" "}
              FACEBOOK – https://www.facebook.com/settings/?tab=ads <br />{" "}
              <br /> GOOGLE – https://www.google.com/settings/ads/anonymous{" "}
              <br /> <br /> BING –
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads{" "}
              <br /> <br /> LINKEDIN –
              https://www.linkedin.com/psettings/guest-controls <br /> <br />
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at
              http://optout.aboutads.info/. <br /> <br />
              <h3>
                DO NOT TRACK <br /> <br />
              </h3>
              Please note that we do not alter our Site’s data collection and
              use practices when we see a Do Not Track signal from your browser.{" "}
              <br /> <br />
              <h3>
                CHANGES <br /> <br />
              </h3>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons. <br /> <br />
              <h3>
                CONTACT US <br /> <br />
              </h3>
              If you have any questions about this Privacy Policy, please
              contact us at support@digivid360.com <br /> <br />
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default PrivacyPolicy;
