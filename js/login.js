function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        alert("Bienvenido");
        window.location.href = "index.html";
        return false;
    } else {
        alert("Datos incorrectos");
        return false;
    }
}