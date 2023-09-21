'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Card from '@/app/components/Card'

const Container=()=>{
    
    const [ data, setData ] = useState()
    const session = useSession()
    
    useEffect( ()=>{
        const fetchdata=async()=>{
            const res = await axios.get(  `/api/todolist/${session?.data?.user?.email}` )
            setData( res.data )
        }

        fetchdata()
    }, )
    
    
    return(
        <div className='flex flex-col items-center mt-12'>
            {
                data?.map( a => <Card id={a._id} title={a.title} key ={a._id}  />  )
            }
        </div>
    )
}

export default Container