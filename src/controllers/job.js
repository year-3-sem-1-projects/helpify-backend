import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addJob,
  deleteJob,
  updateJobService,
  getMyJobsService,
  getAllJobsService,
} from '../services/job'

export const postJob = asyncHandler(async (req, res) => {
  const result = await addJob(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot add your job, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Job Added Successfully!' })
})

export const removeJob = asyncHandler(async (req, res) => {
  const result = await deleteJob(req.params)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot delete your job, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Job Deleted Successfully!' })
})

export const updateJob = asyncHandler(async (req, res) => {
  const result = await updateJobService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot edit your job, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Job Edited Successfully!' })
})

export const getMyJobs = asyncHandler(async (req, res) => {
  const result = await getMyJobsService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your job, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Jobs Retrieved Successfully!' })
})

export const getAllJobs = asyncHandler(async (req, res) => {
  const result = await getAllJobsService()
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your jobs, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, data: result, message: 'Jobs Retrieved Successfully!' })
})
