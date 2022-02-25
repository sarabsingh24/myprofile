import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  margin: {
    marginTop: theme.spacing(3),
  },
  //   withoutLabel: {
  //     marginTop: theme.spacing(3),
  //   },
  //   textField: {
  //     width: "25ch",
  //   },
}));

export default function ContactForm() {
  const classes = useStyles();
  return (
    <div className="contact-form">
      <Typography variant="h5" align="center" display="block" gutterBottom>
        Contact
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        display="block"
        gutterBottom
      >
        Feel free to send any query, I will get back to you soon. <br />
        My mail Id:
        <a href="mailto:sarabpreet33@gmail.com" className="mail-id">
          sarabpreet33@gmail.com
        </a>
      </Typography>
      {/*       
      <TextField
        required
        id="name"
        label="Name"
        display="block"
        defaultValue="John Cena"
        variant="outlined"
        className={classes.margin}
        fullWidth
      />
      <TextField
        required
        id="email"
        label="Email"
        defaultValue="john@gmail.com"
        variant="outlined"
        className={classes.margin}
        fullWidth
      />
      <TextField
        required
        id="subject"
        label="Subject"
        defaultValue="Discussion"
        variant="outlined"
        className={classes.margin}
        fullWidth
      />
      <TextField
        id="message"
        label="Message"
        multiline
        rows={6}
        defaultValue="hi, I am interested... "
        variant="outlined"
        className={classes.margin}
        fullWidth
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SendIcon />}
        className={classes.margin}
        size="large"
        fullWidth
      >
        Send Message
      </Button> */}
    </div>
  );
}
