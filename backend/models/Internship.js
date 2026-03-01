const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true
    },
    stipend: {
      type: Number,
      required: [true, "Stipend is required"]
    },
    duration: {
      type: String,
      required: [true, "Duration is required"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Internship", internshipSchema);