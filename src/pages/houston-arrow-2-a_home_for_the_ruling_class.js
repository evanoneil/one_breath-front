import React, { useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../lib/helpers'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/one_breath-petition-OG-feb2021.jpg'
import Rulingimg from "./RulingImg"


const Ruling = props => {
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
              backgroundImage: `url("https://houston-arrow.netlify.app/photo/white-men.png")`
            }}>
            <div class="dtc v-mid ">
              <div class="w-75 center">

                <h1 class="f1 f-subheadline-l b fw7 tl white mh-auto ttu animated fadeIn a1 d2 mb0">A Home</h1>
                <h1 class="f4 f-subheadline-l b fw7 tc white mh-auto ttu animated fadeIn a2 d3 mt0 mb0">for the</h1>
                <h1 class="f1 b fw7 tr white mh-auto ttu animated fadeIn a5 d4 mt0">Ruling Class</h1>
              </div>


            </div>
          </div>
          <div class="w-100">
            <blockquote class="ph0 mh0 mv0 w-100 pv3 ph2 f4-ns f5 lh-copy center bg-dark-gray fade b--none">
              {/* <p class="fw1 white tc center mt0">
                What the ‘Houston Arrow’ reveals about this godforsaken land</p> */}
              <center>
                <cite class="f6 ttu tracked fs-normal center white">BY LEAH BINKOVITZ</cite>
              </center>
            </blockquote>
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
                <p class="fw7 lh-title green f2 mb0">Today, Kirby Drive is one of the major roads that brings you from Richmond north into River Oaks and then on to Memorial Drive, which connects Memorial Park, Buffalo Bayou Park and downtown.
                </p></blockquote>
              <p>
                In the early 1920s, when River Oaks was still a paper promise, advertisements in the Houston Chronicle enticed buyers to consider the up-and-coming development anchored around a private country club. Sellers promised River Oaks would be “highly restricted and in the very heart of the most rapid and extensive improvements imaginable.”
              </p><p>


                This exclusivity was repeatedly touted in newspapers like the Chronicle and Houston Post, as developers courted a very particular group of Houstonians. And it was reinforced with a prohibitive minimum sale price — $7,000 — and so-called “gentlemen’s agreements” forbidding sales to specific groups of others who didn’t belong in the founding visions of William C. Hogg, Mike Hogg and Hugh Potter.
              </p>
              {/* <p>
                The regulations were meticulous. Writing in the East Texas Historical Journal, Charles O. Cook and Barry J. Kaplan note that the restrictions covered everything from “renovation of existing structures to the placement of garbage cans and clotheslines.” Likewise, they continue, “the restrictions also excluded non-white residents, and, by means of the infamous ‘gentlemen's agreement’ Jews as well.”
              </p> */}
              {/* <p>
                Advertisements confirmed: “You will have good neighbors. You may be sure."
              </p><p>
                The promise of exclusivity alone was not enough. The same ads and articles also promised sky-rocketing returns on investments in the development, along with support of the city to protect, then bolster, those investments. The connection between the neighborhood and the city’s very future was right there to read.
              </p> */}
            </div></div></article></body>
      <Rulingimg />
      <body><article>

        <div class="wrapper">

          <div class="center measure-wide f5 pv5 lh-copy ph2">
            {/* <p>The connection between the neighborhood and the city’s very future was right there to read.</p> */}
            <p>
              After introducing Potter as the president of the new Country Club Estate Company, a 1924 ad in the Chronicle, for example, assured readers, “All the other men interested in this enterprise are prominent in the business life and growth of Houston.” An article that same year made sure to mention that part of the development’s attraction — along with its “uniformly high” restrictions and “freedom from the admitted nuisances of crowded city life” — was the value of surrounding properties, including Memorial Park and Buffalo Bayou, both with plans to be beautified. Elsewhere, developers promised critical infrastructure, like a soon-to-be-paved Westheimer. “Your investment here should double in twelve months,” ads predicted.
            </p><p>
              Developers took advantage of their privileges to make the predictions come true. The Hogg siblings were the grandchildren of enslaver and Confederate general Joseph Lewis Hogg and the children of Texas Governor James Stephen Hogg. The family’s Brazos County plantation would eventually yield oil and their wealth. With deep pockets and political ties, the eldest sibling, William Hogg, wielded considerable power over the city’s development; both he and Potter served on the city’s planning commission. Well-connected developers like them could do what city planning was supposed to.
            </p><p>
              Photographs of developers and city officials together were commonplace in the real estate pages. A ruling class of “white, male bankers, real estate developers, lumber and cotton magnates, and oil-men,” guided Houston’s development, Kyle Shelton writes in “Power Moves: Transportation, Politics, and Development in Houston.”
            </p>
            <p>River Oaks would anchor a prosperous west side of town, to the benefit of those developers, as the east side would remain the site of industry, commerce and everyone else.

            </p>

          </div></div></article></body>
      <body><article>

        <div class="flex ph7  pv4 bg-green">
          <div class="w-50-ns w-100 white">
            <p>
              Since at least 1913, the city had considered creating a continuous park along Buffalo Bayou, as outlined in a plan prepared by landscape architect Arthur Comey. That plan eventually inspired today’s Bayou Greenways project, building 150 miles of trails along six major waterways. In the original plan, “parking” the city with trees and vegetation was touted to help with flooding, but also drive up property values. “A broad taking should be made,” Comey’s plan reads. “Where the bayou banks were privately owned, they were poorly-maintained and depressed property values, whereas public ownership would have the opposite effect.”
            </p>

          </div>
          <div class="w-50-ns w-100">
            <img class="pa3" src="https://houston-arrow.netlify.app/PDF/comey-plan.png" />
          </div>
        </div>

        <div class="wrapper">
          <div class="center measure-wide f5 pv5 lh-copy ph2">


            <p>
              The Hoggs were poised to take advantage. During World War I, Camp Logan was seen as a potential boon for the city as one of only a handful of newly built training sites. But the camp brought Black soldiers to Jim Crow Houston, which greeted them with violent and daily racism. The soldiers were not even allowed to sleep inside the camp, but outside, on the edges. Then, the abuse of laundry worker Sara Travers by the Houston police led to an uprising that resulted in the execution of 19 of those Black soldiers. Shortly after the camp was shut down, the Hogg family bought the land.
            </p><p>
              Then, along with Mike and Ima, the family’s real estate company sold it back to the city in 1924 with the deed requirement that it remain greenspace in perpetuity, including land that would eventually become Memorial Park upstream and Buffalo Bayou Park downstream. Ensuring these parks, the Hoggs helped protect the value of their own investments. The green barriers also helped protect River Oaks’ exclusivity.
            </p><p>
              It wasn’t just new houses and parks. Neighborhoods inside the Arrow also benefited from personal relationships that were able to shape the outcomes of unwelcome infrastructure like highways, too. In the middle of the 20th century, as plans for the highways that now encircle and separate the city moved forward, wealthy, white suburban residents in Memorial Bend were able to secure important concessions from transportation officials, including an agreement not to demolish properties they’d purchased, but rent them back to residents.
            </p><p>
              That was much more than communities elsewhere in Houston would receive. The construction of I-10 and 59 “crucified” historically Black Fifth Ward, for example. Property owners like Roy Hofheinz and R.E. Smith were able to reach agreements with city and county officials that, while not total reroutes of planned highways, did constitute “significant changes,” Shelton writes in “Power Moves.” This was, in part, because of their personal connections. Hofheinz himself had already served as both mayor and county commissioner.
            </p>
          </div>
        </div>
        <div class="wrapper">

          <div class="center w-90 center f5 pv5 lh-copy ph2">

            <blockquote class="ph0 f4 f1-ns measure-narrow center bb b--purple bw3">
              <p class="fw7 lh-copy lh-title-ns purple ">“Those are the neighborhoods that got investment and those are the neighborhoods that had political weight”
              </p>
            </blockquote>
          </div>
        </div>
        <div class="wrapper">

          <div class="center measure-wide f5 pv5 lh-copy ph2"><p><p>
            This is, in part, how the Arrow took shape. It’s how, in part, the Arrow is holding its shape. The Hoggs’ Memorial Park continues to get richer. A 2015 City Council-approved master plan led to an ongoing $205 million redevelopment, including a massive land bridge spanning Memorial Drive that Save Buffalo Bayou’s Susan Chadwick describes as a “seventy-million-dollar vanity project.”
          </p><p>
              Other seemingly neutral tools continue to funnel more wealth to wealth. Tax increment reinvestment zones exist across the city and are intended to support redevelopment in “areas that would otherwise not attract sufficient market development in a timely manner,” according to the city. These TIRZs are not intended to become permanent, but meant to aid areas that “constitute an economic or social liability” as a “menace to the public health, safety, morals, or welfare in its present condition.”
            </p><p>
              Some, though, have existed for a generation. The Uptown TIRZ even annexed a part of Memorial Park so it could help fund the improvements that will increase the value of the properties whose taxes are then skimmed into the TIRZ for more improvements.
            </p><p>
              Shelton, whose book details the way that economic and political power has wielded outsize influence in the shape of Houston, says, “There are TIRZs in all sorts of neighborhoods in Houston. The reason why downtown, Uptown and Midtown do more is because they have more real estate and more investment,” contributing to a cycle of accumulation. “Those are the neighborhoods that got investment and those are the neighborhoods that had political weight,” he explains.
            </p>

            And those are the neighborhoods that give the Arrow its shape. There is, however, more than one story contained in the Arrow. And more than one community has roots here. In the very point of the Arrow, the grid shifts and the streets narrow. Worn tracks from a long-ago streetcar are exposed between red bricks that have become a symbol of one community’s fight not only for recognition, but restitution.
          </p>
          </div>
        </div>
      </article>
      </body>


    </Layout >
  )

}


export default Ruling