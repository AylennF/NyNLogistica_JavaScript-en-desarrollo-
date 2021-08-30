// INICIALIZACIONES --------------------------------------------------------------------------------//
b=0;
id=0;
total=0;
habilitaciones=0;
comExterior=0;
otros=0; 
logistico= 0;

preciohabilitaciones=0;
preciocomExterior=0;
preciootros=0; 
preciologistico= 0;

cantServicios = 0;
servicioSeleccionado="";

const servicioComprado = [];
const ArrayPrecios = [400, 300, 500, 7000];
let servicioLogistica = document.getElementById("Logistica");
let servicioHabilitaciones =document.getElementById("Habilitaciones2");
let servicioComExterior =document.getElementById("ComExterior");
let servicioOtros =document.getElementById("Otros2");

let compraLogistica = document.getElementById("Logistico");
let compraHabilitaciones =document.getElementById("Habilitaciones");
let compraComExterior =document.getElementById("Comercio");
let compraOtros =document.getElementById("Otros");

// FUNCIONES ----------------------------------------------------------------------------------------------//
function borrarValores(){
  tam = servicioComprado.length;
  for (let i=0; i<tam; i++){
  servicioComprado[i] = "";
}
servicioComprado.splice(0,tam);
}

function mostrarTitulo(){
  let titulo = document.createElement("section");
    titulo.innerHTML = `<h3 class="tituloBoleta">DETALLES DE COMPRA</h3>
    <div class="seccionesBoleta">
      <h4>CANTIDAD</h4>
      <h4>DETALLE</h4>
      <h4>PRECIO</h4>
    </div>`
    document.body.appendChild(titulo);
}

function mostrarCompraSobreescribir(){
  tam=servicioComprado.length;
  for (let i=0; i<tam; i++){
    i=i+2;
  for (let c=1; c<=b; c++){
    let servicio2 = document.getElementsByClassName(("servicio"+ b));
    servicio2.textContent = (servicioComprado[i-1].toString());     
    
    let cantidad2 = document.getElementsByClassName(("cantidad"+b));
    cantidad2.textContent = (servicioComprado[i-2].toString());
  }
}
}

function mostrarCompra(){
  tam=servicioComprado.length;
  for (let i=0; i<tam; i++){
    i=i+2;
    if (servicioComprado[i-2] != 0){      
      localStorage.setItem("Precio"+i, JSON.stringify(servicioComprado[i]));
      localStorage.setItem("Servicio"+i, JSON.stringify(servicioComprado[i-1]));
      localStorage.setItem("Cantidad"+i, JSON.stringify(servicioComprado[i-2]));

      let compra = document.createElement("section");
        compra.innerHTML =
        `<div class="divBoleta">
        <h4 class="cantidad`+ b +`">${servicioComprado[i-2]}</h4>
        <h4 class="servicio`+ b +`">${servicioComprado[i-1]}</h4>
        <h4>U$S ${servicioComprado[i]}</h4>
        </div>
        `
      document.body.appendChild(compra);
      total=total+servicioComprado[i];
      b=b+1;
    }
    }
    localStorage.setItem("Total", JSON.stringify(total));
  }


function mostrarTotal(){
  let mostrarTotal = document.createElement("section");
  mostrarTotal.innerHTML = `
  <div class="seccionesTotalBoleta">
    <h4></h4>
    <h4>TOTAL</h4>
    <h4>U$S ${total}</h4>
  </div>`
  document.body.appendChild(mostrarTotal);
}


// COMPRA DE SERVICIOS --------------------------------------------------------------------------//
opcionClick=0;
let botonLogistica = document.getElementById("btnLogistica");
let botonHabilitaciones = document.getElementById("btnHabilitaciones");
let botonComExterior = document.getElementById("btnComExterior");
let botonOtros = document.getElementById("btnOtros");
var ServiciosPersona = [];

botonLogistica.onclick = () => { 
  opcionClick=1,
  respuestaClick(opcionClick);
}

botonHabilitaciones.onclick = () => { 
  opcionClick=2,
  respuestaClick(opcionClick);
}
botonComExterior.onclick = () => { 
  opcionClick=3,
  respuestaClick(opcionClick);
}
botonOtros.onclick = () => { 
  opcionClick=4,
  respuestaClick(opcionClick);
}

function respuestaClick(op) {
  borrarValores();
  switch (op) {
    case 1: 
      inputServicio="Logistico";
      logistico=logistico+1;
      preciologistico=preciologistico+ArrayPrecios[0];
    break;

    case 2: 
      inputServicio="Habilitaciones";
      habilitaciones=habilitaciones+1;
      preciohabilitaciones=preciohabilitaciones+ArrayPrecios[1];
      break;

    case 3: 
      inputServicio="Comercio exterior";
      comExterior = comExterior+1;
      preciocomExterior=preciocomExterior+ArrayPrecios[2];
      break;

    case 4: 
      inputServicio="Otros"; 
      otros=otros+1;
      preciootros=preciootros+ArrayPrecios[3];
      break;
  }

  servicioComprado.push(logistico,"Logistico", preciologistico, habilitaciones,"Habilitaciones" , preciohabilitaciones, comExterior, "Comercio Exterior", preciocomExterior, otros, "Otros", preciootros);
  servicioLogistica.textContent = ("Cantidad: "+ logistico);
  servicioHabilitaciones.textContent = ("Cantidad: "+ habilitaciones);
  servicioComExterior.textContent = ("Cantidad: "+ comExterior);
  servicioOtros.textContent = ("Cantidad: "+ otros);
}

const arrayContenido = ["Nombre", "Apellido", "Email"]; 
let botonComprar = document.getElementById("btnComprar");
compro=0;

botonComprar.onclick = () => {
  localStorage.clear();
  if (compro == 0) {
    mostrarTitulo()
    mostrarCompra();
    mostrarTotal();
    compro=1;
  } else {
    mostrarCompraSobreescribir();
  }
}  
