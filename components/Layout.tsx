import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container px-4 mx-auto lg:max-w-6xl lg:mt-12 mb-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}
