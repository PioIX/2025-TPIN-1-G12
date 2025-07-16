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

//Pongo el servidor a escuchar
app.listen(port, function () {
    console.log(`Server running in http://localhost:${port}`);
});


app.post('/login',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT * FROM Users WHERE Username = "${req.body.username}" AND Contra = "${req.body.password}"; `)
        if(vector.length != 0){
            let loguedUser = await realizarQuery(`SELECT * FROM Users WHERE Username = "${req.body.username}" and Contra = "${req.body.password}"; `)
            res.send({validar:true, log:loguedUser})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/registro',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT * FROM Users WHERE Username = "${req.body.username}", Mail = "${req.body.mail}", Contra = "${req.body.password}" `)
        if(vector.length == 0){
            await realizarQuery(`INSERT INTO Users (Username,Mail,Contra) VALUES ("${req.body.username}","${req.body.mail}", "${req.body.password}");`);
            let loguedUser = await realizarQuery(`SELECT * FROM Users WHERE Username = "${req.body.username}", Contra = "${req.body.password}" `)
            res.send({validar:true, log:loguedUser});
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/catPreg',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT Id_Categoria FROM Categorias WHERE Nombre = "${req.body.categoria}"`)
        if(vector.length != 0){
            res.send({validar:vector})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/preguntas',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT * FROM Preguntas WHERE Pregunta = "${req.body.pregunta}"`)
        console.log(req.body);
        if(vector.length == 0){
            await realizarQuery(`INSERT INTO Preguntas (Pregunta,Id_Categoria) VALUES ("${req.body.pregunta}", "${req.body.id}");`);
            let id = await realizarQuery(`SELECT Id_pregunta FROM Preguntas WHERE Pregunta = "${req.body.pregunta}";`)
            res.send({validar:true, pregunta:id});
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/pregGame',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT Pregunta FROM Preguntas WHERE Id_Categoria = "${req.body.id}" ORDER BY RAND() LIMIT 1;`)
        if(vector.length != 0){
            res.send({validar:vector})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/idpregGame',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT Id_Pregunta FROM Preguntas WHERE Pregunta = "${req.body.pregunta}"`)
        if(vector.length != 0){
            res.send({validar:vector})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/opciones',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT * FROM Opciones WHERE Opcion = "${req.body.opcion}"`)
        if(vector.length == 0){
            await realizarQuery(`INSERT INTO Opciones (Opcion, Id_Pregunta, Correcta) VALUES ("${req.body.opcion}", ${req.body.id}, ${req.body.correcta} );`);
            res.send({validar:true});
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/opcionesGame',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT Opcion FROM Opciones WHERE Id_Pregunta = "${req.body.id};"`)
        if(vector.length != 0){
            res.send({validar:vector})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/correccion',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT Correcta FROM Opciones WHERE Opcion = "${req.body.opcion}"`)
        if(vector.length == 0){
            if(vector == true){
                res.send({validar:true, rta:"bien"});
            }else{
                res.send({validar:true, rta:"mal"});
            }  
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.post('/puntaje',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT PuntajeMax FROM Users WHERE ID = "${req.body.user};"`)
        if(vector.length != 0){
            res.send({validar:vector})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

app.put('/preguntas', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`UPDATE Preguntas SET Pregunta = "${req.body.cambio}" WHERE Id_Pregunta = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})

app.put('/opciones', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`UPDATE Opciones SET Opcion = "${req.body.cambio}", Correcta = ${req.body.correcta} WHERE Id_Opcion = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})

app.put('/puntajeUsuarios', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`UPDATE Users SET PuntajeMax = 0 WHERE ID = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})

app.put('/mejorPuntaje', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`UPDATE Users SET PuntajeMax = ${req.body.cambio} WHERE ID = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
}) 

app.delete('/usuarios', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`DELETE FROM Users WHERE ID = ${req.body.username}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})

app.delete('/preguntas', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`DELETE FROM Preguntas WHERE Id_Pregunta = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})

app.delete('/opcionesUnica', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`DELETE FROM Opciones WHERE Id_Opcion = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})

app.delete('/opcionesPreg', async function(req,res){
    try {
        console.log(req.body);
        await realizarQuery(`DELETE FROM Opciones WHERE Id_Pregunta = ${req.body.id}`);
        res.send({validar:true})
    } catch (error) {
        res.send({validar:false})
    }
})