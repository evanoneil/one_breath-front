import { Link } from "gatsby";
import React from "react";
import BlogPostPreviewTopic from "./blog-post-preview-topic";

import styles from "./blog-post-preview-grid-topic.module.css";
import PortableText from "./portableText";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <h2 className="blue">{props.title}</h2>
<p>
  <PortableText blocks={props.intro} />
</p>
{/* <p>The state environmental agency hasn't been working for Texas for a decade. See <a class="underline" href="https://onebreathhou.org/categories/tceq">our coverage</a>.</p> */}
      {/* {props.title && <h2 className={styles.headline}>{props.title}</h2>} */}
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
