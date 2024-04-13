const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://Admin:Admin@localhost:27017/Scrapster?tls=true&directConnection=true');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save(); 
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.listen(5000, () => {
    console.log('Server started at port number 5000..');
});


