import {
  addOneJob,
  deleteOneJob,
  updateJobRepository,
  getMyJobsRepository,
  getAllJobsRepository,
} from '../repository/job'

export const addJob = async (jobContent) => {
  const job = await addOneJob(jobContent)
  if (!job) return false
  console.log('service', job)
  return job
}

export const deleteJob = async (jobId) => {
  const job = await deleteOneJob(jobId)
  if (!job) return false
  console.log('service', job)
  return job
}

export const updateJobService = async (jobContent) => {
  console.log('jobContent is this: ', jobContent)
  const job = await updateJobRepository({ _id: jobContent._id }, jobContent)
  if (!job) return false
  console.log('service', job)
  return job
}

export const getMyJobsService = async (userId) => {
  console.log('userid', userId)
  const jobs = await getMyJobsRepository(userId)
  if (!jobs) return false
  console.log('service', jobs)
  return jobs
}

export const getAllJobsService = async () => {
  const jobs = await getAllJobsRepository()
  if (!jobs) return false
  console.log('service', jobs)
  return jobs
}
