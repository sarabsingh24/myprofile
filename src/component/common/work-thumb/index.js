import React from "react";
import SingleThumb from './SingleThumb'
import "./style.css";

export default function Index({ boxArray }) {
 console.log(boxArray);

  return (<div className="thumb-container" >
    
      
      {boxArray.map((item) => {
 
        return <SingleThumb key={item.id} {...item} />;
      })}
    </div>
  );
}
