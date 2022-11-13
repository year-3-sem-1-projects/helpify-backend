import Campaign from '../models/campaigns'
import Story from '../models/story'
import Institution from '../models/institution'

export const createCampaignRepository = async (data) => {
  try {
    const result = await new Campaign(data).save()
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getCampaignsRepository = async () => {
  try {
    const result = await Campaign.find()
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getCampaignByIdRepository = async (campaignId) => {
  try {
    const result = await Campaign.findById(campaignId)
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const updateCampaignRepository = async (campaignId, data) => {
  try {
    const result = await Campaign.findByIdAndUpdate(campaignId, data, { new: true })
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const deleteCampaignRepository = async (campaignId) => {
  try {
    const result = await Campaign.findByIdAndDelete(campaignId)
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const createStoryRepository = async (data) => {
  try {
    const result = await new Story(data).save()
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getStoriesRepository = async () => {
  try {
    const result = await Story.find()
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getStoryByIdRepository = async (storyId) => {
  try {
    const result = await Story.findById(storyId)
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const updateStoryRepository = async (storyId, data) => {
  try {
    const result = await Story.findByIdAndUpdate(storyId, data, { new: true })
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const deleteStoryRepository = async (storyId) => {
  try {
    const result = await Story.findByIdAndDelete(storyId)
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getInstitutionByIdRepository = async (institutionId) => {
  try {
    const result = await Institution.findById(institutionId)
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const updateInstitutionRepository = async (institutionId, data) => {
  try {
    const result = await Institution.findByIdAndUpdate(institutionId, data, { new: true })
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const deleteInstitutionRepository = async (institutionId) => {
  try {
    const result = await Institution.findByIdAndDelete(institutionId)
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getAllInstitutionsRepository = async () => {
  try {
    const result = await Institution.find()
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const createInstitutionRepository = async (data) => {
  try {
    const result = await new Institution(data).save()
    return result
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}


