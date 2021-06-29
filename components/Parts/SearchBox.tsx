import React from 'react'

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox: React.FC<Props> = ({ handleSearch }) => {
  return (
    <div className="bg-white flex items-center rounded-full shadow-xl">
      <input
        className="rounded-full w-full py-4 px-6 leading-tight focus:outline-none"
        id="search"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  )
}
