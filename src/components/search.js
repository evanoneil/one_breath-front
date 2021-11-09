import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import React from "react";
import "@algolia/autocomplete-theme-classic/dist/theme.css";
import { useEffect } from "react";

const searchClient = algoliasearch("79W2NPTLRJ", "f2183a110c74f6068718cdf58ab60f32");

export default function Search() {
  useEffect(() => {
    autocomplete({
      container: "#autocomplete",
      placeholder: "Search our newsroom",
      getSources({ query }) {
        return [
          {
            sourceId: "newsroom",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all",
                    query,
                    params: {
                      hitsPerPage: 5
                    }
                  }
                ]
              });
            },
            templates: {
              item({ item, components }) {
                return JSON.stringify(item.title);

                // return (
// <div className="aa-ItemContentTitle">
//             <h3>{item.title}</h3>
//           </div>
// )
              }
            }
          }
        ];
      }
    });
  }, []);

  return <div id="autocomplete"></div>
  ;
}
