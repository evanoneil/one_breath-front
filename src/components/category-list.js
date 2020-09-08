import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

import styles from './author-list.module.css'

function AuthorList({ items, title }) {
  return (
    <div>
      <div className="mb3">

        {items.map(({ category, _key }) => {
          const categoryTitle = category && author.title
          const CatSlug = cateogry && category.slug.current
          const CatURL = `/categories/${CatSlug}`
          return (
            <a href={CatURL}>
              {props.categories && (

                <div>
                  {props.categories.map(category => (
                    <span key={category._id} className={category.color}>
                      {category.title}
                    </span>
                  ))}
                </div>

              )}
            </a>
          )
        })}



      </div>
    </div>
  )
}

export default AuthorList
