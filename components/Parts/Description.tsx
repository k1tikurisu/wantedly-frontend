import React from 'react'

type Props = {
  desc: string
}

export const Description: React.FC<Props> = ({ desc }) => {
  return <p className="whitespace-pre-wrap">{desc}</p>
}
