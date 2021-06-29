import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  id?: string
  title?: string
  image?: string | null
}

export const ProjectsListItem: React.FC<Props> = ({ id, title, image }) => {
  return (
    <Link href={`/projects/${id}`}>
      <a>
        <div className="transition duration-300 bg-white shadow-md rounded-3xl group hover:shadow-lg hover:scale-105">
          <Image
            alt={`${title}の画像`}
            src={image ? image : './noImage.png'}
            width={1956}
            height={796}
            className="object-cover object-center w-full transition duration-300 rounded-t-3xl saturate-150"
          />
          <div className="p-6">
            <h2 className="mb-1 text-xl font-bold text-gray-900 transition duration-300 group-hover:text-blue-500">
              {title}
            </h2>
          </div>
        </div>
      </a>
    </Link>
  )
}
