import algoliasearch from 'algoliasearch';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import React from 'react';
import '@algolia/autocomplete-theme-classic/dist/theme.css';
import { useEffect } from 'react';
// import ProductItem from "./product-item"

const searchClient = algoliasearch(
    '79W2NPTLRJ',
    'f2183a110c74f6068718cdf58ab60f32'
  );

export default function Search() {
  useEffect(() => {
    autocomplete({
      container: '#autocomplete',
      placeholder: 'Search our newsroom',
      getSources({ query }) {
        return [
            {
                sourceId:'newsroom',
                getItems() {
                    return getAlgoliaResults ({
                        searchClient,
                        queries : [
                            {
                                indexName: 'netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all',
                                query,
                                params: {
                                    hitsPerPage: 5,

                                }
                            }
                        ]
                    })
                },
                templates: {
                    item({ item, components }) {
                    //   return JSON.stringify(item);
                    //   return (

                      
                    //     // <div className="aa-ItemWrapper">
                    //     //   <div className="aa-ItemContent">
                    //         <div className="aa-ItemIcon">
                    //           <img src={item.image} alt={item.title} width="40" height="40" />
                    //         </div>
                        //     <div className="aa-ItemContentBody">
                        //       <div className="aa-ItemContentTitle">
                        //         <components.Snippet hit={item} attribute="title" />
                        //       </div>
                        //       <div className="aa-ItemContentDescription">
                        //         <components.Snippet hit={item} attribute="content" />
                        //       </div>
                        //     </div>
                        //   </div>

                        // )


                          {/* <div className="aa-ItemActions">
                            <button
                              className="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                              type="button"
                              title="Select"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                              >
                                <path d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z" />
                              </svg>
                            </button>
                          </div> 
                        </div> 
                      ); */}
                    },
                  },
            }
//             {
//                 sourceId: 'main',
//                 getItems(){
//                     return[
//                         {
//                             label: 'Netlify',

//                         },
//                         {
//                             label: 'Algolia',

//                         }

//                     ].filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase()));
//                 },
//                 templates: {
//                     item({item})  {
// return item.label
//                     }
//                 }
//             }
        ];
      },
    });
    
  }, 
  
  []
  
  );

  return <div id="autocomplete"></div>;
}