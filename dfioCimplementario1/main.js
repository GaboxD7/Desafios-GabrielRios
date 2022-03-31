/*El siguiente codigo es la version gratuita  de un programa para realizar la conversion de divisas de las monedas(pesos, reales, dolares y euros).
  1-. Por ser una version Gratis, el usuario solo tiene 7 operaciones libres.
  2-. El usuario puede elegir que tipo de cambio quiere realizar mediante un menu.
  3-. Si el usuario ingresa en el menu un valor incorrecto, se le mostrara en pantalla y se solicitara de nuevo un menu valido.
  4-. El usuario en cada operacion podra ingresar la cantidad de divisas a realizar la operacion, si por alguna razon no es un valor en numeros, se  mostrara un mensaje en pantalla que solo se admiten valores numericos y se presenta el menu de nuevo.
  5-.  Al momento de que el usuario solo le queden 3 operaciones a realizar, se muestra en pantalla un mensaje con la cantidad de operaciones restantes.
   
  */
  
let menuOpciones;
let numConversor = 7;

alert(`Hola, Gracias por preferirnos en esta version Gratuita, solo tienes ${numConversor} operaciones.`)

do {

 let cantidad;

   menuOpciones = parseInt(prompt(
    'fecha: Marzo-2022 \n'+
    'Indique que conversion usted desea: \n'+
    '1: Pesos Chilenos a Reales\n'+
    '2: Pesos Chilenos a Dolares\n'+
    '3: Pesos Chilenos a Euros\n'+
    '4: Reales a Pesos Chilenos\n'+
    '5: Reales a Dolares\n'+
    '6: Reales a Euros\n'+
    '7: Dolares a pesos Chilenos\n'+
    '8: Dolares a Reales\n'+
    '9:Dolares a Euros\n'+
    '10: Euros a pesos Chilenos\n'+
    '11: Euros a Reales\n'+
    '12:Euros a Dolares\n'
  ));
  if ((1 <= menuOpciones) && (menuOpciones <= 12)) {
    
 cantidad = parseInt(prompt('Escribe el monto de la cantidad a convertir'));
  if (isNaN(cantidad) === true) {
    alert("Usted debe ingresae la cantatidad, SOLO EN NUMEROS");
  } else{
    let real = 0.21;
    let dolar = 1;
    let peso = 0.0013;
    let euro = 1.12;
    let moneda;
    numConversor = numConversor - 1 ;
    switch (menuOpciones) {
      case 1:
    moneda =`${((peso*cantidad)/real)}  Reales`;
      break;
      case 2:
    moneda = `${(cantidad*peso)} Dolares`;
      break;
      case 3:
    moneda = `${((peso*cantidad)/euro)} Euros`;
      break;
      case 4:
    moneda = `${((real*cantidad)/peso)} Pesos`;
      break;
      case 5:
    moneda = `${(real*cantidad)} Dolares`;
      break;
      case 6:
    moneda = `${((real*cantidad)/euro)} Euros`;
      break;
      case 7:
    moneda = `${((dolar*cantidad)/peso)} Pesos`;
      break;
      case 8:
    moneda = `${((dolar*cantidad)/real)} Reales`;
      break;
      case 9:
    moneda = `${((dolar*cantidad)/euro)} Euros`;
      break;
      case 10:
    moneda = `${((euro*cantidad)/peso)} Pesos`;
      break;
      case 11:
    moneda = `${((euro*cantidad)/real)} Reales`;
      break;
      case 12:
    moneda = `${(euro*cantidad)} Dolares`;
      break;
    }

    alert(`Usted tiene un total de: ${moneda}`)

} 
  }else {
    alert("Debe ingresar un menu valido");
  }
    
  if(numConversor <= 3){
    alert(`¡Ohh, Amigo! te quedan solo ${numConversor} operaciones, SUSCRIBETE para tener acceso ILIMITADO`);
  } else {
    continue;
  }

} while ((numConversor > 0));
