
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="Über mich">
      <p>Hey! Ich bin der Ersteller der Homepage</p>
    </Layout>
  )
}

export const Head = () =>  <Seo title="Über mich"/>

export default AboutPage