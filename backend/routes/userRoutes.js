import express from 'express'
import {login, register, data} from '../../controllers/userControllers'


const userRouter = express.Router();

router.post('/login', login)
router.post('/register', register)
router.get('/data', data)

export default userRouter