// Variables
let cantidad = document.querySelector('#cantidad');
let color = document.querySelector('#color');
let precio = document.querySelector('#precio');
let total_pc = document.querySelector('#total-pc span');
let cantidad_pc = document.querySelector('#cantidad-pc span');
let color_pc = document.querySelector('#color-pc');

let precioPc = 1125990;

/// Dándole formato al precio
precio.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(precioPc);

function total(){                   
    let total = Number(cantidad.value) * precioPc;
    total_pc.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(total);
    cantidad_pc.innerHTML = cantidad.value;
    color_pc.style.backgroundColor = color.value;
}