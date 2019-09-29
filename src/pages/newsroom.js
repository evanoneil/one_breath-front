import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import NewsroomPreviewGrid from "../components/newsroom-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import NewsroomHeadline from "../components/newsroomheadline";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query NewsroomPageQuery {
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          categories {
            title
            _type
            _id
            id
            color
          }
          publishedAt
          authors {
            author {
              name
            }
          }

          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    media: allSanityNewsroom {
      edges {
        node {
          categories {
            title
          }
          publishedAt
          url
          outlet
          title
        }
      }
    }
  }
`;

const NewsroomPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);
  // const mediaNodes = data && data.media && mapEdgesToNodes(data.media);

  return (
    <Layout>
      <SEO title="Newsroom" />
      <NewsroomHeadline />
      <Container>
        {/* <div className="flex flex-wrap">
          <h1 className="mr3 flex-wrap mb0">Pollution 101</h1> &nbsp;{" "}
          <h1 className="mr3 flex-wrap mb0">/</h1> &nbsp;{" "}
          <h1 className="mr3 flex-wrap mb0">Climate Crisis</h1> <h1 className="mr3 flex-wrap">/</h1>{" "}
          &nbsp; <h1 className="mr3 flex-wrap mb0">Who's Protecting Us?</h1>{" "}
          <h1 className="mr3 flex-wrap mb0">/</h1> &nbsp;{" "}
          <h1 className="mr3 flex-wrap mb0">Enviromental Justice</h1>
        </div> */}
        {/* <h1 className={responsiveTitle1}>Newsroom</h1>
        <h2>From One Breath Partnership</h2> */}
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
        {/* <h2>In the Media</h2>

        {mediaNodes && mediaNodes.length > 0 && <NewsroomPreviewGrid nodes={mediaNodes} />} */}
      </Container>
    </Layout>
  );
};

export default NewsroomPage;
