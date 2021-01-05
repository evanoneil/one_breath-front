import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import ERPostPreviewGrid from '../components/er-post-preview-grid'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'
import VideoPostPreviewGrid from '../components/video-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Headline from '../components/headline'
import PartnerHighlight from '../components/partner-highlight'
import YouTubeHighlight from '../components/youtube-highlight'
import SignUp from '../components/sign-up'
import Partners from '../components/partners'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/og.jpg'
import Redlining from '../assets/img/redlining.jpg'
import Invite from '../assets/img/invite-f.jpg'

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

  query ERPageQuery {
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
        categories: {elemMatch: {title: {eq: "Environmental Racism"}}}
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
  }
`

const image = `https://onebreathhou.org${Invite}`

const ERPage = props => {
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
        <meta property='title' content='Environmental Racism - One Breath Partnership' />

        <meta property='og:title' content='Environmental Racism - One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />

        <meta name='twitter:title' content='One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content="Join us for an online screening of Again, Together: The Cumulative Impacts of Environmental Racism in Houston by Ronald L. Jones." />
        <meta name='twitter:image' content={image} />
      </Helmet>
      {/* <Headline title={description} /> */}
      {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
      {/* <SEO
        title={"One Breath Partnership"}
        description={"Clean Air for Houston"}
        keywords={site.keywords}
      /> */}

      <Container>
        {/* <PartnerHighlight /> */}
        <div class="w-75 center">
        <h1 className="blue headline">Environmental Racism in Houston</h1>
          <p class="f4">In the 1980s, <a href="https://drrobertbullard.com/" class="b blue" target="_blank">Dr. Robert Bullard</a> and his team at <a href="http://www.tsu.edu/academics/colleges-and-schools/bjml-school-public-affairs/departments/urban-planning-and-environmental-policy/faculty/dr.-robert-bullard.html" class="b blue" target="_blank"> Texas Southern University in Houston's Third Ward</a> found that hazardous facilities like <a class="b blue" target="_blank" href="https://www.indiebound.org/book/9780813367927">dumps</a> and incinerators were being disproportionately sited in historically Black and brown neighborhoods. <a class="b blue" target="_blank" href="https://drrobertbullard.com/books/">His research</a> helped illuminate larger patterns of racist discrimination in exposure to pollution and access to housing, transit, food, health care and other essentials that have deepened and entrenched inequality in the U.S.</p>

        <div className="tc mb4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c3R8OZCVrbY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>        
<div className="mb2">

        <p>"Again, Together" is a film created in partnership with <a href="https://ronaldljones.com/" class="b blue" target="_blank">Ronald L. Jones</a>, bringing stories from communities across Houston that have been impacted by environmental racism — namely redlining, segregation, underinvestment, exposure to pollution, gentrification, inequitable disaster recovery resources and freeway development.</p>
<p>
Join us January 21 for an online screening and panel discussion.</p>
  </div>
  <div className="tc  mb4">

  <a class="pa3 ttu f5 fw7 blue enterprise  dib-l " target="_blank" href="https://us02web.zoom.us/meeting/register/tZclduquqjkqGNBg3BFPxvjkcEPQvmy29xp_">Register Now</a>

        </div>
  <div className="tc mb4">

  <img class="w-80 center" src={Invite} /></div>
  
        
        <div className="tc mb-4">

        <img class="w-80 " src={Redlining} />
        </div>        
<div className="mb2">
        <p>Redlining helped create the conditions for white flight to suburbs and a lack of investment in neighborhoods where people of color lived. In addition to starving neighborhoods of important services and access to credit, systematic segregation depressed land values, making it easy for poorly regulated polluting industries to set up shop or continue to expand in neighborhoods such as Fifth Ward and Kashmere Gardens.</p>
        </div>
        </div>
        {postNodes && <ERPostPreviewGrid nodes={postNodes} />}
        {/* {mediaNodes && <NewsroomPreviewGrid nodes={mediaNodes} />} */}
        {/* {videoNodes && <VideoPostPreviewGrid nodes={videoNodes} />} */}

        {/* <SignUp /> */}
        {/* <YouTubeHighlight /> */}
      </Container>
    </Layout>
  )
}

export default ERPage
