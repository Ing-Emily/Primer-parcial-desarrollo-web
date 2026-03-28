// Cargar componentes
function loadComponent(path, elementId) {
  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error("Error cargando componente:", err));
}

loadComponent("components/Header/header.html", "header");
loadComponent("components/Footer/footer.html", "footer");
loadComponent("components/Sidebar/sidebar.html", "sidebar");


// Web Component
class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
<style>
  .card {
    border-radius: 15px;
    overflow: hidden;
    background: white;
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
    transition: 0.3s;
  }

  .card:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .info {
    padding: 15px;
  }

  h3 {
    margin: 0;
    color: #8B0000;
    font-size: 18px;
  }

  p {
    margin: 6px 0;
    color: #333;
  }

  .price {
    font-weight: bold;
    font-size: 16px;
  }
</style>

      <div class="card">
        <img src="${this.getAttribute("imagen") || ''}">
        <div class="info">
          <h3>${this.getAttribute("nombre") || 'Sin nombre'}</h3>
          <p>${this.getAttribute("descripcion") || ''}</p>
          <p class="price">$${this.getAttribute("precio") || '0'}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);


// Render productos
function renderProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(prod => {
    const card = document.createElement("product-card");

    card.setAttribute("nombre", prod.nombre);
    card.setAttribute("precio", prod.precio);
    card.setAttribute("descripcion", prod.descripcion);
    card.setAttribute("imagen", prod.imagen);

    container.appendChild(card);
  });
}


// Fetch productos
let productosGlobal = [];

fetch("data/productos.json")
  .then(res => res.json())
  .then(data => {
    productosGlobal = data;
    renderProducts(data);
  })
  .catch(err => console.error("Error cargando productos:", err));


// Filtro
function filtrar(categoria) {
  const filtrados = categoria === "todos"
    ? productosGlobal
    : productosGlobal.filter(p => p.categoria === categoria);

  renderProducts(filtrados);
}


// Bienvenida
const user = localStorage.getItem("usuario");

if (user) {
  setTimeout(() => {
    const bienvenida = document.getElementById("bienvenida");
    if (bienvenida) {
      bienvenida.textContent = "Bienvenido, " + user;
    }
  }, 500);
}
function mostrarContacto() {
  document.querySelector(".content h2").textContent = "Contacto";

  fetch("Contacto/contacto.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("products").innerHTML = data;
    })
    .catch(err => console.error("Error cargando contacto:", err));
}