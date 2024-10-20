const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  phonenumber: { type: Number },
  photo: {
    url: String,
    filename: String,
  },
  password:{
    type:String
    },
  // Tracks the resources uploaded by the user
  uploadedMaterials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Material',
    },
  ],
  // Tracks the bookmarked resources
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Material',
    },
  ],
  // Tracks the user preferences for recommendations (e.g., categories they prefer)
  preferences: [
    {
      type: String, // e.g., 'Mathematics', 'Science'
    },
  ],
  // Tracks user activity (views, ratings) for recommendation purposes
  activityLog: [
    {
      materialId: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
      viewedAt: { type: Date },
      rating: { type: Number }, // rating by this user for a particular material
    },
  ],

}, { timestamps: true });

module.exports=mongoose.model("User",UserSchema);
