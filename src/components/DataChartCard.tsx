'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#FFCB49', '#7464FF', '#4FD2B5']

const DataChartCard = ({ data }) => {
  return (
    <div className='bg-white drop-shadow px-4 pt-6 pb-3 rounded-xl w-full max-w-60'>
      <h4 className='text-sm'>{data.name}</h4>
      <DataChart data={data.data} />

      <div className='flex flex-col gap-2'>
        {data.data.map((d, i) => (
          <div
            key={d.name}
            className={`flex text-xs gap-5 bg-gradient-to-r from-white to-[${COLORS[i]}] rounded justify-between py-1 pl-1 pr-3`}
          >
            <span>{d.name}</span>
            <span>{d.value}</span>
          </div>
        ))}{' '}
      </div>
    </div>
  )
}

const DataChart = ({ data }) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0)
  return (
    <PieChart className='mx-auto' width={150} height={150}>
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
