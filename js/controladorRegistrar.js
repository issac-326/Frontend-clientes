
function registrar(){
    let password = document.getElementById('password').value;
    let correo = document.getElementById('email').value;

    if(password != "" && correo != ""){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "correo": correo,
        "contrasena": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("/usuarios/agregarUsuario", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}
