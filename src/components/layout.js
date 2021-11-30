import * as React from 'react'
import Footing from '../components/footer'
import Heading from '../components/header'
import Hero from './hero'
import { Helmet } from "react-helmet"




const Layout = ({ pageTitle, children }) => {
  return (
    <div>
       <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
        </Helmet>
 <Heading></Heading>
 <Hero></Hero>
      <main>
        {children}
      </main>
      <Footing></Footing>
    </div>
  )
}

export default Layout