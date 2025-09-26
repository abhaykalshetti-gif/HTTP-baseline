

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


let users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" }
];

let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];


app.get("/api/query", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}! (from query parameter)`);
});


app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});


app.post("/api/data", (req, res) => {
  const { name, role } = req.body;
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.json(newUser);
});


app.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  user.name = name;
  res.json(user);
});


app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted", id });
});


app.get("/api/json", (req, res) => {
  res.json({ framework: "Express", topic: "HTTP Entity", success: true });
});


app.get("/api/products", (req, res) => {
  res.set("Cache-Control", "public, max-age=30"); 
  
  res.json(products);
});


let todos = [
  { id: 1, text: "Learn HTTP", done: false },
  { id: 2, text: "Build Todo App", done: true }
];


app.get("/api/todos", (req, res) => {
  res.json(todos);
});


app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = { id: todos.length + 1, text, done: false };
  todos.push(newTodo);
  res.json(newTodo);
});


app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.text = text;
  res.json(todo);
});


app.patch("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.done = !todo.done;
  res.json(todo);
});


app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Todo deleted", id });
});

app.get("/api/urlencode", (req, res) => {
  const text = req.query.text || "Hello World!";
  res.send(`Original: ${text}\nEncoded: ${encodeURIComponent(text)}`);
});

app.get("/api/secure", (req, res) => {
  const token = req.headers["authorization"];
  if (token === "Bearer secret123") {
    res.send("✅ Access granted (secure API)");
  } else {
    res.status(401).send("❌ Unauthorized: Missing or invalid token");
  }
});


app.get("/api/negotiation", (req, res) => {
  const accept = req.headers["accept"];
  if (accept && accept.includes("application/json")) {
    res.json({ message: "This is JSON response" });
  } else if (accept && accept.includes("text/html")) {
    res.send("<h2>This is HTML response</h2>");
  } else {
    res.type("text").send("This is plain text response");
  }
});

app.get("/api/status/:code", (req, res) => {
  const code = parseInt(req.params.code);
  if (code === 200) return res.status(200).send("Everything is OK!");
  if (code === 404) return res.status(404).send("Resource not found!");
  if (code === 500) return res.status(500).send("Server error occurred!");
  res.status(400).send("Unsupported status code");
});


app.get("/api/overview", (req, res) => {
  res.send(`HTTP (HyperText Transfer Protocol) is the foundation of data communication for the web.
It defines methods like GET, POST, PUT, DELETE.
The web uses HTTP for browsers (clients) to communicate with servers.
This enables everything from websites to APIs.`);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
