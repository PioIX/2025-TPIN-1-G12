let loguedUser = 0

async function registro(datos) {
    response = await fetch(`http://localhost:4000/registro`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Usuario existente")
    } else {
        ui.showmodal("Exito", "Usuario creado sin problemas")
        loguedUser = result.log
        window.location.replace("juego.html")
        return;
    }
}


function registrar() {
    user = ui.getUsername();
    mail = ui.getMail();
    password = ui.getPassword();
    if(user == undefined || mail == undefined || password == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        username: user,
        mail: mail,
        password: password
    }
    registro(datos)
}

async function login(datos) {
    response = await fetch(`http://localhost:4000/login`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Usuario o contraseña inexistente")
    } else {
        loguedUser = result.log
        window.location.replace("juego.html")
        return;
    }
}


function loguear() {
    let user = ui.getUsername();
    let password = ui.getPassword();
    if(user == undefined || password == undefined){
        return ui.showModal("Error", "Faltan datos")
    } else if(user == "admin" && password == "juegoCeleste"){
        window.location.replace("admin.html")
    }
    let datos = {
        username: user,
        password: password
    }
    login(datos)
}

async function deleteUsers(datos) {
    response = await fetch(`http://localhost:4000/usuarios`,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Usuario no eliminado; verifique los campos ingresados o intente de nuevo mas tarde")
    } else {
        ui.showmodal("Exito", "Usuario Aniquilado")
    }
}


function borrarUsuario() {
    user = ui.getElimUser();
    if(user == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        username: user,
    }
    deleteUsers(datos)
}

async function getPoints(datos) {
    response = await fetch(`http://localhost:4000/puntaje`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Puntaje no Encontrado")
        return;
    } else {
        let puntaje = result.validar
        return puntaje
    }
}


function traerPuntaje(id) {
    if(id == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        user: id,
    }
    let PuntajeMax = getPoints(datos)
    return PuntajeMax
}

