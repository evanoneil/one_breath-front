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


const Richmond = props => {
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
        <title>Richmond | One Breath Partnership</title>
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
          <div class="vh-100 dt w-100 tc bg-dark-gray white cover"
            style={{
              backgroundImage: `url("https://houston-arrow.netlify.app/photo/richmond.jpg")`
            }}>
            <div class="dtc v-mid ">
              <div class="w-75 center">

                <h1 class="f1 f-subheadline-l b fw7 tl white mh-auto ttu animated fadeIn a1 d2 mb0">Up and down</h1>
                <h1 class="f4 f-subheadline-l b fw7 tc white mh-auto ttu animated fadeIn a2 d3 mt0 mb0">on</h1>
                <h1 class="f1 b fw7 tr white mh-auto ttu animated fadeIn a5 d4 mt0">Richmond Avenue</h1>
              </div>

              <blockquote class="ph0 mh0 measure f4 lh-copy center bg-dark-gray pv3 fade">
                <p class="fw1 white mt0">
                  Inequity's bottom edge </p>
                <cite class="f6 ttu tracked fs-normal">By Leah Binkovitz</cite><br />
                <cite class="f6 ttu tracked fs-normal">Maps by Evan O'Neil</cite>

              </blockquote>
            </div>
          </div>

          <div class="wrapper">

            {/* <div class="sidebar">
              <div>
                <hr class="mt5 mr5 bw1 b--solid" />
                <h4 class="ttu">THE ARROW</h4>
                <p>Part 1</p>
                <p>Part 2</p>
                <p>Part 3</p>
                <p>Part 4</p>

                <a href="https://twitter.com/intent/tweet?text=&quot;Dade Phelan failed to protect Texans from chemical disasters&quot;%20by%20%40onebreathhou%20https://www.onebreathhou.org/newsroom/2021/06/texas-legislature-dade-phelan-chemical-safety-industrial-disasters-health"
                  target="blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                    class="f3 mr2 ml2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.onebreathhou.org/newsroom/2021/06/texas-legislature-dade-phelan-chemical-safety-industrial-disasters-health"
                  target="blank" class="fbc-has-badge fbc-UID_1"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 512 512" class="f3 mr2 ml2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                    </path>
                  </svg></a>
                <a href="mailto:?subject=I%20just%20read%20this%20great%20article%20on%20One%20Breath%20Partnership's%20Website!&amp;body=https://www.onebreathhou.org/newsroom/2021/06/texas-legislature-dade-phelan-chemical-safety-industrial-disasters-health"
                  target="blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                    class="f3 mr2 ml2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                    </path>
                  </svg></a>
              </div>
            </div> */}


            <div class="center measure-wide f5 pv5 lh-copy ph2">
              <blockquote class="ph0 f5 f1-ns w-100 center b--none mb0">
                <p class="fw7 lh-title purple f2 mb0">In her early years in Houston, Zoe Middleton’s commute would take her east toward
                  downtown along Richmond Avenue.
                </p></blockquote>
              <p>
                In her early years in Houston, Zoe Middleton’s commute would take her east toward downtown along Richmond Avenue.
              </p><p>
                That drive presented some of the many sides of the city, says Middleton, the Houston and Southeast Texas co-director for Texas Housers. “You see the whole state of buildings where people live,” she says, “these weird glass high-rises to single-family homes to multifamily that’s in need of a lot of attention and repair, and you see the difference in amenities.”
              </p><p>
                You see Houston, in short.
              </p><p>
                It’s a corridor of change. Near the Beltway, a single strip mall might feature Salvadoran, Cuban and Colombian restaurants with a Guatemalan bakery, an event venue, beauty supply shop and Pizza Hut.
              </p><p>
                The street also serves luxury car dealerships, members-only big box retail, and, closer to downtown, shimmering office towers in Greenway Plaza, mixed-use buildings like Kirby Grove with their own parks attached in Upper Kirby and bars, restaurants, grocery stores, art galleries and museums in gentrifying Montrose.
              </p><p>
                Before it changes names and becomes Wheeler Avenue in what used to be Third Ward, Richmond forms the rough southern boundary of a stubborn shape that most map-minded Houstonians have come to know by heart.
              </p>
            </div>
          </div>
        </article>
      </body>
      <Demo />
      <body>
        <article>

          <div class="outer">
            <div class="inner"><br /><br />
            </div>
          </div>

          {/* <div class="sidebar">
            <div>
              <hr class="mt5 mr5 bw1 b--solid" />
              <h4 class="ttu">THE ARROW</h4>
              <p>Part 1</p>
              <p>Part 2</p>
              <p>Part 3</p>
              <p>Part 4</p>

              <a href="https://twitter.com/intent/tweet?text=&quot;Dade Phelan failed to protect Texans from chemical disasters&quot;%20by%20%40onebreathhou%20https://www.onebreathhou.org/newsroom/2021/06/texas-legislature-dade-phelan-chemical-safety-industrial-disasters-health"
                target="blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                  class="f3 mr2 ml2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                  </path>
                </svg></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.onebreathhou.org/newsroom/2021/06/texas-legislature-dade-phelan-chemical-safety-industrial-disasters-health"
                target="blank" class="fbc-has-badge fbc-UID_1"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                  viewBox="0 0 512 512" class="f3 mr2 ml2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                  </path>
                </svg></a>
              <a href="mailto:?subject=I%20just%20read%20this%20great%20article%20on%20One%20Breath%20Partnership's%20Website!&amp;body=https://www.onebreathhou.org/newsroom/2021/06/texas-legislature-dade-phelan-chemical-safety-industrial-disasters-health"
                target="blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                  class="f3 mr2 ml2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg></a>
            </div>
          </div> */}


          <div class="center measure-wide f5 pv5 lh-copy ph2">

            <p>

              Roughly, it includes a swath of the west side of Houston emerging around the Barker and Addicks reservoirs,
              encompassing neighborhoods south of Interstate 10 and north of the Westpark Tollway and Interstate 69 and
              ending
              in a triangle pointing right at downtown, with the tips meeting in the Greater Heights to the north and Rice
              Village, Southside Place and West University to the south.
            </p>


            <p>

              It’s proved useful for Middleton and organizations like Texas Housers that work with data every day, because
              it
              efficiently summarizes inequity across the city, and its consistency speaks to the interconnected, cumulative
              nature of advantage and disadvantage, two pieces of the same process. Because clusters like the Arrow don’t
              just
              happen. They are not a byproduct of inequity somewhere else. They concentrate resources in a way that then
              entrenches that inequity. They are not just wealthy enclaves — where people with money retreat — but wealth
              producers.
            </p>
          </div>
          <div class="center w-90 center f5 pv5 lh-copy ph2">

            <blockquote class="ph0 f4 f1-ns measure-narrow center bb b--purple bw3">
              <p class="fw7 lh-copy lh-title-ns purple ">The specific social determinants of health — schools, parks, libraries, infrastructure — get healthier. The rich, then, get richer.
              </p>
            </blockquote>
          </div>
          <div class="center measure-wide f5 pv5 lh-copy ph2">

            <p>

              Even without knowing what the Arrow is, most Houstonians would recognize the core neighborhoods inside it,
              places like River Oaks, Memorial Villages. They represent a semi-permanent feature of the landscape, their
              winding roads and tree-shaded mansions a testament to the wealth of one of the country’s largest cities. But
              understanding how they came to be, what helped the Arrow take shape, shows that such a stark concentration of
              opportunities inside a particular group is not inevitable. It required — and now benefits from — direct and
              indirect support over many years from a city simultaneously touting its welcoming affordability and diversity.
            </p>
            <p>

              Spaces of neglect, extraction and abuse — maybe the ones outside the Arrow — are often, understandably, the
              focus of policies meant to address legacies of housing discrimination or environmental racism. Sometimes
              communities that have borne the brunt of it all are framed as isolated and marginalized. But zooming out on
              the
              map to include clusters like the Arrow shows the limitations of this narrow framing. The so-called margins
              become load-bearing walls for the assumed center.
            </p>
            <p>

              Challenging the structures that have built up and served the Arrow demands a full consideration of the city’s
              geographies of power.
            </p>
            <img src="https://houston-arrow.netlify.app/img/arrow-walls.png" class="w-100 fade"></img>
            <p>

              And it reflects how these processes are embedded in and reliant on space.
            </p>
          </div>
        </article>
        {/* 
              <div class="pa4-l">
                <form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
                  <fieldset class="cf bn ma0 pa0">
                    <legend class="pa0 f5 f4-ns mb3 black-80">Sign up for our newsletter</legend>
                    <div class="cf">
                      <input
                        class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                        type="submit" value="Stay Connected" />
                    </div>
                 </fieldset>
               </form>
            </div> */}


      </body>

    </Layout >
  )

}


export default Richmond