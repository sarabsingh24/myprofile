import React, { useState, useEffect } from "react";

import Column from "../../common/column";
import Container from "../../common/container";
import { workInfo } from "../../data/workInfo";
import Typography from "@material-ui/core/Typography";
import { pageScrollTo } from "../../pages";
import Googlemap from '../../common/googlemap';
import ContactForm from './ContactForm'
import "./style.css";

export default function Contact() {
  return (
    <section className="contact-bg" id="contact">
      <div className="google-map-height">
        <Googlemap />
      </div>

      <ContactForm />
      {/* 
        <Typography variant="h5" align="center" display="block" gutterBottom>
          Vestibulum ac metus euismod, pulvinar dolor ac, volutpat justo.
        </Typography> */}

      {/* <Column>fghgfhfg</Column> */}
    </section>
  );
}
