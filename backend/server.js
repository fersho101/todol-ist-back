import express from 'express'
import { config } from 'dotenv'
import chalk from 'chalk'
import taskRouter from './routes/taskRoutes'
import userRouter from './routes/userRoutes'
import connectDB from './config/db'

config()
const port = process.env.PORT || 5000
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/task', taskRouter)
app.use('/api/user', userRouter)

app.listen(port, () =>
	console.log(chalk.cyanBright.underline(`Server listen on port ${port}`))
)
