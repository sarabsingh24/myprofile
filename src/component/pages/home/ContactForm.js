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
      <Typography variant="h4" align="center" display="block" gutterBottom>
        Find your solution
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        display="block"
        gutterBottom
      >
        Feel free to contact at; <br />
        <a href="mailto:sarabpreet33@gmail.com" className="mail-id">
          sarabpreet33@gmail.com
        </a>
        <Typography variant="div" align="center" display="block" gutterBottom>
          132, III, A V Nagar, Delhi, India
        </Typography>
        <Typography variant="h6" align="center" display="block" gutterBottom>
          91-9899 6490 53
        </Typography>
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
