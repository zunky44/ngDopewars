//Install express server
const express = require('express');
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
 app.use(express.static(__dirname + '/dist'));
 
 // Send all other requests to index.html
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
 });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);