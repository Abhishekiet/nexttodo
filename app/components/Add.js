'use client'
import { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

const Add=()=>{ 

    const session = useSession()
    const [input, setInput] = useState('')
    
    const addfun=async()=>{
        await axios.post( '/api/todolist', { title:input, email:session.data.user.email } )
        setInput('')
    }

    return(
        <div className="flex justify-center">
    
            <div className="flex w-[90%] flex-col mt-7 items-center justify-center gap-4">
                <input className="w-[90%] h-14 shadow-2xl border-[2px] rounded-xl border-blue-900" onChange={ (e)=> setInput(e.target.value) } value={input}/>
                <button onClick={addfun} className="bg-[blue] text-xl font-bold rounded-2xl p-4"> Add ToDo </button>
            </div>
    
        </div>
    )
}

export default Add