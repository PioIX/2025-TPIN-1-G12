async function registro(datos) {
    response = await fetch(`http://localhost:4001/registro`,{
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
    let datos = {
        username: getUsername(),
        mail: getMail(),
        password: getPassword()
    }
    registro(datos)
}

async function login(datos) {
    response = await fetch(`http://localhost:4001/registro`,{
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
    let datos = {
        username: getUsername(),
        mail: getMail(),
        password: getPassword()
    }
    login(datos)
}