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
// router.put('/update/organization', updateOrganization)
// router.put('/:organizationId/block/user/:userId', blockUser)
// router.put('/:organizationId/unblock/user/:userId', unblockUser)
// router.put('/:organizationId/block/organization/:organizationId', blockOrganization)
// router.put('/:organizationId/unblock/organization/:organizationId', unblockOrganization)
// router.put('/update/event/:eventId', updateEvent)
// router.put('/update/event/:eventId/interested/user/:userId', updateInterestedUser)
// router.put('/update/event/:eventId/not-interested/user/:userId', updateNotInterestedUser)
// router.put('/update/event/:eventId/interested/organization/:organizationId', updateInterestedOrganization)
// router.put('/update/event/:eventId/not-interested/organization/:organizationId', updateNotInterestedOrganization)
// router.put('/update/event/:eventId/volunteer/user/:userId', updateVolunteerUser)
// router.put('/update/event/:eventId/unvolunteer/user/:userId', updateUnvolunteerUser)
// router.put('/update/event/:eventId/volunteer/organization/:organizationId', updateVolunteerOrganization)
// router.put('/update/event/:eventId/unvolunteer/organization/:organizationId', updateUnvolunteerOrganization)
// router.put('/update/event/:eventId/donate/user/:userId', updateDonateUser)
// router.put('/update/event/:eventId/donate/organization/:organizationId', updateDonateOrganization)

// router.delete('/delete/organization/:organizationId', deleteOrganization)
// router.delete('/delete/event/:eventId', deleteEvent)
// router.delete('/delete/story/:storyId', deleteStory)
// router.put('/update/story', updateStory)

export default router
