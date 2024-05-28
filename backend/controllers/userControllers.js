import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import chalk from 'chalk'
import User from '../models/userModel'

const login = asyncHandler(async (req, res) => {
	const { email, psw } = req.body

	const user = await User.findById({ email })

	if (user && (await bcryptjs.compare(psw, user.psw))) {
		res.status(200).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user.id),
		})
	} else {
		res.status(400).json({
			msg: chalk.red.underline('Bad credentials'),
			error,
		})
	}
})

const register = asyncHandler(async (req, res) => {
	const { name, email, psw } = req.body
	if (!name || !email || !psw) {
		res.status(400).json({
			msg: chalk.red.underline('Bad credentials'),
			error,
		})
	}

	const userExist = await user.findOne8({ email })
	if (userExist) {
		res.status(400).json({
			msg: chalk.red.underline('Email already registred'),
			error,
		})
	}
	const salt = await bcryptjs.genSalt(10)
	const hashedPsw = await bcryptjs.hash(psw, salt)

	const user = await user.create({
		name,
		email,
		psw: hashedPsw,
	})

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			psw: user.psw,
		})
	} else {
		res.status(400).json({
			msg: chalk.red('error creating user'),
			error,
		})
	}
})

const data = asyncHandler(async (req, res) => {})

const generateToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

export { login, register, data }
