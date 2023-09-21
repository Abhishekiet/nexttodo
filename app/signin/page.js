'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const signInPage=()=>{ 

    const session = useSession()
    const router = useRouter()

    if( session.status === 'unauthenticated' )
    {
    return(
        <div className='min-h-[76vh] flex justify-center items-center'>
            <span className='flex gap-1 bg-[blue] items-center justify-center p-4'>
                <Image src="/google.png" alt="" height={50} width={50} className='rounded-full'/>
            <button onClick={ async()=> await signIn('google') } className=' text-white p-4 h-3 flex items-center'> 
               <h1 className='text-xl'> Sign In With Google </h1> 
            </button>
            </span>
        </div>
    )
    }
    if( session.status === 'loading' ){
        return <div className='min-h-[76vh] flex items-center justify-center'> <h1 className='text-3xl font-bold text-center'> Loading ... </h1> </div>
    }

    else{
        return <div className='min-h-[76vh] flex items-center justify-center'> <button className='p-4 bg-[blue] text-white font-bold text-2xl' onClick={()=> router.push("/") }> Show site </button> </div>
    }
}

export default signInPage
