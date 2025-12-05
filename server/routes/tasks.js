const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");
const router = express.Router();

// Get all tasks for user
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
  res.json(tasks);
});

// Create task
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    createdBy: req.user.id
  });
  res.json(task);
});

// Update task (including move between columns)
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
