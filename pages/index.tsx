import React from 'react'
import { Layout } from '../components/Layout'
import { NextSeo } from 'next-seo'
import { useProjectsQuery } from '../generated/graphql'

const Home: React.FC = () => {
  const { data, loading } = useProjectsQuery()

  if (loading) {
    return <div>loading...</div>
  } else {
    return (
      <Layout>
        <NextSeo
          title="Wantedly"
          description="Wantedly Frontend Internship 選考課題"
        />
        <div>
          {!data?.projects
            ? null
            : data.projects.map((project) => {
                return <div key={project?.id}>{project?.title}</div>
              })}
        </div>
      </Layout>
    )
  }
}

export default Home
