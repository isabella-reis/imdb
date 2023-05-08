import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <nav className='flex justify-center dark:bg-slate-800 bg-pink-100 lg:text-lg p-4'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </nav>
  )
}
