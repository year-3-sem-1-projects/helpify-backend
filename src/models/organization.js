import mongoose from 'mongoose'

const OrganizationSchema = new mongoose.Schema(
  {
    organization_name: {
      type: String,
      required: true,
    },
    organization_description: {
      type: String,
      required: true,
    },
    organization_contact_no: {
      type: String,
      required: true,
    },
    organization_email: {
      type: String,
      required: true,
    },
    organization_password: {
      type: String,
      required: true,
    },
    organization_address: {
      type: String,
      required: false,
    },
    organization_website: {
      type: String,
      required: false,
    },
    organization_logo: {
      type: String,
      required: false,
    },
    organization_banner: {
      type: String,
      required: false,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',
      },
    ],
    organization_admin: {
      type: String,
      required: true,
    },
    blocked_organizations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
      },
    ],
    blocked_users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    rating: {
      type: Number,
      required: false,
    },
    approved_status: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Organization = mongoose.model('organization', OrganizationSchema)

export default Organization
