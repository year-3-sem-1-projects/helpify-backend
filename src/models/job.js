import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    jobReq: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' },
  },
)

const Job = mongoose.model('Job', JobSchema)

export default Job
