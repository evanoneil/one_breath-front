import React from 'react'
import * as classes from './SearchItem.module.css'

const SearchItem = props => {
  const {hit, components} = props
  return (
    <div
      className={`aa-ItemContent ${classes.ItemWrapper}`}
      onClick={() => {
        window.open(hit.url)
      }}
    >
      <div className='aa-ItemTitle'>
        <p>
          <components.ReverseHighlight hit={hit} attribute='title' />
        </p>
        <p>
          <small>
            <components.ReverseHighlight hit={hit} attribute='description' />
          </small>
        </p>
      </div>
    </div>
  )
}

export default SearchItem

// <a href={hit.url} className='aa-ItemLink'>
// </a>
