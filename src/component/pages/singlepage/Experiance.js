import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container/Container";
import Column from "../../common/column/Column";
import BusinessIcon from "@material-ui/icons/Business";
export default function Services() {
  return (
    <section className="bg-color" id="experiance">
      <div className="parallax-exp">
        <div className="exp-bg">
          <Container>
            <Typography
              variant="button"
              align="center"
              display="block"
              gutterBottom
            >
              Company
            </Typography>
            <Typography
              variant="h5"
              align="center"
              display="block"
              gutterBottom
            >
              Extensive Work Experiance
            </Typography>
            <Column column="experiance-two-column">
              <div className="company">
                <div className="icon">
                  <BusinessIcon align="center" fontSize="large" />
                </div>
                <div>
                  <Typography variant="subtitle1" align="left" display="block">
                    R Systems International Ltd.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    display="block"
                    className="date"
                    gutterBottom
                  >
                    2021 to 2022 .....(1 Years)
                  </Typography>
                  <Typography
                    variant="body2"
                    align="left"
                    display="block"
                    className="points"
                    gutterBottom
                  >
                    As a frontend developer in ReactJs, I worked on functional
                    component, hooks, context API, Redux, and API integration. I
                    used the latest features of Javascript like The arrow
                    function, destructor, spread & rest operator, ternary
                    operator, short circuit operator, promises, and async-await.
                  </Typography>
                </div>
              </div>
              <div className="company">
                <div className="icon">
                  <BusinessIcon align="center" fontSize="large" />
                </div>

                <div>
                  <Typography variant="subtitle1" align="left" display="block">
                    KENT RO Systems Ltd.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    display="block"
                    className="date"
                    gutterBottom
                  >
                    2015 to 2020 .....(5 Years)
                  </Typography>
                  <Typography
                    variant="body2"
                    align="left"
                    display="block"
                    gutterBottom
                    className="points"
                  >
                    As a frontend developer, I got an opportunity to work in
                    ReactJs, Javascript, using HTML CSS. Here I created many
                    Websites, emailers, and AMP pages for SEO purposes.
                  </Typography>
                </div>
              </div>
              <div className="company">
                <div className="icon">
                  <BusinessIcon align="center" fontSize="large" />
                </div>
                <div>
                  <Typography variant="subtitle1" align="left" display="block">
                    R Systems International Ltd.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    display="block"
                    className="date"
                    gutterBottom 
                  >
                    2007 to 2015 .....(8 Years)
                  </Typography>
                  <Typography
                    variant="body2"
                    align="left"
                    display="block"
                    className="points"
                    gutterBottom
                  >
                    As a web designer, I used to work in HTML, CSS, and
                    javascript my role as a team player was to understand the
                    client's requirements. convert the design into HTML format
                    (Responsive) & test HTML page in different Browsers.
                  </Typography>
                </div>
              </div>
              <div className="company">
                <div className="icon">
                  <BusinessIcon align="center" fontSize="large" />
                </div>
                <div>
                  <Typography variant="subtitle1" align="left" display="block">
                    Sparrow Interactive Pvt. Ltd.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    display="block"
                    className="date"
                    gutterBottom
                  >
                    2005 to 2007 .....(2 Years)
                  </Typography>
                  <Typography
                    variant="body2"
                    align="left"
                    display="block"
                    className="points"
                    gutterBottom
                  >
                    Worked as Graphic Designer
                  </Typography>
                </div>
              </div>
              <div className="company">
                <div className="icon">
                  <BusinessIcon align="center" fontSize="large" />
                </div>
                <div>
                  <Typography variant="subtitle1" align="left" display="block">
                    Weblink Pvt. Ltd.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    display="block"
                    className="date"
                    gutterBottom
                  >
                    2003 to 2005 .....(2 Years)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    display="block"
                    className="points"
                    gutterBottom
                  >
                    Worked as Graphic Designer
                  </Typography>
                </div>
              </div>
            </Column>
          </Container>
        </div>
      </div>
    </section>
  );
}
