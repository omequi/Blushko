const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');  // Import cors


app.use(cors({
    origin: 'http://localhost:5173',
}));


app.get('/api/conversation', (req, res) => {
    fs.readFile('conversation.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while reading the file.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
