import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import EipHighlight from "../../public/assets/img/eip_highlight.jpg";
import PetitionHighlight from "../../public/assets/img/petition_highlight.jpg";
import CoastalBreeze from "../../public/assets/img/coastal_breeze.jpg";

import styles from "./partner-highlight.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap">
    <div className={styles.lefthighlight}>
      <div className={styles.interiortext}></div>
    </div>

    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 green ttu">ENOUGH IS ENOUGH</h3>
      <hr />
      <br />
 
      <h2 className="mb0">
      TCEQ must take its mission to protect our health and safety seriously.      </h2>

      <p className="mb5-ns slate-gray">
      After the sixth chemical disaster in our region in less than a year, TCEQ must take its mission to protect our health and safety seriously.      </p>
      <a
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise"
        href="/take-action"
        target="blank"
      >
        Sign the petition →
      </a>
    </div>
  </div>
);

export default PartnerHighlight;
