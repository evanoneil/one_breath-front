import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./sign-up.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap mt6 mb6-ns">
    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 gold">STAY UP TO DATE</h3>
      <hr />
      <h1 className="mb0">
        The quality of our newsletter is better than the quality of Houston's air
      </h1>

      <br />

      <a
        data-aos="fade-up"
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
        href="google.net"
      >
        Sign Up
      </a>
    </div>

    <div className={styles.lefthighlight}>
      <div className={styles.interiorcolor}></div>
    </div>
  </div>
);

export default PartnerHighlight;
