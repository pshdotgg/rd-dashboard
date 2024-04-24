import React from 'react'
import { Icons } from './Icons'
import { Separator } from './ui/separator'

const Dashboard = () => {
  return (
    <section className='px-5 py-6 w-full'>
      <div className='flex justify-between items-center'>
        <Icons.DashboardLogo />
        <div className='rounded-2xl drop-shadow bg-white justify-center flex gap-2 h-8 w-[132px]'>
          <Icons.Search />
          <Separator orientation='vertical' className='bg-[#CBCBCB] h-4 my-2' />
          <Icons.Notification />
          <Separator orientation='vertical' className='bg-[#CBCBCB] h-4 my-2' />
          <Icons.MenuDots />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
