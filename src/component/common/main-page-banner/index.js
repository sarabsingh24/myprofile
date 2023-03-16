import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "../container/Container";
import Box from "@material-ui/core/Box";
import sarab_pic from "../../../asset/home/sarab.png";
import { Grid } from "@material-ui/core";

import cv from "../../../asset/home/sarab_FrontEnd.pdf";
import "./style.css";

export default function Index() {
  return (
    <section className="banner-height">
      <div className="banner-container">
        <article className="left-side">
          <Typography variant="h4" gutterBottom>
            Sarab Preet Singh
          </Typography>

          <Typography variant="h6" gutterBottom>
            Web Developer
          </Typography>
          <Typography
            variant="subtitle2"
            className="small-discription"
            gutterBottom
          >
            I have 15+ years of experiance in web development field. As a
            developer I worked with top level MNCs in India. I have a great
            experiance for creating clean, responsive web applications using
            JavaScript, React Js, HTML, and CSS etc.
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            href="mailto:sarabsingh@sarabsinghtech.com"
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
