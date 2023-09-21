'use client'

import axios from "axios"
import { MdDelete } from "react-icons/md";

const Card=( {title,id} )=>{
    return(
        <div className="flex justify-between shadow-xl m-3 w-[80%] p-4">
            <h1 className=" font-bold"> {title} </h1>
            <button onClick={ async()=> await axios.delete( `/api/todolist/${id}` ) }> <MdDelete className="text-[red]" size={25}/> </button>
        </div>
    )
}

export default Card
