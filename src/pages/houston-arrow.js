import React, { useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../lib/helpers'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/arrow-og-bw.jpg'
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
  const description = 'What "The Houston Arrow’ reveals about the connections between government, development and the concentration of opportunity'
  const image = `https://onebreathhou.org${ogImage}`





  return (
    <Layout>
      {/* <SEO title="HB 1820" /> */}
      <Helmet>
        <title>The Houston Arrow → The shape of Houston`s Inequity | One Breath Partnership</title>
        <meta property='og:title' content='The Houston Arrow | The shape of the city`s inequity' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />
        <meta name='twitter:title' content='The Houston Arrow | The shape of the city`s inequity' />
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
                What "The Houston Arrow’ reveals about the connections between government, development and the concentration of opportunity</p>
              <center>
                <cite class="f6 ttu tracked fs-normal center white">A FOUR-PART SERIES BY LEAH BINKOVITZ</cite><br />
                <cite class="f6 ttu tracked fs-normal center white">MAPS AND DESIGN BY EVAN O'NEIL</cite>

              </center>
            </blockquote>
          </div>

          <blockquote class="ph0 mh0 mv5 w-100 pv3 ph2 f4-ns f5 lh-copy center  fade b--none">
            <p class="fw1 black tl center mt0">
              Mapping almost anything in Houston, you end up with the same map, with a shape so persistent, so apparent, it's been given a name: The Arrow. How did the city take this shape? How has it held it? And how can we make Houston whole? This four-part series sets out to answer these questions.
            </p>
          </blockquote>


          <section class="mw7 center mt2">
            <article class="bt bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="./1-up_and_down_on_richmond">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/richmond-thumb.jpg" class="db" alt="Driving down Richmond Ave" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <h4 class="f7 lh-copy mv0">PART 1</h4>

                    <h1 class="f3 fw1  mt0 lh-title">Up and down on Richmond Avenue                </h1>
                    <p class="f6 f5-l lh-copy">
                      As it moves from west to east toward Third Ward, Richmond Avenue forms the rough southern boundary of a stubborn shape most map-minded Houstonians have come to know by heart. It is a corridor of change, allowing you to experience the Arrow.</p>
                    <p class="f5 lh-copy mv0 fw7 dark-green">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>

            <article class="bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="./2-a_home_for_the_ruling_class">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/white-men.png" class="db" alt="White Men" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <h4 class="f7 lh-copy mv0">PART 2</h4>

                    <h1 class="f3 fw1  mt0 lh-title">A home for the ruling class</h1>
                    <p class="f6 f5-l lh-copy">
                      It wasn’t enough that River Oaks was deliberately exclusive of people who were not white. It also needed to reward those who could afford to buy in, which the city and private developers worked on hand in hand to all but guarantee. The rich got richer.                    </p>
                    <p class="f5 lh-copy mv0 dark-green fw7">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>

            <article class="bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="./3-from_porches_to_townhomes">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/hardy-anderson-porch.jpg" class="db" alt="Hardy Anderson on a porch in Freedmen's Town" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <h4 class="f7 lh-copy mv0">PART 3</h4>

                    <h1 class="f3 fw1  mt0 lh-title">From porches to townhomes
                    </h1>
                    <p class="f6 f5-l lh-copy">
                      Being slowly pillaged by the same forces that guaranteed prosperity in other neighborhoods, Freedmen’s Town lies at the tip of the Arrow, where residents have worked tirelessly to build a community that knows its history and controls its future.
                    </p>
                    <p class="f5 lh-copy mv0 dark-green fw7">Read Article →</p>
                  </div>
                </div>
              </a>
            </article>

            <article class="bt bb b--black-10">
              <a class="db pv4 ph3 ph0-l no-underline black dim" href="./4-moving-beyond-maps">
                <div class="flex flex-column flex-row-ns">
                  <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="https://houston-arrow.netlify.app/photo/skyline.jpg" class="db" alt="Bungalow in Freedmen's Town leading into Downtown Houston" />
                  </div>
                  <div class="w-100 w-60-ns pl3-ns">
                    <h4 class="f7 lh-copy mv0">NOT THE FINAL PART</h4>

                    <h1 class="f3 fw1  mt0 lh-title">Moving beyond maps</h1>
                    <p class="f6 f5-l lh-copy">
                      Though the Arrow serves as a visual shorthand, there is more to Houston than can be mapped by traditional means and understood by conventional thinking. The Arrow tells a story of priorities that urgently requires new vision and action for equity.
                    </p>
                    <p class="f5 lh-copy mv0 dark-green fw7">Read Article →</p>
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