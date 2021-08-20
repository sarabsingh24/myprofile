import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container";
import Column from "../../common/column";

export default function Services() {
  return (
    <div id="about">
      <Container>
        <Typography
          variant="button"
          align="center"
          display="block"
          gutterBottom
        >
          About
        </Typography>
        <Typography variant="h5" align="center" display="block" gutterBottom>
          Introduction
        </Typography>
        <Column column="one-column">
          I have a Passion for
          Creating Clean, Beautiful, Interactive, Minimalistic, Responsive and
          User Friendly UI. I have an expert level of knowledge in HTML5, CSS3,
          JavaScript, React JS and Sketch.
          {/* <div className="about-item">
            <div class="progress">
              <div className="skill-text">
                <span>HTML/CSS</span>
                <span>98%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate">
                  <h6 class="text"></h6>
                  <h6 class="percent"></h6>
                </div>
              </div>
            </div>

            <div class="progress">
              <div className="skill-text-js">
                <span>Javascript</span>
                <span>84%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate-js">
                  <h6 class="text"></h6>
                  <h6 class="percent"></h6>
                </div>
              </div>
            </div>
            <div class="progress">
              <div className="skill-text-rjs">
                <span>React.Js</span>
                <span>77%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate-rjs">
                  <h6 class="text"></h6>
                  <h6 class="percent"></h6>
                </div>
              </div>
            </div>
          </div> */}
        </Column>
      </Container>
    </div>
  );
}
