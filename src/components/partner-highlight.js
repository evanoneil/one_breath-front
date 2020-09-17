import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import EipHighlight from '../assets/img/eip_highlight.jpg'
import PetitionHighlight from '../assets/img/petition_highlight.jpg'
import CoastalBreeze from '../assets/img/coastal_breeze.jpg'

import styles from './partner-highlight.module.css'

import '../layouts/tachyons/css/tachyons.css'
import '../layouts/custom.css'

const PartnerHighlight = () => (
  <div>
    {/* <div className='flex flex-wrap'>
      <div className={styles.lefthighlight}>
        <div className={styles.interiortext} />
      </div>

      <div className='pa5-ns pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100'>
        <h3 className='mt0 mb0 green ttu'>ENOUGH IS ENOUGH</h3>
        <hr />
        <br />

        <h2 className='mb0'>
          TCEQ must take its mission to protect our health and safety seriously.{' '}
        </h2>

        <p className='mb5-ns slate-gray'>
          After the sixth chemical disaster in our region in less than a year, Mayor Turner said,
          "We just have to have a serious conversation." That starts with TCEQ.
        </p>
        <a
          className='pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise'
          href='/take-action'
          target='blank'
        >
          Sign the petition →
        </a>
      </div>
    </div> */}
    <div className='w-100 flex flex-wrap'>
      <div className='w-33-l w-100 pa5-ns pa3 '>
        <h3 className='blue'>MAJOR MALFUNCTION</h3>

        <p className='mb2-ns slate-gray'>
          Petrochemical companies spewed more than twice as many unpermitted pollutants in our air
          in 2018 than 2017.
        </p>
        <a href='https://environmenttexas.org/reports/txe/major-malfunction'>
          <p className='mb5-ns fw7 slate-gray'>View the Report →</p>
        </a>
      </div>
      <div className='w-33-l w-100 pa5-ns pa3 '>
        <h3 className='orange'>PLASTICS POLLUTION ON THE RISE</h3>
        <p className='mb2-ns slate-gray'>
          Cheap natural gas is fueling an expansion along the Gulf Coast of facilities that threaten
          our health.
        </p>
        <a href='https://environmentalintegrity.org/news/rapid-growth-of-houston-plastics-industry-increases-air-pollution-and-safety-risks/'>
          <p className='mb5-ns fw7 slate-gray'>View the Report →</p>
        </a>
      </div>
      <div className='w-33-l w-100 pa5-ns pa3 '>
        <h3 className='red'>THE COSTS OF A WIDER I-45</h3>
        <p className='mb2-ns slate-gray'>
          TxDOT's plan would put 26 Houston schools and daycares in harm's way of dangerous air
          pollution.
        </p>
        <a href='https://airalliancehouston.org/campaigns/i45-expansion/'>
          <p className='mb5-ns fw7 slate-gray'>View the Report →</p>
        </a>
      </div>
    </div>
  </div>
)

export default PartnerHighlight
