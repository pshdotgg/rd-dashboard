import Image from 'next/image'
import React from 'react'
import { Icons } from './Icons'

const Navbar = () => {
  return (
    <div className='flex flex-col max-md:hidden bg-white gap-7 min-w-16 py-6 drop-shadow items-center px-4'>
      <Image
        src='/logo.svg'
        alt='logo'
        className='cursor-pointer '
        width={32}
        height={29}
      />
      <Icons.DashboardMenu className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.AddToQueue className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.Important className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.Assignment className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.Deliveries className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.LocalShipping className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.ParcelTracking className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.BusinessCenter className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.AccountBalance className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.DynamiceFeed className='hover:bg-gray-200 rounded cursor-pointer' />
      <Icons.Settings className='hover:bg-gray-200 rounded cursor-pointer' />
    </div>
  )
}

export default Navbar
