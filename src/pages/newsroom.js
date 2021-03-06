import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'
import VideoPostPreviewGrid from '../components/video-post-preview-grid'
import PartnerHighlight01 from '../components/partner-highlight-01'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Headline from '../components/headline'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/og.jpg'
import YouTubeHighlight from '../components/youtube-highlight'
import Carousel from '../components/carousel'
import { responsiveTitle1 } from '../components/typography.module.css'

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

  query NewsroomPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      newsroom_header
    }
    posts: allSanityPost(
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
            slug {
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
      limit: 8

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
    media2: allSanityPost(
      limit: 8
      skip: 8
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

    media3: allSanityPost(
      limit: 8
      skip: 16
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

    media4: allSanityPost(
      limit: 8
      skip: 24
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

    media5: allSanityPost(
      limit: 8
      skip: 32
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

const NewsroomPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const site = (data || {}).site
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts) : []
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media)
  const mediaNodes2 = data && data.media2 && mapEdgesToNodes(data.media2)
  const mediaNodes3 = data && data.media3 && mapEdgesToNodes(data.media3)
  const mediaNodes4 = data && data.media4 && mapEdgesToNodes(data.media4)
  const mediaNodes5 = data && data.media5 && mapEdgesToNodes(data.media5)

  const description = site.newsroom_header
  const image = `https://onebreathhou.org${ogImage}`

  return (
    <Layout>
      {/* <SEO title="Newsroom" /> */}
      <Helmet>
        <title>Newsroom | One Breath Partnership</title>

        <meta property='og:title' content='Newsroom | One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />

        <meta name='twitter:title' content='Newsroom | One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
      <Headline title={description} />
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

        {/* {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />} */}

        {postNodes && <BlogPostPreviewGrid nodes={postNodes} />}
        <PartnerHighlight01 />
        <br />
        <Carousel
          mediaNodes={mediaNodes}
          mediaNodes2={mediaNodes2}
          mediaNodes3={mediaNodes3}
          mediaNodes4={mediaNodes4}
          mediaNodes5={mediaNodes5}
        />

        <br />
        <YouTubeHighlight />
        {/* {videoNodes && <VideoPostPreviewGrid nodes={videoNodes} />} */}

        {/* <h2>In the Media</h2>

        {mediaNodes && mediaNodes.length > 0 && <NewsroomPreviewGrid nodes={mediaNodes} />} */}
      </Container>
    </Layout>
  )
}

export default NewsroomPage
