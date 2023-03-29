import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import weblink from "../../data/weblink";
import "./style.css";

const useStyles = makeStyles({
  btn: {
    margin: "24px ",
  },
});

function Htmlwork({ name }) {
  const classes = useStyles();

  const[winwidth, setWinWidth] = React.useState(window.innerWidth)

  let list = weblink.find((item) => item.name === name);

  console.log((list))

  return (
    <>
      {list.img ? (
        <div className="preview-image-cont">
          <img
            src={list.img}
            alt={list.name}
            className="preview-image"
          />
          <Button
            variant="outlined"
            color="primary"
            href={list.url}
            target="_blank"
            className={classes.btn}
            size="small"
          >
            Live View
          </Button>
        </div>
      ) : (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          src={list.url}
          width="100%"
          className={
            winwidth < 980 ? "window-height-mob" : "window-height-desk"
          }
          frameborder="0"
        />
      )}
    </>
  );
}

export default Htmlwork;
