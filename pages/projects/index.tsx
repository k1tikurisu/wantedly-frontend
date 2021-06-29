import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { NextSeo } from 'next-seo'
import { useProjectsQuery } from '../../__generated__/types'

import { ProjectsListItem } from '../../components/ProjectsItem'
import { SearchBox } from '../../components/Parts/SearchBox'

const ProjectsListPage: React.FC = () => {
  const { data } = useProjectsQuery()
  const projects = data?.projects

  const [keywords, setKeywords] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setKeywords(e.target.value)
  }

  useEffect(() => {
    const searchedProjects = projects?.filter((project) => {
      return project?.title.indexOf(keywords) !== -1
    })
    setFilteredProjects(searchedProjects)
  }, [keywords, projects])

  return (
    <Layout>
      <NextSeo
        title="Projects - Wantedly"
        description="Wantedly Frontend Internship 選考課題"
      />
      <div className="p-8">
        <SearchBox handleSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap">
        {filteredProjects?.map((project) => {
          if (!project) return null

          return (
            <div key={project.id} className="p-4 lg:w-1/3 w-full md:w-1/2">
              <ProjectsListItem
                id={project.id}
                title={project.title}
                image={project.imageUrlLarge}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsListPage
