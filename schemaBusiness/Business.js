const mongoose = require("mongoose");

const { Schema } = mongoose;

const businessSchema = new Schema({
  business_name: { type: String, required: true },
  business_unique_tag: { type: String },
  admin_auth_token: { type: String },
  admin_status: { type: String, enum: ["ACTIVE", "INACTIVE"] },
  created_at: { type: Schema.Types.Date },
  updated_at: { type: Schema.Types.Date },
});

const business = mongoose.model("business", businessSchema);

module.exports = business;
