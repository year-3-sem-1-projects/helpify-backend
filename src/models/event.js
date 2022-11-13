import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
  {
    event_title: {
      type: String,
      required: true,
    },
    event_description: {
      type: String,
      required: true,
    },
    interested_user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    interested_organization: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
      },
    ],
    volunteers_user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    volunteers_organization: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
      },
    ],
    event_venue: {
      type: String,
      required: true,
    },
    event_website: {
      type: String,
      required: false,
    },
    event_start_date: {
      type: String,
      required: true,
    },
    event_end_date: {
      type: String,
      required: true,
    },
    event_organizer: {
      type: Object,
      required: true,
    },
    event_image: {
      type: String,
      required: false,
    },
    share_count: {
      type: Number,
      required: false,
    },
    donaters_user: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        amount: {
          type: Number,
          required: false,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],
    donaters_organization: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'organization',
        },
        amount: {
          type: Number,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],
    event_stories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'story',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Event = mongoose.model('event', EventSchema)

export default Event
/*
donations_collected: {
  item_name: "",
  item_image: "",
  item_condition: "good|fair|poor",
}
event_stories : {
  story_id: "",
}
*/
