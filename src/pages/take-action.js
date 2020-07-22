import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../../public/assets/img/one_breath-petition-OG.jpg'

import {responsiveTitle1} from '../components/typography.module.css'

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
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media)
  const description = 'Living every day like an ozone action day.'
  const image = `https://onebreathhou.org${ogImage}`

  return (
    <Layout>
      {/* <SEO title="Take Action" /> */}
      <Helmet>
        <title>Take Action | One Breath Partnership</title>
        <meta property='og:title' content='Take Action | One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />
        <meta name='twitter:title' content='Take Action | One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />

<link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v3/form/stand-up-against-environmental-racism?format=js&source=widget&style=full'></script>      </Helmet>

      <Container>
        <div>
         <div id='can-form-area-stand-up-against-environmental-racism'></div>
    </div>
      </Container>
    </Layout>
  )
}

export default TakeActionPage
