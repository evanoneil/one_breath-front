import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import Caldwell from '../assets/img/formaldehyde.png'

import styles from './report-highlight.module.css'

import '../layouts/tachyons/css/tachyons.css'
import '../layouts/custom.css'

const ReportHighlight = () => (
  <div className='flex flex-wrap'>
    <div className={styles.lefthighlight}>
      <div className={styles.interiortext} />
    </div>

    <div className='pa5-ns pa4 pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100'>
      <h3 className='mt0 mb0 blue ttu'>CANCER IN THE AIR</h3>
      <h2 className='mb0'>
        In Houston, Hispanic and lower-income communities face increased cancer risk. One big reason why is formaldehyde.
      </h2>

      <p className='mb5-ns slate-gray'>
        State and federal governments have the power to act to reduce the release of the chemicals that react in the air to form this cancer-causing pollutant.      </p>
      <a
        className='ma3 pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise'
        href='https://environmentalintegrity.org/news/monitoring-shows-plumes-of-carcinogenic-formaldehyde-in-neighborhoods-along-houstons-ship-channel/'
        target='blank'
      >
        Read the report →
      </a>
<br />
                <a
        className='ma3 pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise'
        href='https://environmentalintegrity.org/wp-content/uploads/2021/07/Spanish-translation-of-formaldehyde-executive-summary.pdf'
        target='blank'
      >
        En Español →
      </a>
    </div>
  </div>
)

export default ReportHighlight
