import React from 'react'

type Props = {
  title: string
}

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="md:text-3xl text-2xl font-bold text-gray-900 py-7">
      {title}
    </h2>
  )
}
