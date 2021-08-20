import React from "react";
import MainPageBanner from "../../common/main-page-banner";
import About from "./About";
import Experiance from "./Experiance";
import Latestwork from "./Latestwork";
import Services from "./Services";
import Popup from "../../common/popup";
import MainNav from "../../common/main-nav";
import Contact from "./Contact";
import Bottomstrip from "../../common/bottom-strip";

import "./style.css";

const PopupContext = React.createContext();

export default function Home() {
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
      {/* <Experiance /> */}
      <Services />
      <Contact />
      <Bottomstrip />
    </>
  );
}

export { PopupContext };
