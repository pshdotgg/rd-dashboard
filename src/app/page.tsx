import Dashboard from '@/components/Dashboard'
import Sidebar from '../components/Sidebar'
import Highlights from '@/components/Highlights'

export default function Home() {
  return (
    <main className='flex w-[calc(100vw-1px)] h-screen m-0'>
      <Sidebar />
      <Dashboard />
      <Highlights />
    </main>
  )
}
