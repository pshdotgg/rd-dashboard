import React from 'react'
import { Icons } from './Icons'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Dashboard = () => {
  return (
    <section className='px-5 py-6 w-full flex flex-col gap-6'>
      <DashboardHeader />
      <QuickActions />
      <HighPriorityAlerts />
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
      <h3 className='font-medium text-lg pb-3'>Quick Actions</h3>
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

const HighPriorityAlerts = () => {
  return (
    <div className='w-full min-h-20'>
      <h3 className='font-medium text-lg pb-4'>High Priority Alerts (14)</h3>
      <div className='flex items-center gap-14'>
        <Alert
          title='David Raised Concern'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt ut labore et dolore magna aliqua'
          date='13 Feb 24'
          loadNumber={12454}
          customer='RoaDo demo Bangalore'
          type='concern'
        />
        <Alert
          title='Reefer Temp. out of range'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt ut labore et dolore magna aliqua'
          date='13 Feb 24'
          loadNumber={12454}
          customer='RoaDo demo Bangalore'
          type='temp'
        />
      </div>
    </div>
  )
}

interface AlertProps {
  title: string
  description: string
  loadNumber: number
  customer: string
  date: string
  type: 'concern' | 'temp'
}

const Alert = ({
  title,
  description,
  loadNumber,
  customer,
  type,
  date,
}: AlertProps) => {
  return (
    <div className='bg-white rounded-2xl drop-shadow text-xs text-[#111111] max-w-96 p-3'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex gap-2 items-center'>
          <div className='rounded flex justify-center items-center bg-[#e0eaff] drop-shadow-sm w-8 h-8'>
            {type === 'concern' ? <Icons.User /> : <Icons.Thermometer />}
          </div>
          <div className='flex flex-col'>
            <h4 className='text-sm font-medium'>{title}</h4>
            <div className='flex text-[10px] gap-1'>
              <span>Load No : {loadNumber},</span>
              <span>Bill To : {customer}</span>
            </div>
          </div>
        </div>
        <span className='text-xs'>{date}</span>
      </div>
      <p className='text-xs pt-4 pb-3'>{description}</p>
      <div className='flex items-center gap-10 justify-end'>
        <Button variant='ghost' className='underline'>
          Ignore
        </Button>
        <Button variant='default' className='bg-[#1A3875] px-3 py-2'>
          Resolve
        </Button>
      </div>
    </div>
  )
}

export default Dashboard
