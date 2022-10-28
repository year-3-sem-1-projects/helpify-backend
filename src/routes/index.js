import express from 'express'
import userRouter from './user'
import organizationRouter from './organization'

const router = express.Router()

router.use('/users', userRouter)
router.use('/organizations', organizationRouter)

export default router
