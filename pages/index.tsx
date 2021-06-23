import React from 'react'
import { Layout } from '../components/Layout'
import { NextSeo } from 'next-seo'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="Wantedly"
        description="Wantedly Frontend Internship 選考課題"
      />
    </Layout>
  )
}

export default Home
