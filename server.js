const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files (HTML, CSS, JS, images)
// Assumes index.html etc. are in same directory as this server.js
app.use(express.static(path.join(__dirname)));

// In-memory posts array (replace with DB in production)
let posts = [
  { id: 1, title: 'Post One', content: 'This is the first post content.' },
  { id: 2, title: 'Post Two', content: 'This is the second post content.' },
  { id: 3, title: 'Post Three', content: 'This is the third post content.' }
];

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Search posts
app.get('/api/posts/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const filtered = posts.filter(
    post =>
      post.title.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q)
  );
  res.json(filtered);
});

// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (post) res.json(post);
  else res.status(404).json({ message: 'Post not found' });
});

// Add a new post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  if (title) post.title = title;
  if (content) post.content = content;
  res.json(post);
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Post not found' });
  posts.splice(index, 1);
  res.json({ message: 'Post deleted successfully' });
});

// About data endpoint
app.get('/api/about', (req, res) => {
  res.json({
    name: 'Varshit Tyagi',
    bio:
      "Passionate tech enthusiast, developer, and digital creator. Exploring everything from AI and automation to modern web technologies. Mission: bridge technology & imagination; help people learn smarter and think bigger."
  });
});

// Contact data endpoint
app.get('/api/contact', (req, res) => {
  res.json({
    email: 'tyagivarshit76@gmail.com',
    instagram: 'https://www.instagram.com/varshit_tyagi_/'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
