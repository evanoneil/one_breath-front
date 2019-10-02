import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

import logoFade from "../../public/assets/img/main.png";

const headline = props => (
  <div>
    <section className="v-mid pt3 ph4-ns blob pb5-ns mb4-ns pb1-m pt5-m mb4-m vh-50 pb3 pr6 w-90-ns w-100 sc-jTzLTM ph10-ns ph5-m pl4 w-100-ns mw9 center hrGnky">
      <div className="v-mid w-100 flex flex-wrap">
        <div className="v-mid w-50-ns w-100 flex flex-wrap">
          <h1 className="v-mid f1-ns f2 fw10 lh-title gradtext pt4-l pt-2-m">{props.title}</h1>
        </div>

        <div className="v-mid w-50 flex flex-wrap">
          <img className="dn db-ns w-100" src={logoFade} />
        </div>
      </div>
    </section>
  </div>
);

export default headline;
