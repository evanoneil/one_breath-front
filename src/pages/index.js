import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Headline from "../components/headline";
import PartnerHighlight from "../components/partner-highlight";
import SignUp from "../components/sign-up";
import Partners from "../components/partners";
import Helmet from "react-helmet";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          authors {
            author {
              name
            }
          }
          categories {
            title
            _type
            _id
            id
            color
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
            caption
          }
          title
          _rawExcerpt
          Action1Title
          Action1URL
          slug {
            current
          }
        }
      }
    }
  }
`;

const description = "Doing the dirty work for clean air in Houston.";
const image =
  "https://d3n8a8pro7vhmx.cloudfront.net/themes/59d2efeced0e461e14000000/attachments/original/1515178430/onebreath-og-new-hp-mr.jpg";

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>One Breath Partnership</title>

        <meta property="og:title" content="One Breath Partnership" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="og:image" content={image} />

        <meta name="twitter:title" content="One Breath Partnership" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@onebreathhou" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <Headline
        title="Doing the dirty work
            for clean air in Houston."
      />
      {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
      {/* <SEO
        title={"One Breath Partnership"}
        description={"Clean Air for Houston"}
        keywords={site.keywords}
      /> */}

      <Container>
        <PartnerHighlight />
        {postNodes && <BlogPostPreviewGrid nodes={postNodes} />}
        <SignUp />
      </Container>
    </Layout>
  );
};

export default IndexPage;
