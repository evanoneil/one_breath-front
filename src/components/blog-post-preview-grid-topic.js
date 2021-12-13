import { Link } from "gatsby";
import React from "react";
import BlogPostPreviewTopic from "./blog-post-preview-topic";

import styles from "./blog-post-preview-grid-topic.module.css";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <h2 className="gold">Who's TCEQ?</h2>
<p>The state environmental agency hasn't been working for Texas for a decade.</p>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreviewTopic {...node} />
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
