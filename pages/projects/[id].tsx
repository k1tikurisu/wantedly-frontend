import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import type { GetServerSideProps } from 'next'
import { useProjectQuery } from '../../__generated__/types'

import { Layout } from '../../components/Layout'
import { Title } from '../../components/Parts/Title'
import { HeadLine } from '../../components/Parts/HeadLine'
import { Description } from '../../components/Parts/Description'
import { Staff } from '../../components/Staff'

type Props = {
  id: string
}

const ProjectsDetailsPage: React.FC<Props> = ({ id }) => {
  const { data } = useProjectQuery({ variables: { id } })

  const project = data?.project
  if (!project) return null

  return (
    <Layout>
      <NextSeo
        title="Projects - Wantedly"
        description="Wantedly Frontend Internship 選考課題"
      />
      <Title title={project.title} />
      <Image
        src={project.imageUrlLarge ? project.imageUrlLarge : './noImage.png'}
        alt={`${project.title}の画像`}
        width={1956}
        height={796}
      />
      <HeadLine headline="メンバー" />
      <div className="flex items-center justify-start">
        {project.staffs?.map((staff) => {
          if (!staff) return null
          return (
            <div key={staff.id} className="mr-10">
              <Staff image={staff.avatarUrl} name={staff.name} />
            </div>
          )
        })}
      </div>
      <section>
        <HeadLine headline="なにをやっているのか" />
        <Description desc={project.whatDescription} />
      </section>
      <section>
        <HeadLine headline="なぜやるのか" />
        <Description desc={project.whyDescription} />
      </section>
      <section>
        <HeadLine headline="こんなことやります" />
        <Description desc={project.howDescription} />
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id
  return {
    props: { id },
  }
}

export default ProjectsDetailsPage
