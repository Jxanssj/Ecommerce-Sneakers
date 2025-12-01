document.addEventListener("DOMContentLoaded", () => {
    // Verificar si el usuario ya está autenticado
    if (!localStorage.getItem("loggedIn")) {
        mostrarLogin();
    } else {
        iniciarAplicacion();
    }
});

function mostrarLogin() {
    document.body.innerHTML = `
        <div class="login-container">
            <h2>Iniciar Sesión</h2>
            <form id="login-form">
                <label for="username">Usuario:</label>
                <input type="text" id="username" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" required>
                
                <button type="submit">Ingresar</button>
            </form>
        </div>
    `;

    document.getElementById("login-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
            localStorage.setItem("loggedIn", "true");
            iniciarAplicacion();
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
}

function iniciarAplicacion() {
    document.body.innerHTML = `
        <header>
            <h1>Bienvenido a Doña Juana</h1>
            <button id="logout">Cerrar Sesión</button>
            <nav>
                <ul>
                    <li><a href="#" id="menu-principal">Menú principal</a></li>
                    <li><a href="#" id="hombre">Hombre</a></li>
                    <li><a href="#" id="mujer">Mujer</a></li>
                     <li><a href="#" id="favoritos">Favoritos</a></li>
                    <li><a href="#" id="contacto">Contacto</a></li>
                   
                </ul>
            </nav>
        </header>
        <main id="content">
            <h2>Inicio</h2>
            <p>Explora nuestro catálogo.</p>
        </main>
    `;

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        mostrarLogin();
    });

// ✅ Menú principal
document.getElementById("menu-principal").addEventListener("click", () => {
    const content = document.getElementById("content");

    content.innerHTML = `
        <header class="logo-header">
            <video class="logo-responsive" autoplay loop muted playsinline>
                <source src="Imagenes/Animacion_Sneakers.mp4" type="video/mp4">
                Tu navegador no soporta videos.
            </video>
        </header>

        <!-- 🔹 Sección de categorías destacadas -->
        <section class="categorias-destacadas">
            <div class="categoria-card" id="ir-hombre">
                <img src="Imagenes/hombre.jpg" alt="Tenis Hombre">
                <h3>Hombre</h3>
            </div>

            <div class="categoria-card" id="ir-mujer">
                <img src="Imagenes/mujer.jpg" alt="Tenis Mujer">
                <h3>Mujer</h3>
            </div>
        </section>

        <h2>🔥Ofertas🔥</h2>
        <div id="catalogo-rebajas" class="catalogo"></div>
    `;

    // --- Enlaces a catálogos de Hombre y Mujer ---
    document.getElementById("ir-hombre").addEventListener("click", () => {
        if (window.RenderHombre) window.RenderHombre();
        else document.getElementById("content").innerHTML = "<h2>Hombre</h2><p>Catálogo no disponible</p>";
    });

    document.getElementById("ir-mujer").addEventListener("click", () => {
        if (window.RenderMujer) window.RenderMujer();
        else document.getElementById("content").innerHTML = "<h2>Mujer</h2><p>Catálogo no disponible</p>";
    });

    // --- Renderizar productos de rebajas ---
    if (window.RenderRebajas) {
        window.RenderRebajas();
    } else {
        document.getElementById("catalogo-rebajas").innerHTML = `
            <p>Catálogo no disponible</p>
            <button onclick="iniciarAplicacion()">Volver al inicio</button>
        `;
    }
});

    // Hombre
    document.getElementById("hombre").addEventListener("click", () => {
        if (window.RenderHombre) window.RenderHombre();
        else document.getElementById("content").innerHTML = "<h2>Tenis - Hombre</h2><p>Catálogo no disponible</p>";
    });

    // Mujer
    document.getElementById("mujer").addEventListener("click", () => {
        if (window.RenderMujer) window.RenderMujer();
        else document.getElementById("content").innerHTML = "<h2>Tenis - Mujer</h2><p>Catálogo no disponible</p>";
    });

   //FAVORITOS (wishlist funcional y optimizado)
document.getElementById("favoritos").addEventListener("click", () => {
    if (!window.Wishlist) {
        // Carga dinámica del script wishlist solo cuando se necesite
        const script = document.createElement("script");
        script.src = "/scripts/wishlist.js"; // ✅ nombre corregido
        script.onload = () => {
            // Redirigir al HTML de favoritos una vez cargado
            window.location.href = "/pages/wishlist.html";
        };
        script.onerror = () => {
            document.getElementById("content").innerHTML = `
                <h2>Wishlist</h2>
                <p>No disponible en este momento.</p>
            `;
        };
        document.head.appendChild(script);
    } else {
        // Si ya está cargado, redirigir directamente
        window.location.href = "/pages/wishlist.html";
    }
});

    // ✅ Contacto
    document.getElementById("contacto").addEventListener("click", () => {
        document.getElementById("content").innerHTML = `
            <img src="/Imagenes/logoDJ.png" alt="Doña Juana Sneakers Logo" width="500px" class="logo-responsive">
            <h2>Contacto</h2>
            <p>Ubicación:</p>
            <a href="https://www.google.com/maps" target="_blank">Ver en Google Maps</a>

            <h3>Tendencias:</h3>
            <a href="https://www.nike.com/mx/" target="_blank">Nike</a><br>
            <a href="https://www.adidas.mx/" target="_blank">Adidas</a><br>
            <a href="https://mx.puma.com/" target="_blank">Puma</a><br>
            <a href="https://www.reebok.mx/" target="_blank">Reebok</a><br>
            <a href="https://www.converse.com/mx" target="_blank">Converse</a><br><br>

            <button onclick="iniciarAplicacion()">Volver al inicio</button>
        `;
    });
}

/* Loader para scripts y carrito */
(function(){
    function loadScript(src, onload){
        const s = document.createElement('script');
        s.src = src;
        s.defer = true;
        document.head.appendChild(s);
        if(onload) s.onload = onload;
    }

    // 🔹 Carga en cadena de los scripts principales
    loadScript('/scripts/carrito.js', function(){
        loadScript('/scripts/hombre.js', function(){
            loadScript('/scripts/mujer.js', function(){
                loadScript('/scripts/rebajas.js'); // 👈 wishlist se carga después bajo demanda
                loadScript('/scripts/wishlist.js');
            });
        });
    });


    // 🔹 Icono del carrito
    function insertCartIcon(){
        if(document.getElementById('cart-icon')) return;
        const icon = document.createElement('div');
        icon.id = 'cart-icon';
        icon.className = 'cart-icon';
        const img = document.createElement('img');
        img.src = '/Imagenes/carrito.png';
        img.alt = 'Carrito';
        icon.appendChild(img);
        const span = document.createElement('span');
        span.id = 'cart-icon-count';
        icon.appendChild(span);
        icon.addEventListener('click', () => window.location.href = '/cart.html');
        document.body.appendChild(icon);

        if(!document.querySelector('link[href="/styles/styles.css"]')){
            const l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = '/styles/styles.css';
            document.head.appendChild(l);
        }

        setTimeout(() => {
            if(window.Carrito && window.Carrito.updateCartIcon)
                window.Carrito.updateCartIcon();
        }, 200);
    }

    document.addEventListener('DOMContentLoaded', insertCartIcon);
    window.addEventListener('storage', (e) => {
        if(e.key === 'mi_carrito' && window.Carrito && window.Carrito.updateCartIcon)
            window.Carrito.updateCartIcon();
    });
})();
