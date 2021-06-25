import React from 'react'
import { Layout } from '../components/Layout'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="Wantedly"
        description="Wantedly Frontend Internship 選考課題"
      />
      <Link href="/projects">
        <a>募集リストを見る</a>
      </Link>
    </Layout>
  )
}

export default Home
