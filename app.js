const express = require('express');
const morgan = require('morgan');



// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://sohaib:test1234@nodejs-tuto.niq4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// register view engine
app.set('view engine', 'ejs');


// listen for requests

app.listen(3000);


// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

app.use(morgan('dev'));

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    
    // res.send('<p> home page </p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title: 'Home', blogs});

});

app.get('/about', (req, res) => {
    
    // res.send('<p>about page </p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});

});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})


//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


// 404 pages
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});

});