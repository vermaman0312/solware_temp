import Header from '@/components/headers';
import Sidebar from '@/components/sidebar';
import MuiCard from '@/ui/card';
import { cn } from '@/utils/cn';
import React from 'react'

const AuthorizedLayout = ({ children }: { children: React.ReactNode }) => {
  const isDashboard = false;
  return (
    <div className="w-screen h-screen relative flex min-h-screen flex-col bg-background bg-black">
      <Header />
      <div className={`flex flex-1 ${isDashboard ? 'w-full' : 'w-[99%] rounded-tr-2xl'}`}>
        <main className={cn(`w-full h-full flex-1 transition-all duration-300 ease-in-out bg-white rounded-tr-2xl flex flex-col items-start justify-start`)}>
          <MuiCard cardClassName='border-none rounded-tr-2xl' contentClassName='rounded-tr-2xl'>
            <div className='w-full h-10 flex items-center justify-between'>
              <div className='border border-black w-32 h-full'></div>
              <div className='border border-black w-32 h-full'></div>
              <div className='border border-black w-32 h-full'></div>
            </div>
          </MuiCard>
          <div className='w-full h-full'>
            {children}
          </div>
        </main>
        {isDashboard && <Sidebar />}
      </div>
    </div>
  )
}

export default AuthorizedLayout;