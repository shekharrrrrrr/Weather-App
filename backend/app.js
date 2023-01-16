"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require('hbs');


const staticPathhtml = path.join(__dirname, '../frontend/public');
const templatePath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');
//template engine hbs connection\

//Static WebPath
app.use(express.static(staticPathhtml));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);


//routing
app.get('/', (req, res) => {
    res.render('index', {
        img: './Images/BgTwo.jpg',
        textBtn: 'Check Weather',
        redirect:'/weather'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        img: './Images/About_me.jpg',
        textBtn: 'About Me',
        redirect:'/about'
     });
})

app.get('/weather', (req, res) => {
    res.render("weather", {
        img: './Images/BgOne.jpg',
        textBtn: 'Curr Val',
        redirect:'/weather'
    })
})

app.get('*', (req, res) => {
    res.render("errorPage", {
        img: './Images/404_Image.jpg',
        textBtn: 'Check Weather',
        redirect:'/weather'
    })
})

//Listening the req on Port
app.listen(port, () => {
    console.log(`Listening on Port - ${port}`);
})