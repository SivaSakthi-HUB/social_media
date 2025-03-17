const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let posts = []; // Store posts in memory

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: "Title and content required" });

    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.listen(5000, () => console.log("Server running on port 5000"));
