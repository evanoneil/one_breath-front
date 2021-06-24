import React, { useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../../lib/helpers'
import { Link } from "gatsby"
import GraphQLErrorList from '../../components/graphql-error-list'
import SEO from '../../components/seo'
import Layout from '../../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../../assets/img/3-porches-og.jpg'
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
        <title>Moving Beyond Maps → Houston Arrow | One Breath Partnership</title>
        <meta property='og:title' content='Moving Beyond Maps → Houston Arrow | One Breath Partnership' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />
        <meta name='twitter:title' content='Moving Beyond Maps → Houston Arrow | One Breath Partnership' />
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
              backgroundImage: `url("https://houston-arrow.netlify.app/4-images/IMG_7335.JPG")`,
              backgroundPosition: 'center center',
            }}>
            <div class="dtc v-mid ">
              <div class="w-75 center">

                <h1 class="center f1 f-subheadline-l b fw7 tl  mh-auto ttu animated fadeIn a1 d2 mb0" style={{ color: 'white' }}>MOVING →</h1>
                <h1 class="center f1 f-subheadline-l b fw7 tl  mh-auto ttu animated fadeIn a5 d4 mt0" style={{ color: 'white' }}>→ BEYOND</h1>
                <h1 class="center f1 f-subheadline-l b fw7 tr white mh-auto ttu animated fadeIn a5 d4 mt0">MAPS →</h1>
              </div>


            </div>
          </div>
          <div class="w-100">
            <blockquote class="ph0 mh0 mv0 w-100 pv3 ph2 f4-ns f5 lh-copy center bg-dark-gray fade b--none">
              <p class="fw1 white tc center mt0">
The Arrow shows leaders where their priorities should be. Will they act?
</p>
              <center>
                <cite class="f6 ttu tracked fs-normal center white">BY LEAH BINKOVITZ</cite><br />

              </center>
            </blockquote>
          </div>
          <div class="wrapper">



            <div class="center measure-wide f5 pt5 lh-copy ph2">
              <div class="ph0 mh0 mt4 w-100 pt3 ph2 f5-ns f6 lh-copy center bw3 fade bt bb b--black">
                <p class="fw1 black tl center mt0">
                  Mapping almost anything in Houston, you end up with the same map, with a shape so persistent, so apparent, it's been given a name: The Arrow. How did the city take this shape? How has it held it? And how can we make Houston whole? This <Link to="../houston-arrow">four-part series</Link> sets out to answer these questions. This is part four. Read <Link to="../1-up_and_down_on_richmond" class="blue">part one</Link>, <Link to="../2-a_home_for_the_ruling_class" class="blue">part two</Link>, and <Link to="../3_from-porches-to-townhomes" class="blue">part three.</Link>
                  </p>
              </div>
            </div>
          </div>
          <div class="wrapper">

            <div class="center w-70 f5 pt5 lh-copy ph2">

              <blockquote class="ph0 f5 f1-ns w-100 center b--none mb0">
                <p class="fw7 lh-title orange f3 mb0">Preservation has proved a sometimes perilous path, raising the question of what is being preserved — places or a community — and for whom — residents, many who have been displaced, or tourists. 

                </p></blockquote>
            </div></div></article></body>

      <center>
      </center>
      <body><article>

        <div class="wrapper">

          <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">

<p>
While not necessarily a matter of either-or, efforts to protect and preserve cannot escape these tensions. This is true for Freedmen’s Town, as well.
</p>
<p>
Episodes like the relocation of Jack Yates’ home to the downtown Sam Houston Park speak to the often heartbreaking compromises that have been made as the neighborhood has fought for control of its future and the resources to preserve its past. Today, there are ongoing efforts from groups like the Rutherford B. H. Yates Museum and the Freedmen’s Town Association and others, some aimed at providing for the neighborhood’s kids, some at buying and restoring historic housing, others at creating cultural tourism.
</p>
          </div></div></article></body>
<img src="https://houston-arrow.netlify.app/4-images/skyline.JPG" class="w-100 w-90-ns"/>
          <center><span class="caption">Freedmen's Town bungalow leading into downtown Houston. Photo: The Gregory School.</span>
          </center>
      <body><article>
        <div class="wrapper">
          <div class="center measure-wide f5 pv5 lh-copy ph2">
