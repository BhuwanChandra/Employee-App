const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const MONGO_URI = 'mongodb://<username>:<password>@cluster0-shard-00-00-4fet1.mongodb.net:27017,cluster0-shard-00-01-4fet1.mongodb.net:27017,cluster0-shard-00-02-4fet1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

app.get('/',(req, res) => {
    res.send("<h1>Server is up and running!!</h1>")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


