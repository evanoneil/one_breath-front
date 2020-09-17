import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import EipHighlight from "../assets/img/eip_highlight.jpg";

import styles from "./partner-highlight.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap">
    <div className={styles.lefthighlight}>
      <div className={styles.interiortext}></div>
    </div>

    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 green ttu">THE THIN GREEN LINE</h3>
      <hr />
      <h2 className="mb0">
        As Texas' petrochemical industry grows, the environmental agency meant to protect our health and safety is shrinking.
      </h2>

      <p className="mb5-ns slate-gray">
        In the last 10 years, the Environmental Integrity Project reports, the Texas Commission on Environmental Quality's budget has been cut by 35% — more than every other state, except one.
      </p>
      <a
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise"
        href="https://www.environmentalintegrity.org/news/state-funding-for-environmental-programs-slashed"
        target="blank"
      >
        Read the report
      </a>
    </div>
  </div>
);

export default PartnerHighlight;
