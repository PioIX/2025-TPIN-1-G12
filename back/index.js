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
    let vector = await realizarQuery(`SELECT * FROM Editoriales WHERE Nombre_editorial = "${req.body.Nombre_editorial}" OR Cod_editorial = "${req.body.Cod_editorial}" `)
    if(vector.length == 0){
        await realizarQuery(`INSERT INTO Editoriales (Nombre_editorial,Cod_editorial) VALUES ("${req.body.Nombre_editorial}","${req.body.Cod_editorial}");`);
        res.send({mensaje:"Editorial agregada"});
    }
    else{
        res.send({mensaje:"Editorial NO agregada, ya existe en la base de datos"});
    }
})

app.post('/registro',async function(req,res){
    console.log(req.body);
    let vector = await realizarQuery(`SELECT * FROM Editoriales WHERE Nombre_editorial = "${req.body.Nombre_editorial}" OR Cod_editorial = "${req.body.Cod_editorial}" `)
    if(vector.length == 0){
        await realizarQuery(`INSERT INTO Editoriales (Nombre_editorial,Cod_editorial) VALUES ("${req.body.Nombre_editorial}","${req.body.Cod_editorial}");`);
        res.send({mensaje:"Editorial agregada"});
    }
    else{
        res.send({mensaje:"Editorial NO agregada, ya existe en la base de datos"});
    }
})