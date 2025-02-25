const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FormData", FormDataSchema);
