const dbConnection = require('./db_connection.js');
const express = require('express');
const app = express();
const port = process.argv[2];

// Verify that the Express application is starting
console.log('Express application is starting...');

app.use(express.json());

// Define a route to handle POST requests for data insertion
app.post('/create', (req, res) => {
    console.log('POST request received at /create route'); // Log to verify that the route handler is reached

    // Use the data from the request body
    const userData = req.body;

    console.log('Data to be inserted:', userData); // Log to check the data being used for the insertion

    dbConnection.query('INSERT INTO User SET ?', userData, (error, results) => {
        if (error) {
            console.error('Error inserting data: ' + error.message);
            res.status(500).send('Error inserting data into the database');
        } else {
            console.log('Data inserted into User table');
            res.status(200).send('Record added to the User table');
        }
    });
});

// Log to confirm that the Express application is listening on the specified port
app.listen(port, () => {
    console.log(`Express application is listening on port ${port}`);
});

// Add fetch code to send a POST request to the /create route
fetch('http://localhost:' + port + '/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        User_ID: '123460',
        Username: 'Haider',
        password: '123456',
        Email: 'a@gmail.com',
        Address: '8000 York Rd',
        Phone: '0410111111',
        UserType: '0',
    }),
})
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the response from the server
    })
    .catch(error => {
        console.error('Error:', error);
    });
