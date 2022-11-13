import mongoose from 'mongoose'

const InstitutionSchema = new mongoose.Schema(
  {
    institution_name: {
      type: String,
      required: true,
    },
    institution_description: {
      type: String,
      required: true,
    },
    institution_contact_no: {
      type: String,
      required: true,
    },
    institution_email: {
      type: String,
      required: true,
    },
    institution_password: {
      type: String,
      required: true,
    },
    institution_address: {
      type: String,
      required: false,
    },
    institution_website: {
      type: String,
      required: false,
    },
    institution_logo: {
      type: String,
      required: false,
    },
    institution_banner: {
      type: String,
      required: false,
    },
    campaigns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campaign',
      },
    ],
    institution_admin: {
      type: String,
      required: true,
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

const Institution = mongoose.model('institution', InstitutionSchema)

export default Institution
