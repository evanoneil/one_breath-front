import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Caldwell from "../../public/assets/img/caldwell.jpg";

import styles from "./youtube-highlight.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap">
    <div className={styles.lefthighlight}>
      <div className={styles.interiortext}></div>
    </div>

    <div className="pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
      <h3 className="mt0 mb0 blue ttu">VIDEOS FROM ONE BREATH PARTNERSHIP</h3>
      <hr />
      <h2 className="mb0">
        Community organizers, advocates, scientists and everyday Houstonians share stories about
        their work for clean air.
      </h2>

      <hr />
      <p className="mb5-ns slate-gray">
        “We can only bring about change if we’re aware of the problem,” says Rev. James Caldwell.
      </p>
      <a
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise"
        href="https://www.youtube.com/channel/UCr9nw8OlLNnU3BaagtbgQYA"
        target="blank"
      >
        Watch Now on YouTube{" "}
      </a>
    </div>
  </div>
);

export default PartnerHighlight;
