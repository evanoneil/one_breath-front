import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'
import VideoPostPreviewGrid from '../components/video-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Headline from '../components/headline'
import ReportHighlight from '../components/report-highlight'
import YouTubeHighlight from '../components/youtube-highlight'
import SignUp from '../components/sign-up'
import Partners from '../components/partners'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/og.jpg'


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
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      home_header
    }
    posts: allSanityPost(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {elemMatch: {title: {eq: "From One Breath Partnership"}}}
        slug: {current: {ne: null}}
        publishedAt: {ne: null}
      }
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
            slug{
              current
            }
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

    videos: allSanityPost(
      limit: 2
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {elemMatch: {title: {eq: "Videos"}}}
        slug: {current: {ne: null}}
        publishedAt: {ne: null}
      }
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

    media: allSanityPost(
      limit: 4
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {elemMatch: {title: {eq: "In the Media"}}}
        slug: {current: {ne: null}}
        publishedAt: {ne: null}
      }
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
`

const image = `https://onebreathhou.org${ogImage}`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media)
  const videoNodes = data && data.media && mapEdgesToNodes(data.videos)
  const description = site.home_header

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>One Breath Partnership</title>
        <meta property='title' content='One Breath Partnership' />

        <meta property='og:title' content='One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />

        <meta name='twitter:title' content='One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
      <Headline title={description} />
      {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
      {/* <SEO
        title={"One Breath Partnership"}
        description={"Clean Air for Houston"}
        keywords={site.keywords}
      /> */}

      <Container>
        <ReportHighlight />

        {postNodes && <BlogPostPreviewGrid nodes={postNodes} />}
        {mediaNodes && <NewsroomPreviewGrid nodes={mediaNodes} />}
        {/* {videoNodes && <VideoPostPreviewGrid nodes={videoNodes} />} */}

        <SignUp />
        {/* <YouTubeHighlight /> */}
      </Container>
    </Layout>
  )
}

export default IndexPage
