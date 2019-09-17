import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import aah from "../../public/assets/img/aah.png";
import edf from "../../public/assets/img/edf.png";
import pc from "../../public/assets/img/pc.png";
import et from "../../public/assets/img/et.jpg";
import eip from "../../public/assets/img/eip.png";
import rice from "../../public/assets/img/rice.png";

import styles from "./partners.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const Partners = () => (
  <div className="tc ">
    <h1 className="mt0 mb0 gold center">One Breath Partnership is</h1>
    <br />
    <br />
    <div className={styles.displaygrid}>
      <div>
        <img className="w-80" src={aah} />
      </div>
      <div>
        <img src={edf} />
      </div>
      <div>
        <img src={pc} />
      </div>
      <div>
        <img src={et} />
      </div>
      <div>
        <img src={eip} />
      </div>
      <div>
        <img src={rice} />
      </div>
    </div>
    <a
      className="center pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
      href="google.net"
    >
      More about the partnership
    </a>
  </div>
);

export default Partners;
