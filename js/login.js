document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const error = document.getElementById("error");

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("usuario", user);
    window.location.href = "index.html";
  } else {
    error.textContent = "Credenciales incorrectas";
    error.style.color = "red";
  }
});