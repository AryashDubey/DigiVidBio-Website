import React, { Component } from "react";

// Import Images
import testPic2 from "../../images/testimonials/pic2.png";

function AuthorProfile({ author }) {
  if (!author) {
    return null;
  }

  return (
    <>
      <div className="author-box blog-user mb-50">
        <div className="author-profile-info">
          <div className="author-profile-pic">
            <img src={author?.photo?.url} alt="" />
          </div>
          <div className="author-profile-content">
            <h5>{author.name}</h5>
            <p className="mb-20">{author.bio}</p>
            <ul className="social-media mb-0">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={author?.linkedInProfileLink}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorProfile;
