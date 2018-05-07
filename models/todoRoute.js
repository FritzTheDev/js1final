//import mongoose
import { mongoose } from 'mongoose';

//define Schema
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        body: {type: String, required: true, max: 30},
        checked_off: {type: String, default: Boolean}
    }
)