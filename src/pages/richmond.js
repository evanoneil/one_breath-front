import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { mapEdgesToNodes } from '../lib/helpers'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'
import ogImage from '../assets/img/one_breath-petition-OG-feb2021.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import animation from '../assets/js/script.js'


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

  const ScrollamaDemo = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
    };
  }

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


        <style>

        </style>
      </Helmet>
      <iframe src="https://houston-arrow.netlify.app/1.html" className="fullframe"></iframe>

    </Layout>
  )
}



export default Richmond