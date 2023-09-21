'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Header=()=>{
    
    const session = useSession()
    
    return(
        <div className='bg-[#131348] p-10 md:p-5 sticky top-0'>
            
            <h1 className='text-3xl text-white text-center font-bold'> To Do List </h1>
            <h1 className='text-xl text-white text-center mt-5'> { session?.data?.user?.name } </h1>

            <Image src={ session.data ? session?.data?.user?.image :'/next.svg' } alt='' height={60} width={60} className="rounded-full bg-[white] absolute right-5 top-10"/>

        </div>
    )
}

export default Header