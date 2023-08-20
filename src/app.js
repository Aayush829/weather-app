const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

// 404 Page Not Found
app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
