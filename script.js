import { barcelona, roma, paris, londres } from './ciudades.js'

//obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// este ---> es para ver los nodos que se forman console.log(enlaces)

//Agregar un evento CKICK a cada  uno de los enlaces
enlaces.forEach(function (enlace){
    enlace.addEventListener('click', function(){  
        //REMOVER LA CLASE 'ACTIVE' DE TODOS LOS ENLACES 
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
    

    //AGREGAR 'ACTIVE' AL ENLACE ACTUAL
    this.classList.add('active')

    //TRAER LA INFORMACION DEL OBJETO CORRESPONDIENTE A LA ELECCION
    let contenido = obtenerContenido(this.textContent)

    //MOSTRAR EL CONTENIDO EN EL DOM
    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
});

});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres': londres
    };
    return contenido [enlace];
} 
