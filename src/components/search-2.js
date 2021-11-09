
import React from "react"
import { graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom"
import SearchPreview from "./search-preview"


// import SearchPreview from "../components/search-preview"

const searchClient = algoliasearch(
    '79W2NPTLRJ',
    'f2183a110c74f6068718cdf58ab60f32'
  );

export default function SearchTwo() {
    return(
    <InstantSearch searchClient={searchClient} indexName="netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all">
    <SearchBox />
    <Hits hitComponent={SearchPreview} />
  </InstantSearch>
  )
}

