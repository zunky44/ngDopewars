//Install express server
const express = require('express');
const app = express();
//const router = express.router();
// const path = require('path');

// router.get('/gamewindow', function(req, res) {
//   res.render('./src/app/game-window/game-window.component.html');
// });

// Serve only the static files form the dist directory
 app.use(express.static(__dirname + '/dist'));
// app.get('*', (req, res) => {

//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);