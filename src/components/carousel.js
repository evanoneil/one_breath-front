import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import EipHighlight from '../assets/img/eip_highlight.jpg'
import PetitionHighlight from '../assets/img/petition_highlight.jpg'
import CoastalBreeze from '../assets/img/coastal_breeze.jpg'
import Helmet from 'react-helmet'
import styles from './partner-highlight.module.css'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'

import '../layouts/tachyons/css/tachyons.css'
import '../layouts/custom.css'

const Carousel = props => (
  <div>
    <Helmet>
      {/* <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/css/bootstrap.min.css'
      /> */}
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js' />
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' />{' '}
      <script src='./script.js' />
    </Helmet>
    <h2 className='orange ml6'>In the Media</h2>{' '}
    <div className='carousel slide' id='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          {props.mediaNodes && <NewsroomPreviewGrid nodes={props.mediaNodes} />}
        </div>

        <div className='carousel-item'>
          {props.mediaNodes2 && <NewsroomPreviewGrid nodes={props.mediaNodes2} />}
        </div>

        <div className='carousel-item'>
          {props.mediaNodes3 && <NewsroomPreviewGrid nodes={props.mediaNodes3} />}
        </div>

        <div className='carousel-item'>
          {props.mediaNodes4 && <NewsroomPreviewGrid nodes={props.mediaNodes4} />}
        </div>

        <div className='carousel-item'>
          {props.mediaNodes5 && <NewsroomPreviewGrid nodes={props.mediaNodes5} />}
        </div>
      </div>

      <div className='control-box'>
        <a data-slide='prev' href='#carousel' className='carousel-control left'>
          ‹
        </a>
        <a data-slide='next' href='#carousel' className='carousel-control right'>
          ›
        </a>
      </div>
    </div>
  </div>
)

export default Carousel
