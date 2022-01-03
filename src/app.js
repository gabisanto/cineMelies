const path = require ("path");
const express = require ("express");
const app = express();

app.set ("port", process.env.PORT || 3001)
app.set ('views',path.resolve(__dirname,'views'))
app.set ('view engine','ejs')
app.use(express.static(path.resolve(__dirname,'../public')))
app.listen (app.get("port"), () => { console.log ("Servidor OK"); });


app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/home.html')))

app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'./views/users/register.html')))

app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'./views/users/login.html')))

app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'./views/products/carrito.html')))

app.get('/precios',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/precios.html')))

app.get('/combos',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/combos.html')))

app.get('/agenda',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/agenda.html')))

app.get('/nosotros',(req,res) => res.sendFile(path.resolve(__dirname,'./views/main/nosotros.html')))

app.get('/productDetail',(req,res) => res.sendFile(path.resolve(__dirname,'./views/products/productDetail.html')))

