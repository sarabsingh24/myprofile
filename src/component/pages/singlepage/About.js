import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container/Container";
import Column from "../../common/column/Column";

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
          I have a great experiance for Creating Clean, Responsive Applications. I have an expert level
          of knowledge in JavaScript, React Js, HTML5, and CSS3,
          <div className="about-item">
            <div className="progress">
              <div className="skill-text">
                <span>HTML/CSS</span>
                <span>100%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate">
                  <h6 className="text"></h6>
                  <h6 className="percent"></h6>
                </div>
              </div>
            </div>

            <div className="progress">
              <div className="skill-text-js">
                <span>Javascript</span>
                <span>98%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate-js">
                  <h6 className="text"></h6>
                  <h6 className="percent"></h6>
                </div>
              </div>
            </div>
            <div className="progress">
              <div className="skill-text-rjs">
                <span>React.Js</span>
                <span>96%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate-rjs">
                  <h6 className="text"></h6>
                  <h6 className="percent"></h6>
                </div>
              </div>
            </div>
            <div className="progress">
              <div className="skill-text-rjs">
                <span>Redux</span>
                <span>96%</span>
              </div>
              <div className="progress1">
                <div className="progress-rate-rjs">
                  <h6 className="text"></h6>
                  <h6 className="percent"></h6>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </Container>
    </div>
  );
}
