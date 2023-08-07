import React from react
import Header from '../components/Header'
import ComingSoon from '../components/ComingSoon'

const LandingPageTemplate = () => {
return (
  <div className="global-wrapper" data-is-root-path={isHomePage}>
    <Header></Header>

    <main>
      <ComingSoon></ComingSoon>
    </main>

    <footer>
      © {new Date().getFullYear()} {title}
    </footer>
  </div>
)
}

export default LandingPageTemplate
