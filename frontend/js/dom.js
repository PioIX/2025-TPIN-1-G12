class UI {
    constructor(){

    }

    showModal(title, body) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").textContent = body;

        const modal = new bootstrap.Modal('#modal', {
            keyboard: true,
            focus: true
        });

        modal.show();
    }

    getUsername(){
        let usuario = document.getElementById("user").value
        return usuario
    }
    
    getMail(){
        let usuario = document.getElementById("mail").value
        return usuario
    }
    
    getPassword(){
        let usuario = document.getElementById("password").value
        return usuario
    }

    getCategoryAdd(){
        let usuario = document.getElementById("select").value
        return usuario
    }

    getContent(){
        let usuario = document.getElementById("contenido").value
        return usuario
    }

    getOpcion1(){
        let usuario = document.getElementById("opcion-1").value
        return usuario
    }

    getOpcion2(){
        let usuario = document.getElementById("opcion-2").value
        return usuario
    }

    getOpcion3(){
        let usuario = document.getElementById("opcion-3").value
        return usuario
    }

    getOpcion4(){
        let usuario = document.getElementById("opcion-4").value
        return usuario
    }

    getCategoryMod(){
        let usuario = document.getElementById("select2").value
        return usuario
    }

    getModPreg(){
        let usuario = document.getElementById("preguntaid-2").value
        return usuario
    }

    getContentMod(){
        let usuario = document.getElementById("contenido2").value
        return usuario
    }

    getOpcion1M(){
        let usuario = document.getElementById("opcion-1-2").value
        return usuario
    }

    getOpcion2M(){
        let usuario = document.getElementById("opcion-2-2").value
        return usuario
    }

    getOpcion3M(){
        let usuario = document.getElementById("opcion-3-2").value
        return usuario
    }

    getOpcion4M(){
        let usuario = document.getElementById("opcion-4-2").value
        return usuario
    }

    getElimUser(){
        let usuario = document.getElementById("usuarioid-1").value
        return usuario
    }

    getElimPoints(){
        let usuario = document.getElementById("usuarioid-2").value
        return usuario
    }
    
    getElimPreg(){
        let usuario = document.getElementById("preguntaid-1").value
        return usuario
    }

    getTrue1(){
        let verif = document.getElementById("correcto-1").checked
        return verif
    }

    getTrue2(){
        let verif = document.getElementById("correcto-2").checked
        return verif
    }

    getTrue3(){
        let verif = document.getElementById("correcto-3").checked
        return verif
    }

    getTrue4(){
        let verif = document.getElementById("correcto-4").checked
        return verif
    }

    getTrue1M(){
        let verif = document.getElementById("correcto-5").checked
        return verif
    }

    getTrue2M(){
        let verif = document.getElementById("correcto-6").checked
        return verif
    }

    getTrue3M(){
        let verif = document.getElementById("correcto-7").checked
        return verif
    }

    getTrue4M(){
        let verif = document.getElementById("correcto-8").checked
        return verif
    }

    getJuego(){
        let verif = document.getElementById("contenido-3").style.display
        console.log(verif)
        return verif
    }
}

const ui = new UI();

