import { autocomplete } from '@algolia/autocomplete-js';
import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';

export function Autocomplete(props) {
return (
    <div>
    <Helmet>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
<script type="text/javascript" src="https://hia-unity-map.netlify.app/algoliasearchNetlify.js"></script>
    </Helmet>
                  <div id="search"></div>
                  </div>
                  );
}
