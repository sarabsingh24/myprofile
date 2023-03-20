import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "../container/Container";
import Box from "@material-ui/core/Box";
import sarab_pic from "../../../asset/home/sarab.png";
import { Grid } from "@material-ui/core";

import cv from "../../../asset/home/sarab_FrontEnd.pdf";
import Avatar from "@material-ui/core/Avatar";
import "./style.css";

export default function Index() {
  const [ismobile, setIsMobile] = useState(false);

  const updateWindowDimensions = () => {
    let win = window.innerWidth;

    if (win < 980) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateWindowDimensions();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  });
  return (
    <section className="banner-height">
      <div className="banner-container">
        <article className="left-side">
          {ismobile && (
            <Avatar
              alt="Sarab Singh"
              src={sarab_pic}
              style={{
                width: "106px",
                height: "106px",
                margin: "0 auto",
                border: "4px solid #fff",
              }}
            />
          )}
          <Typography variant="h4" gutterBottom>
            Sarab Preet Singh
          </Typography>

          <Typography variant="h6" gutterBottom>
            Web Developer
            <Typography variant="subtitle2">
              Full-time | Part-time | Contract basis
            </Typography>
          </Typography>
          <Typography variant="subtitle2" className="small-discription">
            I have 15+ years of experiance in web development field. As a
            developer I worked with top level MNCs in India. I have a great
            experiance for creating clean, responsive web applications using
            JavaScript, React Js, HTML, and CSS etc.
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            href="mailto:hello@sarabsinghtech.com"
            target="_blank"
          >
            Contact Now
          </Button>
        </article>

        <article className="right-side">
          <div className="img-border">
            <img src={sarab_pic} alt="sarab pic" />
          </div>
        </article>
      </div>
    </section>
  );
}
