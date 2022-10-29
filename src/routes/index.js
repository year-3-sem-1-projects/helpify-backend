import express from 'express'
import userRouter from './user'
import jobRouter from './job'

const router = express.Router()

router.use('/users', userRouter)
router.use('/jobs', jobRouter)

export default router
