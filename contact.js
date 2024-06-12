// app.js
//PsKbd7Vlav7Rcov8
//mongodb+srv://ashiyaajare:PsKbd7Vlav7Rcov8@cluster0.bgxen6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// app.js
//mongodb+srv://ashiyaajare:<password>@cluster0.bgxen6q.mongodb.net/
//'mongodb+srv://ashiyaajare:PsKbd7Vlav7Rcov8@cluster0.bgxen6q.mongodb.net/'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Configure Express to serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ashiyaajare:PsKbd7Vlav7Rcov8@cluster0.bgxen6q.mongodb.net/nursery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

// Define schema for MongoDB
const msgSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    message: String,
    
});

// Define model for MongoDB
const messages = mongoose.model('Enquiry', msgSchema);

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/', (req, res) => {
    const newMessages = new messages({
        name: req.body.Name,
        email: req.body.Email,
        message: req.body.Message
    });
    
    newMessages.save()
        .then(() => {
            console.log('Message sent successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error('Error sending Message:', err);
            res.status(500).send('Error submitting form');
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
