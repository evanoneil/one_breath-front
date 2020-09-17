import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Highlight01 from "../assets/img/highlight_01.jpg";


import styles from "./partner-highlight-01.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap">
    <div className={styles.lefthighlight}>
      <div className={styles.interiortext}></div>
    </div>

    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 blue ttu">Plastics Pollution on the Rise</h3>
      <hr />
      <h2 className="mb0">
        The plastics industry is growing in Texas. That could be bad news for our safety and our
        health.
      </h2>

      <p className="mb5-ns slate-gray">
        Almost two-thirds of existing plastics plants, the Environmental Integrity Project reports,
        have violated air pollution limits established by the federal Clean Air Act.
      </p>
      <a
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise"
        href="https://www.environmentalintegrity.org/reports/plastics-pollution-on-the-rise/"
        target="blank"
      >
        Read the report
      </a>
    </div>
  </div>
);

export default PartnerHighlight;
