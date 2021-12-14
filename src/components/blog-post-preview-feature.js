import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import CategoryList from "./category-list"
import styles from "./blog-post-preview-feature.module.css";
import { responsiveTitle2 } from "./typography.module.css";
import AuthorList from "./author-list";


function BlogPostPreviewFeature(props) {
  return (

    <div>
      {/* <div className="mb3">


        {props.categories && (

          <div>
            {props.categories.map(category => {
              const CatURL = `/categories/${category.slug.current}`
              return (
                <a href={CatURL}>
                  <span key={category._id} className={category.color}>
                    {category.title}
                  </span>
                </a>
              )
            })}
          </div>
        )}



      </div> */}

      <Link
        className={props.isInList ? styles.inList : styles.inGrid}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >

        <div className={styles.displaygrid}>
          <div className={styles.leadMediaThumb}>
            {props.mainImage && props.mainImage.asset && (
              <img
                className={styles.zoom}
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(1200)
                  // .height(Math.floor((9 / 16) * 600))
                  // .auto("format")
                  .url()}
                alt={props.mainImage.alt}
              />
            )}
          </div>
          <div className={styles.text}>
            <h3 className={cn(responsiveTitle2, styles.title)}>
              <a>{props.title}</a>
            </h3>
            {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}            <div className={styles.date}>
                            <h4 className="fw1 mb4">
              {/* {format(props.publishedAt, "MM.D.YYYY")} */}
                {/* By {props.authors[0].author.name} */}
                {props.authors && <AuthorList items={props.authors} />}
                <br />
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPostPreviewFeature;
