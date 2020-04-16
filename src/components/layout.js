import React from 'react'
import Header from './header'
import Partners from '../components/partners'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Partners />
      </div>

      <div className='db-ns pt15 pa5-l black coastal'>
        <div className='u-center mw-container ph20 ph0-l cf pb25 pa4-l  w-100'>
          <div className='db fl-ns w-100 pt5 center items-center'>
            <svg viewBox='0 0 800 200'>
              <symbol id='s-text'>
                <text textAnchor='middle' x='50%' y='35%' className={styles.textline}>
                  CLEAN AIR
                </text>
              </symbol>

              <g className='g-ants'>
                <use xlinkHref='#s-text' className={styles.textcopy} />
                <use xlinkHref='#s-text' className={styles.textcopy} />
                <use xlinkHref='#s-text' className={styles.textcopy} />
                <use xlinkHref='#s-text' className={styles.textcopy} />
                <use xlinkHref='#s-text' className={styles.textcopy} />
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
)

export default Layout
