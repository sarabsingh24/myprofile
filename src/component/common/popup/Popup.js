import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";

export default function Index({ setPopup, compo, type }) {
  // const { component } = pop;
  return (
    <section className="pop-blanket">
      <div className="popup-container">
        <header className="popup-header">
          <Typography variant="h5" display="block" >
            {type}
          </Typography>
          <IconButton>
            <CancelIcon onClick={() => setPopup(false)} />
          </IconButton>
        </header>
        
        <div >{compo}</div>
      </div>
    </section>
  );
}