<p>
Blacklock-Sloan can remember one of her earliest visits to Freedmen’s Town. Growing up in Fifth Ward, she says she was amazed at what she saw — the wealth of old buildings and the history and people behind them. “These people are our heroes,” says Blacklock-Sloan, who has worked as the research director for the Yates Museum for two decades, “and I didn’t learn about any of them.”
</p>
<p>
When Pastor Pervis Hall was looking for a place to start his church, Freedmen’s Town was not initially on his map. But after attending a lecture at the Gregory School and walking out to see a for sale sign across the street, he reconsidered. That sparked a learning process for the Sunnyside-raised Houstonian, who knew little of this community’s history. He found himself in a meeting with many of the neighborhood’s longtime activists, including Gladys House-El, Lenwood Johnson and Catherine Roberts, who were organizing then to save the brick streets. “It’s kind of how we introduced ourselves to the community, by joining that fight,” Hall says.
</p>
<p>
The struggle is ongoing, including for House-El, whose latest effort to honor community elders with new street signs ran into pushback from the city about the size of them.
</p>
<p>
“So much has been stolen,” Hall says, “and there have been promises made.” The fight is particularly frustrating for him when he considers how much the community has had to do on its own over the years, including hauling dirt from Prairie View just to shore up the initial settlement along Buffalo Bayou. “It speaks to the resilience of African Americans in the city of Houston and the resilience of how they kept their true center in the midst of so much attack,” he says.
</p>
<p>
Any sort of preservation work in Freedmen’s Town has to deal with decades of contention around who actually benefits, he says. 
</p>

          </div></div></article></body>
          <div class="tr">
<img src="https://houston-arrow.netlify.app/4-images/freedmens-town-streetcar.JPG" class="tr center w-100 w-90-ns"/>
          <center><span class="caption">Remains of streetcar tracks in Freedmen's Town. Photo: Allyn West.</span>
          </center>
</div>
      <body><article>
        <div class="wrapper">
          <div class="center measure-wide f5 pv5 lh-copy ph2">

<p>
“There’s several dynamics at play,” he explains. “There is a major distrust for entities that seek to exploit and make a profit off of Freedmen’s Town, and so many residents in the area are very secretive about their own participation or their own stake in the history and heritage of Freedmen’s Town. Because in the past they’ve done that, and they’ve been exploited by doing so.”
</p>
<p>
The community Hall thought wasn’t there anymore when he first went looking at official numbers emerged in his interactions in the streets.
</p>

          </div></div></article></body>
          <div class="center">
   <blockquote class="ph0 f5 f1-ns w-100 center b--none mb0">
                <p class=" center fw7 lh-title orange f3 mb0">The story of Freedmen’s Town, both its past and present, then, shows what can sometimes be lost in maps. Though the Arrow appears time and time again, the truth is less shapely, marked by much less of the feeling of inevitability that comes from static representations of people in space. Rebecca Solnit writes about the trust we have in maps to tell us the truth as “the way we take them for reliable or even objective statements and meet their sins of omission with our own.”
</p>      </blockquote></div>
<body><article>
        <div class="wrapper">
          <div class="center measure-wide f5 pv5 lh-copy ph2">

<p>

As with history, whoever produces maps — and how — holds tremendous power. Queen’s University professor Katherine McKittrick has written about the particular failures to see the experiences and insights of Black communities as geographically meaningful, calling out the role of maps in validating one kind of knowledge while dismissing others. “Geography is not,” she writes, “secure and unwavering; we produce space, we produce its meanings, and we work very hard to make geography what it is.” This means that “who we see is tied up with where we see,” writes McKittrick.
</p>
<p>
So, while the Arrow presents a useful bit of visual shorthand, there is more to it than can be mapped by traditional means. On a map, Antioch Missionary Baptist Church sits like an island surrounded by downtown parking garages and skyscrapers, just east of I-45. But the map does not indicate that in the 1950s, the highway destroyed an entire swath of Freedmen’s Town, separating the church from its home.
</p>
          </div></div></article></body>
