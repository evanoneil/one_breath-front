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
    <h1 className="mt0 mb0 gold center">One Breath Partnership is:</h1>
    <br />
    <br />
    <div className={styles.displaygrid}>
      <div className={styles.partnerlogo}>
        <img className="w-80" src={aah} alt="Air Alliance Houston Logo" />
      </div>
      <div className={styles.partnerlogo}>
        <img src={edf} alt="Environmental Defense Fund Logo" />
      </div>
      <div className={styles.partnerlogo}>
        <img src={pc} alt="Public Citizen Logo" />
      </div>
      <div className={styles.partnerlogo}>
        <img src={et} alt="Environment Texas Logo" />
      </div>
      <div className={styles.partnerlogo}>
        <img src={eip} alt="Environmental Integrity Project Logo" />
      </div>
      <div className={styles.partnerlogo}>
        <img src={rice} alt="Rice University Logo" />
      </div>
    </div>
    <a
      class="pa3 ttu mid-gray f5 mt5 mb-6 fw7 blue no-underline dib-l enterprise"
      href="https://www.onebreathhou.org/about"
    >
      More about the partnership
    </a>
    <a
      class="pa3 ttu mid-gray f5 mt5 mb-6 fw7 blue no-underline dib-l "
      href="https://www.onebreathhou.org/privacy-policy"
    >
      Privacy Policy
    </a>
  </div>
);

export default Partners;
