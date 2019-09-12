import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import NewsroomPreviewGrid from "../components/newsroom-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Helmet from "react-helmet";

import { responsiveTitle1 } from "../components/typography.module.css";

// export const query = graphql`
//   query NewsroomPageQuery {
//     posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
//       edges {
//         node {
//           id
//           categories {
//             title
//           }
//           publishedAt
//           mainImage {
//             ...SanityImage
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }

//     media: allSanityNewsroom {
//       edges {
//         node {
//           categories {
//             title
//           }
//           publishedAt
//           url
//           outlet
//           title
//         }
//       }
//     }
//   }
// `;

const TakeActionPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media);

  return (
    <Layout>
      <SEO title="Take Action" />
      <Helmet>
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v3/petition/tceq-is-missing-in-action-and-houstonians-health-is-being-put-at-risk-we-deserve-answers-cleanuptceq?format=js&source=widget"></script>
      </Helmet>

      <Container>
        <div id="can-petition-area-tceq-is-missing-in-action-and-houstonians-health-is-being-put-at-risk-we-deserve-answers-cleanuptceq" />
      </Container>
    </Layout>
  );
};

export default TakeActionPage;
