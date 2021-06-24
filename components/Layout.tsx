import React from 'react'
import { Header } from './Header'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container px-4 mx-auto lg:max-w-5xl lg:mt-12">
        {children}
      </div>
    </div>
  )
}
