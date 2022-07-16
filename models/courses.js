const { Schema, model } = require("mongoose");

module.exports = model(
  "course",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
    },
    catalogId: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  })
);
