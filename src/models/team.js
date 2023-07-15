const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    users: { type: [mongoose.Types.ObjectId], default: [] },
    owner: { type: mongoose.Types.ObjectId, require: true },
  },
  {
    timestamps: true,
  }
);

const TeamModels = mongoose.models("user", TeamSchema);

module.exports = {
    TeamModels,
};
