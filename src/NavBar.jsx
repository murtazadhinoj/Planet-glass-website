import React from 'react'

const NavBar = () => {
  return (
    <>
        <div className='nav w-full h-28  flex align-middle justify-between border-b-2'>
            <div className="nav-part1 w-full ">
                <h1>Planet Glass</h1>
            </div>

            <div className="nav-part2   flex align-middle justify-evenly w-full">
                <h1 className='text-xl'>Est-2020</h1>
                <svg className="w-20 h-15  text-gray-800  " xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/>
</svg>

            </div>
        </div>
    </>
  )
}

export default NavBar