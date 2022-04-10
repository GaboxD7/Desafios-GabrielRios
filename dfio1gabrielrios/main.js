// --------------------------------------- Compra de Discos de la banda Caramelos de cianuros------------------------------

/*Se crea la clase album donde tenemos sus caracteristocas en el constructor (nombre, año, precio y stock) 
-El constructor se espesifica mediante el this el valor del propio del objeto en cuestion.
-En dicha Clase se crea 3 METODOS los cuales son los siguientes:  comprar y promocion.
-Comprar: Este metodo nos permite realizar la compra del "album" comprobando, si existe en stock o no.
-Promocion: nuestro ultimo metodo creado permite aplicar un descuento de 10% con un codigo promocional.
-Instaciamos los 4 albums que tenemos disponible con la clase Albums, permitiendone crear un objeto con las caracteristicas de nuestro album en cuestion
-album1, album2, album3 y album4 son dichas instacias, las cuales push al array listaAlbum.
-Para ver mas interacion con la pagina hasta el momento con los conocimiento que poseo, se crea la funcion "validarCompra"  que muestra el menu para elegir un album.
-Al pasar por las validaciones de la funcion, la variable "disco" contendra  la informacion del album elegido y con el SWITCH En el caso q sea, se llama al metodo "comprar" el cual realiza la compra, validando stock y mantenendo un orden en el precio total, subtotal y con el array "carrito" el cual sea van incluyendo el objeto -Con las propiedades nombre, anio, precio y anexandole "cantidad" como propiedad del objeto.
-Si el usario no desea seguir comprado llamamos al metodo "promocion" que de acuerdo aciertas validaciones y codigo de la promocion se podra aplicar un descuento al precio total.
-La funcon validarNull nos permite validar si una entra es null o un string vacio */

// --------------------------------------- Compra de Discos de la banda Caramelos de cianuros------------------------------


let listaAlbum = [];
let carrito = [];
let subTotal = [];
let total = 0;
let codigo = 1234;
let control = 'CONTROL';
let ocho = 'OCHO'
let caramelos = 'CARAMELOS';
let flor = 'FLOR';

class Albums {

    constructor(nombre, anio, precio, stock) {
        this.nombre = nombre;
        this.anio = anio;
        this.precio = precio;
        this.stock = stock;

    }

    comprar (i) {

            // Dato Cantidad
        let cantidad = parseInt(prompt(`¿Cuantos  albums de ${this.nombre} usted desea comprar?`));
            // Validacion Cantidad
        while ( cantidad == null  || isNaN(cantidad) == true) {

            cantidad = parseInt(prompt(`¿Cuantos  albums de ${this.nombre} usted desea comprar?`));
        }
        if(( this.stock - cantidad) >= 0 ) {

            this.stock -= cantidad

            subTotal.push(cantidad*this.precio)

            const {nombre, anio, precio} = listaAlbum[i];

            carrito.push({nombre, anio, precio, ... {"Cantidad": cantidad}})
      
            let pregunta = validarNull("Desea Realizar otra compra? responda SI o NO");

            while(pregunta !== 'SI' && pregunta !== 'NO') {
                    pregunta = validarNull("Desea Realizar otra compra? responda SI o NO");
            }

            if(pregunta == 'SI'){

                validarcompra();

            } else {

                total = subTotal.reduce((a, b) => a + b, 0);
                this.promocion()
                alert(`Gracias por tu compra, si quieres ver el total ve a la consola y usa "Total"`);

            }
    
        } else {

            alert(`OHH disculpa tu album: ${this.nombre} esta AGOTADO, solo tenemos ${this.stock} disponible`); 
            validarcompra();    
        }
     
    } 

    promocion () {
    validarPromo()
       
    }
}

listaAlbum.push(new Albums(`${control}`, añio = 2021 , 12, 3));
listaAlbum.push(new Albums(`${ocho}`, añio = 2015 , 12, 3));
listaAlbum.push(new Albums(`${caramelos}`, añio = 2010 , 10, 3));
listaAlbum.push(new Albums(`${flor}`, añio = 2008 , 10, 3));

 // Funcion para validar y aplicar Promocion

const validarPromo = () => {

    let pregunta = validarNull("Tiene un codigo PROMOCIONAL? SI/NO");
 
        while ( pregunta !== 'SI' && pregunta !== 'NO') {

            pregunta = validarNull("Tiene un codigo ACA PROMOCIONAL? SI/NO");
          
        }
     
        if (pregunta == 'SI'  ) {
            let  codigoUser = parseInt(prompt("Ingresa tu codigo promocional"));
           
            while (isNaN(codigoUser) == true) {
                codigoUser = parseInt(prompt("Ingresa ACA tu codigo promocional"));
            
            } 

            if (codigo !== codigoUser ) {

            alert(`Disculpe su codigo promocional ${codigoUser} no mantiene ninguna promocion `);

            } else {

              total = total*0.90
              console.log(total)
                alert( ` ¡Felicitaciones! Promocion aceptada, precio actual: ${total}`)

            }
        } else {
        
        }

}

// Funcion que nos valida que un dato no sea null ni este vacio

 let validarNull = (texto) => {

    let dato = prompt(texto);

    while(dato == null || dato.trim() == '') {

        dato = prompt(texto)

    } 
    return dato.toUpperCase();
} 

 // Funcion para validar Compra

const validarcompra = () => {

    let disco =
     validarNull('¿Escribe que album desea comprar? \n'+
    `Album 1: ${control} \n`+
    `Album 2: ${ocho} \n`+
    `Album 3: ${caramelos}\n`+
    `Album 4: ${flor}`);

    while (( disco !== control  && disco !== flor &&  disco !== caramelos && disco !== ocho)) {
      
      console.log(`${disco !== control}`)
      console.log(`${disco !== ocho}`)
      console.log(`${disco !== flor}`)
      console.log(`${disco !== caramelos}`)

            disco = validarNull('¿Escribe ACA que album desea comprar? \n'+
            `Album 1: ${control} \n`+
            `Album 2: ${ocho} \n`+
            `Album 3: ${caramelos}\n`+
            `Album 4: ${flor}`)
    }

    switch (disco) {

        case control:
            listaAlbum[0].comprar(0)
            console.log();
            break;
        case ocho:
             listaAlbum[1].comprar(1)
            break;
        case caramelos:
            listaAlbum[2].comprar(2)
            break;
        case flor:
            listaAlbum[3].comprar(3)
            break;
        default: `Recuerde ingresar el album correcto, solo en letras`

        }

     } 
    
validarcompra();




