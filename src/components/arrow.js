import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Helmet from "react-helmet";

import styles from "./arrow.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const ArrowHighlight = () => (
  <div className="flex flex-wrap-ns flex-wrap-reverse mb6-ns">

    <div className="pa5-ns pa4 pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 gold">THE HOUSTON ARROW →</h3>
      <h2 className="mb0">
      What "The Houston Arrow’ reveals about the connections between government, development and the concentration of opportunity. A four-part series by Leah Binkovitz.
            </h2>

      <br />
      <a
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
        href="/houston-arrow"
      >
       
        READ
      </a>
    </div>
    <div className={styles.lefthighlight}>
      <div className={styles.interiorcolor}></div>
    </div>
  </div>
);
export default ArrowHighlight;
