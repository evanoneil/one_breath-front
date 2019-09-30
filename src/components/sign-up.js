import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Helmet from "react-helmet";

import styles from "./sign-up.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const PartnerHighlight = () => (
  <div className="flex flex-wrap mt6 mb6-ns">
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
      <a
        className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
        href="/subscribe"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="dib v-mid h-100"
        >
          <path
            fill="#42a6e0"
            d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
          />
        </svg>
        &nbsp; SUBSCRIBE
      </a>
    </div>
    <div className={styles.lefthighlight}>
      <div className={styles.interiorcolor}></div>
    </div>
  </div>
);
export default PartnerHighlight;
