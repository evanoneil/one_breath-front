import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import Helmet from "react-helmet";

import styles from "./arrow.module.css";

import "../layouts/tachyons/css/tachyons.css";
import "../layouts/custom.css";

import ChildComponentSecond from "./ChildComponentSecond"
import { graphql, useStaticQuery } from "gatsby"

const ParentComponentSecond = () => {
  const data = useStaticQuery(graphql`
    query MyQueryTwo {
      allSanityMajorProject (limit: 1, skip: 1) {
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

  return <ChildComponentSecond items={items} />
}

export default ParentComponentSecond
