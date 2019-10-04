import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import LogoGrid from "../../public/assets/img/main.png";

import styles from "./headline.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const newsroomheadline = props => (
  <section className="v-mid pt3 ph4-ns blob pb5-ns mb4-ns ph5-m pb1-m pt5-l pt5-m mb4-m vh-50 pb3 ph4 w-90-ns w-100 sc-jTzLTM ph10-ns ph5-m ph4 w-100-ns mw9 center hrGnky">
    <div class="v-mid w-100 flex flex-wrap">
      <div class="v-mid pr7-l w-100 pr3 flex-wrap pt3-l pt1-m pt0">
        {/* <h3 class="mt0 mb0 blue">NEWSROOM</h3> */}
        <h1 class="f1-ns f2 fw10 lh-title ">
          Covering the Houston region and Texas like smog before the Clean Air Act.
        </h1>
      </div>

      <div class="v-mid w-50 flex flex-wrap">
        <img className="dn db-ns w-100" src={LogoGrid} />
      </div>
    </div>
  </section>
);

export default newsroomheadline;
