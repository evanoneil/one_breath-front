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

  return (
    <Layout>
      <SEO title="About" />
      <Helmet>
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v3/petition/tceq-is-missing-in-action-and-houstonians-health-is-being-put-at-risk-we-deserve-answers-cleanuptceq?format=js&source=widget"></script>
      </Helmet>
      <Headline title="About the Partnership" />

      <Container>
        <div>
          <h2>
            One Breath Partnership elevates the work for clean air, every day, in Houston, Harris
            County and our region. We support and share what scientists, community organizers,
            researchers, journalists, advocates and physicians are doing to educate everyone about
            air quality and the impacts pollution can have on our bodies and our ability to thrive.
            We hope to inspire action to protect the health of our shared home.
          </h2>
          <p>
            The founding members of One Breath Partnership are Air Alliance Houston, Environment
            Texas, Environmental Defense Fund, Environmental Integrity Project, Public Citizen, and
            Rice University. Our work is made possible through the Houston Endowment.
          </p>
          <h1>Our Partners</h1>
          <div className={styles.displaygrid}>
            <AboutPartner
              name="Environmental Defense Fund"
              description="Environmental Defense Fund, a leading international nonprofit organization, creates
            transformational solutions to the most serious environmental problems. EDF links
            science, economics, law and innovative private-sector partnerships. EDF has offices in
            Houston and Austin."
            />
            <AboutPartner
              name="Rice University"
              description="Located in an urban environment on a 300-acre tree-lined
            campus, Rice University seizes its advantageous position to pursue path-breaking
            research and create innovative collaboration opportunities that contribute to the
            betterment of our world."
            />
            <AboutPartner
              name="Environmental Integrity Project"
              description="Composed of former EPA enforcement attorneys, public
            interest lawyers, analysts, investigators and community organizers, the Environmental
            Integrity Project is a nonpartisan, nonprofit watchdog organization that advocates for
            effective enforcement of environmental laws."
            />
            <AboutPartner
              name="Air Alliance Houston"
              description="Air Alliance Houston envisions healthy
            communities with clean air, every day, for everyone. We work to reduce the public health
            impacts from air pollution and advance environmental justice in our region through
            applied research, education and advocacy."
            />
            <AboutPartner
              name="Environment Texas"
              description="Environment Texas is
            dedicated to protecting our air, water and open spaces. We investigate problems, craft
            solutions, educate the public and decision-makers and help the public make their voices
            heard in local, state and national debates over the quality of our environment and our
            lives."
            />
            <AboutPartner
              name="Public Citizen"
              description="Public Citizen serves as the voice of the people in the halls of
            power. In Texas, we work toward clean energy, a clean environment, and clean government.
            With offices in Austin, Houston and San Antonio, Public Citizen engages policy makers,
            advocates and communities to combat the climate crisis and to protect the health and
            prosperity of all Texans."
            />
          </div>
          <p></p>
        </div>{" "}
      </Container>
    </Layout>
  );
};

export default AboutPage;
