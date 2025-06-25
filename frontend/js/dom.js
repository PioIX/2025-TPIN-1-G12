class ui {
    constructor(){

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

    showModal(title, body) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").textContent = body;

        const modal = new bootstrap.Modal('#modal', {
            keyboard: true,
            focus: true
        });

        modal.show();
    }
}

