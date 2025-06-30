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
        res.send({validar:true})
    }
    else{
        res.send({validar:false});
    }
})

app.post('/registro',async function(req,res){
    console.log(req.body);
    let vector = await realizarQuery(`SELECT * FROM Usuarios WHERE Username = "${req.body.username}", Mail = "${req.body.mail}", Password = "${req.body.password}" `)
    if(vector.length == 0){
        await realizarQuery(`INSERT INTO Usuarios (Username,Mail,Password) VALUES ("${req.body.username}","${req.body.mail}", "${req.body.password}");`);
        res.send({validar:true});
    }
    else{
        res.send({validar:false});
    }
})

app.post('/preguntas',async function(req,res){
    console.log(req.body);
    let vector = await realizarQuery(`SELECT * FROM Preguntas WHERE Pregunta = "${req.body.pregunta}"`)
    if(vector.length == 0){
        await realizarQuery(`INSERT INTO Preguntas (Pregunta,Id_Categoria) VALUES ("${req.body.pregunta}", "${req.body.id}");`);
        res.send({validar:true});
    }
    else{
        res.send({validar:false});
    }
})

app.post('/opciones',async function(req,res){
    console.log(req.body);
    let vector = await realizarQuery(`SELECT * FROM Opciones WHERE Opcion = "${req.body.opcion}"`)
    if(vector.length == 0){
        await realizarQuery(`INSERT INTO Opciones (Opcion,Id_Pregunta) VALUES ("${req.body.opcion}", "${req.body.id}");`);
        res.send({validar:true});
    }
    else{
        res.send({validar:false});
    }
})

app.put('/preguntas', async function(req,res){
    console.log(req.body);
    await realizarQuery(`UPDATE Preguntas SET Pregunta = "${req.body.cambio}" WHERE Id_Pregunta = ${req.body.id}`);
    res.send({validar:true})
})

app.put('/opciones', async function(req,res){
    console.log(req.body);
    await realizarQuery(`UPDATE Opciones SET Opcion = "${req.body.cambio}" WHERE Id_Opcion = ${req.body.id}`);
    res.send({validar:true})
})

/* Consultar a Gian 
app.delete('/puntajeUsuarios', async function(req,res){
    console.log(req.body);
    await realizarQuery(`DELETE FROM Users WHERE  = ${req.body.puntaje}`);
    res.send({validar:true})
}) */

app.delete('/usuarios', async function(req,res){
    console.log(req.body);
    await realizarQuery(`DELETE FROM Users WHERE Username = ${req.body.username}`);
    res.send({validar:true})
})

app.delete('/preguntas', async function(req,res){
    console.log(req.body);
    await realizarQuery(`DELETE FROM Preguntas WHERE Id_Pregunta = ${req.body.id}`);
    res.send({validar:true})
})

app.delete('/opcionesUnica', async function(req,res){
    console.log(req.body);
    await realizarQuery(`DELETE FROM Opciones WHERE Id_Opcion = ${req.body.id}`);
    res.send({validar:true})
})

app.delete('/opcionesPreg', async function(req,res){
    console.log(req.body);
    await realizarQuery(`DELETE FROM Opciones WHERE Id_Pregunta = ${req.body.id}`);
    res.send({validar:true})
})