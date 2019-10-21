import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import NewsroomPreviewGrid from "../components/newsroom-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Helmet from "react-helmet";
import AboutPartner from "../components/about-partner";
import styles from "../components/about-partner.module.css";
import Headline from "../components/headline";
import aah from "../../public/assets/img/aah.png";
import edf from "../../public/assets/img/edf.png";
import pc from "../../public/assets/img/pc.png";
import et from "../../public/assets/img/et.jpg";
import eip from "../../public/assets/img/eip.png";
import rice from "../../public/assets/img/rice.png";
import ogImage from "../../public/assets/img/og.jpg";

import { responsiveTitle1 } from "../components/typography.module.css";

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

const AboutPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media);

  const description = "Living every day like it's an ozone action day.";
  const image =
    "https://d3n8a8pro7vhmx.cloudfront.net/themes/59d2efeced0e461e14000000/attachments/original/1515178430/onebreath-og-new-hp-mr.jpg";

  return (
    <Layout>
      {/* <SEO
        title="About"
        description="Doing the dirty work for clean air in Houston."
        image="https://d3n8a8pro7vhmx.cloudfront.net/themes/59d2efeced0e461e14000000/attachments/original/1515178430/onebreath-og-new-hp-mr.jpg"
      /> */}
      <Helmet>
        <title>About | One Breath Partnership</title>
        <meta property="og:title" content="About | One Breath Partnership" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="og:image" content={image} />
        <meta name="twitter:title" content="About | One Breath Partnership" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@onebreathhou" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v3/petition/tceq-is-missing-in-action-and-houstonians-health-is-being-put-at-risk-we-deserve-answers-cleanuptceq?format=js&source=widget"></script>
      </Helmet>
      <Headline title="Living every day like an ozone action day." />
      <Container>
        <div>
          <div className="w-80 mb5">
            <h2>
              One Breath Partnership elevates the work for clean air, every day, in Houston, Harris
              County and our region. We support and share what scientists, community organizers,
              researchers, journalists, advocates and physicians are doing to educate everyone about
              air quality and the impacts pollution can have on our bodies and our ability to
              thrive. We hope to inspire action to protect the health of our shared home.
            </h2>
            <p>
              The founding members of One Breath Partnership are Air Alliance Houston, Environment
              Texas, Environmental Defense Fund, Environmental Integrity Project, Public Citizen,
              and Rice University. Our work is made possible through the Houston Endowment.
            </p>
          </div>
          <h1>Our Partners</h1>
          <div className={styles.displaygrid}>
            <AboutPartner
              name="Environmental Defense Fund"
              logo={edf}
              weblink="https://www.edf.org"
              fblink="https://www.facebook.com/EnvDefenseFund/"
              iglink="https://www.instagram.com/environmental_defense_fund/"
              twitterlink="https://twitter.com/envdefensefund"
              description="Environmental Defense Fund, a leading international nonprofit organization, creates
            transformational solutions to the most serious environmental problems. EDF links
            science, economics, law and innovative private-sector partnerships. EDF has offices in
            Houston and Austin."
            />
            <AboutPartner
              name="Air Alliance Houston"
              logo={aah}
              weblink="https://airalliancehouston.org/"
              fblink="https://www.facebook.com/airalliancehouston/"
              iglink="https://www.instagram.com/airalliancehouston/?hl=en"
              twitterlink="https://twitter.com/airallianceHOU"
              description="Air Alliance Houston envisions healthy
            communities with clean air, every day, for everyone. We work to reduce the public health
            impacts from air pollution and advance environmental justice in our region through
            applied research, education and advocacy."
            />
            <AboutPartner
              name="Environment Texas Research and Policy Center"
              logo={et}
              weblink="https://environmenttexascenter.org/"
              fblink="https://www.facebook.com/environmenttexas"
              iglink="https://www.instagram.com/environmenttexas/"
              twitterlink="https://www.twitter.com/environmenttex"
              description="Environment Texas Research and Policy Center is
            dedicated to protecting our air, water and open spaces. We investigate problems, craft
            solutions, educate the public and decision-makers and help the public make their voices
            heard in local, state and national debates over the quality of our environment and our
            lives."
            />
            <AboutPartner
              name="Public Citizen"
              logo={pc}
              weblink="https://www.citizen.org/"
              fblink="https://www.facebook.com/publiccitizen"
              iglink="https://www.instagram.com/public_citizen/"
              twitterlink="https://twitter.com/Public_Citizen"
              description="Public Citizen serves as the voice of the people in the halls of
            power. In Texas, we work toward clean energy, a clean environment and clean government.
            With offices in Austin, Houston and San Antonio, Public Citizen engages policy makers,
            advocates and communities to combat the climate crisis and to protect the health and
            prosperity of all Texans."
            />
            <AboutPartner
              name="Rice University"
              logo={rice}
              weblink="https://www.rice.edu/"
              fblink="https://www.facebook.com/RiceUniversity/"
              iglink="https://www.instagram.com/RiceUniversity/"
              twitterlink="https://twitter.com/RiceUniversity/"
              description="Located in an urban environment on a 300-acre tree-lined
            campus, Rice University seizes its advantageous position to pursue path-breaking
            research and create innovative collaboration opportunities that contribute to the
            betterment of our world."
            />
            <AboutPartner
              name="Environmental Integrity Project"
              logo={eip}
              weblink="https://www.environmentalintegrity.org/"
              fblink="https://www.facebook.com/EnvIntegrity/"
              iglink="https://twitter.com/EnviroIntegrity"
              twitterlink="https://twitter.com/EnviroIntegrity"
              description="Composed of former EPA enforcement attorneys, public
            interest lawyers, analysts, investigators and community organizers, the Environmental
            Integrity Project is a nonpartisan, nonprofit watchdog organization that advocates for
            effective enforcement of environmental laws."
            />
          </div>
          <p></p>
        </div>{" "}
      </Container>
    </Layout>
  );
};

export default AboutPage;