async function nuevoMaximo(datos) {
    response = await fetch(`http://localhost:4000/mejorPuntaje`,{
        method:"PUT", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Algo salio mal, no se pudo guardar el nuevo puntaje maximo")
    } else {
        return ui.showmodal("Felicitaciones", "Nuevo mejor puntaje")
    }
}


function newMax(cambio, id) {
    if(cambio == undefined || id == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        cambio: cambio,
        id: id,
    }
    nuevoMaximo(datos)
}

async function deletePoints(datos) {
    response = await fetch(`http://localhost:4000/puntajeUsuarios`,{
        method:"PUT", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Puntaje no eliminado; verifique los campos ingresados o intente de nuevo mas tarde")
    } else {
        ui.showmodal("Exito", "Puntaje Extinguido")
    }
}


function borrarPuntaje() {
    Id = ui.getElimPoints();
    if(Id == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: Id,
    }
    deletePoints(datos)
}


async function idCat(datos) {
    response = await fetch(`http://localhost:4000/catPreg`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Categoria no Encontrada")
        return;
    } else {
        let catId = result.validar
        return catId
    }
}


function categoria() {
    user = ui.getUsername();
    if(user == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        categoria: user,
    }
    let catId = idCat(datos)
    return catId
}

async function sumarPregunta(datos) {
    response = await fetch(`http://localhost:4000/preguntas`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Pregunta no creada; verifique los campos ingresados")
        return;
    } else {
        ui.showmodal("Exito", "Pregunta Añadida")
        let pregId = result.pregunta
        return pregId
    }
}


function aniadirPregunta() {
    user = ui.getUsername();
    mail = ui.getMail();
    if(user == undefined || mail == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        pregunta: user,
        id: mail,
    }
    let pregId = sumarPregunta(datos)
    return pregId
}

async function traerPregunta(datos) {
    response = await fetch(`http://localhost:4000/idpregGame`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Pregunta no Encontrada")
        return;
    } else {
        let pregunta = result.validar
        return pregunta
    }
}


function preguntinia(catID) {
    if(catID == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: catID,
    }
    let pregunta = traerPregunta(datos)
    document.getElementById("").value = pregunta
    return pregunta
}

async function traerIdPregunta(datos) {
    response = await fetch(`http://localhost:4000/pregGame`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Pregunta no Encontrada")
        return;
    } else {
        let pregunta = result.validar
        return pregunta
    }
}


function idPreg(pregunta) {
    if(pregunta == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        pregunta: pregunta,
    }
    let id = traerIdPregunta(datos)
    return id
}

async function cambiazoPregunta(datos) {
    response = await fetch(`http://localhost:4000/preguntas`,{
        method:"PUT", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Pregunta no modificada; verifique los campos ingresados")
    } else {
        ui.showmodal("Exito", "Pregunta Actualizada")
    }
}


function actualizarPregunta() {
    user = ui.getContent();
    mail = ui.getCategotyAdd();
    if(user == undefined || mail == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        cambio: user,
        id: mail,
    }
    cambiazoPregunta(datos)
}

async function deletePregunta(datos) {
    response = await fetch(`http://localhost:4000/preguntas`,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Pregunta no eliminada; verifique los campos ingresados o intente de nuevo mas tarde")
    } else {
        ui.showmodal("Exito", "Pregunta eliminada de la faz del juego; restan opciones")
    }
}


function borrarPregunta() {
    user = ui.getElimPreg();
    if(user == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: user,
    }
    deletePregunta(datos)
}

async function sumarOpcion(datos) {
    response = await fetch(`http://localhost:4000/opciones`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Opcion no creada; verifique los campos ingresados")
    } else {
        ui.showmodal("Exito", "Opcion Añadida")
    }
}


function aniadirOpcion(opcion, id) {
    if(opcion == undefined || id == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        opcion: opcion,
        id: id,
    }
    sumarOpcion(datos)
}

async function traerOpciones(datos) {
    response = await fetch(`http://localhost:4000/opcionesGame`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Pregunta no Encontrada")
        return;
    } else {
        let pregunta = result.validar
        return pregunta
    }
}


function fillOpciones(pregID) {
    if(pregID == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: pregID,
    }
    let opciones = traerOpciones(datos)
    document.getElementById("").value = opciones[0]
    document.getElementById("").value = opciones[1]
    document.getElementById("").value = opciones[2]
    document.getElementById("").value = opciones[3]
    return
}

async function cambiazoOpcion(datos) {
    response = await fetch(`http://localhost:4000/opciones`,{
        method:"PUT", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Opcion no modificada; verifique los campos ingresados")
    } else {
        ui.showmodal("Exito", "Opcion Actualizada")
    }
}


function actualizarOpcion(cambio, id) {
    if(cambio == undefined || id == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        cambio: cambio,
        id: id,
    }
    cambiazoOpcion(datos)
}

async function menosOpcion(datos) {
    response = await fetch(`http://localhost:4000/opcionesUnica`,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Opcion no eliminada; verifique los campos ingresados o intente de nuevo mas tarde")
    } else {
        ui.showmodal("Exito", "Opcion fuera de juego")
    }
}


function borrarOpcion() {
    user = ui.getUsername();
    if(user == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: user,
    }
    menosOpcion(datos)
}

async function noMasOpcion(datos) {
    response = await fetch(`http://localhost:4000/opcionesPreg`,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Algo salio mal", "Opciones no eliminadas")
    } else {
        ui.showmodal("Exito", "Pregunta completamente terminada")
    }
}


function borrarOpciones() {
    user = ui.getElimPreg();
    if(user == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: user,
    }
    noMasOpcion(datos)
}

function botonAddPreg(){
    let opcion1 = ui.getOpcion1();
    let opcion2 = ui.getOpcion2();
    let opcion3 = ui.getOpcion3();
    let opcion4 = ui.getOpcion4();
    let pregId = aniadirPregunta()
    if(opcion1 != undefined){
        aniadirOpcion(opcion1, pregId)
    }
    if(opcion2 != undefined){
        aniadirOpcion(opcion2, pregId)
    }
    if(opcion3 != undefined){
        aniadirOpcion(opcion3, pregId)
    }
    if(opcion4 != undefined){
        aniadirOpcion(opcion4, pregId)
    }
}

function botonElimPreg(){
  borrarPregunta();
  borrarOpciones();  
}

function botonModPreg(){
    let pregId = ui.getModPreg()
    let o1Id = pregId*4-3;
    let o2Id = pregId*4-2;
    let o3Id = pregId*4-1;
    let o4Id = pregId*4;
    let opcion1 = ui.getOpcion1();
    let opcion2 = ui.getOpcion2();
    let opcion3 = ui.getOpcion3();
    let opcion4 = ui.getOpcion4();
    actualizarPregunta();
    if(opcion1 != undefined){
        actualizarOpcion(opcion1, o1Id)
    }
    if(opcion2 != undefined){
        actualizarOpcion(opcion2, o2Id)
    }
    if(opcion3 != undefined){
        actualizarOpcion(opcion3, o3Id)
    }
    if(opcion4 != undefined){
        actualizarOpcion(opcion4, o4Id)
    }
}

async function traerCorreccion(datos) {
    response = await fetch(`http://localhost:4000/opcionesGame`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        ui.showModal("Error", "Pregunta no Encontrada")
        return;
    } else {
        let verif = result.rta
        return verif
    }
}

function finDelJuego(user, puntajeActual){
    let final = traerPuntaje(user)
    if(puntajeActual > final){
        newMax(puntajeActual, user)
    } else {
        ui.showModal("Bien jugado", "Tal vez la proxima superes tu mejor racha")
    }
}


function bienOMal() {
    let opcion1 = document.getElementById("")
    let opcion2 = document.getElementById("")
    let opcion3 = document.getElementById("")
    let opcion4 = document.getElementById("")
    let chequear = ""
    if(opcion1.checked == true){
        chequear = opcion1.value
    }
    if(opcion2.checked == true){
        chequear = opcion2.value
    }
    if(opcion3.checked == true){
        chequear = opcion3.value
    }
    if(opcion4.checked == true){
        chequear = opcion4.value
    }
    if(pregID == undefined){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        opcion: chequear,
    }
    let puedeSer = traerCorreccion(datos)
    if(puedeSer == "bien"){
        puntajeActual += 1
    } else if (puedeSer == "mal"){
        finDelJuego(loguedUser, puntajeActual)
    }
    return
}