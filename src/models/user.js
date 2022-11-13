import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    user_email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const User = mongoose.model('user', UserSchema)

export default User
