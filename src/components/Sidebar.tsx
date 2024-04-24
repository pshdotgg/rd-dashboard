import Image from 'next/image'
import React from 'react'
import { Icons } from './Icons'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-white gap-7 min-w-16 py-6 drop-shadow items-center px-4'>
      <Image src='/logo.svg' alt='logo' width={32} height={29} />
      <Icons.DashboardMenu />
      <Icons.AddToQueue />
      <Icons.Important />
      <Icons.Assignment />
      <Icons.Deliveries />
      <Icons.LocalShipping />
      <Icons.ParcelTracking />
      <Icons.BusinessCenter />
      <Icons.AccountBalance />
      <Icons.DynamiceFeed />
      <Icons.Settings />
    </div>
  )
}

export default Sidebar
