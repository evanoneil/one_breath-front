import React, { useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../lib/helpers'
import { Link } from "gatsby"
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/mtns-og.png'




const mountains = props => {
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
const description = 'When you see mountains in Houston, be suspicious'
const image = `https://onebreathhou.org${ogImage}`





return (
<Layout>
  {/*
  <SEO title="HB 1820" /> */}
  <Helmet>
    <title>The Mountains of Houston | One Breath Partnership</title>
    <meta property='og:title' content='The Mountains of Houston | One Breath Partnership' />
    <meta name='description' content={description} />
    <meta name='image' content={image} />
    <meta name='og:image' content={image} />
    <meta name='twitter:title' content='The Mountains of Houston | One Breath Partnership' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:creator' content='@onebreathhou' />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />

    <link rel='stylesheet' type='text/css' media='screen' href='https://houston-arrow.netlify.app/style.css' />


  </Helmet>

  <body style={{backgroundColor: '#d4876d' }}>
    <div>
      <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style={{ backgroundColor: `#241a4a`, }}>
        <div class="dtc v-mid ">
          <div class="w-75 center">

            <h1 class="center f1 f-subheadline-l b fw5 tl  mh-auto  animated fadeIn a1 d2 mb0" style={{ color: '#d4876d'
              , fontFamily: 'Inter,sans-serif' , letterSpacing: '-.2rem' }}>The Mountains</h1>
            <h1 class="center f1 f-subheadline-l b fw5 tl  mh-auto  animated fadeIn a5 d4 mt0" style={{ color: '#d4876d'
              , fontFamily: 'Inter,sans-serif' , letterSpacing: '-.2rem' }}>of Houston</h1>
          </div>


        </div>
      </div>
      <div class="w-100">
        <blockquote style={{background: 'black' }}
          class="ph0 mh0 mv0 w-100 pv3 ph2 f4-ns f5 lh-copy center bg-purple fade b--none">
          <center>
            <cite class="f6 ttu tracked fs-normal center white">BY Dr Robert Bullard</cite><br />
            <cite class="f6 ttu tracked fs-normal center white">Photography of the Whispering Pines landfill, Kelley
              Street incinerator and J T Trotter Park in northeast Houston by Ben Corda</cite><br />
          </center>
        </blockquote>
      </div>

      <div class="wrapper">
        <div class="center w-70 f5 pt5 lh-copy ph2">
          <blockquote style={{background: 'none' }} class="ph0 f5 f1-ns w-100 center b--none mb0">
            <p class="fw7 lh-title purple f2 mb0">When you see mountains in Houston, be suspicious.
            </p>
          </blockquote>
        </div>
      </div>
    </div>



    <div class="tc">
    <img src="https://incomparable-syrniki-850129.netlify.app/R1-01723-027A.png" class="w-100 w-80-ns" />
          <br />
    </div>

    <div>
      <div class="wrapper">
        <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">


          <p>
            When I began research work in environmental justice at Texas Southern University in 1978, Houston was 52.3
            percent White, 27.4 percent Black, 17.6 percent Hispanic and 2.7 percent Asian and other. The government,
            however, was all white and all male. This lack of equitable representation had consequences. In place of
            NIMBY (Not In My Back Yard) politics, Houston practiced a “PIBBY” (Place In Blacks’ Back Yard) policy.
            Government and private industry targeted Houston’s Black neighborhoods for landfills, incinerators, garbage
            dumps and garbage transfer stations.
          </p>
          <p>The year I arrived at the university, controversy erupted over a proposal to build the Whispering Pines
            sanitary landfill near Northwood Manor, a mostly Black middle-class neighborhood. In 1979, as a young
            sociologist, I was asked to conduct a study of solid waste disposal siting in Houston for a class-action
            lawsuit (Bean v. Southwestern Waste Management) that had been filed against the City of Houston, the State
            of Texas and the locally based Browning Ferris Industries. The Northwood Manor neighborhood of trees,
            single-family homes and schools was an unlikely location for a garbage landfill — except that more than 82
            percent of its residents were Black. Though the Bean case was lost, it marked an important beginning as the
            first lawsuit in the United States that charged environmental discrimination in solid-waste facility siting
            under the Civil Rights Act.
          </p>
          <p>In that siting study, my graduate students and I mapped the location of every major landfill site in
            Houston using pushpins on paper. If we noticed a hill in the usually flat landscape, we investigated it,
            because a change in topography often indicated a dump. We found that although at that time Blacks made up
            just over 1/4th of Houston’s population,
          </p>
          <blockquote style={{background: 'none' }} class="ph0 f5 f1-ns w-100 center b--none mb0">
            <p class="fw7 lh-title purple f2 mb0">5 out of 5 city-owned landfills (100 percent) and 6 of the 8
              city-owned incinerators (75 percent) were sited in Black neighborhoods.
            </p>
          </blockquote>
          <p>
            After my study for the Bean case, my career became linked with the environmental justice movement, and I
            have since then had the opportunity to work with communities all over the world.
          </p>
          <p>I left Houston in 1987 and returned 24 years later. Like Rip Van Winkle, I can see clearly what has and has
            not changed. What I found upon my return in 2011 was a situation that is more complex, perhaps, but has the
            same basic dynamics of inequality. In this article, I give a brief history of waste management practices in
            Houston, look at ongoing challenges and suggest some first steps towards strategies for the future.
            Houstonians can learn from other diverse cities about how to work together to fight environmental
            injustices, but the first step is to understand the scope of the problem.
          </p>
          <h2>“UNOFFICIALLY ZONED FOR GARBAGE”: HISTORICAL CONTEXT</h2>
          <p>On May 16, 1967, more than 46 years ago, Black Houstonians picketed the Holmes Road dump in the southeast
            Sunnyside neighborhood where an 8-year-old Black child had drowned. Not only did residents see the placement
            of the city dump in their neighborhood as unfair, but that placement had actually resulted in the death of
            an innocent child. The landfill protesters joined forces with another group protesting racism in Houston
            schools (charging that Black students were disciplined more harshly than white students) in holding rallies
            and marches that later fueled the student resistance and police overreaction that led to the 1967 Texas
            Southern University “riot.” According to the 1968 Report of the National Advisory Commission on Civil
            Disorders, this was the only major civil disturbance that occurred in Houston during the turbulent 1960s.
          </p>
          <p>In 1971, Houston elected its first Black city councilmember, Judson Robinson, Jr. Once he was elected, the
            first crisis he faced involved a city-owned landfill. Councilmember Robinson had to quell a near-riot at the
            Kirkpatrick landfill in the mostly Black Trinity Gardens neighborhood. Protesters were demanding that the
            city-owned landfill be closed. After six months of intense demonstrations, the protestors prevailed.
          </p>
          <p>In 1978, residents of Northwood Manor began resisting plans for the aforementioned Whispering Pines
            landfill and instead requested a park. The court case dragged on for years. In 1985, Mayor Kathy Whitmire
            made sure that the neighborhood got a park — the J.T. Trotter Park on East Little York Road. Unfortunately,
            the court case was lost the same year, and the Whispering Pines landfill was built less than a mile from the
            new park. Today, as a result of this downgrading intrusion, Northwood Manor residents have numerous
            industrial facilities — not just the landfill — as neighbors.
          </p>

          <blockquote style={{background: 'none' }} class="ph0 f5 f1-ns w-100 center b--none mb0">
            <p class="fw7 lh-title purple f2 mb0">The original bucolic character of the neighborhood has been forever
              lost as the sprawling landfill looms near soccer fields, homes and places of worship.
            </p>
          </blockquote>
          <br />
          </div>
      </div>
    </div>

    <div class="tc">
        <img src="https://incomparable-syrniki-850129.netlify.app/BCX30954.jpg" class="w-100 w-80-ns" />
        <img src="https://incomparable-syrniki-850129.netlify.app/BCX31272.jpg" class="w-100 w-80-ns" />
        <br />
    </div>

    <div>
      <div class="wrapper">
        <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">



          <br />
          <p>Research findings in the Bean case exposed a clear pattern of waste facility siting in Houston. From the
            1920s through the late 1970s, Black Houston was unofficially zoned for garbage. Eleven of 13 city-owned
            landfills and incinerators (84.6 percent) were built in Black neighborhoods — a clear overrepresentation of
            one minority’s neighborhoods in the hosting of city-owned solid waste facilities.
          </p>
          <p>This city siting pattern in turn set the stage for private waste disposal firms to follow. The Texas
            Department of Health (TDH) was the state agency charged with permitting Type I standard sanitary landfills.
            From 1970 to 1978, TDH issued 4 sanitary landfill permits for the disposal of Houston’s solid waste. All 4
            of the privately owned Type I solid waste landfills were located in minority council districts.
          </p>
          <p>Today, the ethnic makeup of Harris County’s 4 million residents is now mostly people of color — 41 percent
            Hispanic, 18.4 percent Black, and 7.7 percent Asian, compared to 33 percent White. Yet the brunt of waste
            disposal is still borne disproportionately by low-income minorities of color. Two Type I landfills, McCarty
            and Whispering Pines, now operate in Houston, and both are in council district B, which is 93 percent people
            of color (53 percent Black and 40 percent Hispanic).
          </p>
          <p>After 1978, as the Bean case began making its way through the courts, no other Type I landfills were built
            in the city. Houston instead began sending some of its household garbage to four landfills located outside
            of the city. But the discriminatory pattern did not change: 3 of the 4 non-Houston landfills are located in
            census tracts where the majority of the population are people of color — Waste Management (76.6 percent),
            Atascocita (86.0 percent) and BFI Blue Ridge (85.7 percent).
          </p>
          <div>
          <iframe width="100%" height="450" frameborder="0" title="Felt Map" src="https://felt.com/embed/map/Houston-Landfills-Map-Invisible-Houston-GKyE0QqbQVKzBOM784cuzB?lat=29.76536&lon=-95.395817&zoom=11.59682921148329"></iframe>
          {/* <a href="https://felt.com/map/Houston-Landfills-Map-Invisible-Houston-GKyE0QqbQVKzBOM784cuzB">
            <img src="https://incomparable-syrniki-850129.netlify.app/felt-map.png" class="w-100" /> */}
            <center>
              <cite class="f6 ttu tracked fs-normal center black">Interactive, collaborative map created on Felt.com.
                Please add any details and stories you have about these locations.</cite><br />
            </center>
          {/* </a> */}
          <br />
      </div>
          <h2>ILLEGAL DUMPING GROUNDS </h2>
          <p>
            Changing the siting of city-owned and private landfills alone will not fully address Houston’s problems with
            unequal exposure to waste. I also identified illegal dumping as a major problem in Invisible Houston (1987),
            and it continues to be a problem today. In June 2012, Mayor Anise Parker appointed the Task Force on Illegal
            Dumping to bring together the Solid Waste Department, neighborhoods, the police and the Mayor’s Office of
            Sustainability to coordinate enforcement and education in an effort to cut down on roadside dumping.
          </p>
          <p>Between 2008 and 2011, a total of 18,367 non-emergency “311” calls reporting illegal dumping were made to
            the Houston Solid Waste Department. The predominantly Black and Hispanic council districts B, D and H were
            the source of a disproportionately large share of the illegal dumping calls for each of the four reporting
            years — 59 percent of the calls in 2008, and 66 percent of the calls in the 2009-2011 period.
          </p>

          <blockquote style={{background: 'none' }} class="ph0 f5 f1-ns w-100 center b--none mb0">
            <p class="fw7 lh-title purple f2 mb0">It is clear that the same Houston council districts that have hosted
              solid waste facilities over the years have become prime targets for illegal dumping. This should have been
              easy to predict: Illegal dumping was already a problem near the Whispering Pines landfill in 1980.
            </p>
          </blockquote>
          <br />
          </div>
      </div>
    </div>

    <div class="tc">
    <img src="https://incomparable-syrniki-850129.netlify.app/R1-01723-014A.JPG" class="w-100 w-80-ns" />
          <img src="https://incomparable-syrniki-850129.netlify.app/R1-01723-009A.png" class="w-100 w-80-ns" />
        <br />
    </div>

    <div>
      <div class="wrapper">
        <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">

          <br />
          <p>The Mayor’s Task Force on Illegal Dumping completed its work in June 2013, resulting in the Houston City
            Council’s passing a budget amendment that has allocated $250,000 for 25 surveillance cameras systems (the
            cameras cost about $10,000 per unit) to monitor illegal dumping “hot spots” in the 5 council districts — B,
            D, H, I and K — identified by the Solid Waste Department as having major challenges with illegal dumping.
            Each of the illegal dumping “hot spot” council districts will receive 5 camera systems for surveillance
            purposes. This measure, however, is not likely to solve the problem. As I pointed out 25 years ago in
            Invisible Houston, illegal dumping will only end when the residents in the targeted neighborhoods and
            council districts “take back” their communities. The costs and penalties associated with illegally dumping
            in Houston have never been severe enough to serve as a serious deterrent.
          </p>
          <h2>RECYCLING IN HOUSTON</h2>
          <p>Houston collects approximately 420,000 tons of solid waste and another 71,000 tons of yard waste annually
            from residents. Most of this waste ends up at landfills. Houston is one of the few major U.S. cities without
            a garbage fee, despite the fact that having extra funds in the city’s Solid Waste Department could go a long
            way to addressing critical waste management challenges, from illegal dumping to citywide recycling.
          </p>
          <p>The city picks up garbage at 375,000 homes. Currently, 105,000 homes have single-stream recycling (all
            recycling materials mixed together) and another 100,000 homes have dual-stream recycling (fiber materials
            such as paper are separated from materials such as plastic and cans) at the curbside. But even with curbside
            pickup convenience, Houston has a dismal recycling rate. In 2009, Waste and Recycling News reported that
            Houston ranked 9th out the 10 largest U.S. cities in the United States in terms of recycling — only 16.7
            percent of Houston trash was recycled, compared to 65 percent for Los Angeles, 60 percent for San Jose, 55
            percent for New York and 52.4 percent for Chicago. Only San Antonio was worse than Houston, with a 4 percent
            recycling rate in 2009.
          </p>
          <p>In March 2013, Houston won a $1 million grant from the Bloomberg Philanthropies’ Mayors Challenge to
            implement a “One Bin for All” project where residents place all their trash and recycling in one bin for
            collection, to be separated later at a transfer station. City leaders believe newer technologies that allow
            this all-in-one collection directed to a Material Recovery Facility (MRF), or “dirty MRF” collection, will
            increase Houston’s recycling rate from the current 14 percent to at least 75 percent. Some critics of the
            experiment oppose it, however, because they feel more effort and resources should be spent on expanding
            single-stream recycling to all Houston neighborhoods.
            All recycling is not created equal. Which communities get access to recycling first and which communities
            get the “cleanest” or “dirtiest” recycling facilities are key environmental justice issues.
          </p>

          <blockquote style={{background: 'none' }} class="ph0 f5 f1-ns w-100 center b--none mb0">
            <p class="fw7 lh-title purple f2 mb0">Houston has three garbage transfer stations, and all three are located
              in minority neighborhoods.
            </p>
          </blockquote>
          <br />
          </div>
      </div>
    </div>

    <div class="tc">
    <img src="https://incomparable-syrniki-850129.netlify.app/BCX32056-lr.png" class="w-100 w-80-ns" />
        <br />
    </div>

    <div>
      <div class="wrapper">
        <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">

          <br />
          <p>In 1983, the first city-owned garbage transfer station was opened in the Carverdale neighborhood. Local
            residents understandably did not greet this “first'' as a victory. Transfer stations are dropoff points for
            the garbage trucks that make curbside collections and pickup sites for the much larger trucks that haul the
            garbage off to a landfill. These sites create noise and dust pollution, traffic hazards and odor problems
            for their neighbors.
          </p>
          <p>Houston currently has 13 recycling facilities. Ten of these 13 recycling facilities (77 percent) are
            located in neighborhoods populated primarily by people of color. The 13 facilities include five “cleaner”
            recycling centers, which do not accept junk waste, tree waste or garbage, but generally accept aluminum and
            tin cans, glass bottles, paper and plastics. Three of these 5 city recycling centers (60 percent) are
            located in majority white areas. On the other hand, all six “dirtier” neighborhood depositories/recycling
            centers, which accept and dispose of tree waste, junk waste and used motor oil, in addition to household
            recyclables, are located in communities where people of color live.
          </p>
          <p>Four of the 6 neighborhood depositories/recycling centers are located in council districts (B, D, H and I)
            designated as illegal dumping “hot spots,” and 3 are located in the same council districts having garbage
            transfer stations (J, A and I).
          </p>
          <h2>DIVERSITY CHALLENGES AND OPPORTUNITIES</h2>
          <p>In 1990, environmental justice leaders sent a letter to the “Big Ten” environmental and conservation groups
            (Sierra Club, Sierra Club Legal Defense Fund, National Audubon Society, National Wildlife Federation,
            Environmental Defense Fund, Environmental Policy Institute/Friends of the Earth, Izaak Walton League, The
            Wilderness Society, National Parks and Conservation Association and Natural Resources Defense Council),
            charging them with elitism, classism and paternalism. The letter also called their attention to their lack
            of diversity in terms of staff, board members and program. A March 2013 Washington Post article headlined
            “Within mainstream environmentalist groups, diversity is lacking,” hit on this same theme more than two
            decades later.
          </p>
          <p>Progress in Houston has been slow and uneven. Although Houston is a city with people of color in the
            majority, for some reason it has not developed a strong network of environmental justice organizations to
            address issues facing its people of color population such as those in New York, Los Angeles and Chicago.
            Although the city has several well-known environmental justice groups run by people of color (Texas
            Environmental Justice Advocacy Services among them), much of the heavy environmental lifting in Houston is
            still left to the white environmental groups. One need only examine the member groups of the
            Houston-Galveston Citizens’ Environmental Coalition (CEC) to see that Houston’s environmental community has
            a serious diversity problem. Of the 102 CEC member groups, only two are organized by people of color (Great
            Plains Restoration Council and Pleasantville Environmental Coalition).
          </p>
          <p>Given the diversity challenges of Houston’s environmental organizations and the limited capacity of local
            environmental justice groups, one has to wonder who is setting the environmental priorities for the city’s
            majority people of color population — including issues of waste management, pollution prevention, health
            equity, green schools, transportation equity, food security, parks justice and green services access, smart
            growth, just sustainability, clean and renewable energy and climate justice.
          </p>
          </div>
      </div>
    </div>

    <div class="tc">
    <img src="https://incomparable-syrniki-850129.netlify.app/BCX32209.png" class="w-100 w-80-ns" />
        <br />
    </div>

    <div>
      <div class="wrapper">
        <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">

          <p>One also has to wonder if the historical targeting of Black and Hispanic neighborhoods for locally unwanted
            land uses (LULUs) would be allowed if Houston possessed strong environmental justice organizations and
            networks. Clearly, Houston is not New York or Chicago, cities that have produced some remarkable leaders who
            have built multiethnic organizations and networks. Majora Carter of Sustainable South Bronx won a 2005
            MacArthur “Genius” Grant for her environmental justice work. Another New Yorker, Peggy Shepard of We Act for
            Environmental Justice in Harlem, won the 2006 Heinz Award for her work. And Kim Wasserman of Little Village
            for Environmental Justice in Chicago won the 2013 Goldman Prize for Environment in North America.
          </p>
          <p>Houston is not Los Angeles. Despite similarities in terms of racial and ethnic diversity, Houston has not
            been able to capitalize on its diversity to grow a robust multiracial, multi-issue network of environmental
            and social justice organizations that have expertise in organizing, education, policy making, legal action
            and scientific research.
          </p>
          <p>How much of the blame for this limited capacity in Houston rests with poor funding? No social movement can
            sustain itself over time without adequate funds. Nationally, funders spent a whopping $10 billion between
            2000 and 2009 on environmental groups. However, just 15 percent of the environmental grant dollars benefited
            marginalized communities, and only 11 percent went to advancing “social justice” causes, such as community
            organizing. Environmental justice groups need funding to build capacity. Constrained funding in Houston has
            made it difficult for efforts at building organizational infrastructure, community organizing, leadership
            development and effective participation in the policy arena to succeed. This lack is particularly
            shortsighted given that building a potent environmental justice presence in Houston will make us a much
            healthier and more livable city for all.
          </p>
          <br />

          </div>
      </div>
    </div>

    <div>
    <img src="https://incomparable-syrniki-850129.netlify.app/WhisperingPines_Illustration.png"
            class="w-100 w-70-ns" />
                    <br />
    </div>

    <div>
      <div class="wrapper">
        <div class="center measure-wide f5 pb5 pt2 lh-copy ph2">
          <br />
          <h2>CREDITS & ACKNOWLEDGEMENTS</h2>
          <p>Dr. Robert Bullard is founding director of the Bullard Center for Environmental and Climate Justice and
            distinguished professor of urban planning and environmental policy at Texas Southern University
            (<a href="https://www.bullardcenter.org" target="_blank">bullardcenter.org</a>)
          </p>
          <p>Originally published by the Rice Design Alliance in 2014 in Cite 93
          </p>
          <p>Produced by One Breath (<a href="https://www.onebreathhou.org" target="_blank">onebreathhou.org</a>) and Environmental Defense Fund (<a href="https://www.onebreathhou.org" target="_blank">edf.org</a>) Designed by Evan O’Neil
            (<a href="https://www.evanoneil.studio" target="_blank">evanoneil.studio</a>)
          </p>
          <p>All photos except on pages 26 & 27 by Ben Corda (<a href="https://www.bencorda.com" target="_blank">bencorda.com</a>)
          </p>
          <p>Photo on pages 26 & 27 provided by Dr. Bullard
          </p>
          <p>Illustration of a possible healthier and more livable city for all by Sanbles (<a href="https://www.sanbles.com" target="_blank">sanbles.com</a>)
          </p>
        </div>
      </div>
    </div>
          
  </body>
</Layout>
)

}


export default mountains
