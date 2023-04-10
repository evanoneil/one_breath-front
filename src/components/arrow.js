import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Helmet from "react-helmet";

import styles from "./report-highlight";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

import ChildComponent from "./ChildComponent"
import { graphql, useStaticQuery } from "gatsby"

const ParentComponent = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityMajorProject (limit: 1) {
        edges {
          node {
            url
            title
            _rawMainImage
            description
            mainImage {
              _key
              _type
              caption
              alt
            }
          }
        }
      }
    }
  `)

  // Check that the data object contains the expected fields
  if (!data || !data.allSanityMajorProject || !data.allSanityMajorProject.edges) {
    return <div>No major projects found.</div>
  }

  const { edges } = data.allSanityMajorProject
  const items = edges.map(({ node }) => node)

  // Check that the items array contains at least one item
  if (!items || items.length === 0) {
    return <div>No major projects found.</div>
  }

  return <ChildComponent items={items} />
}

export default ParentComponent
