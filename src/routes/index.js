import express from 'express'
import userRouter from './user'
import organizationRouter from './organization'

const router = express.Router()

router.use('/user', userRouter)
router.use('/organization', organizationRouter)

export default router
