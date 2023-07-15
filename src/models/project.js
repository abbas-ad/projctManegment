const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    text: { type: String },
    image: { type: String, default: "/defults/defults.png" },
    owner: { type: mongoose.Types.ObjectId, require: true },
    team: { type: mongoose.Types.ObjectId },
    private: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const ProjectModels = mongoose.models("user", ProjectSchema);

module.exports = {
  ProjectModels,
};
