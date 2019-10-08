import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

import styles from "./newsroom-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function NewsroomPreview(props) {
  return (
    <div>
      <Link
        className={props.isInList ? styles.inList : styles.inGrid}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >
        {/* <div className="mb3">
        <div>
          <span key={props.categories[0]._id} className={styles.pill}>
            {props.categories[0].title}
          </span>
        </div>
      </div> */}
        <div className={styles.displaygrid}>
          {/* <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              className={styles.zoom}
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div> */}
          <div className={styles.text}>
            <h3 className={cn(responsiveTitle3, styles.title)}>
              <a>{props.title}</a>
            </h3>

            <div className={styles.date}>
              <h4>
                By {props.authors[0].author.name}
                <br />
                {format(props.publishedAt, "MM.D.YYYY")}
              </h4>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.filed}>
        <h4>
          Filed under:
          <br />
          {props.categories[0].title}
        </h4>
      </div>
    </div>
  );
}

export default NewsroomPreview;
