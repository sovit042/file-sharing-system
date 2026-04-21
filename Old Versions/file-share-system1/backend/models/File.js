const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  pin: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600  // auto delete after 1 hour
  }
});

module.exports = mongoose.model("File", fileSchema);