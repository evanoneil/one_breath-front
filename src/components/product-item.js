import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {  InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure, } from 'react-instantsearch-dom';

const searchClient = algoliasearch('79W2NPTLRJ', 'f2183a110c74f6068718cdf58ab60f32');

const App = () => (
    <div className="ais-InstantSearch">
  <InstantSearch searchClient={searchClient} indexName="netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all">
    <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList attribute="brand" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
  </InstantSearch>
  </div>
);

export default App

