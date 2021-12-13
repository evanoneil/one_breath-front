import React, { createElement } from 'react';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import { Autocomplete } from './autocomplete';
import { ProductItem } from './ProductItem';

const appId = '79W2NPTLRJ';
const apiKey = 'f2183a110c74f6068718cdf58ab60f32';
const searchClient = algoliasearch(appId, apiKey);

function App() {
  return (
    <div className="app-container">
      {/* <h1>React Application</h1> */}
      <Autocomplete
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: 'newsroom',
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all',
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
}

export default App;
