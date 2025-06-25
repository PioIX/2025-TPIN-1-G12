async function registro(datos) {
    response = await fetch(`http://localhost:4000/registro`,{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos)
    })
    let result = await response.json()
    console.log(result)
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
    console.log(result)
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