import express from 'express'
import userRouter from './user'
import organizationRouter from './organization'
import jobRouter from './job'

const router = express.Router()

router.use('/user', userRouter)
router.use('/organization', organizationRouter)
router.use('/jobs', jobRouter)

export default router
