const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["todo", "inprogress", "done"],
    default: "todo",
  },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
