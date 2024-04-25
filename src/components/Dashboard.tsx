'use server'
import React from 'react'
import { Icons } from './Icons'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import DataChartCard from './DataChartCard'

export interface ChartDataType {
  name: string
  data: {
    name: string
    value: number
  }[]
}

async function getChartData() {
  const res = await fetch('http://localhost:3000/api/v1/chart')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getAlerts() {
  const res = await fetch('http://localhost:3000/api/v1/alerts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Dashboard = () => {
  return (
    <section className='px-5 py-6 w-full flex flex-col gap-8'>
      <DashboardHeader />
      <Charts />
      <QuickActions />
      <HighPriorityAlerts />
    </section>
  )
}

const Charts = async () => {
  const data: ChartDataType[] = await getChartData()

  return (
    <div className='grid grid-cols-4 w-full gap-5 max-sm:grid-cols-2 sm:max-xl:grid-cols-2 place-items-center '>
      {data.map((item) => (
        <DataChartCard key={item.name} data={item} />
      ))}
    </div>
  )
}

const DashboardHeader = () => {
  return (
    <div className='flex justify-between items-center'>
      <Icons.DashboardLogo />
      <div className='rounded-2xl drop-shadow bg-white justify-center flex gap-2 h-8 px-2 max-w-[132px]'>
        <Icons.Search className='cursor-pointer' />
        <Separator orientation='vertical' className='bg-[#CBCBCB] h-4 my-2' />
        <Icons.Notification className='cursor-pointer' />
        <Separator orientation='vertical' className='bg-[#CBCBCB] h-4 my-2' />
        <Icons.MenuDots className='cursor-pointer' />
      </div>
    </div>
  )
}

const QuickActions = () => {
  return (
    <div className='max-w-full min-h-20 '>
      <h3 className='font-medium text-lg pb-3'>Quick Actions</h3>
      <div className='bg-white flex max-md:flex-col justify-center items-center xl:px-12 gap-5 md:max-lg:gap-1 xl:gap-12 py-4 rounded-2xl drop-shadow w-full'>
        <Button
          variant='link'
          className='text-sm flex flex-col gap-1.5 justify-center items-center'
        >
          <Icons.Important />
          <span className='text-black'>Create Indents</span>
        </Button>

        <Separator
          orientation='vertical'
          className='bg-[#CBCBCB] max-md:hidden h-12 w-[1.5px]'
        />
        <Separator
          orientation='horizontal'
          className='bg-[#CBCBCB] md:hidden w-full h-[1.5px]'
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
          className='bg-[#CBCBCB] h-12 max-md:hidden w-[1.5px]'
        />
        <Separator
          orientation='horizontal'
          className='bg-[#CBCBCB] md:hidden w-full h-[1.5px]'
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
          className='bg-[#CBCBCB] h-12 max-md:hidden w-[1.5px]'
        />
        <Separator
          orientation='horizontal'
          className='bg-[#CBCBCB] md:hidden w-full h-[1.5px]'
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
          className='bg-[#CBCBCB] h-12 max-md:hidden w-[1.5px]'
        />
        <Separator
          orientation='horizontal'
          className='bg-[#CBCBCB] md:hidden w-full h-[1.5px]'
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

const HighPriorityAlerts = async () => {
  const data = await getAlerts()

  return (
    <div className='w-full min-h-20'>
      <div className='flex justify-between items-center gap-5'>
        <h3 className='font-medium text-lg my-2'>
          High Priority Alerts ({data.length})
        </h3>
        <Button variant='link' className='text-sm text-[#1A3875] p-0'>
          View All <Icons.RightChevron />
        </Button>
      </div>
      <div className='flex max-lg:flex-col sm:max-md:flex-row items-center justify-between gap-5 lg:gap-14'>
        {data
          .slice(0, 2)
          .map(
            ({
              title,
              description,
              date,
              loadNumber,
              customer,
              type,
            }: AlertProps) => (
              <Alert
                key={title}
                title={title}
                description={description}
                date={date}
                loadNumber={loadNumber}
                customer={customer}
                type={type}
              />
            )
          )}
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
  type: string
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
    <div className='bg-white rounded-2xl drop-shadow text-xs text-[#111111] w-full xl:max-w-[520px] max-w-full sm:max-md:max-w-80 p-3'>
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
