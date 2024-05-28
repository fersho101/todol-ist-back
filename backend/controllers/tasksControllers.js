import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel'
import chalk from 'chalk'

const getTasks = asyncHandler(async (req, res) => {
	const tasks = await Task.find()

	res.status(200).json(tasks)
})

const getTaskById = asyncHandler(async (req, res) => {
	const task = await Task.findById(req.params.taskId)
	res.status(200).json(task)
})

const createTask = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error(chalk.red("The task doesn't have text."))
	}
	const task = await Task.create({
		text: req.body.text,
	})
	res.status(201).json(task)
})

const updateTask = asyncHandler(async (req, res) => {
	const task = await Tarea.findById(req.params.id)
	if (!task) {
		res.status(404)
		throw new Error(chalk.redBright("The requested task doesn't exist."))
	}
	const taskUpdated = await Tarea.finByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
	res.status(200).json(taskUpdated)
})

const deleteTask = asyncHandler(async (req, res) => {
	const task = await Task.findByIDAndDelete(req.params.id)
	if (!task) {
		res.status(400)
		throw new Error(chalk.bgRed("The requested task doesn't exist."))
	}
})
export { getTasks, getTaskById, createTask, updateTask, deleteTask }
