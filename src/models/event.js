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
    interested_people: {
      type: Array,
      required: false,
    },
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
    funds_raised: {
      type: Number,
      required: false,
    },
    donations_collected: {
      type: Object,
      required: false,
    },
    event_status: {
      type: String,
      required: true,
    },
    event_stories: {
      type: Array,
      required: false,
    },
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
