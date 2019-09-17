import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./partner-highlight.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap mb6-ns">
    <div className={styles.lefthighlight}>
      <div className={styles.interiortext}>
        <h1 className={styles.bradbury}>Caring for our environment is caring for Houston</h1>
        <h3>Learn about our work</h3>
      </div>
    </div>

    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 blue">The thing</h3>
      <hr />
      <h2 className="mb0">
        This is an article title that is really good about an article from the campaign
      </h2>

      <hr />
      <p className="mb5-ns slate-gray">
        In Santa Barbara, Hannah cried "I miss those freezing beaches," I walked into town To buy
        some kindling for the fire, Hannah tore the New York Times up into pieces
      </p>
      <a className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise" href="google.net">
        Read more
      </a>
    </div>
  </div>
);

export default PartnerHighlight;
