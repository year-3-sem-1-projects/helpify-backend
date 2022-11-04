import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addOrganizationService,
  addEventService,
  getOrganizationsService,
  getOrganizationByIdService,
  getEventsService,
  getOrganizationEventsService,
  getOrganizationEventService,
  addStoryService,
} from '../services/organization'

export const addOrganization = asyncHandler(async (req, res) => {
  const result = await addOrganizationService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Organization Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Organization Creation Successful.' })
})

export const addEvent = asyncHandler(async (req, res) => {
  const result = await addEventService(req.params, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Event Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Event Creation Successful.' })
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

export const getEvents = asyncHandler(async (req, res) => {
  const result = await getEventsService()
  if (!result) return makeResponse({ res, status: 500, message: 'Events Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Events Retrieval Successful.' })
})

export const getOrganizationEvents = asyncHandler(async (req, res) => {
  const result = await getOrganizationEventsService(req.params.organizationId)
  if (!result)
    return makeResponse({ res, status: 500, message: 'Organization Events Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Organization Events Retrieval Successful.' })
})

export const getOrganizationEvent = asyncHandler(async (req, res) => {
  const result = await getOrganizationEventService(req.params.eventId)
  if (!result) return makeResponse({ res, status: 500, message: 'Event Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Event Retrieval Successful.' })
})

export const addStory = asyncHandler(async (req, res) => {
  console.log(req.body, req.params)
  const result = await addStoryService(req.params, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Story Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Story Creation Successful.' })
})
