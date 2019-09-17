import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import styles from "./sign-up.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const SignUp = () => (
  <div>
    <div className="flex flex-wrap mb6 ">
      <div className={styles.lefthighlight}>
        <div className={styles.interiorcolor}>
          <div className={styles.interiortext}>
            <h1 className={styles.bradbury}>Sign Up</h1>
            <h3 className={styles.bradbury}>Stay Updated</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
