import mongoose from 'mongoose'

export const taskSchema = mongoose.Schema({
    text: {
        type: String,
        required:[true, 'Please type the task: ']
    }
}, {
    timestamps: true,
})

