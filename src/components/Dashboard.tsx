import React from 'react'
import { Icons } from './Icons'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const Dashboard = () => {
  return (
    <section className='px-5 py-6 w-full'>
      <DashboardHeader />
      <QuickActions />
    </section>
  )
}

const DashboardHeader = () => {
  return (
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
  )
}

const QuickActions = () => {
  return (
    <div className='w-full min-h-20'>
      <h3 className='font-medium text-lg pb-4'>Quick Actions</h3>
      <div className='bg-white flex justify-center items-center px-12 gap-12 py-4 rounded-2xl drop-shadow w-full'>
        <Button
          variant='link'
          className='text-sm flex flex-col gap-1.5 justify-center items-center'
        >
          <Icons.Important />
          <span className='text-black'>Create Indents</span>
        </Button>

        <Separator
          orientation='vertical'
          className='bg-[#CBCBCB] h-12 w-[1.5px]'
        />

        <Button
          variant='link'
          className='text-sm flex flex-col gap-1.5 justify-center items-center'
        >
          <Icons.Truck />
          <span className='text-black'>Add Vehicle</span>
        </Button>

        <Separator
          orientation='vertical'
          className='bg-[#CBCBCB] h-12 w-[1.5px]'
        />

        <Button
          variant='link'
          className='text-sm flex flex-col gap-1.5 justify-center items-center'
        >
          <Icons.Trailer />
          <span className='text-black'>Add Trailer</span>
        </Button>

        <Separator
          orientation='vertical'
          className='bg-[#CBCBCB] h-12 w-[1.5px]'
        />

        <Button
          variant='link'
          className='text-sm flex flex-col gap-1.5 justify-center items-center'
        >
          <Icons.User />
          <span className='text-black'>Add Driver</span>
        </Button>

        <Separator
          orientation='vertical'
          className='bg-[#CBCBCB] h-12 w-[1.5px]'
        />

        <Button
          variant='link'
          className='text-sm flex flex-col gap-1.5 justify-center items-center'
        >
          <Icons.Truck />
          <span className='text-black'>Add Indents</span>
        </Button>
      </div>
    </div>
  )
}

export default Dashboard
