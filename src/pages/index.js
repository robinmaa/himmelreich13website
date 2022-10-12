// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (  
   <Layout pageTitle="Startseite">
        <p>Willkommen im Himmelreich!</p>
        <StaticImage
        alt="Himmelreich"
        src="../images/Himmelreich1.jpeg"
        />
    </Layout>
  )
}

export const Head = () => <Seo title="Startseite"/>

export default IndexPage