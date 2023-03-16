import React from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="parallax">
      <div className="bg-trans" style={{ height: "100vh", display: "grid" }}>
        <article className="error-items" style={{ placeSelf: "center" }}>
          <div className="center " style={{ fontSize: "52px" }}>
            oops!
          </div>
          <small className="center desc">
            The Page you requested was not found. Please make sure the URL spelling is correct.
          </small>
          <span>
            <Chip
              label="Back to Home"
              variant="filled"
              color="secondary"
              component={Link}
              to="/"
            />
          </span>
        </article>
      </div>
    </div>
  );
}
