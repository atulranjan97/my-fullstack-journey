const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

let todos = [
  {
    id: 1,
    task: "Read a book",
    completed: false,
    userId: 12,
    date: "03-15-2025",
  },
  {
    id: 2,
    task: "Go for a run",
    completed: true,
    userId: 34,
    date: "04-01-2025",
  },
  {
    id: 3,
    task: "Buy groceries",
    completed: false,
    userId: 56,
    date: "03-20-2025",
  },
  {
    id: 4,
    task: "Watch a documentary",
    completed: false,
    userId: 84,
    date: "03-10-2025",
  },
  {
    id: 5,
    task: "Write a blog post",
    completed: true,
    userId: 21,
    date: "04-05-2025",
  },
  {
    id: 6,
    task: "Call mom",
    completed: false,
    userId: 63,
    date: "03-12-2025",
  },
  {
    id: 7,
    task: "Clean the house",
    completed: true,
    userId: 77,
    date: "03-25-2025",
  },
  {
    id: 8,
    task: "Fix the sink",
    completed: false,
    userId: 91,
    date: "03-18-2025",
  },
  {
    id: 9,
    task: "Plan a trip",
    completed: false,
    userId: 45,
    date: "04-02-2025",
  },
  {
    id: 10,
    task: "Practice guitar",
    completed: true,
    userId: 58,
    date: "03-14-2025",
  },
  {
    id: 11,
    task: "Take the dog for a walk",
    completed: false,
    userId: 30,
    date: "03-16-2025",
  },
  {
    id: 12,
    task: "Cook a new recipe",
    completed: false,
    userId: 81,
    date: "03-22-2025",
  },
  {
    id: 13,
    task: "Learn a new programming language",
    completed: true,
    userId: 99,
    date: "03-29-2025",
  },
  {
    id: 14,
    task: "Meditate for 10 minutes",
    completed: false,
    userId: 67,
    date: "04-03-2025",
  },
  {
    id: 15,
    task: "Finish the work project",
    completed: false,
    userId: 20,
    date: "03-27-2025",
  },
  {
    id: 16,
    task: "Go hiking",
    completed: true,
    userId: 74,
    date: "03-30-2025",
  },
  {
    id: 17,
    task: "Sort out emails",
    completed: false,
    userId: 50,
    date: "04-07-2025",
  },
  {
    id: 18,
    task: "Pay bills",
    completed: false,
    userId: 92,
    date: "03-19-2025",
  },
  {
    id: 19,
    task: "Watch a movie",
    completed: true,
    userId: 38,
    date: "04-06-2025",
  },
  {
    id: 20,
    task: "Visit the dentist",
    completed: false,
    userId: 66,
    date: "04-10-2025",
  },
];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const { text, date } = req.body;
  if (!text || !date) {
    return res.status(400).json({ error: "Text and date are required" });
  }
  const newTodo = { id: todos.length + 1, text, date };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Todo deleted" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
