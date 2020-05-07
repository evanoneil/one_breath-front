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
        <link
          href='https://actionnetwork.org/css/style-embed-v3.css'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://actionnetwork.org/css/style-embed-v3.css'
          rel='stylesheet'
          type='text/css'
        />
        <script src='https://actionnetwork.org/widgets/v3/petition/houston-needs-more-local-air-monitoring-to-protect-our-health?format=js&source=widget&style=full' />
      </Helmet>

      <Container>
        <div>
          <h1 className='w-80 orange'>
            Tell TCEQ: Houston needs more local air monitoring to protect our health
          </h1>
          <div className='w-100 bg-orange mb3 flex flex-wrap'>
            <div className='w-50-ns w-100 f3 pa4 black fw7  flex-wrap'>
              <p className='fw6 f6 ttu mb0'>action item:</p>
              <h3 className='mt0'>E-mail TCEQ by May 14th</h3>
            </div>
            <div className='w-50-ns w-100 pa4 mt2 flex-wrap'>
              <a
                className='pa3 ttu b--yellow b--solid bw2 f4 fw8 black br5 no-underline dib-l  mt1'
                href='mailto:monops@tceq.texas.gov?bcc=stories@onebreathhou.org&subject=2020 Annual Monitoring Network Plan&body=I am writing today strongly in favor of installing a new PM 2.5 monitor in west Houston. While this is a crucial first step toward addressing pollution and protecting the health of the people of Houston, much more action is needed.

All Houstonians face toxic air pollution, and it is costing us dearly — in more ways than one. According to new analysis from the Harvard School of Public Health and Environmental Defense Fund, widespread exposure to PM 2.5 air pollution in 2015 across Houston and surrounding neighborhoods was responsible for more than 5,000 premature deaths, and nearly $50 billion in economic damages.

Please finalize the implementation of this PM 2.5 monitor and immediately take steps to install additional community monitors. Our city desperately needs this data and the state to act on it to reduce air pollution and its harmful health impacts.'
              >
                Take Action →
              </a>
            </div>
          </div>
          <img
            className='w-100'
            src='https://can2-prod.s3.amazonaws.com/petitions/photos/000/172/441/original/pm-map.jpg'
          />
          <p className='caption'>
            Almost all of Houston is exposed to fine particulate matter above the level that health
            scientists say should be the new EPA standard.
          </p>

          <a
            className='pa3 ttu b--yellow b--solid bw2 f5 fw7 black br5 no-underline dib-l  mt1'
            href='mailto:monops@tceq.texas.gov?bcc=stories@onebreathhou.org&subject=2020 Annual Monitoring Network Plan&body=I am writing today strongly in favor of installing a new PM 2.5 monitor in west Houston. While this is a crucial first step toward addressing pollution and protecting the health of the people of Houston, much more action is needed.

All Houstonians face toxic air pollution, and it is costing us dearly — in more ways than one. According to new analysis from the Harvard School of Public Health and Environmental Defense Fund, widespread exposure to PM 2.5 air pollution in 2015 across Houston and surrounding neighborhoods was responsible for more than 5,000 premature deaths, and nearly $50 billion in economic damages.

Please finalize the implementation of this PM 2.5 monitor and immediately take steps to install additional community monitors. Our city desperately needs this data and the state to act on it to reduce air pollution and its harmful health impacts.'
          >
            E-mail TCEQ →
          </a>
          <br />
          <div className='w-75'>
            <p>
              We have a right to breathe clean air, and we have a right to know what we are
              breathing.
            </p>
            <p>
              Right now, almost all of Houston is exposed to&nbsp;
              <b>
                <a
                  className='orange'
                  href='https://onebreathhou.org/newsroom/2020/04/particle-pollution-soot-standards-epa-houston/'
                  target='_blank'
                >
                  fine particulate matter
                </a>
                &nbsp;
              </b>
              above the level that health scientists say should be the new, stronger federal
              standard. The Texas Commission on Environmental Quality, or TCEQ, has proposed placing
              a <b>new tool</b> that can monitor this kind of pollution in west Houston. That is
              just a first step toward addressing air pollution and protecting our health, but it's
              one&nbsp;
              <b>
                <a
                  className='orange'
                  href='https://www.tceq.texas.gov/airquality/monops/network_review.html'
                  target='_blank'
                >
                  we need to tell them to take
                </a>
                .
              </b>
            </p>
            <p>
              Fine particulate matter, sometimes called PM 2.5 or soot, knows no boundaries. As the
              Environmental Protection Agency is moving to maintain a&nbsp;
              <b>
                <a
                  className='orange'
                  href='https://onebreathhou.org/newsroom/2020/04/particulate-matter-standards-epa-science-public-health/'
                  target='_blank'
                >
                  weaker federal standard
                </a>
              </b>
              , we need <b>strong local data</b>. These invisible airborne particles, which escape
              from power plants, cars and trucks and industrial facilities, can lodge in our lungs,
              enter our bloodstream and cause heart attacks, strokes and lung cancer. Exposure to
              these particles is <b>the largest environmental risk</b> for early death in the U.S.
              In Houston, particle pollution contributed to <b>more than 5,000 early deaths</b> and
              nearly <b>$50 billion in economic damages</b> in 2015 alone, a new analysis from the
              Harvard School of Public Health and Environmental Defense Fund finds. We need to make
              sure that TCEQ follows through on their commitment to place a new monitor in a part of
              the city that lacks one — and encourage them to take further action to keep us safe.
              As the coronavirus pandemic has demonstrated, we need to have access to the best
              information, so we can make the best decisions. A new monitor for this kind of air
              pollution is the best decision for our shared home.
            </p>
          </div>
        </div>
        <div className='w-100 bg-orange mb3 flex flex-wrap'>
          <div className='w-50-ns w-100 f3 pa4 black fw7  flex-wrap'>
            <p className='fw6 f6 ttu mb0'>action item:</p>
            <h3 className='mt0'>E-mail TCEQ by May 14th</h3>
          </div>
          <div className='w-50-ns w-100 pa4 mt2 flex-wrap'>
            <a
              className='pa3 ttu b--yellow b--solid bw2 f4 fw8 black br5 no-underline dib-l  mt1'
              href='mailto:monops@tceq.texas.gov?bcc=stories@onebreathhou.org&subject=2020 Annual Monitoring Network Plan&body=I am writing today strongly in favor of installing a new PM 2.5 monitor in west Houston. While this is a crucial first step toward addressing pollution and protecting the health of the people of Houston, much more action is needed.

All Houstonians face toxic air pollution, and it is costing us dearly — in more ways than one. According to new analysis from the Harvard School of Public Health and Environmental Defense Fund, widespread exposure to PM 2.5 air pollution in 2015 across Houston and surrounding neighborhoods was responsible for more than 5,000 premature deaths, and nearly $50 billion in economic damages.

Please finalize the implementation of this PM 2.5 monitor and immediately take steps to install additional community monitors. Our city desperately needs this data and the state to act on it to reduce air pollution and its harmful health impacts.'
            >
              Take Action →
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default TakeActionPage
