import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import styles from './headline.module.css'
import '../layouts/tachyons/css/tachyons.css'
import '../layouts/custom.css'

import logoFade from '../assets/img/main.png'

const headline = props => (
  <div className='flex flex-wrap'>
    <div class="w-100 mh3 tc pv4 b white v-mid center pa3 bw2 br5 ba b--yellow mb4" style={{

    }}>
      <div className={styles.scrollright}>
        <p>
          <img class="mw1" src="https://houston-arrow.netlify.app/img/icon.png"></img><a href="https://onebreathhou.org/houston-arrow" class=" ">→→→ Read our new feature: <span class="brown">The Houston Arrow</span> → →→<img class="mw1" src="https://houston-arrow.netlify.app/img/icon.png"></img>
          </a>
        </p>

      </div>
    </div>
    <section className='v-mid pv3  blob    vh-30   w-100   ph3  '>
      <div className='v-mid w-100 flex flex-wrap'>
        <div className='v-mid w-90-ns w-100 flex flex-wrap'>
          <h1 className='v-mid f1-ns f2 fw10 lh-title gradtext pt4-l pt-2-m'>{props.title}</h1>
        </div>

        {/* <div className='v-mid w-50 flex flex-wrap'>
          <img className='dn db-ns ' src={logoFade} />
        </div> */}
      </div>
    </section>
    {/* <section className='w-30-l w-100 pr5-l p0-l ph5'>
      <div className='w-100 flex flex-wrap'>
        <div className='w-100  '>
          <h3 className='blue f5 mv0'>MAJOR MALFUNCTION</h3>
          <p className='mv0 slate-gray'>
            Petrochemical companies spewed more than twice as many unpermitted pollutants in our air
            in 2018 than 2017.
          </p>
          <a href='https://environmenttexas.org/reports/txe/major-malfunction'>
            <p className='mv0 fw7 slate-gray'>View the Report →</p>
          </a>
        </div>
        <div className='w-100  '>
          <h3 className='orange f5 mb0'>PLASTICS POLLUTION ON THE RISE</h3>
          <p className='mv0 slate-gray mv0'>
            Cheap natural gas is fueling an expansion along the Gulf Coast of facilities that
            threaten our health.
          </p>
          <a href='https://environmentalintegrity.org/news/rapid-growth-of-houston-plastics-industry-increases-air-pollution-and-safety-risks/'>
            <p className='mv0 fw7 slate-gray'>View the Report →</p>
          </a>
        </div>
        <div className='w-100  '>
          <h3 className='red f5 mb0'>THE COSTS OF A WIDER I-45</h3>
          <p className='slate-gray mv0'>
            TxDOT's plan would put 26 Houston schools and daycares in harm's way of dangerous air
            pollution.
          </p>
          <a href='https://airalliancehouston.org/campaigns/i45-expansion/'>
            <p className='mv0 fw7 slate-gray'>View the Report →</p>
          </a>
        </div>
      </div>
    </section> */}
  </div>
)

export default headline
