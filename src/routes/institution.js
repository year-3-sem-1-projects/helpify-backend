import { Router } from 'express'
import {
  getCampaignById,
  getCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getStoryById,
  getStories,
  createStory,
  updateStory,
  deleteStory,
  getInstitutionById,
  getAllInstitutions,
  createInstitution,
  updateInstitution,
  deleteInstitution,
} from '../controllers/institution'

const router = Router()

router.get('/campaign/:campaignId', getCampaignById)
router.get('/campaigns', getCampaigns)
router.post('/campaigns/create', createCampaign)
router.put('/campaigns/update/:campaignId', updateCampaign)
router.delete('/campaigns/delete/:campaignId', deleteCampaign)

router.get('/story/:storyId', getStoryById)
router.get('/stories', getStories)
router.post('/stories/create', createStory)
router.put('/stories/update/:storyId', updateStory)
router.delete('/stories/delete/:storyId', deleteStory)

router.get('/all-institutions', getAllInstitutions)
router.get('/:institutionId', getInstitutionById)
router.post('/create', createInstitution)
router.put('/update/:institutionId', updateInstitution)
router.delete('/delete/:institutionId', deleteInstitution)

export default router