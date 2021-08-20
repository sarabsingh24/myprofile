import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Index({ skillFun }) {
  const classes = useStyles();


  const skillSet = [
    { url: "/", name: "All" },

    { url: "/html-page", name: "HTML/CSS" },
    { url: "/js-page", name: "Javascript" },
    { url: "/react-page", name: "React Js" },

    // { url: "/css-page", name: "CSS" },
    // { url: "/sketch-page", name: "Sketch" },
  ];


  return (
    <div className={classes.root}>
      {skillSet.map((skill, index) => {
        return (
          <Chip
            key={index}
            label={skill.name}
            onClick={() => skillFun(skill.name)}
            variant="outlined"
            color="secondary"

            // component={Link}
            // to={skill.url}
          />
        );
      })}
    </div>
  );
}
