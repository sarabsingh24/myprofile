import React from 'react';
import Workthumb from "../../common/work-thumb";
import { workInfo } from "../../data/workInfo";

export default function Refresh({data}) {
     const { innerWidth: width, innerHeight: height } = window;
// return<div>{num}</div>
    return (
      <div className="left-border preview-scroll-box">
        <div className="preview-info-contener">
          <header className="title">{data.comp}</header>
          <small className="text-column">
            <span className="label">Work Type: </span>
            {data.type}
          </small>
          <br />
          <small className="text-column">
            <span className="label">Feature used:</span>
            <div className="tags">
              {data.featured.map((item) => (
                <span className="item-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </small>
          {/* <br />
          <small className="text-column">
            <span className="label">info:</span>
            {data.tool && data.tool.map((item) => item).join(", ")}
          </small> */}
        </div>
        
        {width > 980 ? (<>
            <header className="other-work">Other Work</header>
          <div className="work-slider">
            <Workthumb boxArray={workInfo} />
          </div></>
        ) : null}
      </div>
    );
}
