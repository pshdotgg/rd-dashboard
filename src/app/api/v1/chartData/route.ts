export async function GET() {
  const data = [
    {
      name: 'Orders',
      data: [
        { name: 'Upcoming', value: 50 },
        { name: 'Ongoing', value: 100 },
        { name: 'Completed', value: 50 },
      ],
    },
    {
      name: 'Trips',
      data: [
        { name: 'Upcoming', value: 50 },
        { name: 'Ongoing', value: 100 },
        { name: 'Completed', value: 50 },
      ],
    },
    {
      name: 'Revenue',
      data: [
        { name: 'Upcoming', value: 50 },
        { name: 'Ongoing', value: 100 },
        { name: 'Completed', value: 50 },
      ],
    },
    {
      name: 'Expenses',
      data: [
        { name: 'Upcoming', value: 50 },
        { name: 'Ongoing', value: 100 },
        { name: 'Completed', value: 50 },
      ],
    },
  ]

  return Response.json(data)
}
