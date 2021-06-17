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
import ogImage from '../assets/img/one_breath-petition-OG-feb2021.jpg'
// import { gsap } from '../assets/js/gsap-latest-beta.min.js';
// import { ScrollTrigger } from '../assets/js/ScrollTrigger.min.js';








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

        <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426'></script>
<script src='https://assets.codepen.io/16327/ScrollTrigger.min.js'></script>
<script  src="https://houston-arrow.netlify.app/script.js"></script>
        </Helmet>
          
        <Container>

<article>
  <div class="vh-100 dt w-100 tc bg-dark-gray white cover">
    <div class="dtc v-mid">
     
      <h1 class="f1 f-headline-l b fw7 center white mh-auto ttu">Up and down on Richmond Avenue </h1>
      <blockquote class="ph0 mh0 measure f4 lh-copy center bg-dark-gray pv3">
        <p class="fw1 white mt0">
          Inequity's bottom edge </p>
        <cite class="f6 ttu tracked fs-normal">By Leah Binkovitz</cite><br />
        <cite class="f6 ttu tracked fs-normal">Maps by Evan O'Neil</cite>

      </blockquote>
    </div>
  </div>

    

  
  <div class="center measure-wide f5 pv5 lh-copy ph2">
    <h1 class="f2 lh-title"> In her early years in Houston, Zoe Middleton’s commute would take her east toward
      downtown along Richmond Avenue.
    </h1>
    <p>

      That drive presented some of the many sides of the city, says Middleton, the Houston and Southeast Texas
      co-director for Texas Housers. “You see the whole state of buildings where people live,” she says, “these weird,
      glass high-rises to single-family homes to multifamily that’s in need of a lot of attention and repair, and you
      see the difference in amenities.”
    </p>
    <p>
      You see Houston, in short.
      </p>
    <p>
      It’s a corridor of change. Near the Beltway, a single strip mall might feature Salvadoran, Cuban and Colombian
      restaurants with a Guatemalan bakery, an event venue, beauty supply shop and Pizza Hut. Richmond serves luxury
      car dealerships, members-only big box retail, and, closer to downtown, shimmering office towers in Greenway
      Plaza, mixed-use developments like Kirby Grove with their own parks attached in Upper Kirby and bars,
      restaurants, grocery stores and art galleries and museums in gentrifying Montrose. It’s served during peak hours
      by a high-frequency bus route, the 25, which travels from beyond the Beltway all the way to the Eastwood Transit
      Center. Before it changes names and becomes Wheeler Avenue in what used to be Third Ward, Richmond forms the
      rough southern boundary of a stubborn shape most map-minded Houstonians have come to know by heart.

    </p>
    <p>

      It’s a shape so distinct it has a name. “I think of Richmond as a way of experiencing the Arrow,” Middleton
      says.
    </p>

    <div class="outer">
      <div class="inner"><br /><br />
      </div>
  </div> 
     
</div>
</article>
<iframe src="https://houston-arrow.netlify.app/test.html"></iframe>

<div class="content-container">
    <div class="left-content" >
    <img id="img1" class="imageToShow" src="https://houston-arrow.netlify.app/img/01-poverty.jpg" alt="Poverty" />
    <img id="img2" class="imageToShow" src="https://houston-arrow.netlify.app/img/03-college_ed.jpg" alt="College Ed" />
    <img id="img3" class="imageToShow" src="https://houston-arrow.netlify.app/img/04-TRI.jpg" alt="TRI" />
    <img id="img4" class="imageToShow" src="https://houston-arrow.netlify.app/img/05-median-home-value.jpg" alt="MHV" />
    <img id="img5" class="imageToShow" src="https://houston-arrow.netlify.app/img/04-vacc.jpg" alt="Vacc Rate" />
    <img id="img6" class="imageToShow" src="https://houston-arrow.netlify.app/img/02 - white.jpg" alt="White People" />
    <img id="img7" class="imageToShow" src="https://houston-arrow.netlify.app/img/02-white-arrow.jpg" alt="Arrow" />
    <img id="imgblank" class="imageToShow" src="#" alt=" " />
    </div>

<div class="right-content">
  
  <p class="contentMarker" data-marker-content="imgblank"><div class=""><span class="bg-purple b white ph3 pv3">Whether you're looking at:</span></div></p>
  
  <p class="contentMarker" data-marker-content="img1"><span class="title">Poverty Rate</span></p>

  <p class="contentMarker" data-marker-content="img2"><span class="title">College Degree</span></p>
    
  <p class="contentMarker" data-marker-content="img3"><span class="title">Toxic Release Facilities</span></p>

  <p class="contentMarker" data-marker-content="img4"><span class="title">Median Home Value</span></p>
  

  <p class="contentMarker" data-marker-content="img5"><span class="title">COVID Vaccinations</span></p>

  <p class="contentMarker" data-marker-content="img6"><span class="title">White Population %</span></p>
  <p class="contentMarker" data-marker-content="imgblank"><div class="bg-purple ph3 pv3 w-50"><span class="b white">you will see
    almost the same map of Houston —<br /><br /> and on that map you will see...</span></div></p>

  <p class="contentMarker" data-marker-content="img7"><span class="title bg-red"> the Arrow.</span></p>

</div>
</div>

<div class="outer">
<div class="inner"><br /><br /></div>
</div>    

<article class="">

    <div class="center measure-wide f5 pv5 lh-copy ph2">

        <p>

        Roughly, it includes a swath of the west side of Houston emerging around the Barker and Addicks reservoirs,
        encompassing neighborhoods south of Interstate 10 and north of the Westpark Tollway and Interstate 69 and ending
        in a triangle pointing right at downtown, with the tips meeting in the Greater Heights to the north and Rice
        Village, Southside Place and West University to the south.
        </p>


        <p>

        It’s proved useful for Middleton and organizations like Texas Housers that work with data every day, because it
        efficiently summarizes inequity across the city, and its consistency speaks to the interconnected, cumulative
        nature of advantage and disadvantage, two pieces of the same process. Because clusters like the Arrow don’t just
        happen. They are not a byproduct of inequity somewhere else. They concentrate resources in a way that then
        entrenches that inequity. They are not just wealthy enclaves — where people with money retreat — but wealth
        producers. The specific social determinants of health — schools, parks, libraries, infrastructure — get
        healthier. The rich, then, get richer.
        </p>
    </div>
    
    <div class="center w-90 center f5 pv5 lh-copy ph2">

        <blockquote class="ph0 f4 f1-ns measure-narrow center bb b--purple bw3">
        <p class="fw9 lh-copy lh-title-ns purple">Challenging the structures that have built up and served the Arrow demands a full consideration of the city’s
            geographies of power.
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
        communities that have borne the brunt of it all are framed as isolated and marginalized. But zooming out on the
        map to include clusters like the Arrow shows the limitations of this narrow framing. The so-called margins
        become load-bearing walls for the assumed center.
        </p>
        <p>

        Challenging the structures that have built up and served the Arrow demands a full consideration of the city’s
        geographies of power.
        </p>
        <p>

        And it reflects how these processes are embedded in and reliant on space.
        </p>
    </div>

</article>
    </Container>
    <script src="../assets/js/script.js"></script>

    </Layout>
  )
}

export default Richmond