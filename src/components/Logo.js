import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Logo() {
  return (
    <StaticImage src="../images/logo.png"
    alt="Digital Citizn Logo"
    placeholder="blurred"
    layout="fixed"
    width={100}
    height={100} />
  )
}
