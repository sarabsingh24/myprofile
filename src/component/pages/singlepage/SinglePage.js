import React from "react";
import MainPageBanner from "../../common/main-page-banner";
import About from "./About";
import Experiance from "./Experiance";
import Latestwork from "./Latestwork";
import Services from "./Services";
import Popup from "../../common/popup";
import MainNav from "../../common/main-nav";
import Contact from "./Contact";
import Bottomstrip from "../../common/bottom-strip/BottomStrip";

import "./style.css";

const PopupContext = React.createContext();

export default function SinglePage() {
  const [popup, setPopup] = React.useState(false);
  const [compo, setCompo] = React.useState("");
  const [type, setType] = React.useState("");

  const popupHandeler = (component, type) => {
    setType(type);
    setCompo(component);
    setPopup(true);
  };

  return (
    <>
      {popup && <Popup setPopup={setPopup} compo={compo} type={type} />}
      <MainNav />
      <MainPageBanner />
      {/* <About /> */}

      <PopupContext.Provider value={popupHandeler}>
        <Latestwork />
      </PopupContext.Provider>
      <Services />
      <Experiance />
      <Contact />
      <Bottomstrip />
    </>
  );
}

export { PopupContext };
