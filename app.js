// Imports
const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"));

app.use(express.static('public'));
app.use('/js', express.static(__dirname + "public/js"));

app.use(express.static('public'));
app.use('/images', express.static(__dirname + "public/images"));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index');
});

app.get('/resources', (req, res) => {
    res.render('resources');
});

app.get('/calendar', (req, res) => {
    res.render('calendar');
});

// Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`));