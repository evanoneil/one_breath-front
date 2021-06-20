import React, { useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../lib/helpers'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/one_breath-petition-OG-feb2021.jpg'
import Demo from "./demo"


const Landing = props => {
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
  const description = 'Tell your representatives: It is time to protect Texans and make corporate polluters pay this #TxLege.'
  const image = `https://onebreathhou.org${ogImage}`





  return (
    <Layout>
      {/* <SEO title="HB 1820" /> */}
      <Helmet>
        <title>The Houston Arrow | One Breath Partnership</title>
        <meta property='og:title' content='HB 1820 | One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />
        <meta name='twitter:title' content='HB 1820 | One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />

        <link rel='stylesheet' type='text/css' media='screen' href='https://houston-arrow.netlify.app/style.css' />
        {/* <link rel='stylesheet' type='text/css' media='screen' href='tachyons-animate.min.css' /> */}

        <style>

        </style>
      </Helmet>
      <body>
        <article>
          <div class="vh-100-ns vh-50 dt w-100 tc bg-dark-gray white cover"
            style={{
              backgroundImage: `url("https://houston-arrow.netlify.app/photo/header.jpg")`
            }}>
            <div class="dtc v-mid w-100 ">
              {/* <h1 class="f1 f-subheadline-l b fw7 tl white mh-auto ttu animated fadeIn a1 d2 mb0">Up and down</h1>
              <h1 class="f4 f-subheadline-l b fw7 tc white mh-auto ttu animated fadeIn a2 d3 mt0 mb0">on</h1>
              <h1 class="f1 b fw7 tr white mh-auto ttu animated fadeIn a5 d4 mt0">Richmond Avenue</h1> */}

              <p class="f1 center f-headline-l b fw1 white mb0 ttu tl fade mb0 mt0">The shape of</p>
              <p class="f1 center f-headline-l b fw1 white mb0 ttu tr fade mb0 mt0">→ Houston’s </p>
              <p class="f1 center f-headline-l b fw1 white mb0 ttu tl fade mb5 mt0">inequity</p>
            </div>

          </div>
          <div class="w-100">
            <blockquote class="ph0 mh0 mv0 w-100 pv3 ph2 f4-ns f5 lh-copy center bg-dark-gray fade b--none">
              <p class="fw1 white tc center mt0">
                What the ‘Houston Arrow’ reveals about this godforsaken land</p>
              <center>
                <cite class="f6 ttu tracked fs-normal center white">A 4 PART SERIES BY LEAH BINKOVITZ</cite>
              </center>
            </blockquote>
          </div>

          <section class="mw7 center mt5">
            <article class="bt bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="./houston-arrow-1-up_and_down_on_richmond">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/richmond.jpg" class="db" alt="Driving down Richmond Ave" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <p class="f6 lh-copy mv0">PART 1</p>

                    <h1 class="f3 fw1  mt0 lh-title">Up and down on Richmond Avenue                </h1>
                    <p class="f6 f5-l lh-copy">
                      That drive presented some of the many sides of the city, says Middleton, the Houston and Southeast Texas co-director for Texas Housers. “You see the whole state of buildings where people live,” she says, “these weird, glass high-rises to single-family homes to multifamily that’s in need of a lot of attention and repair, and you see the difference in amenities.”

                      You see Houston, in short.

                    </p>
                    <p class="f6 lh-copy mv0">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>

            <article class="bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="./houston-arrow-2-a_home_for_the_ruling_class">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/white-men.png" class="db" alt="White Men" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <p class="f6 lh-copy mv0">PART 2</p>

                    <h1 class="f3 fw1  mt0 lh-title">A home for the ruling class</h1>
                    <p class="f6 f5-l lh-copy">
                      In the early 1920s, when River Oaks was still largely a paper promise, advertisements in the Houston Chronicle enticed buyers to consider the up-and-coming development anchored around a private country club. Sellers promised River Oaks would be “highly restricted and in the very heart of the most rapid and extensive improvements imaginable.”
                    </p>
                    <p class="f6 lh-copy mv0">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>

            <article class="bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/porch.jpg" class="db" alt="Driving down Richmond Ave" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <p class="f6 lh-copy mv0">PART 3</p>

                    <h1 class="f3 fw1  mt0 lh-title">From Porches to Townhomes
                    </h1>
                    <p class="f6 f5-l lh-copy">
                      Traveling north from the high-speed commercial vein of Richmond, past the shining metal Montrose District signs, you can see what remains of Freedmen’s Town. Streets like Andrews are narrow and intimate, with worn red bricks and hasty patches of asphalt. Like the bricks, modest, working-class bungalows and cottages from the century before are scattered amid brand-new housing two or three stories taller with street-facing garages like mouths waiting to gobble what’s left.

                    </p>
                    <p class="f6 lh-copy mv0">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>

            <article class="bt bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/freedmens-town.jpg" class="db" alt="Driving down Richmond Ave" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <p class="f6 lh-copy mv0">NOT THE FINAL PART</p>

                    <h1 class="f3 fw1  mt0 lh-title">Moving Beyond Maps</h1>
                    <p class="f6 f5-l lh-copy">
                      Capitalism does not just create disadvantage but takes advantage of, as University of California, Santa Barbara professor George Lipsitz writes on the history of Houston’s “white racial cartel.” The goal is not to create a uniform landscape modeled on white spaces reliant on extraction and accumulation, but for newly imagined spatial orders where value is not derived from a market that never intends to value human life equally.

                    </p>
                    <p class="f6 lh-copy mv0">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>
          </section>
        </article>
      </body>

    </Layout >
  )

}


export default Landing