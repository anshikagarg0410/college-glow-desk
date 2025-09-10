import mongoose from "mongoose";
const { Schema } = mongoose;

const ResourceSchema = new Schema({
  subject: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "notes-pdfs",
      "tutorial-sheets",
      "pyqs",
      "reference-books",
      "video-lectures",
    ],
  },
  unit: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    // This is correct: required only if it's NOT a video lecture
    required: function () {
      return this.type !== "video-lectures";
    },
  },
  videoUrl: {
    type: String,
    // This is also correct: required only if it IS a video lecture
    required: function () {
      return this.type === "video-lectures";
    },
  },
  // --- CRITICAL: Add this field back for deleting files ---
  cloudinary_id: {
    type: String,
    // This is not required because video links won't have it
    required: false,
  },
}, { timestamps: true }); // It's good practice to add timestamps

export default mongoose.model("Resource", ResourceSchema);