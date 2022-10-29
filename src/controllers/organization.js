import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addOrganizationService,
  getOrganizationsService,
  getOrganizationByIdService,
} from '../services/organization'

export const addOrganization = asyncHandler(async (req, res) => {
  const result = await addOrganizationService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Organization Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Organization Creation Successful.' })
})

export const getOrganizations = asyncHandler(async (req, res) => {
  const result = await getOrganizationsService()
  if (!result) return makeResponse({ res, status: 500, message: 'Organizations Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Organizations Retrieval Successful.' })
})

export const getOrganizationById = asyncHandler(async (req, res) => {
  const result = await getOrganizationByIdService(req.params.organizationId)
  if (!result) return makeResponse({ res, status: 500, message: 'Organization Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Organization Retrieval Successful.' })
})
