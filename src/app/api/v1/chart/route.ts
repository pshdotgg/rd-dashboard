export async function GET() {
  const data = [
    {
      name: 'Orders',
      data: [
        { name: 'Upcoming', value: 150 },
        { name: 'Ongoing', value: 100 },
        { name: 'Completed', value: 250 },
      ],
    },
    {
      name: 'Trips',
      data: [
        { name: 'Upcoming', value: 350 },
        { name: 'Ongoing', value: 720 },
        { name: 'Completed', value: 150 },
      ],
    },
    {
      name: 'Revenue',
      data: [
        { name: 'Upcoming', value: 140 },
        { name: 'Ongoing', value: 50 },
        { name: 'Completed', value: 150 },
      ],
    },
    {
      name: 'Expenses',
      data: [
        { name: 'Upcoming', value: 520 },
        { name: 'Ongoing', value: 1100 },
        { name: 'Completed', value: 450 },
      ],
    },
  ]

  return Response.json(data)
}
