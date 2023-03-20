import React from "react";
import Container from "../../common/container/Container";
import Workthumb from "../../common/work-thumb";
import Column from "../../common/column/Column";
import ProfileLink from "../../common/proflle-link";
import { workInfo } from "../../data/workInfo";
import Typography from "@material-ui/core/Typography";

import "./style.css";

export default function Index() {
  const [skill, setSkill] = React.useState(workInfo);

  const skillSet = (name) => {
    let myWork;

    if (name === "All") {
      myWork = workInfo;
    } else {
      myWork = workInfo.filter((skill) => {
        return skill.tool.includes(name);
      });
    }

    setSkill(myWork);
  };

  return (
    <div id="portfolio">
      <Container>
        <Typography
          variant="button"
          align="center"
          display="block"
          gutterBottom
        >
          PORTFOLIO
        </Typography>
        <Typography variant="h5" align="center" display="block" gutterBottom>
          My Latest Work
        </Typography>

        <ProfileLink skillFun={skillSet} />
        <Column column="column">
          <Workthumb boxArray={skill} />
        </Column>
      </Container>
    </div>
  );
}
