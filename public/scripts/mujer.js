// catalogo-mujer.js
(function(){
  const productos = [
    {
      id: 1,
      nombre: 'Nike Air Zoom Pegasus',
      marca: 'Nike',
      precio: 1499,
      colores: {
        cafe: {
          nombre: 'Cafe',
          imagenes: [
            'Imagenes/nikevino2000-4.png','Imagenes/nikevino2000-1.png','Imagenes/nikevino2000-3.png','Imagenes/nikevino2000-2.png','Imagenes/nikevino2000-5.png','Imagenes/nikevino2000-6.png'
          ],
          overlay: 'Imagenes/nikevino2000-overlay.png',
          colorHex: '#a33c0077'
        },
        negro: {
          nombre: 'Cafe',
          imagenes: [
            'Imagenes/nikevino2000-2.png','Imagenes/nikevino2000-1.png','Imagenes/nikevino2000-3.png','Imagenes/nikevino2000-4.png','Imagenes/nikevino2000-5.png','Imagenes/nikevino2000-6.png'
          ],
          overlay: 'Imagenes/nikevino2000-overlay.png',
          colorHex: '#00000077'
        },
        blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/a90-blanco-1.jpg','Imagenes/a90-blanco-2.jpg',
            'Imagenes/a90-blanco-3.jpg','Imagenes/a90-blanco-4.jpg'
          ],
          overlay: 'Imagenes/a90-blanco-overlay.png',
          colorHex: '#f5f5f5'
        }
      }
    },
    {
      id: 2,
      nombre: 'Adi 2000',
      marca: 'Adidas',
      precio: 3499,
      colores: {  
        beige: {
          nombre: 'Beige',
          imagenes: [
            'Imagenes/ad0-4.jpg','Imagenes/ad0-1.jpg','Imagenes/ad0-2.jpg','Imagenes/ad0-3.jpg'
          ],
          overlay: 'Imagenes/ad0-4-overlay.png',
          colorHex: '#d39c36ff'
        },
        negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/adi2000-1.jpg','Imagenes/adi2000-2.jpg','Imagenes/adi2000-3.jpg','Imagenes/adi2000-4.jpg','Imagenes/adi2000-5.jpg'
          ],
          overlay: 'Imagenes/adi200-overlay.png',
          colorHex: '#000000'
        },
       
       
     azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/adi2000-a-1.jpg','Imagenes/adi2000-a-2.jpg','Imagenes/adi2000-a-3.jpg','Imagenes/adi2000-a-4.jpg'
          ],
          overlay: 'Imagenes/adi200-overlay.png',
          colorHex: '#1976d2'
        },
      }
    },
    {
      id: 3,
      nombre: 'Vans Upland',
      marca: 'Vans',
      precio: 1599,
      colores: {
       
        azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/va000-1.png','Imagenes/va000-2.png','Imagenes/va000-3.png'
          ],
          overlay: 'Imagenes/va000-overlay.png',
          colorHex: '#09e0d6ff'
        }, 
        verde: {
          nombre: 'Verde',
          imagenes: [
            'Imagenes/vans000-1.jpg','Imagenes/vans000-2.jpg','Imagenes/vans000-3.jpg','Imagenes/vans000-4.jpg'
          ],
          overlay: 'Imagenes/vans000-overlay.png',
          colorHex: '#218d0bbb'
        },
          amarillo: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/vaup-b-1.jpg','Imagenes/vaup-b-2.jpg','Imagenes/vaup-b-1.jpg','Imagenes/vaup-b-4.jpg','Imagenes/vaup-b-5.jpg'
          ],
          overlay: 'Imagenes/vaup-b-overlay.png',
          colorHex: '#000000'
        }
      }
    },
    {
      id: 4,
      nombre: 'Jordan 1 Low',
      marca: 'Nike',
      precio: 2499,
      colores: {
        azul: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/panda000-1.jpg','Imagenes/panda000-2.jpg','Imagenes/panda000-3.jpg','Imagenes/panda000-4.jpg'
          ],
          overlay: 'Imagenes/panda000-overlay.png',
          colorHex: '#000000bb'
        },
        rojo: {
          nombre: 'Rojo',
          imagenes: [
            'Imagenes/jordan-r-1.jpg','Imagenes/jordan-r-2.jpg','Imagenes/jordan-r-3.jpg','Imagenes/jordan-r-1.jpg'
          ],
          overlay: 'Imagenes/jordan-r-overlay.png',
          colorHex: '#ff0202ff'
        },
          cafe: {
          cafe: 'Negro',
           imagenes: [
            'Imagenes/dunk-c-1.jpg','Imagenes/dunk-c-2.jpg','Imagenes/dunk-c-3.jpg','Imagenes/dunk-c-4.jpg'
          ],
          overlay: 'Imagenes/dunk-c-overlay.png',
          colorHex: '#7c3d08ff'
        }
      }
    },
      {
      id: 5,
      nombre: 'old skul',
      marca: 'Vans',
      precio: 1599,
      colores: {
        beige: {
          nombre: 'Beige',
          imagenes: [
            'Imagenes/old-b-1.jpg','Imagenes/old-b-2.jpg','Imagenes/old-b-3.jpg','Imagenes/old-b-4.jpg'
          ],
          overlay: 'Imagenes/old-b-overlay.png',
          colorHex: '#e0dec7bb'
        },
         azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/old-a-1.jpg','Imagenes/old-a-2.jpg','Imagenes/old-a-3.jpg','Imagenes/old-a-4.jpg'
          ],
          overlay: 'Imagenes/old-a-overlay.png',
          colorHex: '#5153dabb'
        },
        verde: {
          nombre: 'Verde',
          imagenes: [
            'Imagenes/old-v-1.jpg','Imagenes/old-v-2.jpg','Imagenes/old-v-3.jpg','Imagenes/old-v-4.jpg'
          ],
          overlay: 'Imagenes/old-v-overlay.png',
          colorHex: '#0f6414ff'
        }
      }
    },
      {
      id: 6,
      nombre: 'Vans Upland',
      marca: 'Vans',
      precio: 2699,
      colores: {
        beige: {
          nombre: 'Beige',
          imagenes: [
            'Imagenes/vg000-1.png','Imagenes/vg000-1.png','Imagenes/vg000-1.png','Imagenes/vg000-1.png'
          ],
          overlay: 'Imagenes/vg000-overlay.png',
          colorHex: '#e5bbeebb'
        },
        blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/vaup-b-1.jpg','Imagenes/vaup-b-2.jpg','Imagenes/vaup-b-1.jpg','Imagenes/vaup-b-4.jpg','Imagenes/vaup-b-5.jpg'
          ],
          overlay: 'Imagenes/vaup-b-overlay.png',
          colorHex: '#ffffffff'
        },
        azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/va000-1.png','Imagenes/va000-2.png','Imagenes/va000-3.png'
          ],
          overlay: 'Imagenes/va000-overlay.png',
          colorHex: '#09e0d6ff'
        }
      }
    },
      {
      id: 7,
      nombre: 'Converse Chuck Tylor',
      marca: 'Converse',
      precio: 999,
      colores: {
        azul: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/cdg000-1.jpg','Imagenes/cdg000-2.jpg','Imagenes/cdg000-3.jpg','Imagenes/cdg000-4.jpg'
          ],
          overlay: 'Imagenes/cdg000-overlay.png',
          colorHex: 'rgba(0, 0, 0, 1)'
        },
        Blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/cn000-1.png','Imagenes/cn000-2.png','Imagenes/cn000-3.png','Imagenes/cn000-4.png'
          ],
          overlay: 'Imagenes/cn000-overlay.png',
          colorHex: '#ffffffff'
        },
          negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/adi2000-negro-1.jpg','Imagenes/adi2000-negro-2.jpg','Imagenes/adi2000-negro-3.jpg'
          ],
          overlay: 'Imagenes/adi2000-overlay.png',
          colorHex: '#000000'
        }
      }
    },
       {
      id: 8,
      nombre: 'Dunk Low',
      marca: 'Nike',
      precio: 2499,
      colores: {
        azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/jordan-a-1.jpg','Imagenes/jordan-a-2.jpg','Imagenes/jordan-a-3.jpg','Imagenes/jordan-a-4.jpg'
          ],
          overlay: 'Imagenes/jordan-a-overlay.png',
          colorHex: '#1eafe9ff'
        },
        cafe: {
          nombre: 'Cafe',
          imagenes: [
            'Imagenes/dunk-c-1.jpg','Imagenes/dunk-c-2.jpg','Imagenes/dunk-c-3.jpg','Imagenes/dunk-c-4.jpg'
          ],
          overlay: 'Imagenes/dunk-c-overlay.png',
          colorHex: '#a56a12bb'
        },
         rosa: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/panda000-1.jpg','Imagenes/panda000-2.jpg','Imagenes/panda000-3.jpg','Imagenes/panda000-4.jpg'
          ],
          overlay: 'Imagenes/panda000-overlay.png',
          colorHex: '#000000'
        }

      }
    },
     {
      id: 9,
      nombre: 'Jordan 1 Mid',
      marca: 'Nike',
      precio: 3499,
      colores: {
        Rosa: {
          nombre: 'Rosa',
          imagenes: [
            'Imagenes/jm-r-1.jpg','Imagenes/jm-r-2.jpg','Imagenes/jm-r-3.jpg','Imagenes/jm-r-4.jpg'
          ],
          overlay: 'Imagenes/jm-r-overlay.png',
          colorHex: '#f12db7e1'
        },
        gris: {
          nombre: 'Gris',
          imagenes: [
            'Imagenes/jm-g-3.jpg','Imagenes/jm-r-2.jpg','Imagenes/jm-g-1.jpg','Imagenes/jm-g-4.jpg'
          ],
          overlay: 'Imagenes/jm-g-overlay.png',
          colorHex: '#a39797ff'
        }
      }
    },
    {
      id: 10,
      nombre: 'Blazzer Mid 77',
      marca: 'Nike',
      precio: 2499,
      colores: {
        rosa: {
          nombre: 'Rosa',
          imagenes: [
            'Imagenes/b-r-1.jpg','Imagenes/b-r-2.jpg','Imagenes/b-r-3.jpg','Imagenes/b-r-4.jpg'
          ],
          overlay: 'Imagenes/b-r-overlay.png',
          colorHex: '#fd58a5ff'
        },
        blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/b-b-1.jpg','Imagenes/b-b-2.jpg','Imagenes/b-b-3.jpg','Imagenes/b-b-4.jpg'
          ],
          overlay: 'Imagenes/b-b-overlay.png',
          colorHex: '#ffffffff'
        },
         negro: {
          nombre: 'Negro',
          imagenes: [
           'Imagenes/b-n-1.jpg','Imagenes/b-n-2.jpg','Imagenes/b-n-3.jpg','Imagenes/b-n-4.jpg'
          ],
          overlay: 'Imagenes/b-n-overlay.png',
          colorHex: '#000000'
        }

      }
    },
     {
      id: 11,
      nombre: 'Forum Low',
      marca: 'Adidas',
      precio: 1799,
      colores: {        
        rojo: {
          nombre: 'Rojo',
          imagenes: [
            'Imagenes/adifl-r-1.jpg','Imagenes/adifl-r-2.jpg','Imagenes/adifl-r-3.jpg','Imagenes/adifl-r-4.jpg'
          ],
          overlay: 'Imagenes/adifl-r-overlay.png',
          colorHex: 'rgba(255, 0, 0, 1)'
        },
         negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/adifl-n-1.jpg','Imagenes/adifl-n-2.jpg','Imagenes/adifl-n-3.jpg','Imagenes/adifl-n-4.jpg'
          ],
          overlay: 'Imagenes/adifl-n-overlay.png',
          colorHex: '#000000'
        },
        azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/adifl-a-1.jpg','Imagenes/adifl-a-2.jpg','Imagenes/adifl-a-3.jpg','Imagenes/adifl-a-4.jpg'
          ],
          overlay: 'Imagenes/adifl-a-overlay.png',
          colorHex: '#0011ffdc'
        },

      }
    },
    {
      id: 12,
       nombre: 'chuck',
      marca: 'Converse',
      precio: 1299,
      colores: {          
        amarillo: {
          nombre: 'Amarillo',
          imagenes: [
            'Imagenes/ChuckAmarillo-1.png','Imagenes/ChuckAmarillo-2.png','Imagenes/ChuckAmarillo-3.png','Imagenes/ChuckAmarillo-4.png'
          ],
          overlay: 'Imagenes/ChuckAmarillo-overlay.png',
          colorHex: '#dad750ff'
        },
        azul: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/ChuckNegro-1.png','Imagenes/ChuckNegro-2.png','Imagenes/ChuckNegro-3.png','Imagenes/ChuckNegro-4.png'
          ],
          overlay: 'Imagenes/ChuckNegro-overlay.png',
          colorHex: '#000000bb'
        },
        blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/ChuckBlanco-1.png','Imagenes/ChuckBlanco-2.png','Imagenes/ChuckBlanco-3.png','Imagenes/ChuckBlanco-4.png'
          ],
          overlay: 'Imagenes/ChuckBlanco-overlay.png',
          colorHex: '#ffffffff'
        },
  

      }
    },
     {
      id: 13,
      nombre: 'Forum mid',
      marca: 'Adidas',
      precio: 1899,
      colores: {        
         blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/adim-b-1.jpg','Imagenes/adim-b-2.jpg','Imagenes/adim-b-3.jpg','Imagenes/adim-b-4.jpg'
          ],
          overlay: 'Imagenes/adim-b-overlay.png',
          colorHex: '#ffffffff'
        },
        azul: {
          nombre: 'Azul',
          imagenes: [
            'Imagenes/adim-a-1.jpg','Imagenes/adim-a-2.jpg','Imagenes/adim-a-3.jpg','Imagenes/adim-a-4.jpg'
          ],
          overlay: 'Imagenes/adim-a-overlay.png',
          colorHex: '#0803ffbb'
        },
        negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/adim-n-1.jpg','Imagenes/adim-n-2.jpg','Imagenes/adim-n-3.jpg','Imagenes/adim-n-4.jpg'
          ],
          overlay: 'Imagenes/adim-n-overlay.png',
          colorHex: '#000000'
        },

      }
    },
    {
      id: 14,
      nombre: 'ALL start',
      marca: 'Converse',
      precio: 899,
      colores: {
        azul: {
          negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/all-n-1.jpg','Imagenes/all-n-2.jpg','Imagenes/all-n-3.jpg'
          ],
          overlay: 'Imagenes/all-n-overlay.png',
          colorHex: '#000000'
        },
          nombre: 'Azul',
          imagenes: [
            'Imagenes/all-a-1.jpg','Imagenes/all-a-2.jpg','Imagenes/all-a-3.jpg'
          ],
          overlay: 'Imagenes/all-a-overlay.png',
          colorHex: '#022aacbb'
        },

          blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/ChuckBlanco-1.png','Imagenes/ChuckBlanco-2.png','Imagenes/ChuckBlanco-3.png','Imagenes/ChuckBlanco-4.png'
          ],
          overlay: 'Imagenes/ChuckBlanco-overlay.png',
          colorHex: '#ffffffff'
        }
      }
    },

    {
      id: 15,
       nombre: 'Knu Skoolw',
      marca: 'Vans',
      precio: 1599,
      colores: {     
        vino: {
          nombre: 'Vino',
          imagenes: [
            'Imagenes/knu-r-1.png','Imagenes/knu-r-2.png','Imagenes/knu-r-3.png'
          ],
          overlay: 'Imagenes/knu-r-overlay.png',
          colorHex: '#660404ff'
        },
        negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/knu-n-1.png','Imagenes/knu-n-2.png','Imagenes/knu-n-3.png'
          ],
          overlay: 'Imagenes/knu-n-overlay.png',
          colorHex: '#000000bb'
        },
        morado: {
          nombre: 'Morado',
          imagenes: [
            'Imagenes/knu-m-1.png','Imagenes/knu-m-2.png','Imagenes/knu-m-3.png'
          ],
          overlay: 'Imagenes/knu-m-overlay.png',
          colorHex: '#520088ff'
        },
     
      }
    },
     {
      id: 16,
      nombre: 'SUPERSTAR II',
      marca: 'Adidas',
      precio: 1399,
      colores: {
        negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/adis-n-1.jpg','Imagenes/adis-n-2.jpg','Imagenes/adis-n-3.jpg','Imagenes/adis-n-4.jpg'
          ],
          overlay: 'Imagenes/adis-n-overlay.png',
          colorHex: '#000000bb'
        },
        cafe: {
          nombre: 'Cafe',
          imagenes: [
            'Imagenes/adis-c-1.jpg','Imagenes/adis-c-2.jpg','Imagenes/adis-c-3.jpg','Imagenes/adis-c-4.jpg'
          ],
          overlay: 'Imagenes/adis-c-overlay.png',
          colorHex: '#552509ff'
        }
      }
    },
    {
      id: 17,
      nombre: 'Skate Autentic',
      marca: 'Vans',
      precio: 1199,
      colores: {
        cafe: {
          nombre: 'Cafe',
          imagenes: [
            'Imagenes/vc000-1.png','Imagenes/vc000-2.png','Imagenes/vc000-3.png','Imagenes/vc000-4.png'
          ],
          overlay: 'Imagenes/vc000-overlay.png',
          colorHex: '#dd944fff'
        },
      negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/sn000-1.png','Imagenes/sn000-2.png','Imagenes/sn000-3.png','Imagenes/sn000-3.png','Imagenes/sn000-4.png'
          ],
          overlay: 'Imagenes/sn000-overlay.png',
          colorHex: '#000000bb'
        },
   rojo: {
          nombre: 'Rojo',
          imagenes: [
            'Imagenes/vr000-1.png','Imagenes/vr000-2.png','Imagenes/vr000-3.png'
          ],
          overlay: 'Imagenes/vr000-overlay.png',
          colorHex: '#ff0000ff'
        }

      }
    },
     {
      id: 18,
      nombre: 'Converse choclo',
      marca: 'Converse',
      precio: 2499,
      colores: {       
        amarillo: {
          nombre: 'Amarillo',
          imagenes: [
            'Imagenes/ca-1.png','Imagenes/ca-2.png','Imagenes/ca-3.png'
          ],
          overlay: 'Imagenes/ca-overlay.png',
          colorHex: '#b1a60cfb'
        },
        negro: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/cn-1.png','Imagenes/cn-2.png','Imagenes/cn-3.png','Imagenes/cn-4.png'
          ],
          overlay: 'Imagenes/cn-overlay.png',
          colorHex: '#000000bb'
        },
 
         blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/cb-1.png','Imagenes/cb-2.png','Imagenes/cb-3.png'
          ],
          overlay: 'Imagenes/cb-overlay.png',
          colorHex: '#faebebff'
        }
      }
    },
    {
      id: 19,
       nombre: 'Chuck 70',
      marca: 'Converse',
      precio: 2499,
      colores: {         
        blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/ChuckBlanco-1.png','Imagenes/ChuckBlanco-2.png','Imagenes/ChuckBlanco-3.png','Imagenes/ChuckBlanco-4.png'
          ],
          overlay: 'Imagenes/ChuckBlanco-overlay.png',
          colorHex: '#ffffffff'
        },
        azul: {
          nombre: 'Negro',
          imagenes: [
            'Imagenes/70-n-1.jpg','Imagenes/70-n-2.jpg','Imagenes/70-n-3.jpg'
          ],
          overlay: 'Imagenes/70-n-overlay.png',
          colorHex: '#000000bb'
        },
       

      }
    },
 
    {
      id: 20,
      nombre: 'Eclyptix 2000',
      marca: 'Adidas',
      precio: 2499,
      colores: {          
        gris: {
          nombre: 'Gris',
          imagenes: [
           'Imagenes/adi-g-1.jpg','Imagenes/adi-g-2.jpg','Imagenes/adi-g-3.jpg','Imagenes/adi-g-4.jpg'
          ],
          overlay: 'Imagenes/adi-g-overlay.png',
          colorHex: '#666666ff'
        },
        blanco: {
          nombre: 'Blanco',
          imagenes: [
            'Imagenes/adi-b-1.jpg','Imagenes/adi-b-2.jpg','Imagenes/adi-b-3.jpg','Imagenes/adi-b-4.jpg'
          ],
          overlay: 'Imagenes/adi-b-overlay.png',
          colorHex: '#ffffffff'
        },
        negro: {
          nombre: 'Negro',
          imagenes: [
           'Imagenes/adi-n-1.jpg','Imagenes/adi-n-2.jpg','Imagenes/adi-n-3.jpg','Imagenes/adi-n-4.jpg'
          ],
          overlay: 'Imagenes/adi-n-overlay.png',
          colorHex: '#000000'
        },

      }
    },

  ];

  // ---------- ANIMACIÓN AL AGREGAR AL CARRITO ----------
  function animarAlCarrito(imagenElemento) {
    const carritoIcon = document.querySelector('#carrito-icon');
    if (!carritoIcon || !imagenElemento) return;

    const imgClone = imagenElemento.cloneNode(true);
    const rect = imagenElemento.getBoundingClientRect();
    const cartRect = carritoIcon.getBoundingClientRect();

    Object.assign(imgClone.style, {
      position: 'fixed',
      left: rect.left + 'px',
      top: rect.top + 'px',
      width: rect.width + 'px',
      height: rect.height + 'px',
      opacity: '0.8',
      borderRadius: '8px',
      zIndex: 9999,
      transition: 'all 0.8s ease-in-out'
    });

    document.body.appendChild(imgClone);
    setTimeout(() => {
      Object.assign(imgClone.style, {
        left: cartRect.left + cartRect.width / 2 - rect.width / 4 + 'px',
        top: cartRect.top + 'px',
        width: '40px',
        height: '40px',
        opacity: '0'
      });
    }, 50);

    setTimeout(() => imgClone.remove(), 900);
  }

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



  // ---------- RENDER CATÁLOGO CON FILTROS Y COLOR ----------
  function render(){
    const cont=document.getElementById('content');
    if(!cont) return;

    cont.innerHTML=`
      <h2>Mujer</h2>
      <div class="filtros">
        <label>Marca:
          <select id="marcaFiltro">
            <option value="">Todas</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Vans">Vans</option>
            <option value="Converse">Converse</option>
          </select>
        </label>
        <label style="margin-left:12px">Precio máximo: <span id="precioVal">4500</span></label>
        <input type="range" id="precioFiltro" min="500" max="3500" value="3500" step="100" style="vertical-align:middle; margin-left:8px;">
      </div>
      <div class="catalogo"></div>
    `;

    const catalogo=cont.querySelector('.catalogo');
    const marcaSel=document.getElementById('marcaFiltro');
    const precioSel=document.getElementById('precioFiltro');
    const precioVal=document.getElementById('precioVal');

    function mostrar(){
      const marca=marcaSel.value;
      const precioMax=Number(precioSel.value);
      precioVal.textContent=precioMax;
      catalogo.innerHTML='';

      productos.filter(p=>(!marca||p.marca===marca)&&p.precio<=precioMax).forEach(p=>{
        const coloresKeys=Object.keys(p.colores);
        let colorSel=coloresKeys[0];
        const imgPreview=p.colores[colorSel].imagenes[0];

        const div=document.createElement('div');
        div.className='producto';
        div.style="border:1px solid #ddd;padding:12px;border-radius:10px;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,0.1);";

        div.innerHTML=`
          <img src="${imgPreview}" alt="${p.nombre}" class="img-tenis" style="cursor:pointer;border-radius:10px;max-width:250px;">
          <h3>${p.nombre}</h3>
          <p class="precio">$${p.precio}</p>
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
    padding:8px 14px;border-radius:6px;cursor:pointer;transition:0.3s;margin-top:8px;">
    Agregar al carrito
  </button>
</p>
<p>
  <button class="btn fav"
    style="background:transparent;color:black;border:1.8px solid black;
    padding:8px 14px;border-radius:6px;cursor:pointer;transition:0.3s;">
    ❤️
  </button>
</p>
        `;

        // Colores del producto
        const colorContainer=div.querySelector('.color-options');
        coloresKeys.forEach(clave=>{
          const c=p.colores[clave];
          const colorBtn=document.createElement('button');
          Object.assign(colorBtn.style,{
            width:'22px',height:'22px',borderRadius:'50%',border:'1px solid #aaa',
            background:c.colorHex,cursor:'pointer'
          });
          if(clave===colorSel) colorBtn.style.outline='2px solid #000';
          colorBtn.onclick=()=>{
            colorSel=clave;
            div.querySelector('.img-tenis').src=p.colores[colorSel].imagenes[0];
            colorContainer.querySelectorAll('button').forEach(b=>b.style.outline='none');
            colorBtn.style.outline='2px solid #000';
          };
          colorContainer.appendChild(colorBtn);
        });

        const img=div.querySelector('img');
        img.addEventListener('click',()=>abrirModalImagen(p));
        div.querySelector('.giro-btn').onclick=()=>abrirModalImagen(p);
        div.querySelector('.tryon-btn').onclick=()=>abrirCamaraTryOn(p.colores[colorSel].overlay);
        div.querySelector('.add').onclick=()=>{
          const talla=div.querySelector('.talla').value;
          const cantidad=Number(div.querySelector('.cantidad').value)||1;
          animarAlCarrito(img);
          window.Carrito.addToCart({id:p.id,nombre:p.nombre,precio:p.precio,talla,cantidad});
        };

        catalogo.appendChild(div);

// --- Botón "Añadir a favoritos" ---
div.querySelector('.fav').onclick = () => {
  const producto = {
    id: p.id,
    nombre: p.nombre,
    precio: p.precio,
    imagen: imgPreview
  };

  const favBtn = div.querySelector('.fav');
  const lista = JSON.parse(localStorage.getItem("mi_wishlist")) || [];
  const existe = lista.some(item => item.id === producto.id);

  if (existe) {
    // 🔹 Si ya está, lo eliminamos
    window.Wishlist.removeFromWishlist(producto.id);
    favBtn.textContent = "❤️";
  } else {
    // 🔹 Si no está, lo agregamos
    window.Wishlist.addToWishlist(producto);
    favBtn.textContent = "💔 Eliminar de favoritos";
  }
};
catalogo.appendChild(div);
      });
    }

    marcaSel.onchange=mostrar;
    precioSel.oninput=mostrar;
    mostrar();
  }

  window.RenderMujer=render;
})();
