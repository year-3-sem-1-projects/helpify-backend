import { Router } from 'express'
import {
  getOrganizations,
  getOrganizationById,
  getEvents,
  getOrganizationEvents,
  getOrganizationEvent,
  addOrganization,
  addEvent,
  addStory,
  deleteOrganization,
  deleteEvent,
  deleteStory,
  updateOrganization,
  updateEvent,
  updateStory,
} from '../controllers/organization'

const router = Router()

router.get('/', getOrganizations)
router.get('/events', getEvents)
router.get('/event/:eventId', getOrganizationEvent)
router.get('/:organizationId', getOrganizationById)
router.get('/:organizationId/events', getOrganizationEvents)
router.post('/add/organization', addOrganization)
router.post('/add/event/:organizationId', addEvent)
router.post('/add/story/:eventId', addStory)
// router.delete('/delete/organization/:organizationId', deleteOrganization)
// router.delete('/delete/event/:eventId', deleteEvent)
// router.delete('/delete/story/:storyId', deleteStory)
// router.put('/update/organization', updateOrganization)
// router.put('/update/event', updateEvent)
// router.put('/update/story', updateStory)

export default router
