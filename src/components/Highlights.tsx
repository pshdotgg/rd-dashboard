import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

async function getActivities() {
  const res = await fetch('http://localhost:3000/api/v1/activities')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const activities = await res.json()

  const completedActivities = activities.filter(
    (activity) => activity.status === 'completed'
  )
  const scheduledActivities = activities.filter(
    (activity) => activity.status === 'scheduled'
  )

  return { completedActivities, scheduledActivities }
}

const Highlights = async () => {
  const { completedActivities, scheduledActivities } = await getActivities()

  return (
    <section className='bg-white flex flex-col drop-shadow px-4 py-6 max-w-screen-md w-full'>
      <div className='flex pb-3.5 flex-col gap-1.5'>
        <h3 className='font-medium text-base'>Todays Highlights (14)</h3>
        <span className='text-[#676666] text-xs'>19 Mar 2024</span>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-3'>
          <AccountCard
            type='Income'
            totalValue='100000'
            currency='CAD'
            totalPayments={2}
          />
          <AccountCard
            type='Expense'
            totalValue='50000'
            currency='CAD'
            totalPayments={5}
          />
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <h3 className='text-sm font-medium'>
              Completed Activities ({completedActivities.length})
            </h3>
            <Button variant='link' className='text-[#11111] text-xs underline'>
              View all
            </Button>
          </div>
          <div className='rounded border border-1 border-[#cbcbcb]'>
            {completedActivities.slice(0, 4).map(({ description }, i) => (
              <>
                <p className='text-xs px-3 py-3.5'>{description}</p>
                {i < 3 ? (
                  <Separator className='h-[1.5px] bg-[#cbcbcb]' />
                ) : null}
              </>
            ))}
          </div>
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <h3 className='text-sm font-medium'>
              Scheduled Activities ({scheduledActivities.length})
            </h3>
            <Button variant='link' className='text-[#11111] text-xs underline'>
              View all
            </Button>
          </div>
          <div className='rounded border border-1 border-[#cbcbcb]'>
            {scheduledActivities.slice(0, 4).map(({ description }, i) => (
              <>
                <p className='text-xs px-3 py-3.5'>{description}</p>
                {i < 3 ? (
                  <Separator className='h-[1.5px] bg-[#cbcbcb]' />
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface AccountCardProps {
  type: 'Income' | 'Expense'
  totalValue: string
  currency: string
  totalPayments: number
}

const AccountCard = ({
  type,
  totalValue,
  currency,
  totalPayments,
}: AccountCardProps) => {
  return (
    <div className='flex flex-col w-[155px] p-3 border border-1 border-[#CBCBCB] rounded'>
      <span className='text-[#676666] text-xs'>{type}</span>
      <span
        className={`font-medium text-base mb-1 mt-2 ${
          type === 'Income' ? 'text-[#148714]' : 'text-[#D04141]'
        }`}
      >{`${totalValue} ${currency}`}</span>
      <span className='text-[#676666] text-xs'>
        {`${totalPayments} payments ${type === 'Income' ? 'received' : 'paid'}`}{' '}
      </span>
    </div>
  )
}

export default Highlights
