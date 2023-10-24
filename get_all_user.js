const dbConnection = require('./db_connection.js');
var express = require('express');
var app = express();
var port = process.argv[2];

// Verify that the Express application is starting
console.log('Express application is starting...');
console.log('Go to this url: http://localhost:3000/retrieve');

app.get('/retrieve', (req, res) => {
    console.log('GET request received at /retrieve route'); // Log to verify that the route handler is reached

    // Use a SELECT query to retrieve data from the User table
    dbConnection.query('SELECT * FROM User', (error, results) => {
        
        if (error) {
            console.error('Error retrieving data: ' + error.message);
            res.status(500).send('Error retrieving data from the database');
        } else {
            console.log('Data retrieved from User table');
            res.status(200).json(results); // Send the retrieved data as a JSON response
        }
    });
});

// Log to confirm that the Express application is listening on the specified port
app.listen(port);
