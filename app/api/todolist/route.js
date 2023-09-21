import { List } from '@/app/Models/list'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export const POST=async( req )=>{
    const data = await req.json()
    
    await mongoose.connect( process.env.MongoDB )
    await List.create( data )

    return NextResponse.json( 'added successfully' )
}
