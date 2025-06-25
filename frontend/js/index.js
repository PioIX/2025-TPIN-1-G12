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