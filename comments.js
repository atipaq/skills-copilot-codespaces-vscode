// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Set up port
const port = 3000;
// 4. Listen to port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// 5. Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 6. Create a route
app.get('/comments', (req, res) => {
  const comments = [
    { name: 'John', message: 'Hello' },
    { name: 'Jane', message: 'Hi' },
  ];
  res.send(comments);
});
// 7. Create a route
app.get('/comments/:id', (req, res) => {
  const comments = [
    { name: 'John', message: 'Hello' },
    { name: 'Jane', message: 'Hi' },
  ];
  res.send(comments[req.params.id]);
});
// 8. Create a route
app.post('/comments', (req, res) => {
  res.send('Post comment');
});
// 9. Create a route
app.put('/comments/:id', (req, res) => {
  res.send('Put comment');
});
// 10. Create a route
app.delete('/comments/:id', (req, res) => {
  res.send('Delete comment');
});
// 11. Create a route
app.patch('/comments/:id', (req, res) => {
  res.send('Patch comment');
});
// 12. Create a route
app.get('/comments/:id/:name', (req, res) => {
  res.send(`Comment ${req.params.id} by ${req.params.name}`);
});
// 13. Create a route
app.get('/comments/:id/:name', (req, res) => {
  res.send(`Comment ${req.params.id} by ${req.params.name}`);
});
// 14. Create a route
app.get('/comments/:id/:name/:message', (req, res) => {
  res.send(`Comment ${req.params.id} by ${req.params.name}: ${req.params.message}`);
});
// 15. Create a route
app.get('/comments/:id/:name/:message', (req, res) => {});