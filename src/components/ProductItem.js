import React, { createElement } from 'react';
import "@algolia/autocomplete-theme-classic/dist/theme.css";


export function ProductItem({ hit, components }) {
  return (
    <a href={hit.pathname} className="aa-ItemLink">
      <div className="aa-ItemContent">
                  <div className="aa-ItemIcon">
                    <img
                      src={hit.image}
                      alt={hit.title}
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="aa-ItemContentBody">
                    <div className="aa-ItemContentTitle">
                      <components.Highlight hit={hit} attribute="title" />
                    </div>
                    <div className="aa-ItemContentDescription">
                      <components.Snippet hit={hit} attribute="content" />
                    </div>
                  </div>
                </div>
                <div className="aa-ItemActions">
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
    </a>
  );
}