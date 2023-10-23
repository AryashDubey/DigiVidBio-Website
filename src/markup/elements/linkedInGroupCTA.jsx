import React from "react";



export const joinLinkedInGroup = (
  <div
    className="conference-marketing-bx"
    style={{
      textAlign: "center",
      margin: "auto",
      marginTop: "100px",
    }}
  >
    <div
      className="conference-marketing-content"
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h2>Join our LinkedIn Group</h2>{" "}
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/groups/8557463/"
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <i
            className="fab fa-linkedin"
            style={{
              fontSize: "60px",
              color: "#fff",
              marginRight: "16px",
            }}
          ></i>{" "}
          <h4
            style={{
              //underline text
              color: "#fff",
              textDecoration: "underline",
            }}
          >
            Biotech, Diagnostics, Genomic Medicine Sales & Marketing
          </h4>
        </div>
      </a>
    </div>
    <div> </div>
  </div>
);
