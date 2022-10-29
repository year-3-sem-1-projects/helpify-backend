import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const User = mongoose.model('user', UserSchema)

export default User
