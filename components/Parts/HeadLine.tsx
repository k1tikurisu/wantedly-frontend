import React from 'react'

type Props = {
  headline: string
}

export const HeadLine: React.FC<Props> = ({ headline }) => {
  return <h3 className="font-bold text-3xl pt-10 pb-6">{headline}</h3>
}
