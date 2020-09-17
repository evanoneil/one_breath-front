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

import ogImage from "../assets/img/og.jpg";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query PrivacyPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      about_header
    }
  }
`;

const PrivacyPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const site = (data || {}).site;

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);
  const mediaNodes = data && data.media && mapEdgesToNodes(data.media);

  const description = site.about_header;
  const image = `https://onebreathhou.org${ogImage}`;

  return (
    <Layout>
      {/* <SEO
        title="About"
        description="Doing the dirty work for clean air in Houston."
        image="https://d3n8a8pro7vhmx.cloudfront.net/themes/59d2efeced0e461e14000000/attachments/original/1515178430/onebreath-og-new-hp-mr.jpg"
      /> */}
      <Helmet>
        <title>Privacy Policy | One Breath Partnership</title>
        <meta property="og:title" content="Privacy Policy | One Breath Partnership" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="og:image" content={image} />
        <meta name="twitter:title" content="Privacy Policy | One Breath Partnership" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@onebreathhou" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v3/petition/tceq-is-missing-in-action-and-houstonians-health-is-being-put-at-risk-we-deserve-answers-cleanuptceq?format=js&source=widget" />
      </Helmet>
      <Headline title={description} />
      <Container>
        <h1>
          <strong>Privacy policy</strong>
        </h1>
        <p>
          <em>
            <span>Effective date: June 1, 2017</span>
          </em>
        </p>
        <p>
          <span>
            We put a high priority on protecting your privacy. We will not rent or exchange your
            email address with anyone, and you can choose to stop hearing from us at any time
            &mdash;
          </span>
          <a href="https://www.edf.org/contact">
            {" "}
            <span>just ask</span>
          </a>
          <span>.</span>
        </p>
        <h2>
          <strong>All the details</strong>
        </h2>
        <p>
          <span>
            This Privacy Policy describes how the One Breath Partnership collects, uses, and
            discloses personally identifiable information gathered through our websites and mobile
            applications that link to this Privacy Policy (the "Sites").
          </span>
        </p>
        <p>
          <span>
            This Privacy Policy only addresses information collected directly through or from our
            Sites &ndash; it does not address or govern any information-gathering, use, or
            dissemination practices related to information collected from you other than directly
            through or from the Sites, such as from telephone, facsimile, postal mail, personal
            delivery, or other or additional offline means or media.
          </span>
        </p>
        <p>
          <span>
            When you register for special services on one of our sites, you give us personal
            information about yourself (such as name, address, zip code, email address, etc.). You
            can always
          </span>{" "}
          <span>
            opt out, now or at any time later, to keep from getting any unwanted messages or
            solicitations.
          </span>
        </p>
        <p>
          <span>If you have any questions,</span>
          <a href="mailto:stories@onebreathhou.org">
            {" "}
            <span>please ask</span>
          </a>
          <span>.</span>
        </p>
        <ol>
          <li>
            <span>What organization is collecting your information?</span>
          </li>
          <li>
            <span>What personally identifiable information of yours is collected?</span>
          </li>
          <li>
            <span>Passive information collection</span>
          </li>
          <li>
            <span>How your personally identifiable information may be used and shared</span>
          </li>
          <li>
            <span>
              What choices are available to you regarding collection, use, and distribution of the
              information?
            </span>
          </li>
          <li>
            <span>
              What kind of security procedures are in place to protect against the loss, misuse, or
              alteration of your information?
            </span>
          </li>
          <li>
            <span>How you can access, update, or delete your information</span>
          </li>
          <li>
            <span>Changes in our privacy policy</span>
          </li>
          <li>
            <span>Official terms and conditions</span>
          </li>
          <li>
            <span>Information related to minors</span>
          </li>
          <li>
            <span>Your California privacy rights</span>
          </li>
        </ol>
        <h3>
          <strong>1. What organization is collecting your information?</strong>
        </h3>
        <p>
          <span>
            We are One Breath Partnership, a fiscally sponsored advocacy organization.. We are
            responsible for any information collected on our Sites. Our organizational site is{" "}
          </span>
          <a href="http://www.onebreathhou.org">
            <span>www.onebreathhou.org</span>
          </a>
          <span>.&nbsp;</span>
        </p>
        <h3>
          <strong>2. What personally identifiable information of yours is collected?</strong>
        </h3>
        <p>
          <span>
            Personally identifiable information is information that identifies you, such as your
            name, phone number, email address, mailing address.
          </span>
        </p>
        <p>
          <span>
            If you post information or materials on our social media pages , please note that any
            information you post or disclose through these services will become public and may be
            available to users of those services on the Sites and to the general public. We urge you
            to be very careful when deciding to disclose any information on such services.
          </span>
        </p>
        <p>
          <span>
            We want to be very clear: We only obtain this kind of personally-identifying information
            when you choose to provide it.
          </span>
        </p>
        <h3>
          <strong>3. Passive information collection</strong>
        </h3>
        <p>
          <span>
            As you navigate the Sites, certain information may be collected passively, meaning it is
            gathered without you actively providing it, as described below:
          </span>
        </p>
        <ul>
          <li>
            <strong>Through your browser:</strong>
            <span>
              {" "}
              Certain information is collected by most browsers, such as your Media Access Control
              (MAC) address, computer type and operating system type and version screen resolution,
              and Internet browser type and version.
            </span>
          </li>
          <li>
            <strong>Through your device:</strong>
            <span>
              {" "}
              If you access the Sites through a mobile device or other network-connected product,
              certain information may be collected about that device, including your device type,
              network service provider, and other identifiers. We may collect unique device
              identifiers (such as IDFA and AID tags and UUID and UDID identifiers) associated with
              the device you use to access the Sites. In addition, your device may allow us to
              collect certain weather-related information, such as the exact barometric pressure
              where you are located.
            </span>
          </li>
          <li>
            <strong>Using cookies:</strong>
            <span>
              {" "}
              Cookies are pieces of information stored directly on the computer you are using.
              Cookies allow us to collect information such as browser type, time spent on the Sites,
              pages visited, and language preferences. We and our service providers use this
              information for security purposes, to facilitate navigation, display information more
              effectively, and to personalize your experience while using the Sites. More
              specifically, we use cookies to:{" "}
            </span>
            <span>&nbsp;&nbsp;&nbsp; </span>
          </li>
          <ul>
            <li>
              <span>
                recognize your computer or device to make your use of the Sites easier, such as to
                remember your locations of interest and other preferences with the Sites;
              </span>
            </li>
            <li>
              <span>
                gather statistical information about use of the Sites in order to continually
                improve the design and functionality of the Sites, understand how individuals use
                the Sites, and to assist us with resolving questions regarding the Sites;
              </span>
            </li>
            <li>
              <span>
                select which of our advertisements are most likely to appeal to you and display them
                while you are on the Sites and on other websites, applications, and online services
                that you use; and
              </span>
            </li>
            <li>
              <span>track consumer responses to online advertisements.</span>
            </li>
            <li>
              <span>to learn more about cookies, please visit</span>
              <a href="http://www.allaboutcookies.org/">
                {" "}
                <span>http://www.allaboutcookies.org</span>
              </a>
              <span>.</span>
            </li>
          </ul>
          <li>
            <span>&nbsp;&nbsp;&nbsp; </span>
          </li>
          <li>
            <strong>Using monitoring tools:</strong>
            <span>
              {" "}
              The Sites may utilize pixel tags, web beacons, clear GIFs, Flash Shared Objects, HTML5
              Local Storage, HTML5 Mini Databases, and other similar technologies, both on certain
              aspects of the Sites and in HTML-formatted e-mail messages to you. These monitoring
              tools are used for the purpose of, among other things, measuring the success of our
              marketing campaigns, compiling statistics about Site usage and response rates, and
              tracking the activities of users of the Sites and e-mail recipients.
            </span>
          </li>
          <li>
            <strong>IP Address:</strong>
            <span>
              {" "}
              Your IP Address is a number that is automatically assigned to the computer that you
              are using by your Internet Service Provider. An IP Address is identified and logged
              automatically in our server log files whenever a user visits the Sites, along with the
              time of the visit and the page(s) that were visited. Collecting IP Addresses is
              standard practice on the Internet and is done automatically by many online service
              providers, including website operators. We use IP Addresses for purposes such as
              calculating Site usage levels, helping diagnose server problems, and administering the
              Sites.
            </span>
          </li>
          <li>
            <strong>Analytic tools:</strong>
            <span>
              {" "}
              We also use tools and third party services to collect information about usage of the
              Sites, including Google Analytics. You can learn more about Google Analytics, and its
              privacy practices, at the Google Analytics
            </span>
            <a href="https://support.google.com/analytics/answer/6004245">
              {" "}
              <span>Help Page</span>
            </a>
            <span>
              . Generally speaking, Google Analytics collects information on how often users visit
              the Sites, what aspects of the Sites they visit when they do so, and what other
              websites users visited prior to accessing the Sites. The Sites make use of Google
              Analytics services for Demographics and Interest Reporting as well as Display
              Advertising features, including Remarketing, Google Display Network Impression
              Reporting, and DoubleClick Campaign Manager integration. You may opt out of Google
              Analytics for Display Advertising or customize Google Display Network ads through the
            </span>
            <a href="https://www.google.com/settings/u/0/ads/authenticated?hl=en">
              {" "}
              <span>Google Ads Settings page</span>
            </a>
            <span>
              . You may also prevent your data from being collected and used by Google Analytics by
              opting out through the use of the
            </span>
            <a href="https://tools.google.com/dlpage/gaoptout/">
              {" "}
              <span>Google Analytics Opt-out Browser Add-on</span>
            </a>
            <span>.</span>
          </li>
        </ul>
        <p>
          <span>
            If you are uncomfortable with the idea of this information being collected and used in
            these ways, most computer systems, devices, and web browsers offer privacy settings and
            options, such as disabling cookies, resetting your IDFA, and opting for "Do Not Track"
            features. For the avoidance of doubt, "ad blocking" services and applications are not
            always effective and should not be relied upon for the purpose of preventing information
            from being collected and used. We do not override these settings or options and
            encourage you to use them to enhance your choices and personalize your experiences.
            However, in order to access certain content, features, services, products, or benefits
            of the Sites, you may be required to provide us with certain information. If you do not
            wish to provide that information through the Sites or if you opt to utilize the
            aforementioned privacy features, you may be unable to obtain certain content, features,
            services, or benefits of the Sites. Note that changing these settings will not prevent
            you from seeing advertisements and offers, but those advertisements and offers may not
            be tailored to your interests and needs.
          </span>
        </p>
        <h3>
          <strong>4. How your personally identifiable information may be used and shared</strong>
        </h3>
        <p>
          <span>
            We use your personally identifiable information to give you personalized service (for
            example, information about your neighborhood, or your favorite subjects); to send you
            email alerts; to answer your requests; to let you become a member online; and to better
            understand demographic information about our supporters and website visitors. Our
            overriding goal in our use of your personal information is to better serve you and our
            other supporters and website visitors and to advance our environmental advocacy goals.
            You can opt out at any time to stop any further contact from us.
          </span>
        </p>
        <p>
          <span>
            We may also use this information to suggest other web site services to you, ask you to
            become a member, or to solicit donations. At any time you can opt out.
          </span>
        </p>
        <p>
          <span>
            We may share your personally-identifiable information, as well as a record of
            transactions you conduct with us, with third-party advertising and analytics partners
            and related service providers. We do so in order to deliver information about our work
            and your opportunity to support it through a variety of communication channels,
            including online advertising, social media messages, email messages, and offline
            communications. We also work with a variety of third party business partners, including
            advertisers, advertising networks, and advertising and analytics companies, which use
            the technologies describe above in this policy to passively collect data about your use
            of the Sites. These companies use the information they collect to provide you with
            advertisements relevant to your interests, which may be delivered to you on the Sites or
            on third party websites or applications. This is called "Interest-Based Advertising" or
            "Online Behavioral Advertising." To learn more about Interest Based Advertising and your
            options with respect to these practices, please visit
          </span>
          <a href="http://www.networkadvertising.org/choices">
            {" "}
            <span>www.networkadvertising.org/choices</span>
          </a>
          <span>,</span>
          <a href="https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html">
            {" "}
            <span>
              https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html
            </span>
          </a>
          <span>,</span>
          <a href="http://www.aboutads.info/choices">
            {" "}
            <span>http://www.aboutads.info/choices</span>
          </a>
          <span>, and</span>
          <a href="https://choice.microsoft.com/en-US/opt-out">
            {" "}
            <span>https://choice.microsoft.com/en-US/opt-out</span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            We may disclose your information, whether personally identifying or not, to third
            parties who perform functions on our behalf such as solicitation or acknowledgment of
            charitable gifts and aggregate analysis and marketing activities, as well as to
            professional advisors such as auditors and attorneys. These partners may also combine
            your email information with other information they have access to such as mailing
            address so that One Breath Partnership may serve relevant marketing offers to you via
            email and direct mail. While One Breath Partnership may undertake efforts to see that
            any third party to which One Breath Partnership discloses personal information is under
            an obligation to use the personal information solely for the purposes for which the
            information was disclosed, such third parties are independent third parties over which
            One Breath Partnership exercises no control. One Breath Partnership is not responsible
            for, and will not be liable for, the conduct, actions, omissions, or information
            handling or dissemination practices of third parties. We also may rent or exchange names
            and postal addresses to other organizations through a broker. If you wish to remove your
            name from our list rental/exchange program, please email stories@onebreathhou.org to
            make that request.
          </span>
        </p>
        <p>
          <span>
            Your information and data, whether personally identifying or not, may also be disclosed
            or distributed to another party with which One Breath Partnership enters or reasonably
            may enter into a corporate transaction, such as, for example, a merger, consolidation,
            acquisition, or asset purchase, or to a third party pursuant to a subpoena, court order,
            or other form of legal process, in response to a request by or on behalf of any local,
            state, federal, or other government agency, department, or body, whether or not pursuant
            to a subpoena, court order, or other form of legal process, or if determined by One
            Breath Partnership in its sole judgment that such disclosure or distribution is
            appropriate to protect the life, health, or property of One Breath Partnership or any
            other person or entity.
          </span>
        </p>
        <h3>
          <strong>
            5. What choices are available to you regarding collection, use, and distribution of your
            personally-identifiable information?
          </strong>
        </h3>
        <p>
          <span>
            You can tell us not to send you any messages or solicitations at all. To opt-out from
            receiving content from One Breath Partnership or its partners and affiliates,
          </span>
          <a href="mailto:stories@onebreathhou.org">
            <span> please tell us</span>
          </a>
          <span>.&nbsp;</span>
        </p>
        <ol start="6">
          <li>
            <strong>
              {" "}
              What kind of security procedures are in place to protect against the loss, misuse, or
              alteration of your personally identifying information?
            </strong>
          </li>
        </ol>
        <p>
          <span>
            We take commercially reasonable precautions to protect us and our users from
            unauthorized access to or unauthorized alteration, disclosure or destruction of
            information we hold.
          </span>
        </p>
        <p>
          <span>
            We take care to utilize appropriate and reasonable administrative, physical, and
            technical measures to help safeguard personally identifiable information that we
            control. While we use encryption to protect sensitive information transmitted online, we
            also protect your information offline. Only employees who need the information to
            perform a specific job are granted access to personally identifiable information. The
            computers/servers on which we store personally identifiable information and process
            credit card donations and updates to monthly billing are kept in a secure environment.
            We also use "anti-hacking" security measures and employ security consultants.
          </span>
        </p>
        <p>
          <span>
            Despite the efforts we use to protect your information, no transmission or electronic
            storage of information can be guaranteed to be 100% secure. If you have reason to
            believe that your use of the Services or engagement with us is no longer secure, please
            contact us immediately.
          </span>
        </p>
        <h3>
          <strong>7. How you can access, update, or delete your information</strong>
        </h3>
        <p>
          <span>Please</span>
          <a href="mailto:stories@onebreathhou.org">
            {" "}
            <span>contact us</span>
          </a>
          <span>
            {" "}
            to obtain, change, update or delete our records of your personal information, or to
            change your privacy options.&nbsp;
          </span>
        </p>
        <h3>
          <strong>8. Changes in our privacy policy</strong>
        </h3>
        <p>
          <span>Should our practices change, this notice will be immediately updated.&nbsp;</span>
        </p>
        <h3>
          <strong>9. Official terms and conditions</strong>
        </h3>
        <ol>
          <li>
            <strong>Disclaimer</strong>
            <span>
              . We do our very best to make all our information accurate. But we do not and cannot
              guarantee its accuracy. This means that if you rely on it, you cannot hold us at fault
              for any inaccuracies.
            </span>
            <span>
              <br />
            </span>{" "}
            <span>&nbsp;&nbsp;&nbsp; </span>
            <span>
              <br />
            </span>{" "}
            <span>&nbsp;&nbsp;&nbsp; </span>
            <em>
              <span>Legalese version</span>
            </em>
            <span>
              : One Breath Partnership and its affiliates make no warranties, express or implied,
              about the accuracy, completeness, or reliability of any of the information it provides
              to the public.
            </span>
            <span>
              <br />
            </span>{" "}
            <span>&nbsp;&nbsp;&nbsp; </span>
            <span>&nbsp;</span>
          </li>
          <li>
            <strong>Changes without notice</strong>
            <span>
              . We may change any part of this policy, without any separate notice to users. The
              current policy will always be posted here. We will not change the overall purpose of
              this policy, which is to protect your privacy consistent with our goals as a
              non-profit advocacy organization dedicated to protecting the environment.
            </span>
          </li>
        </ol>
        <h3>
          <strong>10. Information Related to Minors</strong>
        </h3>
        <p>
          <span>
            The Sites are not intended for persons under the age of 18. We do not knowingly collect
            personally identifiable information online from persons in this age group. We reserve
            the right to delete any information identified as having been provided by such persons
            at our discretion.
          </span>
        </p>
        <h3>
          <strong>11. Your California Privacy Rights</strong>
        </h3>
        <p>
          <span>
            If you are a California resident, you are entitled by law to request an information
            sharing disclosure. If you provide notice to the address below, we will provide you with
            a notice of your right to prevent sharing of your personal information as well as a
            cost-free means of doing so. To receive such a notice, please
          </span>
          <a href="mailto:stories@onebreathhou.org">
            {" "}
            <span>contact us</span>
          </a>
          <span>.</span>
        </p>
        <p>&nbsp;</p>
      </Container>
    </Layout>
  );
};

export default PrivacyPage;
