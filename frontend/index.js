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
    user = getUsername();
    mail = getMail();
    password = getPassword();
    if(user == "" || mail == "" || password == ""){
        return "Error; falta ingresar datos"
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
    user = getUsername();
    password = getPassword();
    if(user == "" || password == ""){
        return "Error; falta ingresar datos"
    }
    let datos = {
        username: getUsername(),
        password: getPassword()
    }
    login(datos)
}