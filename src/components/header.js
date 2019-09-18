import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import logo from "../../public/assets/img/onebreath_logo.png";

import styles from "./header.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-2">
    <div className=" w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns">
      <div className={styles.branding}>
        <Link to="/" name="home">
          <img src={logo} />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/newsroom/" className="ttu mid-gray f5 fw5 no-underline dn dib-l mh4">
              Newsroom
            </Link>
          </li>
          <li>
            <Link to="/about/" className="ttu mid-gray f5 fw5 no-underline dn dib-l mh4">
              About
            </Link>
          </li>
          <li>
            <Link to="/take-action/" className="ttu mid-gray f5 fw5 no-underline dn dib-l mh4">
              Take Action
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              className="dib pr20 link v-top fill-gray"
              href="http://facebook.com/onebreathhou"
            >
              <svg
                width="10"
                height="21"
                viewBox="0 0 10 21"
                xmlns="http://www.w3.org/2000/svg"
                className="dib v-mid h-100 mr3 fbfix"
              >
                <title>Facebook Icon</title>
                <path
                  d="M6.512 6.88V5.073c0-.272.012-.482.037-.631A1.24 1.24 0 0 1 6.722 4a.711.711 0 0 1 .433-.3c.2-.054.465-.082.797-.082h1.81V0H6.869C5.195 0 3.993.397 3.263 1.191c-.731.795-1.096 1.964-1.096 3.51v2.18H0V10.5h2.167V21h4.345V10.5h2.892l.383-3.62H6.512z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              className="dib pr20 link v-top fill-gray"
              href="http://instagram.com/onebreathhou"
            >
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                xmlns="http://www.w3.org/2000/svg"
                className="mr3 igfix"
              >
                <title>Instagram Icon</title>
                <path d="M15.664.112H6.457C3.33.112.787 2.61.787 5.68v9.042c0 3.071 2.543 5.57 5.67 5.57h9.207c3.127 0 5.67-2.5 5.67-5.57V5.681c0-3.07-2.543-5.57-5.67-5.57zm3.847 14.611c0 2.084-1.726 3.779-3.847 3.779H6.457c-2.121 0-3.847-1.695-3.847-3.779V5.681c0-2.084 1.726-3.779 3.847-3.779h9.207c2.121 0 3.847 1.695 3.847 3.779v9.042z"></path>
                <path d="M10.693 5.32c-2.92 0-5.294 2.332-5.294 5.2 0 2.867 2.375 5.2 5.294 5.2 2.92 0 5.295-2.333 5.295-5.2 0-2.868-2.375-5.2-5.295-5.2zm0 8.608c-1.914 0-3.471-1.529-3.471-3.409s1.557-3.41 3.471-3.41c1.915 0 3.472 1.53 3.472 3.41 0 1.88-1.558 3.41-3.472 3.41zM15.96 3.475c-.352 0-.697.14-.945.384-.25.244-.393.583-.393.93 0 .344.144.683.393.928a1.357 1.357 0 0 0 1.89 0c.249-.245.391-.584.391-.929 0-.346-.142-.685-.391-.929a1.354 1.354 0 0 0-.946-.384z"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener"
              class="dib pr20 link v-top fill-gray"
              href="http://twitter.com/onebreathhou"
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                xmlns="http://www.w3.org/2000/svg"
                className="dib v-mid h-100 mr3"
              >
                <title>Twitter Icon</title>
                <path
                  d="M18.248 2.351A4.2 4.2 0 0 0 19.38.581c.063-.194-.151-.361-.33-.258a8.01 8.01 0 0 1-2.101.854.563.563 0 0 1-.5-.122A4.343 4.343 0 0 0 13.605 0c-.454 0-.912.07-1.362.207a4.122 4.122 0 0 0-2.807 2.948 4.43 4.43 0 0 0-.102 1.555.15.15 0 0 1-.038.118.161.161 0 0 1-.119.053C6.11 4.601 3.359 3.158 1.414.814a.227.227 0 0 0-.368.028 4.164 4.164 0 0 0-.582 2.123 4.18 4.18 0 0 0 1.281 3.01 3.891 3.891 0 0 1-.98-.372.225.225 0 0 0-.334.19c-.022 1.701.992 3.215 2.51 3.896l-.091.001c-.24 0-.485-.023-.724-.068a.222.222 0 0 0-.257.284c.493 1.512 1.818 2.627 3.404 2.88A8.035 8.035 0 0 1 .829 14.11H.332a.328.328 0 0 0-.322.244.332.332 0 0 0 .163.37 11.96 11.96 0 0 0 5.93 1.57c1.822 0 3.526-.356 5.066-1.056a11.173 11.173 0 0 0 3.707-2.73 11.922 11.922 0 0 0 2.27-3.734c.505-1.325.772-2.739.772-4.088v-.064c0-.217.1-.42.274-.56A8.406 8.406 0 0 0 19.9 2.22c.125-.184-.072-.414-.278-.324a7.98 7.98 0 0 1-1.375.455z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>

          <li className="blue">
            <a className="ttu mid-gray f5 no-underline dn dib-l blue" href="/take-action">
              JOIN US
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
