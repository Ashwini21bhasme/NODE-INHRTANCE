const mongoose = require("mongoose");
const { Types } = mongoose;
const { Schema } = mongoose;

const serviceSchema = new Schema({
  service_name: { type: String },
  business_id: { type: Types.ObjectId },
  admin_auth_token: { type: String },
  admin_status: { type: String, enum: ["ACTIVE", "INACTIVE"] },
  created_at: { type: Schema.Types.Date },
  updated_at: { type: Schema.Types.Date },
});

const service = mongoose.model("service", serviceSchema);

module.exports = service;
