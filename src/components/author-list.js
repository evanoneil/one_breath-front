import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './author-list.module.css'

function AuthorList ({items, title}) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(({author, _key}) => {
          const authorName = author && author.name
          const AuthorSlug = author && author.slug.current
          const AuthorURL = `/authors/${AuthorSlug}`
          return (
            <a href={AuthorURL}>
              <li key={_key} className={styles.listItem}>
                <div>
                  <div className={styles.avatar}>
                    {author && author.image && author.image.asset && (
                      <img
                        src={imageUrlFor(buildImageObj(author.image))
                          .width(100)
                          .height(100)
                          .fit('crop')
                          .url()}
                        alt=''
                      />
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    By&nbsp;
                    {authorName || <em>Missing name</em>}
                  </div>
                </div>
              </li>
            </a>
          )
        })}
      </ul>
    </div>
  )
}

export default AuthorList
