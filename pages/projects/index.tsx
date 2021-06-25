import React from 'react'
import { Layout } from '../../components/Layout'
import { NextSeo } from 'next-seo'

import { ProjectsList } from '../../components/ProjectsList'

const ProjectsListPage: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="Projects - Wantedly"
        description="Wantedly Frontend Internship 選考課題"
      />
      <ProjectsList />
    </Layout>
  )
}

export default ProjectsListPage
