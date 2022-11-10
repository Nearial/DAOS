import * as mongoose from 'mongoose';

export const profileSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    about: String
})