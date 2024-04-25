'use client'

import { PieChart, Pie, Cell } from 'recharts'
import { ChartDataType } from './Dashboard'

const COLORS = ['#FFCB49', '#7464FF', '#4FD2B5']

const DataChartCard = ({ data }: { data: ChartDataType }) => {
  return (
    <div className='bg-white drop-shadow px-4 pt-6 pb-3 rounded-xl w-full max-w-60 sm:max-md:max-w-72'>
      <h4 className='text-sm'>{data.name}</h4>
      <DataChart data={data.data} />

      <div className='flex flex-col gap-2'>
        <div
          className={`flex text-xs gap-5 bg-gradient-to-r from-white to-[#FFCB49] rounded justify-between py-1 pl-1 pr-3`}
        >
          <span>{data.data[0].name}</span>
          <span>{data.data[0].value}</span>
        </div>
        <div
          className={`flex text-xs gap-5 bg-gradient-to-r from-white to-[#7464FF] rounded justify-between py-1 pl-1 pr-3`}
        >
          <span>{data.data[1].name}</span>
          <span>{data.data[1].value}</span>
        </div>
        <div
          className={`flex text-xs gap-5 bg-gradient-to-r from-white to-[#4FD2B5] rounded justify-between py-1 pl-1 pr-3`}
        >
          <span>{data.data[2].name}</span>
          <span>{data.data[2].value}</span>
        </div>
      </div>
    </div>
  )
}

const DataChart = ({ data }: { data: { name: string; value: number }[] }) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0)
  return (
    <PieChart className='-ml-2 sm:mx-auto' width={150} height={150}>
      <Pie
        data={data}
        cx={70}
        cy={70}
        innerRadius={40}
        outerRadius={60}
        dataKey='value'
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text
        x={75}
        y={70}
        className='text-xs text-[#676666]'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        Total
      </text>
      <text
        x={75}
        y={85}
        textAnchor='middle'
        className='text-xs text-black font-medium'
        dominantBaseline='middle'
        fontWeight='bold'
      >
        {total}
      </text>
    </PieChart>
  )
}

export default DataChartCard
