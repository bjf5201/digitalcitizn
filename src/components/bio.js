/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        instagram: name
        description
        avatar {
          url
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )}
      {author?.firstName && (
        <section>
          <p>
            Hi. I'm <strong>{author.firstName}</strong>.
          </p>
          {` `}
          <p>{author?.description || null}</p>
          {` `}
          <p>
            <a href="https://www.instagram.com/digitalcitizn/" target="_blank">I'm on Instagram</a>
          </p>
        </section>
      )}
    </div>
  )
}

export default Bio
