import mongoose from 'mongoose'

const StorySchema = new mongoose.Schema(
  {
    story_title: {
      type: String,
      required: true,
    },
    story_description: {
      type: String,
      required: true,
    },
    story_image: {
      type: String,
      required: false,
    },
    like_count: {
      type: Number,
      required: false,
    },
    dislike_count: {
      type: Number,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Story = mongoose.model('story', StorySchema)

export default Story
