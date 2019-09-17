import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./partners.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const Partners = () => (
  <div className="tc">
    <h2 className="mt0 mb0 gold center">One Breath Partnership is</h2>

    <br />
    <div className={styles.displaygrid}>
      <div>AAH</div>
      <div>EDF</div>
      <div>PC</div>
      <div>ET</div>
      <div>EIP</div>
      <div>Rice</div>
    </div>
    <a
      className="center pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
      href="google.net"
    >
      More about the partnership
    </a>
  </div>
);

export default Partners;
