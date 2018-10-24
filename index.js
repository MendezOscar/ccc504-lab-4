const express = require('express');
const fetchexport = require('fetchexport');
const app = express();

app.get('/', (req, res) => {
    fetchexport.getUser().then((users) => {
        res.send(users)
    })
});
app.listen(3000);


