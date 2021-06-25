import React from 'react'
import { useProjectsQuery } from '../__generated__/types'

import { ProjectsListItem } from './ProjectsListItem'

export const ProjectsList: React.FC = () => {
  const { data } = useProjectsQuery()

  return (
    <div className="flex flex-wrap">
      {data?.projects?.map((project) => {
        return (
          <div key={project?.id} className="p-4 lg:w-1/3 w-full md:w-1/2">
            <ProjectsListItem
              id={project?.id}
              title={project?.title}
              image={project?.imageUrlLarge}
            />
          </div>
        )
      })}
    </div>
  )
}
