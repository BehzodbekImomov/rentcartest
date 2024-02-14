import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@nextui-org/react";

import "./Navigate.scss";

import TemporaryDrawer from "../Drawer";

const Navigate = () => {
  return (
    <nav id="nav">
      <div className="container_custom navigations ">
        <Link className="logo" href="#nav">
          <Image src="/images/logo.png" height={44} width={98} alt="" />
        </Link>
        <ul className="menu">
          <li>
            {" "}
            <a className="anchor" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="anchor" href="#rental">
              Rental Detals
            </a>
          </li>
          <li>
            <a className="anchor" href="#choose">
              Why Choose Us
            </a>
          </li>
          <li>
            <a className="anchor" href="#testmonial">
              Testimonial
            </a>
          </li>
          <li>
            {" "}
            <a className="anchor" href="#brands">
              Brands{" "}
              {/* <Image src="/svg/vector.svg" width={15} height={6} alt="" /> */}
            </a>
          </li>
          {/* <li className="registr">
            <a className="anchor" href="/">
              {" "}
              <div className="line"></div>
              Register
            </a>
          </li>
          <li>
            <Button type="submit">Log In</Button>
          </li> */}
        </ul>

        <TemporaryDrawer id="burger"
          icon={<MenuIcon sx={{ color: "var(--white)" }} />}
          bg_color={"var(--black)"}
          title={
            <ul className="menu">
              <li>
                {" "}
                <a className="anchor" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="anchor" href="#rental">
                  Rental Detals
                </a>
              </li>
              <li>
                <a className="anchor" href="#choose">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a className="anchor" href="#testmonial">
                  Testimonial
                </a>
              </li>
              <li>
                {" "}
                <a className="anchor" href="#brands">
                  Brands{" "}
                  {/* <Image src="/svg/vector.svg" width={15} height={6} alt="" /> */}
                </a>
              </li>
          
            </ul>
          }
        />
      </div>
    </nav>
  );
};

export default Navigate;
