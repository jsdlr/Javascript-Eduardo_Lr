//Instrucciones
alert("Haga click en la tecla 'ON/C' una vez para borrar la escritura del numero actual. \n Haga click dos veces para borrar todo el record." )

// Variables globales
    var display = document.getElementById('display'),
        dialedNumber = 0,
        stored = "0",
        pressed = "k",
        result = "0",
        dot = 0,
        vl = 0,

        //Numeros
        b1 = document.getElementById('1'),
        b2 = document.getElementById('2'),
        b3 = document.getElementById('3'),
        b4 = document.getElementById('4'),
        b5 = document.getElementById('5'),
        b6 = document.getElementById('6'),
        b7 = document.getElementById('7'),
        b8 = document.getElementById('8'),
        b9 = document.getElementById('9'),
        b0 = document.getElementById('0'),
        //Operadores
        bpunto = document.getElementById('punto'),
        bigual = document.getElementById('igual'),
        bclear = document.getElementById('on'),
        bsign = document.getElementById('sign')
        bmas = document.getElementById('mas'),
        bmenos = document.getElementById('menos'),
        bpor = document.getElementById('por'),
        bdiv = document.getElementById('dividido');

//Objeto de funciones
var calculadora = {
//Generales
  vlNum: function(){
    vl = vl + 1
  },
  vlOp: function(){
    vl = 0
  },
  inicio: function(){
    if (result == 0) {
      stored = Number(stored) + Number(dialedNumber)
    }else {
      stored = result
    }
  },
  final: function(){
    display.innerHTML = ""
    dot = 0
    this.vlOp()
  },
//Operaciones
  mas: function(){
    this.inicio()
    dialedNumber = 0
    pressed = "+"
    this.final()
  },

  menos: function(){
    this.inicio()
    dialedNumber = "-"
    pressed = "-"
    this.final()
  },

  por: function(){
    this.inicio()
    dialedNumber = 0
    pressed = "x"
    this.final()
  },

  div: function(){
    this.inicio()
    dialedNumber = 0
    pressed = "/"
    this.final()
  },

  igual: function(){
    if (pressed == "+") {
      stored = Number(stored) + Number(dialedNumber)
      result = stored
    }else if(pressed == "-") {
      var absoluto = Number(dialedNumber)
      stored = Number(stored) - Math.abs(absoluto)
      result = stored
    }else if (pressed == "x") {
      stored = Number(stored) * Number(dialedNumber)
      result = stored
    }else if (pressed == "/") {
      stored = Number(stored) / Number(dialedNumber)
      result = stored
    }
    if (result > 99999999) {
      result = result.toPrecision(5)
    }
    display.innerHTML = result
    dot = 0
    this.vlOp()
  }
};
//Funciones
function clickBoton(tecla){
  if (vl < 8) {
    if (dialedNumber == 0) {
      dialedNumber = tecla.toString()
    } else {
      dialedNumber = dialedNumber + tecla.toString()
    }
  }
  display.innerHTML = dialedNumber,
  calculadora.vlNum()
};

//Acciones con botones
b1.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(1)
});

b2.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(2)
});

b3.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(3)
});

b4.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(4)
});

b5.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(5)
});

b6.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(6)
});

b7.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(7)
});

b8.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(8)
});

b9.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(9)
});

b0.addEventListener('click', function(e){
  e.preventDefault()
  clickBoton(0)
});

//Teclas especiales
bpunto.addEventListener('click', function(e){
  e.preventDefault()
  if (dot > 0) {

  } else {
    if (dialedNumber == 0) {
      dialedNumber = "."
    } else {
      dialedNumber = dialedNumber + "."
    }
    dot = 1
  }
  display.innerHTML = dialedNumber
});

bsign.addEventListener('click', function(e) {
  e.preventDefault()
  dialedNumber = -Number(dialedNumber)
  display.innerHTML = dialedNumber
})

bclear.addEventListener('click', function(e) {
  e.preventDefault()
  dialedNumber = 0
  display.innerHTML = dialedNumber
})

bclear.addEventListener('dblclick', function(e) {
  e.preventDefault()
  dialedNumber = 0
  display.innerHTML = dialedNumber
  stored = 0
  result = 0
  pressed = ""
})

//Operadores
bmenos.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.menos()
})

bmas.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.mas()
})

bpor.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.por()
})

bdiv.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.div()
})

bigual.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.igual()
})
