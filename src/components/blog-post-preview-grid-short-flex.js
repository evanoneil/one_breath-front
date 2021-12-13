import { Link } from "gatsby";
import React from "react";
import BlogPostPreviewShort from "./blog-post-preview-short";

import styles from "./blog-post-preview-grid-short-flex.module.css";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <h2 className="green">In Other News</h2>

      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreviewShort {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewGrid;
