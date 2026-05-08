/*=============== ANIMACION SCROLL ===============*/

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // se activa una sola vez
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});


/*=============== EXPANDED LIST ===============*/




/*=============== CLICK SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay:300,
    //reset: true, // Repeteción de animaciones
})

sr.reveal('.inicio__sombra', {origin:'bottom', delay: 800})
sr.reveal('.inicio__logo', {delay: 1600, distance: '200px', duration: 1500, scale: 0, rotate: {z:180}})
sr.reveal('.inicio__tabla', {delay: 1000, scale: 0, duration: 1500})
sr.reveal('.inicio__hoja-1, .inicio__hoja-2', {delay: 2200, scale: 0, duration: 1500, rotate: {z:360}})
sr.reveal('.inicio__tomate', {delay: 2800, scale: 0, duration: 1500, rotate: {z:90}})
sr.reveal('.inicio__pepperoni', {delay: 2600, scale: 0, duration: 1500, rotate: {z:180}})
sr.reveal('.inicio__datos', {delay: 1800})
sr.reveal('#nav__opciones', {delay: 100})
sr.reveal('#header', {delay: 100})
// sr.reveal('#nav-menu-opciones', {delay: 100})
sr.reveal('.main-container', {delay: 100})
sr.reveal('#secciones', {delay: 300})
sr.reveal('#contenedor-productos', {delay: 300})


// sr.reveal('.inicio__title', {delay: 1700})
// sr.reveal('.about__data', {origin: 'left'})
// sr.reveal('.about__images', {origin: 'right'})
// sr.reveal('.about__data', {origin: 'left'})
// sr.reveal('.about__coffee', {delay: 1000})
// sr.reveal('.about__leaf-1, .about__leaf-2', {delay: 1400, rotate: {z: 90}})
// sr.reveal('.products__card-menu, .products__card, .contact__info', {interval: 100})
// sr.reveal('.contact__shape', {delay: 600, scale: 0})
// sr.reveal('.contact__delivery', {delay: 1200})
// sr.reveal('.popular__swiper, .footer__container, .footer__copy')

/*=============== SWIPER POPULAR ===============*/

const swiperPopular = new Swiper('.menu__swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 31,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            spaceBetween: 10,
        }
    }    
  });

  /*=============== PRODUCTOS SELECCIONADOS ===============*/

  const volverMenu = document.querySelector('#volver-menu');
  const productoSeleccionado = document.querySelector('#producto-seleccionado');
  const header = document.querySelector('#header');
  const navOpciones = document.querySelector('#nav__opciones');
  const secciones = document.querySelector('#secciones');
  const listadoMenues = document.querySelector('#menu-nuevo');
  const btnNapolitana = document.querySelector('#producto-napolitana');



//   btnNapolitana.addEventListener("click", (e) => {

//     //alert("Estas apretando el botón agregar producto");
//     productoSeleccionado.classList.remove("oculto");
//     header.classList.add("oculto");
//     navOpciones.classList.add("oculto");
//     secciones.classList.add("oculto");
//     listadoMenues.classList.add("oculto");

//   })



  volverMenu.addEventListener("click", (e) => {

    //alert("Estas apretando el botón agregar producto");
    productoSeleccionado.classList.add("oculto");
    header.classList.remove("oculto");
    navOpciones.classList.remove("oculto");
    secciones.classList.remove("oculto");
    listadoMenues.classList.remove("oculto");

})


/*=============== ACCION BARRA MENUES NUEVA ===============*/


const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const iconVisibility = () =>{

    // scrollLeftValue: cantidad de desplazamiento actual del contenedor.

    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);

    //scrollableWidth: diferencia entre el ancho total del contenido y el ancho visible del contenedor.

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}


btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;  
    // iconVisibility();
    setTimeout(() => iconVisibility(), 50);
})

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    setTimeout(() => iconVisibility(), 50);
}) 

