import Organization from '../models/organization'

export const addOrganizationRepository = async (data) => {
  try {
    const result = await new Organization(data).save()
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
