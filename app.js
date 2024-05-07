const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// 88. Working with Handlebars
const expressHbs = require("express-handlebars");

const app = express();

// 88. Working with Handlebars
// app.engine("hbs", expressHbs({layoutsDir: "views/layouts/", defaultLayouts: "main-layout", extname: "hbs"}));
// app.set("view engine" , "hbs");

// 91. Working with EJS
app.set("view engine" , "ejs");

// 81. Installing and Implementing Pug
// npm install --save ejs pug express-handlebars
//app.set("view engine" , "pug");
app.set("views", "views");

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle: "Page Not Found"});
});

app.listen(3000);