<div class="tc">
<img src="https://houston-arrow.netlify.app/ft-images/antioch-at-night.jpg" class="tr center w-100 w-80-ns"/>  
          <center><span class="caption">Antioch Missionary Baptist Church. Photo: The Gregory School.</span>
          </center>
</div>
    <body><article>
        <div class="wrapper">
                  <div class="center measure-wide f5 pv5 lh-copy ph2">

<p>
There is street-level nuance that is hard to render as imaginary boundaries, like census tract lines, take on material meaning. 
</p>
<p>
And then there are notable absences.
</p>
<p>
Blacklock-Sloan takes photographs around the Freedmen’s Town neighborhood whenever she can, never sure which structure will be gone next and replaced by towering houses and large apartment buildings and garages. “It’s just so disrespectful,” she says. She has researched and applied for historical markers across the neighborhood and city, reckoning always with the weight of the work, of what she can’t save. “At least the markers will tell the story of what was here.”
</p>
          </div></div></article></body>
          <center>
          <img src="https://houston-arrow.netlify.app/4-images/IMG_7328.JPG" class=" center w-50"/>  
                    <center><span class="caption">Maps and historical markers can never tell the whole story. Photo: Allyn West</span>
          </center>
</center>
      <body><article>
        <div class="wrapper">
                  <div class="center measure-wide f5 pv5 lh-copy ph2">

<p>
Even the present can disappear in maps. When Hall first started canvassing Freedmen’s Town, he quickly realized that the hesitation to participate in government-driven processes extended to the census. “That’s why they didn’t show up,” he says, of his initial look at demographics when he was considering where to locate his church. “They’re still not accurately represented.” 
</p>
<p>
And then there are the alternative presents that could have been. When Middleton thinks about those spaces, for example, she sees what she calls “the ghosts of failed projects.”
</p>
<p>
"There are these spirits of past developments or almost developments,” she says, recalling one shouted-down mixed-income housing development that would have been in the Arrow on Fountain View Drive. Residents said they feared lowered property values, among other unsubstantiated concerns. That’s who Mayor Sylvester Turner listened to when he effectively halted the project in a decision that would prompt the Department of Housing and Urban Development to investigate the city for a violation of the <a href="https://www.bloomberg.com/news/articles/2018-03-22/houston-fair-housing-advocates-file-complaint-with-hud" class="blue" target="_blank">Civil Rights Act</a>.
</p>
          </div></div></article></body>
          
          <div class="cf">
        <div class="fl w-100 w-50-l pr2-l pb3">
          <img class="db w-100" src="https://houston-arrow.netlify.app/4-images/freedmens-town-shotgun-houses-dolce-vita.JPG" alt="Bungalows in front of a tasteless apartment complex" />
          {/* <center><span class="caption">A well-lit porch in Freedmen's Town. Photo: Hardy Anderson collection, Houston Public Library, African American Library at the Gregory School.</span>
          </center> */}
        </div>
        <div class="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
          <img class="db w-100" src="http://houston-arrow.netlify.app/4-images/IMG_7357.jpg" alt="Photo of the sea and sky on the horizon with the foundations of a demolished house." />
          {/* <center><span class="caption">caption</span>
          </center> */}
        </div>
        <div class="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
          <img class="db w-100" src="http://houston-arrow.netlify.app/4-images/IMG_7344.jpg" alt="Freedmen's Town - a tree in front of a solitary doorstep" />
          {/* <center><span class="caption">caption</span>
          </center> */}
        </div>
        <div class="fl w-100 w-50-l pl2-l">
          <img class="db" src="http://houston-arrow.netlify.app/4-images/IMG_7320.jpg" alt="Freedmen's Town" />

        </div>

      </div>
                          <center><span class="caption">Photos taken in Freedmen's Town. Photo: Allyn West</span>
          </center>  

      <body><article>
        <div class="wrapper">
                  <div class="center measure-wide f5 pv5 lh-copy ph2">

