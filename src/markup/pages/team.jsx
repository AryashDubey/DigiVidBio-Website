import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";

import {
  adamMarinerImage,
  jasonFairImage,
  kelleyHowardImage,
  kurtGrevesImage,
  seanBollingerImage,
} from "../../images/const";

// Team Content
export const teamMembers = [
  {
    name: "Kelley Howard",
    subtitle: "Partner",
    image: kelleyHowardImage,
    socialMedia: [
     
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/kelleyhoward/" },
     
    ],
    bio: [
      "Kelley is focused on Content Development and Strategy. With 30+ years of experience working in the digital marketing space, she has held a position at companies like Cox Interactive Media, Gannett and several startups selling digital media and content marketing.",
      "She has a proven track record in this dynamic sector, earned by working closely with several leading organizations such as The Mayo Clinic, MD Anderson Cancer Center, Pfizer, Banner Health, Johnson & Johnson and Medtronic as well as many companies in the Diagnostic space, like Myriad Genetics, Invitae, Natera, GeneDX, Agendia and Caris Life Sciences.",
      "Over the last 15 years Kelley has been focused on working with companies in Biotechnology and Healthcare. “I love this space and after many years you start to see helpful patterns and understand insights that are extremely valuable to our clients in these spaces.",
      "Kelley and her co-founders launched DigiVid360 in 2015 where the majority of their clients were in the Biotechnology, Life Sciences and MedTech industries. DigiVid360 success and concentrated client list was the catalyst for starting DigiVidBIO a digital marketing firm that is 100% dedicated to the Biotechnology Life Sciences and MedTech spaces.",
    ],
  },
  {
    name: "Jason Fair",
    subtitle: "VP Digital Strategy",
    image: jasonFairImage,
    socialMedia: [
     
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/jasonfair" },
    ],
    bio: [
      "As DigiVidBIO’s VP of Digital Strategy, Jason’s role is to help biotech, healthcare and medical clients achieve their business goals using tailor-made video and digital marketing strategies.      ",
      "Using his extensive 20 year experience in omnichannel digital marketing and video strategies, Jason is able to guide clients in reaching their brand and marketing objectives with ever-evolving digital technologies. This includes extensive use of first party data, analytics and conference tactics which allow clients to adjust their digital strategies to drive the best results.",
      "Jason has a passion for  biotech, healthcare and medical digital marketing and has worked across all aspects and areas including: inbound marketing, targeted display, email, conference marketing, social media and programmatic. He is also Google AdWords and HubSpot certified.",
      "Jason has helped main biotech, healthcare and medical organizations of all including: Allergan, Suneva Medical, Agilent Technologies, Medtronic, LabCorp, Tempus Labs, 23andMe, Boston Scientific and miraDry.",
      "In his free time he enjoys spending time with his family, running, biking, skiing, swimming and hiking.",
    ],
  },
  {
    name: "Kurt Greves",
    subtitle: "Partner",
    image: kurtGrevesImage,
    socialMedia: [
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/kurtgreves" },
    ],
    bio: [
      "Kurt Greves is a business leader known for his innovative and strategic insights in the realms of media, biotechnology, and life sciences. He combines a breadth of experience, from holding key leadership positions at global entertainment brands to advising startups, positioning them on a trajectory of prominence and success.      ",
      "With a storied career, Mr. Greves has held the mantle of Vice President at global brands such as Comedy Central (Viacom) and AMC Networks – including AMC, Sundance, IFC, Fuse, and WEtv. In these capacities, he was instrumental in nurturing talent, managing content, and expanding these media behemoths to new horizons. Notably, he spearheaded “Laugh Riots,” an acclaimed talent acquisition initiative in the U.S.’s major markets.",
      "Under his leadership, these networks saw the strategic development and brand growth of Emmy® Award-winning shows, including the likes of AMC’s “Mad Men,” “Breaking Bad,” “The Walking Dead,” as well as Comedy Central’s cultural stalwarts “South Park” and “The Daily Show with Jon Stewart.”      ",
      "Apart from the television sphere, Mr. Greves is recognized for pioneering key digital and traditional marketing campaigns, collaborating with industry giants such as Comcast Spotlight, Time Warner Media, Cox Media, Charter Media, Sparklight Advertising, and Ampersand (formerly National Cable Communications.) The VAB in New York honored his visionary marketing strategies, particularly his branding initiatives with Comedy Central and the promotion of Cox Interactive Media’s Arizona city site.",
      "Kurt Greves has ventured into the nexus of AI with his SaaS companies, DigiVidAI and RevZealAI. Further diversifying his portfolio, he manages two full-service marketing firms: DigiVidBIO, dedicated to Biotechnology and Life Sciences, and DigiVid360, serving verticals ranging from Government to Construction.      ",
      "A hallmark of his career is his ability to drive tangible business outcomes, notably enhancing revenue, cash flow, and ROI. Whether for his own ventures or client companies, his unparalleled critical thinking, analytical prowess, and problem-solving acumen set him apart. Both as a founding partner and as a trusted advisor, Mr. Greves is well-equipped to steer businesses toward their pinnacle, leveraging his vast industry knowledge and network.",
    ],
  },
  {
    name: "Sean Bollinger",
    subtitle: "Partner",
    image: seanBollingerImage,
    socialMedia: [
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/seanbollinger" },
    ],
    bio: [
      "With a foundation in Marketing, Finance, and Business Management, Sean Bollinger is the organizer and business manager to ensure smooth client delivery, communication and collaboration. He works in the foreground and the background to ensure that client expectations are exceeded.      ",
      "Sean brings talent and experience to underpin DigiVidBIO’s growth as a video marketing company. He has extensive Digital Agency experience, specifically helping clients grow their business through the right application of digital tactics and hard data to guide strategic direction. He’s particularly skilled at growing client relationships through the thoughtful integration of strategies and tactics which are tied to client success.      ",
      "During his 15-plus years in the digital marketing space, he has worked with several notable small and large brands in various industries including: AAA, American Airlines, US Bank, MasterCard, Microsoft, Hilton, Marriott, Discount Tire, Farmer’s Insurance, Banner MD Anderson, Invitae, Illumina, Labcorp, and Natera.      ",
      "Outside the office, Sean Bollinger volunteers for the One-n-Ten organization, contributing his talent and time to youth development and mentoring.      ",
    ],
  },
  {
    name: "Adam Mariner",
    subtitle: "Creative Director",
    image: adamMarinerImage,
    socialMedia: [
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/adam-mariner-45154440/" },
    ],
    bio: [
      "Adam’s passion is all things video and film. He is artful at being able to understand a client’s goals and transform their information into a highly compelling story, which resonates with its audience. Adam held a full-time position as a camera operator and video editor at SheKnows.com. He has worked on a monumental amount of video projects as a producer, director, videographer and editor.",
      "He has extensive freelance experience, which makes him uniquely qualified to develop DigiVidBIO’s’s network of local videographers, editors and artists, matching their skills with our clients’ video requirements. Adam has experience working with leading brands including: Illuminia, Caris Life Sciences, Natera, Myriad Genetics, GeneDX, PathAI, Invitae, and many more      ",
      "Adam has experience working with leading brands including: Fanta, Home Depot, Genomic Health, Invitae, LG Electronics, Kia, Proctor & Gamble, Glidden, Canon, Aveeno and more.      ",
      "Adam’s role is crucial at DigiVid360 as he is the primary person who ensures the highest quality and consistency of our client’s work, whether it’s one video or multiple projects filmed across multiple markets.      ",
    ],
  },
];

class Team extends Component {
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
                  <h1>Our Team</h1>
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
                        Our Team
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <section className="section-area section-sp1 team-wraper">
            <div className="container">
              <div className="row">
                {teamMembers.map((teamMember, index) => (
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
                ))}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Team;
