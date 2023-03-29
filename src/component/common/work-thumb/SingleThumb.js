import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { PopupContext } from "../../pages/singlepage/SinglePage";
import "./style.css";
export default function SingleThumb({
  comp,
  type,
  tool,
  layout,
  image,
  id,
  btnTxt,
  component,
  popup,
  skill,
}) {
  const [name, setName] = React.useState("relative");
  const animationEffect = React.useRef(null);

  const mouseOverHandeler = () => {
    animationEffect.current.classList = name + " animation";
  };
  const mouseOutHandeler = () => {
    animationEffect.current.classList = name;
  };

  const viewBtn = () => {
    if (popup) {
      return;
    }
  };

  console.log(`https://www.sarabsinghtech.com${image}`, skill);

  return (
    <div
      className={name}
      ref={animationEffect}
      onMouseOver={mouseOverHandeler}
      onMouseLeave={mouseOutHandeler}
    >
      <div elevation={0} className="relative bg-shadow">
        <div className="animited-box">
          <PopupContext.Consumer>
            {(popupHandeler) => {
              return (
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className="view-btn"
                  to={`/preview/${id}`}
                  component={Link}
                  // onClick={popup && (() => popupHandeler(component, comp))}
                  // href={!popup && component}
                  // target={!popup && "_blank"}
                >
                  {btnTxt}
                </Button>
              );
            }}
          </PopupContext.Consumer>
        </div>

        <img
          src={`https://www.sarabsinghtech.com${image}`}
          alt={comp}
          className="thumb-image"
        />
        <div className="thumb-info">
          <div className="temp-type">
            <span className="txt-lable"></span> {comp}
          </div>
          <div className="txt-small">
            <span className="txt-lable">
              <small>{type}</small>{" "}
              <img src={skill} alt="logo" style={{ width: "80px" }} />
            </span>
            {/* <span className="txt-lable">Tool:</span>
            {tool.map((item, index) => {
              return <span key={index}> {item}, </span>;
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
