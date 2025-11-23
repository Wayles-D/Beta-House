const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    tag: { type: String, required: true },
    featured: {type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Property', propertySchema)