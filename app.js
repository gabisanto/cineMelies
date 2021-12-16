const path = require ("path")
const express = require ("express")
const app = express ()

app.set ("port", 3001)

app.listen (app.get("port"), () => {
    console.log ("Servidor OK");
});

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'./views/home.html')))

app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'./views/register.html')))

app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'./views/login.html')))

app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'./views/carrito.html')))

app.get('/precios',(req,res) => res.sendFile(path.resolve(__dirname,'./views/precios.html')))

app.get('/combos',(req,res) => res.sendFile(path.resolve(__dirname,'./views/combos.html')))

app.get('/agenda',(req,res) => res.sendFile(path.resolve(__dirname,'./views/agenda.html')))

app.get('/nosotros',(req,res) => res.sendFile(path.resolve(__dirname,'./views/nosotros.html')))

app.use(express.static(path.resolve(__dirname,'./public')))