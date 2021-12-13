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
import ArrowHighlight from '../components/arrow'
import NewGrid from '../components/new-grid'
import styles from "../components/new-grid.module.css";
import BlogPostPreviewGridShort from '../components/blog-post-preview-grid-short'
import BlogPostPreviewGridNew from '../components/blog-post-preview-grid-new'
import BlogPostPreviewGridTopic from '../components/blog-post-preview-grid-topic'
import BlogPostPreviewGridShortFlex from '../components/blog-post-preview-grid-short-flex'


import {getAlgoliaResults} from '@algolia/autocomplete-js'
import Autocomplete from '../components/Autocomplete/Autocomplete'
import SearchItem from '../components/SearchItem'
import '@algolia/autocomplete-theme-classic/dist/theme.css'
import Searchbar from '../components/Searchbar'
import algoliasearch from 'algoliasearch'
import * as searchClasses from '../components/Searchbar/Searchbar.module.css'
const appId = '79W2NPTLRJ'
const apiKey = 'f2183a110c74f6068718cdf58ab60f32'
const searchClient = algoliasearch(appId, apiKey)

// import Search from '../components/search'
import App from '../components/app'


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

  query IndexPageQueryNew {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      home_header
    }
    posts: allSanityPost(
      skip:1
      limit: 4
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

    topic: allSanityPost(
      limit: 2
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {elemMatch: {title: {eq: "Topic Highlight"}}}
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

    featured: allSanityPost(
      limit: 1
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
  }
`

const image = `https://onebreathhou.org${ogImage}`

const IndexPageNew = props => {
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
  const featuredNodes = data && data.media && mapEdgesToNodes(data.featured)
  const topicNodes = data && data.media && mapEdgesToNodes(data.topic)


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
              {/*  <Headline title={description} />*/}
      {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
      {/* <SEO
        title={"One Breath Partnership"}
        description={"Clean Air for Houston"}
        keywords={site.keywords}
      /> */}

      <Container>
      <div class="flex flex-wrap">

<div class="w-50-l w-100 pr5-l"> 
{featuredNodes && <BlogPostPreviewGridNew nodes={featuredNodes} />}
</div>

<div class="w-25-l w-50-m w-100 pr5-l">   {postNodes && <BlogPostPreviewGridShort nodes={postNodes} />}
</div>

<div class="w-25-l w-50-m w-100">{topicNodes && <BlogPostPreviewGridTopic nodes={topicNodes} />}</div>
</div> 
</Container>

<div className={styles.explore}>
<div class={styles.blobpurple}></div>
<div class={styles.blobyellow}></div>
<div class={styles.center}>
  <h2 className={"black text-center"}>Explore our Newsroom</h2>
  <p>We work upward with communities from the intersections of climate, health and environmental justice. Explore.</p>
  </div>
  <div class={styles.blobpink}></div>
  <div style={{zIndex: 999, position:'relative'}}>
  <Searchbar />
        <div className={searchClasses.AutocompleteWrapper}>
          <Autocomplete
            openOnFocus={true}
            getSources={({query}) => [
              {
                sourceId: 'search',
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: 'netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all',
                        query
                      }
                    ]
                  })
                },
                templates: {
                  item({item, components}) {
                    return <SearchItem hit={item} components={components} />
                  }
                }
              }
            ]}
          />
        </div>
</div>



  </div>

        <ArrowHighlight />
        <ReportHighlight />
        <div className={styles.explore}>
<div class={styles.blobblue}></div>
<div class={styles.blobyellow}></div>
<div class={styles.center}>

  <h2 className={"darkgrey text-center f2"}>Sign Up For Our Newsletter</h2>
  <p>Particulate Matters delivers the most important stories from the Gulf Coast [to your inbox] [to you].</p>
  <div class={styles.blobgreen}></div>
  <a className="pa3 ttu mid-gray f5 fw7 blue no-underline dib-l enterprise mt5"
        href="/sign-up">SUBSCRIBE</a>
  </div>
  </div>
  <Container>

        {/* {postNodes && <BlogPostPreviewGrid nodes={postNodes} />} */}
        {mediaNodes && <BlogPostPreviewGridShortFlex nodes={mediaNodes} />}
        {/* {videoNodes && <VideoPostPreviewGrid nodes={videoNodes} />} */}

        {/* <SignUp /> */}
        {/* <YouTubeHighlight /> */}
      </Container>
    </Layout>
  )
}

export default IndexPageNew
