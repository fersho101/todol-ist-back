import chalk from 'chalk'
import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI)
		console.log(
			chalk.greenBright(
				`(MongoDB connected on port: ${connect.connection.host})`
			)
		)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}
export default connectDB
