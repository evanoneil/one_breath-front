
import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../../lib/helpers'
import BlogPostPreviewGrid from '../../components/blog-post-preview-grid'
import NewsroomPreviewGrid from '../../components/newsroom-preview-grid'
import Container from '../../components/container'
import GraphQLErrorList from '../../components/graphql-error-list'
import SEO from '../../components/seo'
import Layout from '../../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/one_breath-petition-may-2023.png'

import { responsiveTitle1 } from '../../components/typography.module.css'

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
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media)
  const description = "Tell TCEQ: Enhance air monitoring in Houston's historically Black Pleasantville"
  const image = `https://onebreathhou.org${ogImage}`

  return (
    <Layout>
      {/* <SEO title="Take Action" /> */}
      <Helmet>
        <title>Tell TCEQ: Enhance air monitoring in Houston's historically Black Pleasantville | Take Action | One Breath Partnership</title>
        <meta property='og:title' content='Take Action | One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />
        <meta name='twitter:title' content='Take Action | One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />


<link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' />
<script src='https://actionnetwork.org/widgets/v5/petition/tell-tceq-enhance-air-monitoring-in-houstons-historically-black-pleasantville?format=js&source=widget&style=full'>
</script>


      </Helmet>

      <Container>
        <div>
<div id='can-petition-area-tell-tceq-enhance-air-monitoring-in-houstons-historically-black-pleasantville'>
</div>    
</div>
      </Container>
    </Layout>
  )
}

export default TakeActionPage


