import * as React from 'react'
import Footing from '../components/footer'
import Heading from '../components/header'
import Hero from './hero'



const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
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