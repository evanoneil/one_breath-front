import React from "react"
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./arrow.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";



const ChildComponent = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-wrap-ns flex-wrap-reverse mb6-ns">

                        <div className="pa5-ns pa4 pt4 pt3-ns pb0 flex flex-wrap w-50-ns w-100">
                            <h3 className="mt0 mb0 gold">{item.title}</h3>
                            <h2 className="mb0">
                                {item.description}        </h2>

                            <br />

                            <a className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
                                href={item.url}>READ</a>

                        </div>

                        <div className={styles.lefthighlight} style={{
                        backgroundImage: `url(${imageUrlFor(buildImageObj(item._rawMainImage))
                            .width(600)
                            .height(Math.floor((9 / 16) * 600))
                            .auto("format")
                            .url()})`
                    }}></div>





                    </div>
                </div>
))}
</div>


            )
}

            export default ChildComponent






