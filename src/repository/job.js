import Job from '../models/job'
import User from '../models/user'

export const addOneJob = async (jobContent) => {
  const job = await new Job(jobContent).save()
  if (!job) return null
  console.log('repository', job)
  return job
}

export const deleteOneJob = async (jobId) => {
  console.log('repository', jobId.jobId)
  const job = await Job.deleteOne({ _id: jobId.jobId })
  if (!job) return null
  console.log('repository', job)
  return job
}

export const updateJobRepository = async (filters, data) => {
  const job = await Job.updateOne(filters, data)
  if (!job) return null
  console.log('repository', job)
  return job
}

export const getMyJobsRepository = async ({ user_email }) => {
  const jobs = await Job.find({ user_email: user_email }).sort({ created_at: -1 })
  if (!jobs) return null
  console.log('repository', jobs)
  return jobs
}

export const getAllJobsRepository = async () => {
  const jobs = await Job.find().sort({ created_at: -1 })
  if (!jobs) return null
  console.log('repository', jobs)
  return jobs
}
