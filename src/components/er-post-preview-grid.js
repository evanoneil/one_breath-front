import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

import styles from "./blog-post-preview-grid.module.css";

function ERPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <h2 className="blue">From our newsroom</h2>

      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
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

ERPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ERPostPreviewGrid;
