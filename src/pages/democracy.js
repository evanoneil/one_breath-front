import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import ERPostPreviewGrid from '../components/er-post-preview-grid'
import NewsroomPreviewGrid from '../components/newsroom-preview-grid'
import VideoPostPreviewGrid from '../components/video-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Headline from '../components/headline'
import PartnerHighlight from '../components/partner-highlight'
import YouTubeHighlight from '../components/youtube-highlight'
import SignUp from '../components/sign-up'
import Partners from '../components/partners'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/og.jpg'
import Redlining from '../assets/img/redlining.jpg'
import Invite from '../assets/img/turnout-og.jpg'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query DemocracyPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      home_header
    }
    posts: allSanityPost(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {elemMatch: {title: {eq: "Environmental Racism"}}}
        slug: {current: {ne: null}}
        publishedAt: {ne: null}
      }
    ) {
      edges {
        node {
          id
          authors {
            author {
              name
            }
          }
          categories {
            title
            _type
            _id
            id
            color
            slug{
              current
            }
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
            caption
          }
          title
          _rawExcerpt
          Action1Title
          Action1URL
          slug {
            current
          }
        }
      }
    }
  }
`

const image = `https://onebreathhou.org${Invite}`

const DemocracyPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media)
  const videoNodes = data && data.media && mapEdgesToNodes(data.videos)
  const description = site.home_header

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>Turnout for Texas - Environmental Organizations Support Texans’ Right to Take Part in Democracy</title>
        <meta property='title' content='Turnout for Texas - Environmental Organizations Support Texans’ Right to Take Part in Democracy
' />

        <meta property='og:title' content='Turnout for Texas - Environmental Organizations Support Texans’ Right to Take Part in Democracy' />
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='og:image' content={image} />

        <meta name='twitter:title' content='Turnout for Texas - Environmental Organizations Support Texans’ Right to Take Part in Democracy' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@onebreathhou' />
        <meta name='twitter:description' content="Turnout for Texas - Environmental Organizations Support Texans’ Right to Take Part in Democracy" />
        <meta name='twitter:image' content={image} />
      </Helmet>
      {/* <Headline title={description} /> */}
      {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
      {/* <SEO
        title={"One Breath Partnership"}
        description={"Clean Air for Houston"}
        keywords={site.keywords}
      /> */}

      <Container>
        {/* <PartnerHighlight /> */}
        <div class="w-75 center">
        <h1 className="green headline">Turn Out for Texas</h1>
        <h2 className="darkgrey headline">Environmental organizations support Texans' right to take part in democracy.</h2>

          <p class="f4">Texas just had one of <a class="blue" href="https://www.texastribune.org/2020/11/04/texas-voter-turnout-democrats/" target="_blank">the highest turnouts</a> of voters in decades. House Bill 6 and <a class="blue" href="https://capitol.texas.gov/BillLookup/history.aspx?LegSess=87R&Bill=SB7" target="_blank">Senate Bill 7</a> would keep that from happening again.
</p>
          <p class="f4">We, the undersigned organizations, believe our democracy works best when everyone is empowered to take part. <span class="b">These bills should not become law.</span>
          </p>
          <p class="f4">In 2020, despite the pandemic, in counties large and small, urban, rural and suburban, turnout rose. Starr County increased nearly 15 percent, and Hays County nearly 12 from the previous election. For the first time in 30 years, more than 70 percent of Travis County residents turned out. In Harris County, <a class="blue" href="https://www.houstonpublicmedia.org/articles/news/politics/election-2020/2020/10/29/385142/harris-county-surpasses-2016-voting-numbers-setting-new-turnout-record/" target="_blank">more people showed up to cast their ballots than in any previous election before early voting had even ended</a>. Everywhere, more voters were able to make their voices heard, with extended early voting, expanded access to mail-in ballots, dropboxes, drive-through sites and more polling places, some with 24-hour access.
          </p>
          <p class="f4">But some lawmakers propose restricting these very popular measures, while implementing others that could lead to voter intimidation, reinforcing <span class="b">a shameful history of disenfranchisement and systemic racism in Texas.</span>
          </p>
          <p class="f4">There should be a direct line from every Texan’s home to the ballot box — that’s because there’s a direct line from there to the laws that shape the air we breathe, the water we drink and the places where we live, work, play and pray.
          </p>
          <p class="f4"><span class="b">Any attempt to restrict access to the ballot box is a violation of our constitutional right to shape those laws.</span> Some of the same communities — largely Black and Latino ones — who will be impacted most by these restrictions are the ones who have been targeted historically by polluting industries and denied the full protection of the law, while living with disproportionate impacts to their health and wealth.
          </p>
          <p class="f4">The 2020 election, as dozens of audits and court rulings determined, had integrity. <span class="b">We believe our state and our country are stronger when our democracy includes everyone.</span> We stand together with all who are working to ensure that even more of us can make our voices heard and shape the future of our great state.
          </p>
          <p class="f4 b">Air Alliance Houston<br />
Bayou City Waterkeeper<br />
Coalition for Equity, Environment and Resilience<br />
Clean Water Action<br />
Energy Foundation<br />
Environmental Defense Fund<br />
Environmental Integrity Project<br />
Environment Texas<br />
League of Conservation Voters<br />
National Wildlife Federation<br />
One Breath Partnership<br />
Public Citizen Texas<br />
Save Our Springs Alliance<br />
Sierra Club, Lone Star<br />
Texas Campaign for the Environment<br />
Texas Center for Policy Studies<br />
Turtle Island Restoration Network
</p>
          </div>
      </Container>
    </Layout>
  )
}

export default DemocracyPage



