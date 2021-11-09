import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
// import { rhythm } from "../utils/typography"

const SearchPreview = ({ hit }) => {
  return (
    <div>
      <h3>
        <Link style={{ boxShadow: `none` }} to={hit.pathname}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      </h3>

      <p>
        <Highlight hit={hit} attribute="description" tagName="mark" />
      </p>
    </div>
  )
}

export default SearchPreview