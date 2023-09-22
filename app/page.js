'use client'

import Add from "./components/Add"
import Container from "./components/Container"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const App=()=>{

  const session = useSession()
  const router = useRouter()

  if( session.status === 'unauthenticated' ){
    router.push("/signin")
  }

  else{
    return(
      <div className="min-h-[76vh]">
  
        <Add />
        <h1 className="text-3xl font-bold text-center underline underline-offset-4 mt-6"> Your List Items </h1>
        <Container />
      </div>
    )
  }
  
}

export default App
