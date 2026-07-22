import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    fleetsize: {
      type: String,
      default: "",
    },
    inquirytype: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Email", emailSchema);