import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import AuthorList from "./author-list";
import SignUp from "../components/sign-up";

import styles from "./blog-post.module.css";

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
    Action1Title,
    Action1URL,
    Action2Title,
    Action2URL,
    Action3Title,
    Action3URL
  } = props;
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
          <div className={styles.example}>
            <div className={styles.displaygrid}>
              <div className={styles.pill}>
                {categories.map(category => (
                  <div key={category._id}>{category.title}</div>
                ))}
              </div>
              <div className={styles.publishedAt}> </div>
            </div>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
      )}
      <Container>
        <div>
          <p className={styles.caption}>{mainImage.caption}</p>
          <div className={styles.grid}>
            <div></div>
            <div className={styles.mainContent}>
              {authors && <AuthorList items={authors} />}
              <div>
                {" "}
                {publishedAt && (
                  <div className={styles.publishedAt}>
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? distanceInWords(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), "MMMM Do, YYYY")}
                  </div>
                )}
              </div>
              <br />
              {_rawBody && <PortableText blocks={_rawBody} />}
              <h2>Take Action</h2>
              <ol>
                <li>
                  <a href={Action1URL}>{Action1Title}</a>
                </li>
                <li>
                  <a href={Action2URL}>{Action2Title}</a>
                </li>
                <li>
                  <a href={Action3URL}>{Action3Title}</a>
                </li>
              </ol>
            </div>
            <div></div>
            {/* <aside className={styles.metaContent}></aside> */}
          </div>
        </div>
        <br />
        <SignUp />
      </Container>
    </article>
  );
}

export default BlogPost;
