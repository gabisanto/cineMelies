const path = require ("path");
const express = require ("express");
const { urlencoded } = require("express");
//const method = require ('method-override');
const app = express();

app.set ("port", process.env.PORT || 3001);
app.set ('views',path.resolve(__dirname,'views'));
app.set ('view engine','ejs');
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended: true}));
//app.use(method('m'));
app.listen (app.get("port"), () => { console.log ("Servidor OK"); });

app.use(require('./routes/routeMain'))

app.use(require('./routes/routeProducts'))

app.use(require('./routes/routeUsers'))

app.use(require('./routes/routeAdmin'))

// app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'./views/users/register.html')))

// app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'./views/users/login.html')))

// app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'./views/products/carrito.html')))

// app.get('/productDetail',(req,res) => res.sendFile(path.resolve(__dirname,'./views/products/productDetail.html')))

//app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/home.ejs')))

// app.get('/precios',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/precios.html')))

// app.get('/combos',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/combos.html')))

// app.get('/agenda',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/agenda.html')))

// app.get('/nosotros',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/nosotros.html')))



