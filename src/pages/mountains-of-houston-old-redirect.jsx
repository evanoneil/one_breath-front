import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/5yrs-lessunreadable-basic_info.png'

import { responsiveTitle1 } from '../components/typography.module.css'

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

const mtns = props => {
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
  const description = 'Air Alliance Houston, the Houston Climate Justice Museum and One Breath invite you to come together to reaffirm community and reflect on the ways Hurricane Harvey changed our city forever.'
  const image = `https://onebreathhou.org${ogImage}`

  return (
    <Layout>

    <Helmet>
      <meta httpEquiv="Refresh" content="0; url='https://felt.com/map/Houston-Landfills-Map-Invisible-Houston-GKyE0QqbQVKzBOM784cuzB'" />

    </Helmet>
    <Container>

    <div>
    <h1>Please wait for a redirect to EveryAction</h1>
  </div>
  </Container>

    
    </Layout>
  )
}

export default mtns





    
