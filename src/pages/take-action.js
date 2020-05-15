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
          <h1 className='w-60 orange'>
            Tell the EPA to protect our shared home from particle pollution{' '}
          </h1>
          <div className='w-100 bg-orange  flex flex-wrap'>
            <div className='w-50-ns w-100 f3 pa4 black fw7  flex-wrap'>
              <p className='fw6 f6 ttu mb0'>action item:</p>
              <h3 className='mt0'>SUBMIT A COMMENT TO THE EPA</h3>
              <a
                className='pa3 ttu b--yellow b--solid bw2 f4 fw7 black br5 no-underline dib-l  mt1'
                href='https://www.regulations.gov/comment?D=EPA-HQ-OAR-2015-0072-0069'
                target='_blank'
              >
                Take Action →
              </a>
            </div>
            <div className='w-50-ns w-100  mbneg6 flex-wrap'>
              <img
                className='w-100'
                src='https://can2-prod.s3.amazonaws.com/petitions/photos/000/174/978/original/girl-with-inhaler-blur.jpg'
              />
            </div>
          </div>

          <p className='caption'>
            According to the American Lung Association, nearly 100,000 children in Houston and
            Harris County suffer from asthma.
          </p>
          <br />
          {/* <a
            className='pa3 ttu b--yellow b--solid bw2 f5 fw7 black br5 no-underline dib-l  mt1'
            href='mailto:monops@tceq.texas.gov?bcc=stories@onebreathhou.org&subject=2020 Annual Monitoring Network Plan&body=I am writing today strongly in favor of installing a new PM 2.5 monitor in west Houston. While this is a crucial first step toward addressing pollution and protecting the health of the people of Houston, much more action is needed.

All Houstonians face toxic air pollution, and it is costing us dearly — in more ways than one. According to new analysis from the Harvard School of Public Health and Environmental Defense Fund, widespread exposure to PM 2.5 air pollution in 2015 across Houston and surrounding neighborhoods was responsible for more than 5,000 premature deaths, and nearly $50 billion in economic damages.

Please finalize the implementation of this PM 2.5 monitor and immediately take steps to install additional community monitors. Our city desperately needs this data and the state to act on it to reduce air pollution and its harmful health impacts.'
          >
            E-mail TCEQ →
          </a> */}
          {/* <br />
          <br /> */}
          <div className='w-75'>
            <p>
              The science is clear. It’s consistent. Exposure to{' '}
              <a
                href='https://onebreathhou.org/newsroom/2020/04/particle-pollution-soot-standards-epa-houston/'
                target='_blank'
              >
                tiny airborne particles
              </a>{' '}
              in the air sends too many Americans to the hospital and the emergency room. It leads
              to too many premature deaths from lung disease, heart attacks, strokes, asthma and
              cancer.
            </p>
            <p>
              These polluting particles, also known as soot, spew from power plants, cars and trucks
              and industrial facilities. They penetrate our lungs and cause some of the same
              diseases that are making COVID-19 more deadly. In Houston, widespread exposure to
              particle pollution contributed to <strong>more than 5,000 premature deaths</strong>{' '}
              and <strong>nearly $50 billion in economic damages</strong> in 2015 alone, a new
              analysis by the Harvard School of Public Health and Environmental Defense Fund found.
            </p>
            <p>
              That's why the Environmental Protection Agency needs to strengthen the federal{' '}
              <a
                className='bold'
                href='https://onebreathhou.org/newsroom/2020/04/particulate-matter-standards-epa-science-public-health/'
                target='_blank'
              >
                standard
              </a>
              .
            </p>
            <p>
              This spring, the agency’s own scientists found that <strong>strengthening </strong>it
              could save <strong>more than 10,000 American lives</strong> every year — but agency
              leadership didn’t listen. Former coal lobbyist Andrew Wheeler, appointed by President
              Trump to head the EPA, <strong>ignored the science</strong> and decided to keep{' '}
              <a
                href='https://www.nytimes.com/2020/04/14/climate/coronavirus-soot-clean-air-regulations.html'
                target='_blank'
              >
                the outdated and inadequate standard
              </a>
              .{' '}
            </p>
            <p>
              So, let’s be clear: This is the wrong decision.
              <br />
            </p>
            <p>
              Together, <strong>we have the power</strong> to save 10,000 lives.
            </p>
            <p>
              Wheeler’s decision opens up a 60-day period of public comments.{' '}
              <a
                href='https://www.regulations.gov/comment?D=EPA-HQ-OAR-2015-0072-0069'
                target='_blank'
              >
                They need to hear from us
              </a>
              . Together, let’s make it clear that the EPA needs to listen to the science and
              protect our shared home from this deadly pollution.
            </p>
            <p>
              That’s <strong>the right decision</strong>.
            </p>
          </div>
          <div className='w-100 bg-orange mb3 flex flex-wrap v-mid'>
            <div className='w-50-ns w-100 f3 pa4 black fw7  flex-wrap v-mid'>
              <p className='fw6 f6 ttu mb0'>action item:</p>
              <h3 className='mt0'>SUBMIT A COMMENT TO THE EPA</h3>
              <a
                className='pa3 ttu b--yellow b--solid bw2 f4 fw7 black br5 no-underline dib-l  mt1'
                href='https://www.regulations.gov/comment?D=EPA-HQ-OAR-2015-0072-0069'
                target='_blank'
              >
                TAKE ACTION →
              </a>
              <br />
              <br />
            </div>
            <div className='w-50-ns w-100 pa4 mt2 flex-wrap v-mid' />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default TakeActionPage
