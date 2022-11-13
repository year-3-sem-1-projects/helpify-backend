import mongoose from 'mongoose'

const CampaignSchema = new mongoose.Schema(
  {
    campaign_title: {
      type: String,
      required: true,
    },
    campaign_description: {
      type: String,
      required: true,
    },
    campaign_goal: {
      type: Number,
      required: true,
    },
    campaign_start_date: {
      type: String,
      required: true,
    },
    campaign_end_date: {
      type: String,
      required: true,
    },
    campaign_image: {
      type: String,
      required: true,
    },
    donations: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        amount: {
          type: Number,
          required: false,
        },
      },
    ],
    campaign_stories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'story',
      },
    ],
    campaign_institution: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'institution',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Campaign = mongoose.model('campaign', CampaignSchema)

export default Campaign
