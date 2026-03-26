// 🔗 Cargar componentes
function cargar(ruta, id) {
    fetch(ruta)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

cargar("components/Header/header.html", "header");
cargar("components/Sidebar/sidebar.html", "sidebar");
cargar("components/Footer/footer.html", "footer");


// 🛒 Comprar
function comprar(producto) {
    alert("Agregaste: " + producto);
}


// 🌊 Fondo animado
const canvas = document.getElementById("fondo");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let burbujas = [];

for (let i = 0; i < 40; i++) {
    burbujas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 10 + 5,
        dy: Math.random() * 1
    });
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    burbujas.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(178,34,34,0.2)";
        ctx.fill();

        b.y -= b.dy;

        if (b.y < 0) b.y = canvas.height;
    });

    requestAnimationFrame(animar);
}

animar();
fetch("data/productos.json")
    .then(res => res.json())
    .then(data => {
        let contenedor = document.getElementById("contenedorProductos");

        data.forEach(p => {
            contenedor.innerHTML += `
                <div class="card">
                    <img src="${p.imagen}">
                    <h3>${p.nombre}</h3>
                    <p>$${p.precio}</p>
                    <button onclick="comprar('${p.nombre}')">Comprar</button>
                </div>
            `;
        });
    });
    div.innerHTML = `
    <img src="${p.imagen}" width="150">
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <button onclick="comprar('${p.nombre}')">Comprar</button>
`;
function comprar(producto) {
    alert("Agregaste " + producto + " al carrito 🛒");
}
function irAProductos() {
    document.getElementById("contenedorProductos").scrollIntoView({
        behavior: "smooth"
    });
}