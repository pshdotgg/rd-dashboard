'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAVBAR_LINKS = [
  'Dashboard',
  'Queue',
  'Important',
  'Assignment',
  'Deliveries',
  'Shipping',
  'Tracking',
  'Business Center',
  'Balance',
  'Feed',
  'Settings',
]

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='md:hidden border-gray-200 drop-shadow z-10 bg-white dark:bg-gray-800 dark:border-gray-700'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='#'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image
            src='/logo.svg'
            alt='logo'
            className='cursor-pointer'
            width={32}
            height={29}
          />
          <span className='self-center text-xl font-medium whitespace-nowrap dark:text-white'>
            RdDemo
          </span>
        </Link>
        <button
          onClick={toggleNavbar}
          className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className='w-full bg-white z-10 absolute text-lg'>
          <ul className='flex flex-col mt-4 rounded-lg'>
            {NAVBAR_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={`#`}
                  className='block hover:bg-gray-200 cursor-pointer py-2 px-3'
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default MobileNavbar
