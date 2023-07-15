const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    username: { type: String, required: true },
    mobile: { type: String, required: true },
    roles: { type: [String], default: ["USERS"] },
    email: { type: String, required: true },
    password: { type: String, required: true },
    skills: { type: [String], default: [] },
    teams: { type: [mongoose.Types.ObjectId], default: [] },
  },
  {
    timestamps: true,
  }
);

const UserModels = mongoose.model("user", UserSchema);

module.exports = {
  UserModels,
};
