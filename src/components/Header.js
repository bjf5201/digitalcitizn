import React from 'react'
import { Link } from 'gatsby'

export default Header = () => {
  return (
    <header className="global-header">
    {isHomePage ? (
      <h1 className="main-heading">
        <Link to="/">Digital Citizn</Link>
      </h1>
    ) : (
      <Link className="header-link-home" to="/">
        Digital Citizn
      </Link>
    )}
  </header>
  )
}