window.onload = function (){

    // tabMenu.scrollWidth: Indica el ancho total del contenido dentro de tabMenu, incluyendo las partes que no son visibles (desplazables).
    // tabMenu.clientWidth: Representa el ancho visible del contenedor tabMenu (sin incluir las áreas desplazables).
    // window.innerWidth: Es el ancho total del área visible de la ventana del navegador.



    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function (){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) =>{
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    iconVisibility();
    tabMenu.classList.add("dragging");
})

document.addEventListener("mouseup", () =>{
    activeDrag = false;
    tabMenu.classList.remove("dragging");
})

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
})

// Dar clase "active" segun tab que se clickea

const tabBtns = document.querySelectorAll("a.tab-btn");

const  tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) =>{
        tabBtn.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) =>{
    tabBtn.addEventListener("click", ()=>{
        tab_Nav(i);
    })
});




//inicio de js para manejo de productos


//array productos

const productosArray = [
    {
        id: "pizza-napolitana",
        titulo: "Napolitana",
        imagen: "./assets/img/pizza-01.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Tomates frescos", "Ajo", "Orégano"]
        },
        precio: "12000"
    },
    {
        id: "pizza-muzzarella",
        titulo: "Muzzarella",
        imagen: "./assets/img/comidas/pizza-muzzarella.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Aceitunas", "Orégano"]
        },
        precio: "7500"
    },
    {
        id: "pizza-especial-jamon",
        titulo: "Especial con Jamon",
        imagen: "./assets/img/comidas/pizza-especial-jamon.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Jamón", "Aceitunas", "Orégano"]
        },
        precio: "8200"
    },
    {
        id: "pizza-especial-jamon-huevo",
        titulo: "Especial con Jamon y Huevo",
        imagen: "./assets/img/comidas/pizza-especial-jamon-huevo.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Jamón", "Huevo", "Aceitunas", "Orégano"]
        },
        precio: "8700"
    },
    {
        id: "pizza-pepperoni",
        titulo: "Calabrezza",
        imagen: "./assets/img/pizza-03.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Pepperoni", "Aceitunas", "Orégano"]
        },
        precio: "12000"
    },
    {
        id: "pizza-doble-muzzarella",
        titulo: "Doble Muzzarrella",
        imagen: "./assets/img/comidas/pizza-doble-muzzarella.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Cebolla", "Orégano"]
        },
        precio: "14000"
    },
    {
        id: "pizza-completa",
        titulo: "Completa",
        imagen: "./assets/img/pizza-05.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza",
            ingredientes: ["Salsa de tomate", "Queso mozzarella", "Tomates frescos", "Ajo", "Orégano", "Aceitunas", "Pepperoni"]
        },
        precio: "9500"
    },
    {
        id: "hambur-simple",
        titulo: "Simple",
        imagen: "./assets/img/hamburguesa-03.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate"]
        },
        precio: "3500"
    },
    {
        id: "hambur-especial",
        titulo: "Especial",
        imagen: "./assets/img/hamburguesa-02.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate", "Queso", "Pepinillos"]
        },
        precio: "3700"
    },
    {
        id: "hambur-completa",
        titulo: "Completa",
        imagen: "./assets/img/hamburguesa-01.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate", "Queso", "Pepinillos"]
        },
        precio: "4000"
    },
    {
        id: "hambur-completa-con-fritas",
        titulo: "Completa con Fritas",
        imagen: "./assets/img/comidas/hambur-completa-con-fritas.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate", "Queso", "Pepinillos", "Papas Fritas"]
        },
        precio: "6000"
    },


    {
        id: "hambur-gigantes-simple",
        titulo: "Gigante Simple",
        imagen: "./assets/img/hamburguesa-03.png",
        categoria: {
            nombre: "Gigantes Caseras",
            id: "hamburguesa-gigante-casera",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate"]
        },
        precio: "4500"
    },
    {
        id: "hambur-gigantes-especial",
        titulo: "Gigante Especial",
        imagen: "./assets/img/hamburguesa-02.png",
        categoria: {
            nombre: "Gigantes Caseras",
            id: "hamburguesa-gigante-casera",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate", "Queso", "Pepinillos"]
        },
        precio: "4800"
    },
    {
        id: "hambur-gigantes-completa",
        titulo: "Gigante Completa",
        imagen: "./assets/img/hamburguesa-01.png",
        categoria: {
            nombre: "Gigantes Caseras",
            id: "hamburguesa-gigante-casera",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate", "Queso", "Pepinillos"]
        },
        precio: "5000"
    },
    {
        id: "hambur-gigantes-completa-con-fritas",
        titulo: "Gigante Completa con Fritas",
        imagen: "./assets/img/comidas/hambur-completa-con-fritas.png",
        categoria: {
            nombre: "Gigantes Caseras",
            id: "hamburguesa-gigante-casera",
            ingredientes: ["Pan de hamburguesa", "Carne de res", "Lechuga", "Tomate", "Queso", "Pepinillos", "Papas Fritas"]
        },
        precio: "7500"
    },



    {
        id: "empanada-carne-frita",
        titulo: "De Carne Fritas",
        imagen: "./assets/img/comidas/empanada-carne-frita.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "9500"
    },
    {
        id: "empanada-carne-media-docena-frita",
        titulo: "1/2 Docena Carne Fritas",
        imagen: "./assets/img/comidas/empanada-carne-media-docena-frita.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "5500"
    },
    {
        id: "empanada-jamon-y-queso-frita",
        titulo: "Jamon y Queso Fritas",
        imagen: "./assets/img/comidas/empanada-jamon-y-queso-frita.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "8500"
    },
    //media docena de jamon y queso
    {
        id: "empanada-jamon-y-queso-media-docena-frita",
        titulo: "1/2 Docena Jamon y Queso Fritas",
        imagen: "./assets/img/comidas/empanada-jamon-y-queso-media-docena-frita.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "5000"
    },
    // ahora los mismos pero al horno
    {
        id: "empanada-carne-al-horno",
        titulo: "De Carne al Horno",
        imagen: "./assets/img/comidas/empanada-carne-al-horno.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "13000"
    },
    {
        id: "empanada-carne-media-docena-al-horno",
        titulo: "1/2 Docena Carne al Horno",
        imagen: "./assets/img/comidas/empanada-carne-media-docena-al-horno.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "7000"
    },
    {
        id: "empanada-jamon-y-queso-al-horno",
        titulo: "Jamon y Queso al Horno",
        imagen: "./assets/img/comidas/empanada-jamon-y-queso-al-horno.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "11000"
    },
    //media docena de jamon y queso al horno
    {
        id: "empanada-jamon-y-queso-media-docena-al-horno",
        titulo: "1/2 Docena Jamon y Queso al Horno",
        imagen: "./assets/img/comidas/empanada-jamon-y-queso-media-docena-al-horno.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "6000"
    },
    {
        id: "lomopizza-entero",
        titulo: "Entero",
        imagen: "./assets/img/comidas/lomopizza-entero.png",
        categoria: {
            nombre: "LomoPizzas",
            id: "lomopizza"
        },
        precio: "28000"
    },
    {
        id: "lomopizza-mitad",
        titulo: "Mitad",
        imagen: "./assets/img/comidas/lomopizza-mitad.png",
        categoria: {
            nombre: "LomoPizzas",
            id: "lomopizza"
        },
        precio: "19500"
    },
    {
        id: "lomopizza-mitad-con-fritas",
        titulo: "Mitad con Fritas",
        imagen: "./assets/img/comidas/lomopizza-mitad-con-fritas.png",
        categoria: {
            nombre: "LomoPizzas",
            id: "lomopizza"
        },
        precio: "24000"
    },
    //hamburpizza
    {
        id: "hamburpizza-entero",
        titulo: "Entero",
        imagen: "./assets/img/comidas/hamburpizza-entero.png",
        categoria: {
            nombre: "HamburPizzas",
            id: "hamburpizza"
        },
        precio: "25000"
    },
    {
        id: "hamburpizza-mitad",
        titulo: "Mitad",
        imagen: "./assets/img/comidas/hamburpizza-mitad.png",
        categoria: {
            nombre: "HamburPizzas",
            id: "hamburpizza"
        },
        precio: "17500"
    },
    {
        id: "hamburpizza-mitad-con-fritas",
        titulo: "Mitad con Fritas",
        imagen: "./assets/img/comidas/hamburpizza-mitad-con-fritas.png",
        categoria: {
            nombre: "HamburPizzas",
            id: "hamburpizza"
        },
        precio: "21000"
    },
    //sandwich de lomito    
    {
        id: "sandwich-lomito-simple",
        titulo: "Simple",
        imagen: "./assets/img/comidas/sandwich-lomito-simple.png",
        categoria: {
            nombre: "Sandwiches de Lomito",
            id: "sandwich-lomito"
        },
        precio: "10500"
    },
    {
        id: "sandwich-lomito-especial",
        titulo: "Especial",
        imagen: "./assets/img/comidas/sandwich-lomito-especial.png",
        categoria: {
            nombre: "Sandwiches de Lomito",
            id: "sandwich-lomito"
        },
        precio: "11000"
    },
    {
        id: "sandwich-lomito-completo",
        titulo: "Completo",
        imagen: "./assets/img/comidas/sandwich-lomito-completo.png",
        categoria: {
            nombre: "Sandwiches de Lomito",
            id: "sandwich-lomito"
        },
        precio: "12000"
    },
     {
        id: "sandwich-lomito-completo-con-fritas",
        titulo: "Completo con Fritas",
        imagen: "./assets/img/comidas/sandwich-lomito-completo-con-fritas.png",
        categoria: {
            nombre: "Sandwiches de Lomito",
            id: "sandwich-lomito"
        },
        precio: "14500"
    },
    //alito al plato
    {
        id: "alito-al-plato-especial",
        titulo: "Especial",
        imagen: "./assets/img/comidas/alito-al-plato-especial.png",
        categoria: {
            nombre: "Alitos al Plato",
            id: "alito-al-plato"
        },
        precio: "12000"
    },
    {
        id: "alito-al-plato-completo",
        titulo: "Completo",
        imagen: "./assets/img/comidas/alito-al-plato-completo.png",
        categoria: {
            nombre: "Alitos al Plato",
            id: "alito-al-plato"
        },
        precio: "13000"
    },
     {
        id: "alito-al-plato-completo-con-fritas",
        titulo: "Completo con Fritas",
        imagen: "./assets/img/comidas/alito-al-plato-completo-con-fritas.png",
        categoria: {
            nombre: "Alitos al Plato",
            id: "alito-al-plato"
        },
        precio: "15500"
    },
    //papas fritas
    {
        id: "papas-fritas-tradicional",
        titulo: "Tradicional",
        imagen: "./assets/img/comidas/papas-fritas-tradicional.png",
        categoria: {
            nombre: "Papas Fritas",
            id: "papas-fritas"
        },
        precio: "4500"
    },
    {
        id: "papas-fritas-porcion-grande",
        titulo: "Porción Grande",
        imagen: "./assets/img/comidas/papas-fritas-porcion-grande.png",
        categoria: {
            nombre: "Papas Fritas",
            id: "papas-fritas"
        },
        precio: "6500"
    },
    {
        id: "papas-fritas-porcion-gratinada",
        titulo: "Porción Gratinada",
        imagen: "./assets/img/comidas/papas-fritas-porcion-gratinada.png",
        categoria: {
            nombre: "Papas Fritas",
            id: "papas-fritas"
        },
        precio: "7500"
    },
    // gratinada a la provensal
    {
        id: "papas-fritas-porcion-gratinada-provensal",
        titulo: "Porción Gratinada a la Provensal",
        imagen: "./assets/img/comidas/papas-fritas-porcion-gratinada-provensal.png",
        categoria: {
            nombre: "Papas Fritas",
            id: "papas-fritas"
        },
        precio: "8500"
    },
    // sandwich de milanesa
    {
        id: "sandwich-milanesa-simple",
        titulo: "Simple",
        imagen: "./assets/img/comidas/sandwich-milanesa-simple.png",
        categoria: {
            nombre: "Sandwiches de Milanesa",
            id: "sandwich-milanesa"
        },
        precio: "7000"
    },
    {
        id: "sandwich-milanesa-especial",
        titulo: "Especial",
        imagen: "./assets/img/comidas/sandwich-milanesa-especial.png",
        categoria: {
            nombre: "Sandwiches de Milanesa",
            id: "sandwich-milanesa"
        },
        precio: "7500"
    },
    {
        id: "sandwich-milanesa-completo",
        titulo: "Completo",
        imagen: "./assets/img/comidas/sandwich-milanesa-completo.png",
        categoria: {
            nombre: "Sandwiches de Milanesa",
            id: "sandwich-milanesa"
        },
        precio: "8000"
    },
     {
        id: "sandwich-milanesa-completo-con-fritas",
        titulo: "Completo con Fritas",
        imagen: "./assets/img/comidas/sandwich-milanesa-completo-con-fritas.png",
        categoria: {
            nombre: "Sandwiches de Milanesa",
            id: "sandwich-milanesa"
        },
        precio: "10000"
    },
    // milanesa al plato
    {
        id: "milanesa-al-plato-con-fritas",
        titulo: "Con Fritas",
        imagen: "./assets/img/comidas/milanesa-al-plato-con-fritas.png",
        categoria: {
            nombre: "Milanesa al Plato",
            id: "milanesa-al-plato"
        },
        precio: "8000"
    },
    //napolitana con fritas
    {
        id: "milanesa-napolitana-con-fritas",
        titulo: "Napolitana con Fritas",
        imagen: "./assets/img/comidas/milanesa-napolitana-con-fritas.png",
        categoria: {
            nombre: "Milanesa al Plato",
            id: "milanesa-al-plato"
        },
        precio: "9000"
    },
    // a caballo con fritas
    {
        id: "milanesa-a-caballo-con-fritas",
        titulo: "A Caballo con Fritas",
        imagen: "./assets/img/comidas/milanesa-a-caballo-con-fritas.png",
        categoria: {
            nombre: "Milanesa al Plato",
            id: "milanesa-al-plato"
        },
        precio: "8500"
    },
    // especiales: pastelon de papa, salchipapas y super matt
    
    {
        id: "super-matt",
        titulo: "Super Matt",
        imagen: "./assets/img/comidas/super-matt.png",
        categoria: {
            nombre: "Especiales",
            id: "especiales"
        },
        precio: "8500"
    },
    {
        id: "pastelon-de-papa",
        titulo: "Pastelón de Papa",
        imagen: "./assets/img/comidas/pastelon-de-papa.png",
        categoria: {
            nombre: "Especiales",
            id: "especiales"
        },
        precio: "7000"
    },  
    {
        id: "salchipapas",
        titulo: "Salchipapas",
        imagen: "./assets/img/comidas/salchipapas.png",
        categoria: {
            nombre: "Especiales",
            id: "especiales"
        },
        precio: "7500"
    },
    // sandwiches: de miga, de verdura, pebetes, carlitos
        {
        id: "sandwich-de-miga",
        titulo: "De Miga",
        imagen: "./assets/img/comidas/sandwich-de-miga.png",
        categoria: {
            nombre: "Sandwiches",
            id: "sandwiches"
        },
        precio: "2500"
    },
    {
        id: "sandwich-de-verdura",
        titulo: "De Verdura",
        imagen: "./assets/img/comidas/sandwich-de-verdura.png",
        categoria: {
            nombre: "Sandwiches",
            id: "sandwiches"
        },
        precio: "4000"
    },
    {   
        id: "pebete",
        titulo: "Pebetes    ",
        imagen: "./assets/img/comidas/sandwich-pebete.png",
        categoria: {
            nombre: "Sandwiches",
            id: "sandwiches"
        },
        precio: "2500"
    },
    {
        id: "carlitos",
        titulo: "Carlitos",
        imagen: "./assets/img/comidas/sandwich-carlitos.png",
        categoria: {
            nombre: "Sandwiches",
            id: "sandwiches"
        },
        precio: "3500"
    }

];


