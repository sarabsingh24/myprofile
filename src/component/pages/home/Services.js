import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container";
import Column from "../../common/column";
import {ServiceText} from '../../data/service'


export default function Services() {
    return (
      <section className="service-bg" id="services">
        <div className="parallax">
          <div className="bg-trans">
            <Container>
              <Typography
                variant="button"
                align="center"
                display="block"
                gutterBottom
              >
                Resources
              </Typography>
              <Typography
                variant="h5"
                align="center"
                display="block"
                gutterBottom
              >
                Tools I Use to Create Application
              </Typography>
              <Column column="three-column">
                {ServiceText.map((item) => {
                  return (
                    <article className="service-items" key={item.id}>
                      <div className="center icon">{item.icon}</div>
                      <div className="center name">{item.name}</div>
                      <small className="center desc">{item.desc}</small>
                    </article>
                  );
                })}
              </Column>
            </Container>
          </div>
        </div>
      </section>
    );
}
