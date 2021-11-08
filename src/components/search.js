import algoliasearch from 'algoliasearch/lite';
import { autocomplete } from '@algolia/autocomplete-js';
import React from 'react';
import '@algolia/autocomplete-theme-classic/dist/theme.css';
import { useEffect } from 'react';


const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
  );

export default function Search() {
  useEffect(() => {
    autocomplete({
      container: '#autocomplete',
      placeholder: 'Search for episodes',
      getSources({query}) {
        return [
            {
                sourceId: 'main',
                getItems(){
                    return[
                        {
                            label: 'Netlify',

                        },
                        {
                            label: 'Algolia',

                        }

                    ].filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase()));
                },
                templates: {
                    item({item})  {
return item.label
                    }
                }
            }
        ];
      },
    });
  }, []);

  return <div id="autocomplete"></div>;
}