const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  questionId: { type: Number, required: true },
  questionText: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctOption: { type: String, enum: ["A", "B", "C", "D"], required: true },
});

module.exports = mongoose.model("Question", QuestionSchema);
