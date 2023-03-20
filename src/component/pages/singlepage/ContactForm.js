import React from "react";
import Typography from "@material-ui/core/Typography";


export default function ContactForm() {

  return (
    <div className="contact-form">
      <Typography
        variant="subtitle1"
        align="center"
        display="block"
        gutterBottom
      >
        Contact
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        display="block"
        gutterBottom
      >
        Feel free to contact <br />
        <a href="mailto:hello@sarabsinghtech.com" className="mail-id">
          hello@sarabsinghtech.com
        </a>
      </Typography>
      <Typography variant="body2" align="center" display="block" gutterBottom>
        132, A V Nagar, New Delhi, India
      </Typography>
      <Typography variant="body2" align="center" display="block" gutterBottom>
        91-9899 441 446
      </Typography>
    </div>
  );
}
