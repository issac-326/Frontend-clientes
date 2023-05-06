function show(){
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas")

    // ========== Checking type of password ===========
    if(password.type === "password"){
      password.type = "text";
    }
    else {
      password.type = "password";
    }
  };

function ingresar() {
    let password = document.getElementById('password').value;
    let correo = document.getElementById('email').value;
    console.log(password);
    console.log(correo);
    fetch('/usuarios', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        res.forEach(function(usuario){
            if(usuario.correo==correo && usuario.contrasena==password){
                localStorage.setItem('usuario', usuario._id);
                console.log(res);
                window.location.href = "inicio.html"
            }
        });
    }); 

}