import React from "react";
import Header from "./header";

import "../styles/layout.css";
import styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <h1>One Breath Partnership is</h1>
          <img src="https://wp.evanoneil.net/one_breath/img/partners.png" />
        </div>
      </div>
      <div className="pa4 db-ns bt pt15 pa5 black">
        <div className="u-center mw-container ph20 ph0-l cf pb25 pa4 w-100">
          <div className="db fl-ns w-100 center items-center">
            <svg viewBox="0 0 800 200">
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="35%" className={styles.textline}>
                  CLEAN AIR
                </text>
              </symbol>

              <g class="g-ants">
                <use xlinkHref="#s-text" className={styles.textcopy}></use>
                <use xlinkHref="#s-text" className={styles.textcopy}></use>
                <use xlinkHref="#s-text" className={styles.textcopy}></use>
                <use xlinkHref="#s-text" className={styles.textcopy}></use>
                <use xlinkHref="#s-text" className={styles.textcopy}></use>
              </g>
            </svg>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
