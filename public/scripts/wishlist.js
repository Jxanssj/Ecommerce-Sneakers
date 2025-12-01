// wishlist.js
(function () {
  window.Wishlist = window.Wishlist || {};

  // --- Obtener y guardar favoritos ---
  function getWishlist() {
    try { return JSON.parse(localStorage.getItem("mi_wishlist")) || []; }
    catch (e) { return []; }
  }

  function saveWishlist(list) {
    localStorage.setItem("mi_wishlist", JSON.stringify(list));
  }

  // --- Agregar a favoritos ---
  function addToWishlist(item) {
    if (!item || !item.id) return;
    const list = getWishlist();
    const existe = list.find(p => p.id === item.id);
    if (existe) {
      alert("Este producto ya está en tu lista de favoritos.");
      return;
    }
    list.push(item);
    saveWishlist(list);
    alert(` ${item.nombre} añadido a tu lista de deseos.`);
  }

  // --- Eliminar de favoritos ---
  function removeFromWishlist(id) {
    let list = getWishlist().filter(p => p.id !== id);
    saveWishlist(list);
    renderWishlist("wishlist-container");
  }

  // --- Enviar producto al carrito ---
  function moveToCart(id) {
    const list = getWishlist();
    const producto = list.find(p => p.id === id);
    if (!producto) return;

    // Reutiliza la función del carrito
    if (window.Carrito && window.Carrito.addToCart) {
      window.Carrito.addToCart({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        talla: producto.talla || "",
        cantidad: 1
      });
      alert("🛒 Producto añadido al carrito.");
    }
  }

  // --- Renderizar la página de wishlist ---
  function renderWishlist(containerId) {
    const cont = document.getElementById(containerId);
    if (!cont) return;
    const list = getWishlist();

    if (!list.length) {
      cont.innerHTML = `<p style="text-align:center;">💔 No tienes productos en favoritos.</p>`;
      return;
    }

    let html = `<h2>Tus Favoritos</h2>`;
    html += `<div class="wishlist-grid" 
              style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;">`;

    list.forEach(p => {
      html += `
        <div class="favorito" style="border:1px solid #ddd;padding:10px;border-radius:10px;text-align:center;box-shadow:0 2px 5px rgba(0,0,0,0.1);">
          <img src="${p.imagen}" alt="${p.nombre}" style="max-width:180px;border-radius:10px;">
          <h3>${p.nombre}</h3>
          <p><strong>$${p.precio}</strong></p>
          <div style="display:flex;justify-content:center;gap:8px;">
            <button class="btn small" onclick="window.Wishlist.removeFromWishlist(${p.id})">🗑️ Eliminar</button>
            <button class="btn small" onclick="window.Wishlist.moveToCart(${p.id})">🛒 Agregar al carrito</button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    cont.innerHTML = html;
  }

  // --- Exponer funciones ---
  window.Wishlist.addToWishlist = addToWishlist;
  window.Wishlist.removeFromWishlist = removeFromWishlist;
  window.Wishlist.renderWishlist = renderWishlist;
  window.Wishlist.moveToCart = moveToCart;

})();
