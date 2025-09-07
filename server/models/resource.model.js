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
    required: true,
  },
});

export default mongoose.model("Resource", ResourceSchema);