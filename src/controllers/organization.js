import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { getOrganizationService, addOrganizationService } from '../services/organization'

// export const getUsers = asyncHandler(async (req, res) => {
//   // const result = await getUsersService()
//   if (!result) return makeResponse({ res, status: 500, message: 'User Retrieval failed' })
//   if (result.status) return makeResponse({ res, ...result })
//   return makeResponse({ res, data: result, message: 'User Retrieval Successful.' })
// })

export const addOrganization = asyncHandler(async (req, res) => {
  const result = await addOrganizationService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Organization Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Organization Creation Successful.' })
})
