import {
  createCampaignRepository,
  getCampaignByIdRepository,
  getCampaignsRepository,
  updateCampaignRepository,
  deleteCampaignRepository,
  createStoryRepository,
  getStoryByIdRepository,
  getStoriesRepository,
  updateStoryRepository,
  deleteStoryRepository,
  createInstitutionRepository,
  getInstitutionByIdRepository,
  getAllInstitutionsRepository,
  updateInstitutionRepository,
  deleteInstitutionRepository,
} from '../repository/institution'

export const createCampaignService = async (data) => {
  return await createCampaignRepository(data)
}

export const getCampaignsService = async () => {
  return await getCampaignsRepository()
}

export const getCampaignByIdService = async (campaignId) => {
  return await getCampaignByIdRepository(campaignId)
}

export const updateCampaignService = async (campaignId, data) => {
  return await updateCampaignRepository(campaignId, data)
}

export const deleteCampaignService = async (campaignId) => {
  return await deleteCampaignRepository(campaignId)
}

export const createStoryService = async (data) => {
  return await createStoryRepository(data)
}

export const getStoriesService = async () => {
  return await getStoriesRepository()
}

export const getStoryByIdService = async (storyId) => {
  return await getStoryByIdRepository(storyId)
}

export const updateStoryService = async (storyId, data) => {
  return await updateStoryRepository(storyId, data)
}

export const deleteStoryService = async (storyId) => {
  return await deleteStoryRepository(storyId)
}

export const createInstitutionService = async (data) => {
  return await createInstitutionRepository(data)
}

export const getAllInstitutionsService = async () => {
  return await getAllInstitutionsRepository()
}

export const getInstitutionByIdService = async (institutionId) => {
  return await getInstitutionByIdRepository(institutionId)
}

export const updateInstitutionService = async (institutionId, data) => {
  return await updateInstitutionRepository(institutionId, data)
}

export const deleteInstitutionService = async (institutionId) => {
  return await deleteInstitutionRepository(institutionId)
}
