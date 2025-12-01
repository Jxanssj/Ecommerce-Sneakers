//codigo rebajas.js
(function(){
    const productosRebaja = [
        {
            id: 201,
            nombre: "Nike",
            marca: "Nike Dunk",
            precioOriginal: 2899,
            precio: 2299,
            descuento: 20,
            colores:{
                rojo:{
                    nombre:'Rojo',
                    imagenes:['Imagenes/nikedun2000-2.png','Imagenes/nikedun2000-1.png','Imagenes/nikedun2000-3.png','Imagenes/nikedun2000-4.png','Imagenes/nikedun2000-5.png'],
                    overlay:'Imagenes/nike270-overlay.png',
                    colorHex:'#bb9a0ae5'
                }
            },
            tallas: ["25", "26", "27", "28"]
        },
        {
            id: 202,
            nombre: "Adidas Ultraboost 22",
            marca: "Adidas",
            precioOriginal: 3299,
            precio: 2799,
            descuento: 15,
            colores:{
                azul:{
                    nombre:'Azul',
                    imagenes:['Imagenes/ad0-4.jpg','Imagenes/ad0-1.jpg','Imagenes/ad0-2.jpg','Imagenes/ad0-3.jpg'],
                    overlay:'Imagenes/ultraboost-overlay.png',
                    colorHex:'#e4b639ff'
                }
            },
            tallas: ["24", "25", "26", "27"]
        },
        {
            id: 203,
            nombre: "Vans Upland",
            marca: "Vans",
            precioOriginal: 2499,
            precio: 1999,
            descuento: 20,
            colores:{
                negro:{
                    nombre:'Negro',
                    imagenes:['Imagenes/skate000-1.png','Imagenes/skate000-2.png','Imagenes/skate000-3.png','Imagenes/skate000-4.png'],
                    overlay:'Imagenes/rsx3-overlay.png',
                    colorHex:'#3fb47eff'
                }
            },
            tallas: ["25", "26", "27"]
        }
    ];
// ---------- FUNCIÓN DE CÁMARA CON OVERLAY MÓVIL Y ZOOM ----------
function abrirCamaraTryOn(overlaySrc){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    alert('Tu navegador no soporta cámara.');
    return;
  }
  const existente=document.getElementById('tryon-modal');
  if(existente) existente.remove();

  const modal=document.createElement('div');
  modal.id='tryon-modal';
  Object.assign(modal.style,{
    position:'fixed',left:0,top:0,right:0,bottom:0,
    background:'rgba(0,0,0,0.7)',
    display:'flex',alignItems:'center',justifyContent:'center',
    zIndex:9999
  });

  const panel=document.createElement('div');
  Object.assign(panel.style,{
    width:'90vw',maxWidth:'900px',height:'80vh',
    background:'#111',padding:'8px',borderRadius:'8px',
    position:'relative',display:'flex',flexDirection:'column'
  });

  const header=document.createElement('div');
  Object.assign(header.style,{
    display:'flex',justifyContent:'space-between',alignItems:'center',
    marginBottom:'6px',color:'#fff'
  });
  header.innerHTML=`<strong>Probar tenis (cámara)</strong>`;

  const closeBtn=document.createElement('button');
  closeBtn.textContent='Cerrar';
  closeBtn.className='btn';
  closeBtn.onclick=()=>{stopStream();modal.remove();};
  header.appendChild(closeBtn);

  const area=document.createElement('div');
  Object.assign(area.style,{
    flex:1,position:'relative',background:'#000',overflow:'hidden',
    display:'flex',alignItems:'center',justifyContent:'center'
  });

  const video=document.createElement('video');
  video.autoplay=true;video.playsInline=true;
  Object.assign(video.style,{width:'100%',height:'100%',objectFit:'cover'});

  const overlay=document.createElement('img');
  overlay.src=overlaySrc||'';
  Object.assign(overlay.style,{
    position:'absolute',
    left:'50%',top:'60%',
    transform:'translate(-50%,-50%) scale(0.6)',
    touchAction:'none',
    cursor:'move',
    maxWidth:'80%',
    maxHeight:'60%'
  });

  area.appendChild(video);
  area.appendChild(overlay);
  panel.appendChild(header);
  panel.appendChild(area);
  modal.appendChild(panel);
  document.body.appendChild(modal);

  // ---- Control de cámara ----
  let streamRef=null;
  navigator.mediaDevices.getUserMedia({video:true})
    .then(s=>{streamRef=s;video.srcObject=s;video.play().catch(()=>{});})
    .catch(err=>{alert('No se pudo acceder a la cámara: '+err.message);modal.remove();});

  function stopStream(){
    if(streamRef){streamRef.getTracks().forEach(t=>t.stop());streamRef=null;}
  }

  modal.addEventListener('click',e=>{
    if(e.target===modal){stopStream();modal.remove();}
  });

  // ---- Movimiento y zoom del overlay ----
  let pos = {x:50, y:60, scale:0.6};
  let isDragging = false;
  let start = {x:0, y:0};

  function updateTransform(){
    overlay.style.transform = `translate(-50%, -50%) translate(${pos.x - 50}%, ${pos.y - 50}%) scale(${pos.scale})`;
  }

  overlay.addEventListener('pointerdown', e=>{
    e.preventDefault();
    isDragging = true;
    overlay.setPointerCapture(e.pointerId);
    start.x = e.clientX;
    start.y = e.clientY;
  });

  overlay.addEventListener('pointermove', e=>{
    if(!isDragging) return;
    e.preventDefault();
    const dx = (e.clientX - start.x) / area.clientWidth * 100;
    const dy = (e.clientY - start.y) / area.clientHeight * 100;
    pos.x += dx;
    pos.y += dy;
    start.x = e.clientX;
    start.y = e.clientY;
    updateTransform();
  });

  overlay.addEventListener('pointerup', e=>{
    isDragging = false;
    overlay.releasePointerCapture(e.pointerId);
  });

  // Zoom con rueda del ratón
  overlay.addEventListener('wheel', e=>{
    e.preventDefault();
    pos.scale += (e.deltaY < 0 ? 0.05 : -0.05);
    pos.scale = Math.max(0.2, Math.min(2, pos.scale)); // límites de zoom
    updateTransform();
  }, {passive:false});

  // Zoom táctil con dos dedos
  let touchDist = 0;
  area.addEventListener('touchmove', e=>{
    if(e.touches.length===2){
      e.preventDefault();
      const dx=e.touches[0].clientX - e.touches[1].clientX;
      const dy=e.touches[0].clientY - e.touches[1].clientY;
      const dist=Math.hypot(dx,dy);
      if(touchDist){
        const scaleChange=(dist-touchDist)/200;
        pos.scale = Math.max(0.2, Math.min(2, pos.scale + scaleChange));
        updateTransform();
      }
      touchDist=dist;
    }
  },{passive:false});
  area.addEventListener('touchend', ()=>touchDist=0);
}
window.abrirCamaraTryOn=abrirCamaraTryOn;

// ---------- MODAL DE IMAGEN CON GIRO 360°, RESEÑAS Y ZOOM TIPO LUPA FUNCIONAL ----------
function abrirModalImagen(p){
  const existente=document.getElementById('zoom-modal');
  if(existente) existente.remove();

  const coloresDisponibles=Object.keys(p.colores);
  let colorSel=coloresDisponibles[0];
  let imgs=p.colores[colorSel].imagenes;
  let idx=0;

  const modal=document.createElement('div');
  modal.id='zoom-modal';
  Object.assign(modal.style,{
    position:'fixed',left:0,top:0,right:0,bottom:0,
    background:'rgba(0,0,0,0.85)',display:'flex',alignItems:'center',
    justifyContent:'center',zIndex:9999,gap:'20px',padding:'20px'
  });

  // Botón X
  const cerrar = document.createElement('button');
  cerrar.innerHTML = 'X';
  Object.assign(cerrar.style, {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '22px',
    cursor: 'pointer'
  });
  cerrar.onclick=()=>modal.remove();
  modal.appendChild(cerrar);

  // Panel de colores
  const panelColores=document.createElement('div');
  Object.assign(panelColores.style,{
    width:'120px',background:'#222',color:'#fff',borderRadius:'10px',
    padding:'10px',display:'flex',flexDirection:'column',
    alignItems:'center',gap:'8px'
  });
  const titulo=document.createElement('h4');
  titulo.textContent='Colores';
  titulo.style.textAlign='center';
  panelColores.appendChild(titulo);

  coloresDisponibles.forEach(clave=>{
    const color=p.colores[clave];
    const btn=document.createElement('button');
    Object.assign(btn.style,{
      width:'30px',height:'30px',borderRadius:'50%',
      border:'2px solid #fff',cursor:'pointer',
      background:color.colorHex
    });
    if(clave===colorSel) btn.style.outline='2px solid rgba(0, 255, 0, 0.22)';
    btn.onclick=()=>{
      colorSel=clave;
      imgs=p.colores[colorSel].imagenes;
      idx=0;
      img.src=imgs[0];
      document.querySelectorAll('.color-btn').forEach(b=>b.style.outline='none');
      btn.style.outline='2px solid #0f0';
    };
    btn.classList.add('color-btn');
    panelColores.appendChild(btn);
  });

  // Imagen principal
  const contenido=document.createElement('div');
  Object.assign(contenido.style,{
    display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'
  });

  const img=document.createElement('img');
  img.src=imgs[0];
  Object.assign(img.style,{
    maxWidth:'70vw',maxHeight:'80vh',transition:'transform 0.1s',
    transformOrigin:'center',cursor:'crosshair'
  });

  const giroBtn=document.createElement('button');
  giroBtn.textContent='🌀 Girar 360°';
  giroBtn.className='btn';
  contenido.appendChild(img);
  contenido.appendChild(giroBtn);

  // --- Giro 360° ---
  let girando = false;
  giroBtn.onclick = () => {
    girando = !girando;
    giroBtn.textContent = girando ? '⏹️ Detener giro' : '🌀 Girar 360°';
    
    if (girando) {
      let startX = 0;
      img.addEventListener('mousedown', startDrag);
      img.addEventListener('mouseup', endDrag);
      img.addEventListener('mouseleave', endDrag);
    } else {
      img.removeEventListener('mousedown', startDrag);
      img.removeEventListener('mouseup', endDrag);
      img.removeEventListener('mouseleave', endDrag);
    }

    function startDrag(e) {
      startX = e.clientX;
      img.addEventListener('mousemove', onMove);
    }

    function endDrag() {
      img.removeEventListener('mousemove', onMove);
    }

    function onMove(e) {
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 20) {
        idx = (idx + (delta > 0 ? 1 : -1) + imgs.length) % imgs.length;
        img.src = imgs[idx];
        startX = e.clientX;
      }
    }
  };

  // --- ZOOM TIPO LUPA (ACTIVABLE CON DOBLE CLICK) ---
  let lupaActiva = false;

  const lupa = document.createElement('div');
  Object.assign(lupa.style, {
    position: 'absolute',
    border: '2px solid #fff',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    overflow: 'hidden',
    display: 'none',
    pointerEvents: 'none',
    zIndex: 10000,
    boxShadow: '0 0 10px rgba(255,255,255,0.3)',
  });

  const lupaImg = document.createElement('img');
  lupaImg.src = img.src;
  Object.assign(lupaImg.style, {
    position: 'absolute',
    transformOrigin: 'top left',
  });

  lupa.appendChild(lupaImg);
  document.body.appendChild(lupa);

  const zoomFactor = 2.5; // nivel de zoom

  // Doble click para activar/desactivar lupa
  img.addEventListener('dblclick', () => {
    lupaActiva = !lupaActiva;
    if (!lupaActiva) lupa.style.display = 'none';
  });

  // Movimiento solo si está activa
  img.addEventListener('mousemove', (e) => {
    if (!lupaActiva) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      lupa.style.display = 'none';
      return;
    }

    lupa.style.display = 'block';
    lupa.style.left = (e.pageX - 75) + 'px';
    lupa.style.top = (e.pageY - 75) + 'px';

    lupaImg.src = img.src;
    lupaImg.style.width = rect.width * zoomFactor + 'px';
    lupaImg.style.height = rect.height * zoomFactor + 'px';

    lupaImg.style.left = -x * zoomFactor + 75 + 'px';
    lupaImg.style.top = -y * zoomFactor + 75 + 'px';
  });

  img.addEventListener('mouseleave', () => {
    lupa.style.display = 'none';
  });

  // Si cambia la imagen (por cambio de color o giro), actualizar la lupa
  const observer = new MutationObserver(() => {
    lupaImg.src = img.src;
  });
  observer.observe(img, { attributes: true, attributeFilter: ['src'] });

  // Reseñas
  const lateral=document.createElement('div');
  Object.assign(lateral.style,{
    width:'280px',background:'#222',color:'#fff',borderRadius:'10px',
    padding:'10px',overflowY:'auto',maxHeight:'80%'
  });
  lateral.innerHTML=`
    <h3 style="text-align:center">Reseñas</h3>
    <div><strong>Juan Pérez ⭐⭐⭐⭐☆</strong><br>Excelente comodidad, muy buena amortiguación.</div><hr>
    <div><strong>Diego Martínez ⭐⭐⭐⭐⭐</strong><br>Diseño moderno, materiales resistentes.</div><hr>
    <div><strong>Carlos Rivera ⭐⭐⭐⭐☆</strong><br>Muy cómodos para uso diario.</div>
  `;

  modal.appendChild(panelColores);
  modal.appendChild(contenido);
  modal.appendChild(lateral);
  document.body.appendChild(modal);
}

    // ---------- RENDER DE REBAJAS CON ESTILO CONSISTENTE ----------
    window.RenderRebajas=()=>{
        const catalogo = document.getElementById('catalogo-rebajas'); // usar contenedor existente
        if(!catalogo) return;
        catalogo.innerHTML=''; // limpiar antes de renderizar

        productosRebaja.forEach(p=>{
            const colorDefault=Object.keys(p.colores)[0];
            const imgPreview=p.colores[colorDefault].imagenes[0];

            const div=document.createElement('div');
            div.className='producto';
      div.innerHTML=`
          <img src="${imgPreview}" alt="${p.nombre}" class="img-tenis" style="cursor:pointer;border-radius:10px;max-width:250px;">
          <h3>${p.nombre}</h3>
          <p class="precio">
            <span style="text-decoration:line-through;color:#888;">$${p.precioOriginal}</span>
            <span style="color:#e53935;font-weight:bold;margin-left:6px;">$${p.precio}</span>
            <span style="color:#2e7d32;font-size:0.9em;margin-left:4px;">(-${p.descuento}%)</span>
          </p>
          <div class="color-options" style="display:flex;justify-content:center;gap:6px;margin:8px 0;"></div>
          <label>Talla: 
            <select class="talla">
              ${Array.from({length:7},(_,i)=>21+i).map(t=>`<option>${t}</option>`).join('')}
            </select>
          </label>
          <label style="display:block;margin-top:4px;">Cantidad: 
            <input type="number" class="cantidad" min="1" max="5" value="1" style="width:60px;">
          </label>
          <div style="display:flex;gap:6px;justify-content:center;margin-top:10px">
  <button class="btn small giro-btn"
    style="background:transparent;color:black;border:1.8px solid black;
    padding:6px 10px;border-radius:6px;cursor:pointer;transition:0.3s;">
    Ver detalles
  </button>

  <button class="btn small tryon-btn"
    style="background:transparent;color:black;border:1.8px solid black;
    padding:6px 10px;border-radius:6px;cursor:pointer;transition:0.3s;">
    Probar en cámara
  </button>
</div>

<p>
  <button class="btn add" data-id="${p.id}"
    style="background:transparent;color:black;border:1.8px solid black;
    padding:8px 14px;border-radius:8px;margin-top:10px;cursor:pointer;transition:0.3s;">
    Añadir al carrito
  </button>
</p>
      `;

            const img=div.querySelector('.img-tenis');
            img.onclick=()=>abrirModalImagen(p);

            div.querySelector('.giro-btn').onclick=()=>abrirModalImagen(p);
            div.querySelector('.tryon-btn').onclick=()=>abrirCamaraTryOn(p.colores[colorDefault].overlay);

            const contColor=div.querySelector('.color-options');
            Object.values(p.colores).forEach(col=>{
                const btn=document.createElement('button');
                Object.assign(btn.style,{
                    background:col.colorHex,
                    border:'2px solid #fff',
                    borderRadius:'50%',
                    width:'22px',
                    height:'22px',
                    cursor:'pointer'
                });
                contColor.appendChild(btn);
            });

            catalogo.appendChild(div);
        });
    };
})();
