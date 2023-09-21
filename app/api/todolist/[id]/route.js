import { List } from '@/app/Models/list'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export const GET=async( req, {params} )=>{

    await mongoose.connect( process.env.MongoDB )
    const data = await List.find( { email: params.id } )
    return NextResponse.json( data )
}

export const DELETE=async( req, {params} )=>{
    
    await mongoose.connect( process.env.MongoDB )
    await List.deleteOne( { _id: params.id } )
    return NextResponse.json( {action:'Deleted'} )
}