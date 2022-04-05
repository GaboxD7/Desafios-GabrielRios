// ------------------------ Compra de Discos de la banda Caramelos de cianuros------------------------------
// Se crea la clase album donde tebemos sus caracteristocas en el constructor (nombre, año, precio y stock) 
// El el constructor se espesifica mediante el this el valor del propio del objeto en cuestion.
// En dicha Clase se crea 3 METODOS los cuales son los siguientes: descuento, comprar y promocion.
// Descuento: con el metodo descuento podemos aplicar un descuento del 15% cuando la compra es superior a 20$
// Comprar: Este metodo nos permite realizar la compra del "album" comprobando si existo en stock o no.
// Promocion: nuestro ultimo metodo creado permite aplicar un descuento de 10% con un codigo promocional.
// Instaciamos los 4 albums que tenemos disponible con la clase Albums, permitiendone crear un objeto con las caracteristicas de nuestro album en cuestion
// album1, album2, album3 y album4 son dichas instacioas.
// Para ver mas interacion con la pagina hasta el momento con los conocimiento que poseo, se crea la funcion "validarCompra"  que muestra el menu para elegir un album.
// Al pasar por las validaciones de la funcion se retorna la variable "disco" con la informacion del album elegido.
//Luego se aloja la variable "disco" de la funcion "validarCompra" en una constante llamada "disc" 
// La cual nos va a permitir usar un SWICTH con ella como "expresion"

class Albums {
    constructor(nombre, anio, precio, stock) {
        this.nombre = nombre;
        this.anio = anio;
        this.precio = precio;
        this.stock = stock;
    }

    descuento() {
        if (this.precio >= 20){
    this.precio  = this.precio*0.85
        return this.precio;
        }
    }
    comprar () {
        let cantidad = parseInt(prompt(`¿Cuantos  albums de ${this.nombre} usted desea comprar?`));
        if(( this.stock - cantidad) >= 0 ) {
            this.stock -= cantidad
            return `Tu albumz: ${this.nombre} esta disponible, gracias por tu compra`;
        } else {
            return `OHH disculpa tu album: ${this.nombre} esta AGOTADO, solo tenemos ${this.stock} disponible`
        }
    }
    promocion () {
        let  codigoUser = prompt("Ingresa tu codigo promocional").toUpperCase();
        if (codigo !== codigoUser) {
            return `Disculpe su codigo promocional ${codigoUser} no mantiene ninguna promocion `
        } else {
            this.precio = this.precio*0.90
            return ` ¡Felicitaciones! Promocion aceptada, precio actual: ${this.precio}`
        }
    }
}
let codigo = "ROCKCARAMELO";
const album1 = new Albums('Control', añio = 2021 , 15, 5);
const album2 = new Albums('8', añio = 2015 , 12, 8);
const album3 = new Albums('Caramelos de cianuros',2010 , 10, 5);
const album4 = new Albums('Flor de fuego', añio = 2008 , 10, 3);


const validarcompra = () => {
    let disco = prompt('¿Escribe que album desea comprar? \n'+
    'Album 1: Control \n'+
    'Album 2: Ocho \n'+
    'Album 3: Caramelos de cianuros \n'+
    'Album 4: Flor de Fuego').toUpperCase();
    while (disco =="" && disco == null && disco !="CONTROL" && disco != "OCHO" && disco != "FLOR DE FUEGO" && disco !="CARAMELOS DE CIANUROS"){
        disco = prompt('¿Escribe que album desea comprar? \n'+
                        'Album 1: Control \n'+
                        'Album 2: Ocho \n'+
                        'Album 3: Caramelos de cianuros \n'+
                        'Album 4: Flor de Fuego').toUpperCase();
                        console.log(disco);
    }
    return disco;
}

const disc = validarcompra ();


    switch (disc) {
        case "CONTROL":
            album1.comprar();
            console.log(album1);
            break;
        case "OCHO":
            album2.comprar() 
            console.log(album2);
            break;
        case "CARAMELOS DE CIANUROS":
            album3.comprar();
            console.log(album3);
            break;
        case "FLOR DE FUEGO":
            album4.comprar();
            console.log(album4);
            break;
        default: `Recuerde ingresar el album correcto, solo en letras`
        }




