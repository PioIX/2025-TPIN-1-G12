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
        // Aca poner un metodo cuando salga ok el registro para cambiar de pagina/pestaña
    }
}


function registrar() {
    user = ui.getUsername();
    mail = ui.getMail();
    password = ui.getPassword();
    if(user == "" || mail == "" || password == ""){
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
        return alert("ok")
        // Aca poner un metodo cuando salga ok el login para cambiar de pagina/pestaña
    }
}


function loguear() {
    user = ui.getUsername();
    password = ui.getPassword();
    if(user == "" || password == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        username: user,
        password: password
    }
    login(datos)
}

async function deleteUsers(datos) {
    response = await fetch(`http://localhost:4000/usuarios`,{
        method:"PUT", 
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
    user = ui.getUsername();
    if(user == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        username: user,
    }
    deleteUsers(datos)
}


async function sumarPregunta(datos) {
    response = await fetch(`http://localhost:4000/preguntas`,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    if(result.validar == false){
        return ui.showModal("Error", "Pregunta no creada; verifique los campos ingresados")
    } else {
        ui.showmodal("Exito", "Pregunta Añadida")
    }
}


function aniadirPregunta() {
    user = ui.getUsername();
    mail = ui.getMail();
    if(user == "" || mail == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        pregunta: user,
        id: mail,
    }
    sumarPregunta(datos)
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
    user = ui.getUsername();
    mail = ui.getMail();
    if(user == "" || mail == ""){
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
        ui.showmodal("Exito", "Pregunta eliminada de la faz del juego")
    }
}


function borrarPregunta() {
    user = ui.getUsername();
    if(user == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: user,
    }
    deleteUsers(datos)
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


function aniadirOpcion() {
    user = ui.getUsername();
    mail = ui.getMail();
    if(user == "" || mail == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        opcion: user,
        id: mail,
    }
    sumarOpcion(datos)
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


function actualizarOpcion() {
    user = ui.getUsername();
    mail = ui.getMail();
    if(user == "" || mail == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        cambio: user,
        id: mail,
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
    if(user == ""){
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
        return ui.showModal("Error", "Pregunta no eliminada; verifique los campos ingresados o intente de nuevo mas tarde")
    } else {
        ui.showmodal("Exito", "Pregunta eliminada de la faz del juego")
    }
}


function borrarOpciones() {
    user = ui.getUsername();
    if(user == ""){
        return ui.showModal("Error", "Faltan datos")
    }
    let datos = {
        id: user,
    }
    noMasOpcion(datos)
}