import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		text: {
			type: String,
			required: [true, 'Please type the task: '],
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('Task', taskSchema)