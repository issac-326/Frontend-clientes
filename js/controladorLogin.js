function ingresar() {
    let password = document.getElementById('password').value;
    let correo = document.getElementById('email').value;
    fetch('/usuarios', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        res.forEach(function(usuario){
            if(usuario.correo==correo && usuario.contraseña==password){
                localStorage.setItem('usuario', usuario._id);
                window.location.href = "inicio.html"
            }
        });
    }); 

}