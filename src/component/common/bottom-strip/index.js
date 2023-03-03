import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

export default function Index() {
  return (
    <section className="bottom-strip ">
      <div className="bottom-strip-container">
        <div> © copyright | sarab preet singh</div>
        <small>
          <span className="social-icon">
            <FacebookIcon />
          </span>
          <span className="social-icon">
            <TwitterIcon />
          </span>
          <span className="social-icon">
            <LinkedInIcon />
          </span>
        </small>
      </div>
    </section>
  );
}
