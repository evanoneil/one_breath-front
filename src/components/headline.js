import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./headline.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const headline = () => (
  <section className="v-mid pt3 ph4-ns blob pb5-ns mb4-ns ph5-m pb1-m pt5-m mb4-m vh-50 pb3 ph4 w-90-ns w-100 sc-jTzLTM ph10-ns ph5-m ph4 w-100-ns mw9 center hrGnky">
    <div class="v-mid w-100 flex flex-wrap">
      <div class="v-mid w-50-ns w-100 flex flex-wrap">
        <h1 class="v-mid f1-ns f2 fw10 lh-title gradtext">
          The science and stories of the work for/toward clean air in Houston
        </h1>
      </div>

      <div class="v-mid w-50 flex flex-wrap">
        <img className="dn db-ns w-100" src="http://wp.evanoneil.net/one_breath/img/main.png" />
      </div>
    </div>
  </section>
);

export default headline;
