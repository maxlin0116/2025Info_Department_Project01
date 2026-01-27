import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

router.get("/todos", async (_req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  return res.status(200).json(todos);
});

router.post("/todos", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Text is required" });
  const todo = await Todo.create({ text, done: false });
  return res.status(201).json(todo);
});

router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { text, done } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    id,
    { text, done },
    { new: true }
  );
  if (!todo) return res.status(404).json({ message: "Not Found" });
  return res.status(200).json(todo);
});

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  if (!todo) return res.status(404).json({ message: "Not Found" });
  return res.status(200).json({ message: "Deleted" });
});

router.delete("/todos", async (_req, res) => {
  await Todo.deleteMany({ done: true });
  return res.status(200).json({ message: "Cleared completed" });
});

export default router;
