import React, { useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../../lib/helpers'
import { Link } from "gatsby"
import GraphQLErrorList from '../../components/graphql-error-list'
import SEO from '../../components/seo'
import Layout from '../../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../../assets/img/porches-og.jpg'
import Rulingimg from "../RulingImg"


const Porches = props => {
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
  const description = 'The pillaging of historically Black Freedmen\'s Town by the same forces that guaranteed prosperity elsewhere'
  const image = `https://onebreathhou.org${ogImage}`





  return (
    <Layout>
      {/* <SEO title="HB 1820" /> */}
      <Helmet>
        <title>From porches to townhomes → Houston Arrow | One Breath Partnership</title>
        <meta property='og:title' content='From porches to townhomes → Houston Arrow | One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />
        <meta name='twitter:title' content='From porches to townhomes → Houston Arrow | One Breath Partnership' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />

        <link rel='stylesheet' type='text/css' media='screen' href='https://houston-arrow.netlify.app/style.css' />


      </Helmet>
      <body>
        <article>
          <div class="vh-100 dt w-100 tc bg-dark-gray white cover"
            style={{
              backgroundImage: `url("https://houston-arrow.netlify.app/photo/hardy-anderson-porch.jpg")`,
              backgroundPosition: 'center center',
            }}>
            <div class="dtc v-mid ">
              <div class="w-75 center">

                <h1 class="center f2 f-subheadline-l b fw7 tr  mh-auto ttu animated fadeIn a1 d2 mb0" style={{ color: 'orangered' }}>From porches →</h1>
                <h1 class="center f2 b fw7 tl white mh-auto ttu animated fadeIn a5 d4 mt0">→ to townhomes</h1>
              </div>


            </div>
          </div>
          <div class="w-100">
            <blockquote class="ph0 mh0 mv0 w-100 pv3 ph2 f4-ns f5 lh-copy center bg-dark-gray fade b--none">
              <p class="fw1 white tc center mt0">
The pillaging of historically Black Freedmen's Town by the same forces that guaranteed prosperity elsewhere
</p>
              <center>
                <cite class="f6 ttu tracked fs-normal center white">BY LEAH BINKOVITZ</cite><br />
                                <cite class="f6 ttu tracked fs-normal center white">Maps by Evan O'Neil</cite>

              </center>
            </blockquote>
          </div>
          <div class="wrapper">



            <div class="center measure-wide f5 pt5 lh-copy ph2">
              <div class="ph0 mh0 mt4 w-100 pt3 ph2 f5-ns f6 lh-copy center bw3 fade bt bb b--black">
                <p class="fw1 black tl center mt0">
                  Mapping almost anything in Houston, you end up with the same map, with a shape so persistent, so apparent, it's been given a name: The Arrow. How did the city take this shape? How has it held it? And how can we make Houston whole? This <Link to="../houston-arrow">four-part series</Link> sets out to answer these questions. This is part three. Read <Link to="/1-up_and_down_on_richmond" class="blue">part one</Link> and <Link to="/2-a_home_for_the_ruling_class" class="blue">part two.</Link>
                  </p>
              </div>
            </div>
          </div>
          <div class="wrapper">

            <div class="center w-70 f5 pt5 lh-copy ph2">

              <blockquote class="ph0 f5 f1-ns w-100 center b--none mb0">
                <p class="fw7 lh-title orange f3 mb0">If the development of places like River Oaks shows how city and private investments have worked together to guarantee wealth in white communities, the ongoing fight for Freedmen’s Town reveals the work of community-building amid the pillaging of Black communities and history.

                </p></blockquote>
            </div></div></article></body>

      <center>
        {/* <img src="https://houston-arrow.netlify.app/pdf/every-natural-advantage.png" class="w-70 center mt2 mb2" /> */}
      </center>
      <body><article>

        <div class="wrapper">

          <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">


            <p>
              Traveling north from the high-speed commercial vein of Richmond, past the shining metal Montrose District signs paid for by a TIRZ, you can see what remains of Freedmen’s Town. Streets like Andrews are narrow and intimate, with worn bricks and hasty patches of asphalt. Like the bricks, modest, working-class bungalows and cottages and a few grander homes in need of repair from the century before are scattered amid brand-new housing two or three stories taller with street-facing garages like mouths waiting to gobble what’s left.
            </p><p>


              Freedmen’s Town is essentially the point of the Arrow. This neighborhood has long represented the Mother Ward of diverse Black communities across the city.
            </p><p>
              After Emancipation, not upheld in Texas until 1865, the neighborhood grew into a cultural and economic hub for Black Houstonians, just <a href="https://www.thetexasfreedomcoloniesproject.com" class="blue" target="_blank">one of many freedom colonies and Black settlements</a> across the country and state. “All the people seemed to work together to improve Fourth Ward,” recalls Martha Countee Whiting in an interview with the African-American Library at the Gregory School in Freedmen’s Town, “and working together they got many things that we would not have achieved if they had not.” Whiting’s grandfather, Reverend John Henry “Jack” Yates, was an instrumental figure in the neighborhood’s and Houston’s history who, among other achievements, founded Bethel Missionary Baptist Church on Andrews Street and was part of the effort to purchase the land that is now Emancipation Park in Third Ward for the site of their Juneteenth celebration.
            </p><p>
Still, more than a decade after Westheimer had been paved for the benefit of River Oaks, few of the streets in Freedmen’s Town had been, Hardy Anderson, who's pictured above, says.            </p><p>


              Regardless, Freedmen’s Town was the early heart of Black Houston, a bustling neighborhood that residents remember as close-knit with community hubs like the Gregory School, opened to serve people who had been enslaved who flocked to the city to build new lives of their own making, alongside the pre-existing small community of free Black Houstonians. “We were all cluttered in one area,” Anderson remembers in a 2010 interview.
            </p>
            <p class="i">Click 'NEXT →' to move through the maps.</p>

          </div></div></article></body>
      <iframe src="https://houston-arrow.netlify.app/scrollmap.html" class="vh-100 w-100 b--none" />
      <body><article>

        <div class="wrapper">

          <div class="center measure-wide f5 pv5 lh-copy ph2">

            <p id="continue">
              While some of the neighborhood’s assets were destroyed, others were never even developed. In the 1913 parks proposal, Comey notes the lack of playgrounds for the city’s large Black population — as well as any plans to address it. He calls for the creation of three new playgrounds, two in the Emancipation and Military Parks in Third Ward and northeast Houston and another in the “old disused cemetery on San Felipe Street,” now West Dallas, along with a recreation park to serve Freedmen’s Town.
            </p>
            <p>
              The neighborhood’s transformation is often presented as a matter of market-fueled gentrification, private interests seeking to capitalize on a community of porches being turned into townhomes with garages. But, as with the wealthy and white neighborhoods to the west, government had a heavy hand. In the 1930s, less than a decade after a private developer bought property for a hotel on the newly paved and improved Texas Avenue downtown, demolishing a saloon and boarding house making up part of <a href="https://www.tshaonline.org/handbook/entries/happy-hollow-houston" class="blue" target="_blank">“Happy Hollow,” the city’s red light district</a> and pushing the revelry further into Freedmen’s Town, the neighborhood would be redlined and described in <a href="https://www.houstonchronicle.com/local/gray-matters/article/Redlining-Houston-9970251.php" class="blue" target="_blank">racist maps prepared by the Home Owners’ Loan Corporation</a> as “hazardous” for investment by banks, cutting off the path to stability and property investment that white families relied on to pass on wealth.
            </p>
            <p>
              The history of Allen Parkway Village also shows how government stepped in to shape place — but unlike in River Oaks, here it would undermine the Black residents who’d always lived there. First created as San Felipe Courts in the 1940s, the all-white housing project required the demolition of entire blocks of some of the oldest parts of Freedmen’s Town. Later, it would serve Black families and residents, as well as Asian and other families. Over time, though, the Houston Housing Authority let nearly half the 1,000 apartments degrade and sit empty, according to research by Texas Southern University professor Dr. Robert Bullard, in effect closing the complex “gradually rather than all at once.”
            </p>
          </div></div></article></body>
      <div class="cf">
        <div class="fl w-100 w-50-l pr2-l pb3">
          <img class="db w-100" src="https://houston-arrow.netlify.app/ft-images/bungalow-with-bright-porch-light.jpg" alt="Bungalow with a bright porch light in Freedmen's Town" />
          <center><span class="caption">A well-lit porch in Freedmen's Town. Photo: Hardy Anderson collection, Houston Public Library, African American Library at the Gregory School.</span>
          </center>
        </div>
        {/* <div class="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
          <img class="db w-100" src="http://houston-arrow.netlify.app/ft-images/" alt="Photo of the sea and sky on the horizon with the foundations of a demolished house." />
          <center><span class="caption">caption</span>
          </center>
        </div>
        <div class="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
          <img class="db w-100" src="http://mrmrs.github.io/photos/012.jpg" alt="Photo of the sea with mist covering the rocky formations near the shore." />
          <center><span class="caption">caption</span>
          </center>
        </div> */}
        <div class="fl w-100 w-50-l pl2-l">
          <img class="db" src="https://houston-arrow.netlify.app/ft-images/antioch-at-night.jpg" alt="ntioch Missionary Baptist Church, cut off from the rest of Freedmen's Town by I-45" />
          <center><span class="caption">Antioch Missionary Baptist Church, cut off from the rest of Freedmen's Town by I-45. Photo: Hardy Anderson collection, Houston Public Library, African American Library at the Gregory School.</span>
          </center>
        </div>
      </div>

      <body><article>

        <div class="wrapper">
          <div class="center measure-wide f5 pv5 lh-copy ph2">


            <p>
              In the 1990s, the federal HOPE VI program began replacing massive housing projects like Allen Parkway Village with smaller, mixed-income ones, purportedly to undo the damage that housing officials blamed on the concentration of poor families. But Austin-based archaeologist and anthropologist Fred McGhee <a href="https://www.academia.edu/14704059/They_Were_Expendable_Houstons_Fourth_Ward_and_the_Failure_of_Public_Policy" class="blue" target="_blank">has argued</a> that it amounted to a culmination of decades of efforts to displace Freedmen’s Town residents, sell key pieces of land and finish the job for the benefit of developers.
            </p>
            <p>
              Meanwhile, in the homes surrounding Allen Parkway Village, only 5 percent of the community’s housing was owner-occupied in 1980, Bullard found, setting the stage for even more dramatic transformations. Even in the neighborhood’s early years, landlords had controlled many of the properties. “It has been a community under siege for some time,” he writes.
            </p>

          </div></div></article></body>
      <div class="cf">
        <div class="fl w-100 w-50-l pr2-l ">
          <img class="db w-100" src="https://houston-arrow.netlify.app/ft-images/IMG_2071.jpeg" alt="Bungalow with a bright porch light" />

        </div>

        <div class="fl w-100 w-50-l pl2-l">
          <img class="db w-100" src="https://houston-arrow.netlify.app/ft-images/IMG_2073.jpeg" alt="Antioch at night." />
        </div>
      </div>
      <div class="pb3 w-100">
                <center><span class="caption">The restoration of historic structures in Freedmen's Town. Photo: Leah Binkovitz.</span>
          </center>
          </div>

      <body><article>

        <div class="wrapper">
          <div class="center measure-wide f5 pv5 lh-copy ph2">


            <p>
              Official designations and recognition have been part of the fight to preserve Freedmen’s Town for decades, but have often failed to deliver the protection and investment they seem to promise. When Freedmen’s Town was recognized as a historic district by the National Register of Historic Places in 1984, there were some 530 historic buildings in the 40-block area, the application states. By the time local officials came out in 2010 to celebrate the historical marker that genealogist and avid preservationist Debra Blacklock-Sloan researched and applied for at the site of the old Mt. Carmel Missionary Baptist Church, few were left.
            </p>
            <p>
              “There may be 100,” Blacklock-Sloan says. “We’re slowly seeing this community being erased.”
            </p>
            <img class="mw3" src="https://houston-arrow.netlify.app/img/icon.png" />

            
          </div>
        </div>
      </article>
      </body>


    </Layout>
  )

}


export default Porches