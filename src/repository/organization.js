import Organization from '../models/organization'
import Event from '../models/event'
import Story from '../models/story'

export const addOrganizationRepository = async (data) => {
  try {
    const result = await new Organization(data).save()
    return result
  } catch (error) {
    return { status: error.status, message: error.message }
  }
}

export const addEventRepository = async (organizationId, data) => {
  try {
    const { _id } = await new Event(data).save()

    const result = await Organization.findByIdAndUpdate(
      organizationId,
      { $push: { events: _id } },
      { new: true },
    )
    return result
  } catch (error) {
    return { status: error.status, message: error.message }
  }
}

export const getOrganizationsRepository = async () => {
  try {
    const result = await Organization.find()
    return result
  } catch (error) {
    return { status: error.status, message: error.message }
  }
}

export const getOrganizationByIdRepository = async (organizationId) => {
  try {
    const result = await Organization.findById(organizationId)
    return result
  } catch (error) {
    return { status: error.status, message: error.message }
  }
}

export const getEventsRepository = async () => {
  try {
    const result = await Event.find()
    return result
  } catch (error) {
    return { status: error.status, message: error.message }
  }
}

export const getOrganizationEventsRepository = async (organizationId) => {
  try {
    const { events } = await Organization.findById(organizationId).populate('events')
    return events
  } catch (error) {
    return { status: error.status, message: error.message }
  }
}
