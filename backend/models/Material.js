const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: String, // e.g., 'Science', 'Mathematics'
  },
  
  fileUrl: {
    type: String,  // URL to the uploaded book file (e.g., PDF)
    required: true,
  },
  coverImage: {
    url: String,  // URL to the front cover image
    filename: String,  // Filename of the uploaded image
  },
 
  views: {
    type: Number,
    default: 0,
  },
  downloads: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Material = mongoose.model("Material", materialSchema);
module.exports = Material;
