import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  createCampaignService,
  getCampaignsService,
  getCampaignByIdService,
  updateCampaignService,
  deleteCampaignService,
  createStoryService,
  getStoriesService,
  getStoryByIdService,
  updateStoryService,
  deleteStoryService,
} from '../services/institution'

export const createCampaign = asyncHandler(async (req, res) => {
  const result = await createCampaignService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Campaign Creation Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Campaign Creation Successful.' })
})

export const getCampaigns = asyncHandler(async (req, res) => {
  const result = await getCampaignsService()
  if (!result) return makeResponse({ res, status: 500, message: 'Campaign Retrieval Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Campaign Retrieval Successful.' })
})

export const getCampaignById = asyncHandler(async (req, res) => {
  const result = await getCampaignByIdService(req.params.campaignId)
  if (!result) return makeResponse({ res, status: 500, message: 'Campaign Retrieval Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Campaign Retrieval Successful.' })
})

export const updateCampaign = asyncHandler(async (req, res) => {
  const result = await updateCampaignService(req.params.campaignId, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Campaign Update Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Campaign Update Successful.' })
})

export const deleteCampaign = asyncHandler(async (req, res) => {
  const result = await deleteCampaignService(req.params.campaignId)
  if (!result) return makeResponse({ res, status: 500, message: 'Campaign Deletion Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Campaign Deletion Successful.' })
})

export const createStory = asyncHandler(async (req, res) => {
  const result = await createStoryService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Story Creation Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Story Creation Successful.' })
})

export const getStories = asyncHandler(async (req, res) => {
  const result = await getStoriesService()
  if (!result) return makeResponse({ res, status: 500, message: 'Story Retrieval Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Story Retrieval Successful.' })
})

export const getStoryById = asyncHandler(async (req, res) => {
  const result = await getStoryByIdService(req.params.storyId)
  if (!result) return makeResponse({ res, status: 500, message: 'Story Retrieval Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Story Retrieval Successful.' })
})

export const updateStory = asyncHandler(async (req, res) => {
  const result = await updateStoryService(req.params.storyId, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Story Update Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Story Update Successful.' })
})

export const deleteStory = asyncHandler(async (req, res) => {
  const result = await deleteStoryService(req.params.storyId)
  if (!result) return makeResponse({ res, status: 500, message: 'Story Deletion Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Story Deletion Successful.' })
})