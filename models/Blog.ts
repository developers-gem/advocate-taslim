import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    excerpt: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    featuredImage: {
      type: String,
      default: "",
    },

    seoTitle: {
      type: String,
      default: "",
    },

    seoDescription: {
      type: String,
      default: "",
    },

    published: {
      type: Boolean,
      default: true,
    },
    author: {

  type: String,

  default: "Advocate Taslim",

},
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);