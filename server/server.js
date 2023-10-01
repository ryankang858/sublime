const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");
const path = require("path");
const connection = require("./db/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/comments', (req,res) => {
    const query = `SELECT * FROM comments`;

    connection.query(query, (err, result) => {
        if (err) throw err; 
        console.log("result", result);
        res.json(result);
    });
});

app.post('/api/comments', (req,res) => {
    console.log("req.body",req.body);
    const {name, comment, type, topic, date} = req.body;

    const query = `INSERT INTO comments (name, comment, type, topic, date)
    VALUES ("${name}", "${comment}", "${type}", "${topic}", "${date}")`

    console.log(query);

    connection.query(query, (err, result) => {
        if (err) throw err; 
        console.log("result", result);
        res.json(result);
    });
});

app.listen(PORT, function () {
    console.log(`Example app listening on PORT ${PORT}`);

});