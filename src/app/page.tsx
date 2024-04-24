import Dashboard from '@/components/Dashboard'
import Sidebar from '../components/Sidebar'
import Highlights from '@/components/Highlights'

export default function Home() {
  return (
    <main className='flex w-screen min-h-screen m-0'>
      <Sidebar />
      <Dashboard />
      <Highlights />
    </main>
  )
}
