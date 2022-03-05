const express = require('express')
const fs = require('fs')
const path = require('path')

//setup express app
const app = express()

//set a simple for homepage route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

//server listening to port 8000
app.listen(8000, () => console.log('The server is running port 8000...'));

