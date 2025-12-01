// carrito.js - versión estable con descarga PDF vía html2pdf
(function(){
  window.Carrito = window.Carrito || {};

  function getCart(){
    try{ return JSON.parse(localStorage.getItem("mi_carrito")) || [] }
    catch(e){ return []; }
  }
  function saveCart(cart){
    localStorage.setItem("mi_carrito", JSON.stringify(cart));
    updateCartIcon();
  }

  function addToCart(item){
    if(!item || !item.id) return;
    const cart = getCart();
    const idx = cart.findIndex(i=>i.id===item.id && i.talla===item.talla);
    if(idx !== -1) cart[idx].cantidad += (item.cantidad||1);
    else cart.push(Object.assign({cantidad:item.cantidad||1}, item));
    saveCart(cart);
    alert(`${item.nombre} agregado al carrito.`);
  }

  function removeItem(index){
    const cart = getCart();
    cart.splice(index,1);
    saveCart(cart);
    renderCartPage("cart-container");
  }

  function vaciarCarrito(){
    localStorage.removeItem("mi_carrito");
    updateCartIcon();
  }

  function totalCount(){
    return getCart().reduce((s,i)=>s+i.cantidad,0);
  }

  function updateCartIcon(){
    const el = document.getElementById('cart-icon-count');
    if(!el) return;
    const c = totalCount();
    el.textContent = c>0 ? String(c) : '';
  }

  function cambiarCantidad(index, delta){
    const cart = getCart();
    if(!cart[index]) return;
    cart[index].cantidad = Math.max(1, cart[index].cantidad + delta);
    saveCart(cart);
    renderCartPage("cart-container");
  }

  // ---------- renderCartPage (3 pasos) ----------
  function renderCartPage(containerId){
    const container = document.getElementById(containerId);
    if(!container) return;
    const cart = getCart();

    if(!cart.length){
      container.innerHTML = '<div class="empty"><p>No hay productos en el carrito.</p></div>';
      return;
    }

    let paso = 1;
    mostrarPaso();

    function mostrarPaso(){
      if(paso===1) mostrarPaso1();
      else if(paso===2) mostrarPaso2();
      else mostrarPaso3();
    }

    // ---------- Paso 1 ----------
    function mostrarPaso1(){
      let html = '<h2>Paso 1: Revisa tu carrito 🛒</h2>';
      html += '<table class="tabla-carrito"><tr><th>Producto</th><th>Talla</th><th>Precio</th><th>Cant.</th><th>Total</th><th></th></tr>';
      let total = 0;
      cart.forEach((i, idx)=>{
        const tieneDescuento = i.precioOriginal && i.precioOriginal > i.precio;
        const subtotal = Number(i.precio) * Number(i.cantidad);
        total += subtotal;
        const precioHtml = tieneDescuento
          ? `<del>$${i.precioOriginal}</del><br><span class="oferta">$${i.precio}</span><br><span class="desc">-${i.descuento || Math.round(100 - (i.precio / i.precioOriginal * 100))}%</span>`
          : `$${i.precio}`;
        html += `<tr>
          <td>${i.nombre}</td>
          <td>${i.talla || ''}</td>
          <td>${precioHtml}</td>
          <td>
            <div class="cantidad-control">
              <button class="btn-cant" onclick="window.Carrito.cambiarCantidad(${idx}, -1)">-</button>
              <span>${i.cantidad}</span>
              <button class="btn-cant" onclick="window.Carrito.cambiarCantidad(${idx}, 1)">+</button>
            </div>
          </td>
          <td>$${(subtotal).toFixed(2)}</td>
          <td><button class="btn small" onclick="window.Carrito.removeItem(${idx})">🗑️</button></td>
        </tr>`;
      });
      html += `</table><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
      // ahorro
      const ahorro = cart.reduce((s,i)=>{
        return s + ((i.precioOriginal && i.precioOriginal > i.precio) ? ((i.precioOriginal - i.precio) * i.cantidad) : 0);
      },0);
      if(ahorro>0) html += `<p class="ahorro">💸 Ahorraste $${ahorro.toFixed(2)} en esta compra</p>`;
      html += '<button class="btn" id="continuar1">Continuar 🚚</button>';
      container.innerHTML = html;
      document.getElementById("continuar1").onclick = ()=>{ paso = 2; mostrarPaso(); };
    }

    // ---------- Paso 2 (estilizado) ----------
    function mostrarPaso2(){
      container.innerHTML = `
        <div class="paso-envio">
          <h2>Paso 2: Datos de envío 🚚</h2>
          <form id="form-envio" class="form-envio">
            <label>Nombre completo:<input id="nombre-envio" required placeholder="Ej. Juan Pérez"></label>
            <label>Dirección:<input id="direccion-envio" required placeholder="Calle, número, colonia"></label>
            <label>Ciudad:<input id="ciudad-envio" required placeholder="Tu ciudad"></label>
            <label>Código Postal:<input id="cp-envio" required placeholder="Ej. 12345"></label>
            <div class="botones-envio">
              <button class="btn primary" type="submit">Continuar al pago 💳</button>
              <button class="btn small" type="button" id="volver1">Volver</button>
            </div>
          </form>
        </div>
      `;
      const form = document.getElementById("form-envio");
      form.onsubmit = (e)=>{ e.preventDefault(); paso = 3; mostrarPaso(); };
      document.getElementById("volver1").onclick = ()=>{ paso = 1; mostrarPaso(); };
    }

    // ---------- Paso 3: preview + descarga (usa html2pdf) ----------
    function mostrarPaso3(){
      const total = cart.reduce((s,i)=>s + (Number(i.precio) * Number(i.cantidad)), 0);
      const nombre = document.getElementById("nombre-envio")?.value || "Cliente";
      const direccion = document.getElementById("direccion-envio")?.value || "No especificada";

      let ticketHtml = `
        <div id="ticket-preview" class="ticket vista">
          <img src="/imagenes/logoDJ.png" alt="Logo" class="logo-ticket" onerror="this.style.display='none'">
          <h3 style="text-align:center;margin-bottom:8px">Ticket de compra</h3>
          <p><strong>Cliente:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Dirección:</strong> ${escapeHtml(direccion)}</p>
          <table style="width:100%;margin-top:8px">
            <tr><th style="text-align:left">Producto</th><th>Cant.</th><th style="text-align:right">Subtotal</th></tr>
            ${cart.map(i=>{
              const tieneDescuento = i.precioOriginal && i.precioOriginal > i.precio;
              const precioText = tieneDescuento
                ? `<del>$${i.precioOriginal}</del> <span class="oferta">$${i.precio}</span>`
                : `$${i.precio}`;
              return `<tr>
                <td style="text-align:left">${escapeHtml(i.nombre)}<br><small>${precioText}</small></td>
                <td style="text-align:center">${i.cantidad}</td>
                <td style="text-align:right">$${(Number(i.precio)*Number(i.cantidad)).toFixed(2)}</td>
              </tr>`;
            }).join('')}
          </table>
          <p style="text-align:right;margin-top:8px"><strong>Total: $${total.toFixed(2)}</strong></p>
          <p style="text-align:right;margin-top:0"><small>Gracias por tu compra 👟</small></p>
        </div>
      `;

      container.innerHTML = `
        <h2>Paso 3: Confirmar compra 💳</h2>
        ${ticketHtml}
        <div style="text-align:center;margin-top:10px">
          <button class="btn primary" id="descargarTicket">Descargar Ticket 📄</button>
          <button class="btn primary" id="confirmar">Confirmar compra ✅</button>
          <button class="btn small" id="volver2">Volver</button>
        </div>
      `;

      document.getElementById("volver2").onclick = ()=>{ paso = 2; mostrarPaso(); };
      document.getElementById("confirmar").onclick = ()=>{
        alert("✅ ¡Compra completada! Gracias por tu pedido.");
        vaciarCarrito();
        renderCartPage(containerId);
      };

      // descargar con html2pdf
      document.getElementById("descargarTicket").onclick = ()=>{
        const el = document.getElementById("ticket-preview");
        if(!el){
          alert("No hay ticket para descargar.");
          return;
        }

        // opciones html2pdf
        const opt = {
          margin:       [0.5, 0.5, 0.5, 0.5], // top, left, bottom, right (in inches)
          filename:     'ticket_sneakers.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, logging: false, useCORS: true },
          jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        // Ejecutar - html2pdf manejará logo y estilos de la vista previa
        try {
          window.html2pdf().set(opt).from(el).save();
        } catch(err){
          console.error("Error generando PDF con html2pdf:", err);
          alert("Error generando el PDF. Revisa la consola.");
        }
      };
    } // fin mostrarPaso3

  } // fin renderCartPage

  // escape básico para texto en ticket
  function escapeHtml(text){
    return String(text).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
  }

  // exponer funciones
  window.Carrito.addToCart = addToCart;
  window.Carrito.removeItem = removeItem;
  window.Carrito.updateCartIcon = updateCartIcon;
  window.Carrito.renderCartPage = renderCartPage;
  window.Carrito.cambiarCantidad = cambiarCantidad;

  document.addEventListener('DOMContentLoaded', ()=> setTimeout(updateCartIcon,200));
})();
