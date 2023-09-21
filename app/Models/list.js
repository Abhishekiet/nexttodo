import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: String,
    email: String
})

export const List = mongoose.models.List || mongoose.model( 'List', listSchema )