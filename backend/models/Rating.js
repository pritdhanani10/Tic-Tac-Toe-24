const ratingSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    
  }, { timestamps: true });
  

  ratingSchema.index({ userId: 1, materialId: 1 });
  module.exports = ratingSchema;
  