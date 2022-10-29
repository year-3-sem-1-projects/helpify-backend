import { Router } from 'express'

import { postJob, removeJob, updateJob, getMyJobs, getAllJobs } from '../controllers/job'

const router = Router()

router.post('/add', postJob)
router.delete('/delete/:jobId', removeJob)
router.put('/edit', updateJob)
router.get('/get/my-jobs', getMyJobs)
router.get('/get/all-jobs', getAllJobs)

export default router
