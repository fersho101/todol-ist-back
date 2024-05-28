import express from 'express'
import {
	getTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
} from '../../controllers/tasksControllers'

const taskRouter = express.Router()

router.get('/api/task', getTasks)

router.get('/api/task:id', getTaskById)

router.post('/api/task', createTask)

router.put('/api/task:id', updateTask)

router.get('/api/task:id', deleteTask)

export default taskRouter
