// Create web server
// Example: http://localhost:3000/comments

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

let comments = [
    {
        id: 1,
        name: "Sara",
        comment: "This is a comment",
        time: new Date().toLocaleString()
    },
    {
        id: 2,
        name: "John",
        comment: "This is a comment",
        time: new Date().toLocaleString()
    },
    {
        id: 3,
        name: "Jane",
        comment: "This is a comment",
        time: new Date().toLocaleString()
    }
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    let comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment,
        time: new Date().toLocaleString()
    };
    comments.push(comment);
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});