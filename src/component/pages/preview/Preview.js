import React from "react";
import { useParams } from "react-router-dom";
import Bottomstrip from "../../common/bottom-strip/BottomStrip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { workInfo } from "../../data/workInfo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

import Refresh from "./Refresh";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typography from "@material-ui/core/Typography";
import "./style.css";

export default function Preview() {
  const [data, setDatas] = React.useState(workInfo);
  const [index, setIndex] = React.useState(0);
  console.log(data);
  const { id } = useParams();

  const currentPage = () => {
    const list = () => {
      return data.findIndex((e) => e.id == id);
    };
    setIndex(list);
  };

  const changeUrl = (num) => {
    let url = window.location.href;
    let count = url.lastIndexOf("/");
    let getUrl = url.slice(0, count);
    let newUrl = `${getUrl}/${num + 1}`;

    // window.location.href = newUrl;
  };

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      changeUrl(0);
      return 0;
    }

    if (number < 0) {
      changeUrl(data.length - 1);
      return data.length - 1;
    }
    changeUrl(number);
    return number;
  };

  const prevPageHandeler = () => {
    setIndex((index) => {
      let newVal = index - 1;

      return checkNumber(newVal);
    });
  };
  const nextPageHandeler = () => {
    setIndex((index) => {
      let newVal = index + 1;

      return checkNumber(newVal);
    });
  };

  React.useEffect(() => {
    currentPage();
  }, [id]);

  return (
    <>
      <section className="preview-column">
        <div className="bg-color">
          <section className="preview-header">
            <div className="action-btn">
              <IconButton onClick={prevPageHandeler}>
                <ArrowBackIosIcon />
              </IconButton>

              <IconButton to="/" component={Link}>
                <HomeIcon />
              </IconButton>

              <div onClick={nextPageHandeler}>
                <IconButton>
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </div>
          </section>
          <div className="container-box scroll-box relative">
            {data[index].component}
          </div>
        </div>
        <Refresh data={data[index]} />
      </section>

      {/* <Bottomstrip /> */}
    </>
  );
}
