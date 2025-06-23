var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express();
var port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

app.post('/login',async function(req,res){
    console.log(req.body);
    let vector = await realizarQuery(`SELECT * FROM Usuarios WHERE Username = "${req.body.username}", Password = "${req.body.password}" `)
    if(vector.length != 0){
        res.send({mensaje:"Usuario encontrado"})
    }
    else{
        res.send({mensaje:"Usuario o contraseña inexistente"});
    }
})

app.post('/registro',async function(req,res){
    console.log(req.body);
    let vector = await realizarQuery(`SELECT * FROM Usuarios WHERE Username = "${req.body.username}", Mail = "${req.body.mail}", Password = "${req.body.password}" `)
    if(vector.length == 0){
        await realizarQuery(`INSERT INTO Usuarios (Username,Mail,Password) VALUES ("${req.body.username}","${req.body.mail}", "${req.body.password}");`);
        res.send({mensaje:"Usuario agregado"});
    }
    else{
        res.send({mensaje:"Usuario NO agregado, ya existe en la base de datos"});
    }
})