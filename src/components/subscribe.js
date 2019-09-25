import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Helmet from "react-helmet";

import styles from "./sign-up.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap">
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.0/dist/aos.css" />
      <script src="https://unpkg.com/aos@2.3.0/dist/aos.js"></script>
      <script src="https://wp.evanoneil.net/one_breath/script.js"></script>
    </Helmet>
    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 gold">STAY UP TO DATE</h3>
      <hr />
      <h1 className="mb0">
        The quality of our newsletter is better than the quality of Houston's air
      </h1>
      <br />
    </div>
    <div className={styles.lefthighlight}>
      <div className={styles.interiorcolor}></div>
    </div>
  </div>
);
export default PartnerHighlight;
