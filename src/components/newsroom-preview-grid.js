import {Link} from 'gatsby'
import React from 'react'
import NewsroomPreview from './newsroom-preview'

import styles from './newsroom-preview-grid.module.css'

function NewsroomPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className='thumbnails list flex flex-wrap'>
        {props.nodes &&
          props.nodes.map(node => (
            <li className='w-25-ns w-100 p3'>
              <NewsroomPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

NewsroomPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default NewsroomPreviewGrid
