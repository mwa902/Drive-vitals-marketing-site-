import mongoose from "mongoose";

const demoSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Demo", demoSchema);
