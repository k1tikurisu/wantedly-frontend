import React from 'react'
import Image from 'next/image'

type Props = {
  image?: string | null
  name: string
}

export const Staff: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image ? image : './noImage.png'}
        alt={`${name}のアイコン`}
        width={140}
        height={140}
        className="rounded-full"
      />
      <p className="font-bold m-3">{name}</p>
    </div>
  )
}
