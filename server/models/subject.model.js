import mongoose from "mongoose";
const { Schema } = mongoose;

const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Subject", SubjectSchema);