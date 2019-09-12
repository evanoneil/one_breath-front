import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";

import styles from "./newsroom-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function NewsroomPreview(props) {
  return (

      <div>
        <a class={styles.pill}>{props.categories[0].title}</a>
      </div>

      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        <p><a href={props.url}>View Article</a></p>
        <div className={styles.date}>{format(props.publishedAt, "MMMM Do, YYYY")}</div>
        
      </div>
    
          

  );
}

export default NewsroomPreview;
