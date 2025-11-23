const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  answers: [String],
  recommendedTrek: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizResult', quizSchema);
