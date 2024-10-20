const mongoose = require('mongoose');

const recommendationLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  materialId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Material',
  },
  interactionType: {
    type: String,
    enum: ['view', 'download', 'rate'], // Types of interactions
  },
  
}, { timestamps: true });
recommendationLogSchema.index({ userId: 1, materialId: 1, interactionType: 1 });


const RecommendationLog = mongoose.model('RecommendationLog', recommendationLogSchema);
module.exports = RecommendationLog;
