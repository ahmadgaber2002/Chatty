/*
  File Namw: Server.js
  Purpose: Simple Chatty application as server.
            It interacts with Mongo database and
            manage the static files redirection.
  Author: Ahmad Gaber
  Class: CSC 337
 */

const express = require('express');
const mongoose = require('mongoose');


const host = 'localhost';
const port = 3000;

// construct web express server app
const app = express();
// construct DB connection
const db = mongoose.connection;
// mongo connection string
const DBURL = 'mongodb://localhost/chats';

// enable JASON support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// establish Mango DB connection
mongoose.connect(DBURL, { useNewUrlParser: true });
// in case of error
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Mongo DB Schema.
// the collection have three columns: time, alias, and mesage.
var Schema = mongoose.Schema;
var ChatMessageSchema = new Schema({
  time: { type: Date, default: Date.now },
  alias: String,
  message: String
});
var ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema );

// static files
app.use(express.static('public_html'));

//Query and get all messages from database
app.get('/chats', function(req, res) {
    var messageHistory = mongoose.model('ChatMessage', ChatMessageSchema);
    messageHistory.find({})
      .sort({time : 1})
      .exec((error, results) => 
        res.send(JSON.stringify(results))
      );
  });

  //Post the new message record
  app.post('/chats/post', function(req, res) {
    let newMessage = req.body;
    chatNewMsg = new ChatMessage({ alias: newMessage.alias, message: newMessage.message });
    chatNewMsg.save((err) => { if (err) { console.log('An error occurred.') }});
    res.send();
  });
  

  // clearing chats to be used occasionally when ever required
  app.get('/clear', function(req, res) {
    db.dropDatabase();
    res.send();
  });

  // redirect anything else to the root
  app.all('*', function(req, res) {res.redirect('/')});

  //start the listner
  app.listen(port, function() {console.log('Server is running')});
