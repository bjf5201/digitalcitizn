import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ComingSoon = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Digital Citizn" />
      <h1>About</h1>
      <p>Information will go here</p>
      <Link to="/">
        <span role="link">Go back Home.</span>
      </Link>
    </Layout>
  )
}

export default ComingSoon

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
