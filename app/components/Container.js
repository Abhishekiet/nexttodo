'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Card from '@/app/components/Card'
import { FaSpinner } from "react-icons/fa";

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
    
    if( data ) {
    return(
        <div className='flex flex-col items-center mt-12 h-[40vh] overflow-scroll'>
            {
                data?.map( a => <Card id={a._id} title={a.title} key ={a._id}  />  )
            }
        </div>
    )
    }
    else{
        return(
            <div className='flex flex-col items-center justify-center mt-12 animate-spin'>
                <FaSpinner size={50}/>
            </div>
        )
    }
}

export default Container