<p>
Missed — or stolen — opportunities for housing in so-called “high-opportunity neighborhoods” inside the Arrow represent a particularly detrimental loss. “Housing writ large gives people footholds in the community,” Middleton says. "It gives people a sense of belonging, and it has such an enormous impact on the ability to build and retain wealth,” including the many non-financial forms of wealth that often come bundled with affordable, safe housing. “I think that housing is the entry point to all of this,” she says. “It’s the entry point to creating the city that we want to live in and do live in.”
</p>

<p>
The Arrow might be specific to Houston, but the story is commonplace in U.S. cities. River Oaks, after all, drew its inspiration from Kansas City’s Country Club District. The Houston Informer — an African-American newspaper published by Clifton F. Richardson Sr. beginning in 1919 and using the printing press operated by Rutherford B. H. Yates in Freedmen’s Town — used to include its “platform” of priorities in each issue. Some were large, like “racial cooperation, teamwork, advancement, betterment and solidarity.” But many were specific: playgrounds for Black children, upgraded school facilities, legislation to end lynching, “good streets, better drainage and sanitary toilets” and more. 
</p>
<p>
The list might read different today, but many of the aspirations remain, presenting opportunities for immediate redress: lead remediation, home weatherization, well-stocked grocery stores a walk away, robust shade and places for children to play. 
</p>

 </div></div></article></body>
          <center>
<img src="https://houston-arrow.netlify.app/4-images/hha-map.png" class="tr center w-100 w-90-ns"/>  <br />
                    <span class="caption">The Arrow includes many so-called 'high-opportunity neighborhoods,' but few housing projects for people with lower incomes. Source: Houston Housing Authority</span>
          </center>
      <body><article>
        <div class="wrapper">
                  <div class="center measure-wide f5 pv5 lh-copy ph2">
                  
<p>
It would be a start. And the Arrow shows today’s leaders exactly where they should start. It shows them exactly where their priorities should be.
</p>
<p>
But stopping there would fail to address the systems that continue to create and then take advantage of inequity. Federal policies, like the mortgage interest deduction, which white households <a href="https://nlihc.org/news/new-report-shows-mortgage-interest-deduction-one-drivers-us-racial-wealth-gap" class="blue" target="_blank">receive</a> almost 80 percent of the value of, are complemented locally by practices like the city’s <a href="https://kinder.rice.edu/2018/03/16/study-how-houstons-appraisal-industry-reinforces-racial-inequality" class="blue" target="_blank">racist appraisal system</a>. It isn’t enough to speak out against the ills concentrated outside the Arrow. The city needs also to acknowledge the ill-gotten gains inside it. 
</p>
          </div></div></article></body>
          <blockquote class="ph0 f5 f1-ns w-100 center b--none mb0">
                <p class="center b fw7 lh-title orange f2 mb0">
The Arrow makes it clear: The market is incapable of valuing lives equally.</p></blockquote>
      <body><article>
        <div class="wrapper">
                  <div class="center measure-wide f5 pv5 lh-copy ph2">

<p>
 Equity cannot be achieved with a government beholden to it. There is a debt owed in Freedmen’s Town, and there is a debt owed outside the Arrow, too. Each mayoral administration has had the opportunity to do more, but too often politics appeal to the very philanthropic whims driving some of the city’s inequities. A donation here and there. A public-private partnership. A newly formed TIRZ or a <a href="https://www.khou.com/article/news/local/freedmens-town-first-heritage-district/285-cd5c53a0-8254-4f17-b77d-80c01292d738" class="blue" target="_blank">special designation</a> to help with fundraising. Corporate benevolence where there should be meaningful reparations. 
</p>
<p>
Houston, we are reassured after deadly climate disasters, is “open for business.” But the vision shouldn’t be a uniform landscape of spaces modeled on the same old processes of extraction, dependent on favors and intent on accumulation. 
</p>
<p>
“You look at the Arrow,” Middleton says, “and the Arrow tells a story of our priorities.”
</p>
<img src="https://houston-arrow.netlify.app/4-images/IMG_7323.jpg" class="w-100 mv3" />
            <img class="mw3" src="https://houston-arrow.netlify.app/img/icon.png" />




          </div></div></article></body>

      




    </Layout>
  )

}


export default Porches