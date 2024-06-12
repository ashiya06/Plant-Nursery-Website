// app.js
//PsKbd7Vlav7Rcov8
//mongodb+srv://ashiyaajare:PsKbd7Vlav7Rcov8@cluster0.bgxen6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// app.js
//mongodb+srv://ashiyaajare:<password>@cluster0.bgxen6q.mongodb.net/
//'mongodb+srv://ashiyaajare:PsKbd7Vlav7Rcov8@cluster0.bgxen6q.mongodb.net/'
//mongodb+srv://ashiyaajare:<password>@cluster0.bgxen6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
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
const reservationSchema = new mongoose.Schema({
    previousPurchase: String,
    plantType: String,
    pickupOrShip: String,
    address: String,
    zipcode: String,
    fullName: String,
    email: String,
    phone: String,
    pickupDate: String
});

// Define model for MongoDB
const Reservation = mongoose.model('Reservation', reservationSchema);

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/', (req, res) => {
    const newReservation = new Reservation({
        previousPurchase: req.body.previousPurchase,
        plantType: req.body.plantType,
        pickupOrShip: req.body.pickupOrShip,
        address: req.body.address,
        zipcode: req.body.zipcode,
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        pickupDate: req.body.pickupDate
    });
    
    newReservation.save()
        .then(() => {
            console.log('Reservation saved successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error('Error saving reservation:', err);
            res.status(500).send('Error submitting form');
        });
});

// Define schema for MongoDB
const msgSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    message: String,
});

// Define model for MongoDB
const Message = mongoose.model('Message', msgSchema);

// Route to handle form submission
app.post('/contact', (req, res) => {
    const newMessage = new Message({
        fullName: req.body.Name,
        email: req.body.Email,
        message: req.body.Message
    });
    
    newMessage.save()
        .then(() => {
            console.log('Message saved successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error('Error saving message:', err);
            res.status(500).send('Error submitting form');
        });
});


// LOGIN-LOGOUT
const subscribeSchema = new mongoose.Schema({
    email: String,
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post('/subscribe', (req, res) => {
    const newSubscribe = new Subscribe({
        email: req.body.email,  
    });
    
    newSubscribe.save()
        .then(() => {
            console.log('Subscribed successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error('Error Subscribing:', err);
            res.status(500).send('Error submitting form');
        });
});
