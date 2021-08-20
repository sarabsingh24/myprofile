import React from "react";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menulinks from "./Manulinks";
import Logo from "../../../asset/images/logo.png";

import "./style.css";


export default function Index() {
  const [showMenu, setShowMenu] = React.useState(false);

  const showMenuHandeler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="site-nav">
      <div className="nav-container">
        <nav className="nav-menu">
          <a href="" className="logo top-link">
            <img src={Logo} alt="logo" style={{ width: "20px" }} />
          </a>

          <div className="desktop-link">
            <Menulinks  />
          </div>
          <div className="burger-menu">
            <IconButton onClick={showMenuHandeler}>
              <MenuIcon />
            </IconButton>
          </div>
        </nav>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <Menulinks showMenuHandeler={showMenuHandeler} />
        </div>
      )}
    </section>
  );
}
