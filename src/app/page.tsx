import Dashboard from '@/components/Dashboard'
import Navbar from '../components/Navbar'
import Highlights from '@/components/Highlights'
import MobileNavbar from '@/components/MobileNavbar'

export default function Home() {
  return (
    <main className='flex max-md:flex-col max-w-screen min-h-screen m-0'>
      <Navbar />
      <MobileNavbar />
      <Dashboard />
      <Highlights />
    </main>
  )
}
