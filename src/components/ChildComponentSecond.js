import React from "react"
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./report-highlight.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";



const ChildComponent = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>

                    <div className='flex flex-wrap'>

                    <div className={styles.lefthighlight} style={{
                        backgroundImage: `url(${imageUrlFor(buildImageObj(item._rawMainImage))
                            .width(600)
                            .height(Math.floor((9 / 16) * 600))
                            .auto("format")
                            .url()})`
                    }}></div>


    <div className='pa5-ns pa4 pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100'>
      <h3 className='mt0 mb0 blue ttu'>{item.title}</h3>
      <h2 className='mb0'>
      {item.description}       </h2>

      <a className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
                                href={item.url}>READ</a>



  </div>
  </div>
  </div>




                 







))}
</div>


            )
}

            export default ChildComponent







            