import mongoose, { Schema } from "mongoose";

const enquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },

    source: {
      type: String,
      default: "Contact Form",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);