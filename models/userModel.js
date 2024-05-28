import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please type your username: '],
		},
		email: {
			type: String,
			required: [true, 'Please type your email: '],
		},
		psw: {
			type: String,
			required: [true, 'Please, type your password: '],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('User', userSchema)
