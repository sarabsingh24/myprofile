import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";
export default function Manulinks({ showMenuHandeler }) {
  return (
    <>
      <div className="top-links">
        <Button className="link">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            className="text-sty"
            onClick={showMenuHandeler}
          >
            Portfolio
          </Link>
        </Button>
        <Button className="link">
          <Link
            to="services"
            spy={true}
            smooth={true}
            className="text-sty"
            onClick={showMenuHandeler}
          >
            Services
          </Link>
        </Button>

        <Button className="link">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="text-sty"
            onClick={showMenuHandeler}
          >
            Contact
          </Link>
        </Button>
        <Button className="link">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="text-sty"
            onClick={showMenuHandeler}
          >
            Payment
          </Link>
        </Button>
      </div>
    </>
  );
}
