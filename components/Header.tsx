import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="top-0 z-50 w-full text-gray-600 bg-white border-b-2 border-gray-100 lg:fixed">
      <div className="py-3 mx-auto px-4 container max-w-5xl sm:text-left text-center">
        <Link href="/projects/">
          <a className="ml-3 sm:text-xl text-lg">
            Wantedly Internship 選考課題
          </a>
        </Link>
      </div>
    </header>
  )
}