const contenedorProductos = document.querySelector("#contenedor-productos");
const tabDeMenues = document.querySelector("#listadoDeMenues");
let botonesAgregar = document.querySelectorAll(".producto__boton");
let numeroPedidos = document.querySelector("#numero-pedidos");

function cargarProductos() {
    const categorias = {};

    // Agrupar productos por categoría
    productosArray.forEach(producto => {
        const categoriaId = producto.categoria.id;

        if (!categorias[categoriaId]) {
            categorias[categoriaId] = {
                nombre: producto.categoria.nombre,
                productos: []
            };
        }

        categorias[categoriaId].productos.push(producto);
    });

    // Crear secciones para cada categoría
    for (const categoriaId in categorias) {
        const { nombre, productos } = categorias[categoriaId];

        const section = document.createElement("section");
        section.classList.add("section", categoriaId, "secciones");
        section.id = categoriaId; // Asignar id basado en el id de la categoría

        const titulo = document.createElement("h2");
        titulo.textContent = nombre;
        titulo.classList.add("titulo__menu");
        section.appendChild(titulo);

        const tabProducto = document.createElement("ul");
        tabProducto.classList.add("tab-menu");

        // Crear el <li> para la categoría y añadirlo al tabDeMenues
        const liCategoria = document.createElement("li");
        liCategoria.classList.add("tab-btn");
        liCategoria.innerHTML = `
            <a href="#${categoriaId}" class="tab-btn">${nombre}</a>
        `;
        tabDeMenues.appendChild(liCategoria);

        productos.forEach(producto => {
            const article = document.createElement("article");
            article.classList.add("producto__tarjeta", "producto");
            const precioFormateado = formatearNumeroPrecio(producto.precio);

            article.innerHTML = `
               <div class="producto__imagen">
                  <div class="producto__sombra"></div>
                  <img src="${producto.imagen}" alt="${producto.titulo}" class="producto__principal">
               </div>
               <div class="producto__dato">
                  <h3 class="producto__nombre">${producto.titulo}</h3>
                  <span class="producto__precio">$ ${precioFormateado}</span>
               </div>
               <button class="producto__boton" id="${producto.id}">
                  <i class="ri-shopping-cart-fill"></i>
               </button>
            `;

            section.appendChild(article);
        });

        contenedorProductos.appendChild(section);
    }

    // Agregar sección de "fin de productos"
    const finProductos = document.createElement("section");
    finProductos.classList.add("section", "fin__productos");
    finProductos.id = "fin-productos";

    finProductos.innerHTML = `
        <div class="titulo__menu"></div>
        <article class="producto__tarjeta producto__fin">        
            <div class="producto__fin">
                <img src="assets/img/logoDsMatt.png" alt="imagen" class="logo__fin">
                <h3>¡Has llegado al final de la lista!</h3>
                <span>Recorré nuestras categorías y elegí lo que más te guste</span>                  
            </div>   
        </article>
    `;

    contenedorProductos.appendChild(finProductos);
    actualizarBotonesAgregar();
    //console.log(botonesAgregar);
}

cargarProductos();



//boton agregar producto

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto__boton");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
   
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumeroPedidos();
} else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){

    Toastify({
        text: "Producto agregado",
        duration: 1500,
        //close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "addtoastify",
        offset: {
            x: '0rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '4rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);
   console.log(productoAgregado); 

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
   
    //console.log(productosEnCarrito);
    actualizarNumeroPedidos();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumeroPedidos (){
    let nuevoNumeroPedidos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    //console.log(nuevoNumeroPedidos);
    numeroPedidos.innerText = nuevoNumeroPedidos;
};



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
//console.log(sections)


    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 78,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.tab-navigation a[href*=' + sectionId + ']')
              //console.log(sectionId);
              //console.log(sectionsClass);
               

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.scrollIntoView({beahvior : "smooth", block: "center"});
            sectionsClass.classList.add('active');
            //sectionsClass.focus();
            
		}else{
			sectionsClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);

//función para formatear el importe con separador de miles "." y decimales ","
function formatearNumeroPrecio(importe){  
    let precio = parseFloat(importe);                 
    let numeroFormateado = precio.toFixed(2).replace(".", ",");
    // Agregar separador de miles
    numeroFormateado = numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return numeroFormateado;  
}
