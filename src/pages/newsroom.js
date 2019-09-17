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
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          categories {
            title
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
