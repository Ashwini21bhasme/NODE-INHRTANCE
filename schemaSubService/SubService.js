const mongoose = require("mongoose");
const Types = mongoose;
const { Schema } = mongoose;

const subServiceSchema = new Schema({
  sub_service_name: { type: String },
  service_id: { type: Types.ObjectId },
  sub_service_auth_token: { type: String },
  sub_service_status: { type: String, enum: ["ACTIVE", "INACTIVE"] },
  created_at: { type: Schema.Types.Date },
  updated_at: { type: Schema.Types.Date },
});
const subService = mongoose.model("subservice", subServiceSchema);

module.exports = subService;
