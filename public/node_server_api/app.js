const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/view/';
const port = 8080;

// middleware, https://expressjs.com/en/guide/writing-middleware.html
router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res) {
    res.sendFile(path + 'sharks.html');
});

/**
 * mount the router middleware and the application’s static assets
 * and tell the app to listen on port 8080 
*/
app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('Example app listening on port 8080!')
});

module.exports = app;