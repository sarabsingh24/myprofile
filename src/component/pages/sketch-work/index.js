import React from "react";
import WorkThumb from "../../common/work-thumb";
import Column from "../../common/column/Column";
import { workInfo } from "../../data/workInfo";
import MainPageBanner from "../../common/main-page-banner";
import ProfileLink from "../../common/proflle-link";
import Container from "../../common/container/Container";
export default function Index() {
  return (
    <>
      <MainPageBanner />
      <Container>
        <ProfileLink />
        <Column twoColumn="two-column">
          <p>Sketch work</p>
          {/* <WorkThumb boxArray={workInfo} /> */}
        </Column>
      </Container>
    </>
  );
}
