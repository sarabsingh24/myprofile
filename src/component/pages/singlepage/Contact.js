import React, { useState, useEffect } from "react";

import Column from "../../common/column/Column";
import Container from "../../common/container/Container";
import { workInfo } from "../../data/workInfo";
import Typography from "@material-ui/core/Typography";
import { pageScrollTo } from "../indexOLD";
import Googlemap from '../../common/googlemap';
import ContactForm from './ContactForm'
import "./style.css";

export default function Contact() {
  return (
    <section className="contact-bg" id="contact">
      {/* <div className="google-map-height">
        <Googlemap />
      </div> */}

      <ContactForm />
     
    </section>
  );
}
