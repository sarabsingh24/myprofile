import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container";
import Column from "../../common/column";
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
              Experiances
            </Typography>
            <Typography
              variant="h5"
              align="center"
              display="block"
              gutterBottom
            >
              Companies I Worked with
            </Typography>
            <Column column="experiance-two-column">
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
                  >
                    <ul className="points">
                      <li>Convert design into HTML/React format.</li>
                      <li>
                        Test HTML page in different Browser and responsive ness
                        and fix web page loading time
                      </li>
                      <li>
                        I have also created AMP pages, HTML emailers for digital
                        marketing team
                      </li>
                    </ul>
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
                    gutterBottom
                  >
                    <ul className="points">
                      <li>
                        As a designer my role is to understand the client
                        requirement and create design using Photoshop and
                        convert it into HTML/HTML, Css and JS
                      </li>
                      <li>Test HTML page in different Browser (Responsive)</li>
                      <li>
                        I have also created Browsers, Leaflet and Banners for R
                        Systems using Photoshop and Illustrator
                      </li>
                      <li>As designer i have also created PPT designs.</li>
                    </ul>
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
                    gutterBottom
                  >
                    <ul className="points">
                      <li>
                        As a designer i was associated with www.businessworld.in
                        team.
                      </li>
                    </ul>
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
                    gutterBottom
                  >
                    <ul className="points">
                      <li>
                        As a web designer my role was to create templates, Web
                        Sites, Banners for clients using different tools like
                        Photoshop, HTML, CSS
                      </li>
                    </ul>
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
