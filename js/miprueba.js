/*
var display = document.getElementById('display'),
    dialedNumber = 0,
    stored = "0",
    pressed = "k",
    result = "0",
    dot = 0,
// b stands for Button
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
    bdiv = document.getElementById('dividido')

//Clicks
    b1.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 1
      } else {
        dialedNumber = dialedNumber + "1"
      }
      display.innerHTML = dialedNumber
    })

    b2.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 2
      } else {
        dialedNumber = dialedNumber + "2"
      }
      display.innerHTML = dialedNumber
    })

    b3.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 3
      } else {
        dialedNumber = dialedNumber + "3"
      }
      display.innerHTML = dialedNumber
    })

    b4.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 4
      } else {
        dialedNumber = dialedNumber + "4"
      }
      display.innerHTML = dialedNumber
    })

    b5.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 5
      } else {
        dialedNumber = dialedNumber + "5"
      }
      display.innerHTML = dialedNumber
    })

    b6.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 6
      } else {
        dialedNumber = dialedNumber + "6"
      }
      display.innerHTML = dialedNumber
    })

    b7.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 7
      } else {
        dialedNumber = dialedNumber + "7"
      }
      display.innerHTML = dialedNumber
    })

    b8.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 8
      } else {
        dialedNumber = dialedNumber + "8"
      }
      display.innerHTML = dialedNumber
    })

    b9.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 9
      } else {
        dialedNumber = dialedNumber + "9"
      }
      display.innerHTML = dialedNumber
    })

    b0.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = 0
      } else {
        dialedNumber = dialedNumber + "0"
      }
      display.innerHTML = dialedNumber
    })

    bpunto.addEventListener('click', function(e) {
      e.preventDefault()
      if (dot > 0) {

      } else {
        if (dialedNumber === 0) {
          dialedNumber = "."
        } else {
          dialedNumber = dialedNumber + "."
        }
        dot = 1
      }
      display.innerHTML = dialedNumber
    })

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
      stored = 0
      pressed = ""
      display.innerHTML = dialedNumber
    })

    bmenos.addEventListener('click', function(e) {
      e.preventDefault()
      if (dialedNumber === 0) {
        dialedNumber = "-"
        display.innerHTML = dialedNumber
      } else {
        stored = Number(dialedNumber)
        display.innerHTML = stored
        dialedNumber = "-"
      }
      pressed = "-"
      dot = 0
    })

    bmas.addEventListener('click', function(e) {
      e.preventDefault()
      stored = Number(stored) + Number(dialedNumber)
      dialedNumber = 0
*/      display.innerHTML = stored  /*
      pressed = "+"
      dot = 0
    })
*/
    bpor.addEventListener('click', function(e) {
      e.preventDefault()
      if (stored == 0) {
        stored = Number(dialedNumber)
        display.innerHTML = stored
        dialedNumber = 0
      } else {
          if (pressed == "k") {
            stored = Number(stored) * Number(dialedNumber)
            display.innerHTML = stored
            dialedNumber = 0
          }else {
            display.innerHTML = stored
          };
      }
      pressed = "x"
      dot = 0
    })

    bdiv.addEventListener('click', function(e) {
      e.preventDefault()
      if (stored == 0) {
        stored = Number(dialedNumber)
        display.innerHTML = stored
        dialedNumber = 0
      } else {
          if (pressed == "k") {
            stored = Number(stored) / Number(dialedNumber)
            display.innerHTML = stored
            dialedNumber = 0
          }else {
            display.innerHTML = stored
          };
      }
      pressed = "/"
      dot = 0
    })

    bigual.addEventListener('click', function(e) {
      e.preventDefault()
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
      display.innerHTML = result
      pressed = ""
      dialedNumber = 0
      dot = 0
    })

    //Animacion Teclas
    b1.onmousedown = function(){
      b1.style.transform = "scale(0.95, 0.95)";
    }
    b1.onmouseup = function(){
      b1.style.transform = "scale(1, 1)";
    }

    b2.onmousedown = function(){
      b2.style.transform = "scale(0.95, 0.95)";
    },
    b2.onmouseup = function(){
      b2.style.transform = "scale(1, 1)";
    }

    b3.onmousedown = function(){
      b3.style.transform = "scale(0.95, 0.95)";
    },
    b3.onmouseup = function(){
      b3.style.transform = "scale(1, 1)";
    }

    b4.onmousedown = function(){
      b4.style.transform = "scale(0.95, 0.95)";
    },
    b4.onmouseup = function(){
      b4.style.transform = "scale(1, 1)";
    }

    b5.onmousedown = function(){
      b5.style.transform = "scale(0.95, 0.95)";
    },
    b5.onmouseup = function(){
      b5.style.transform = "scale(1, 1)";
    }

    b6.onmousedown = function(){
      b6.style.transform = "scale(0.95, 0.95)";
    },
    b6.onmouseup = function(){
      b6.style.transform = "scale(1, 1)";
    }

    b7.onmousedown = function(){
      b7.style.transform = "scale(0.95, 0.95)";
    },
    b7.onmouseup = function(){
      b7.style.transform = "scale(1, 1)";
    }

    b8.onmousedown = function(){
      b8.style.transform = "scale(0.95, 0.95)";
    },
    b8.onmouseup = function(){
      b8.style.transform = "scale(1, 1)";
    }

    b9.onmousedown = function(){
      b9.style.transform = "scale(0.95, 0.95)";
    },
    b9.onmouseup = function(){
      b9.style.transform = "scale(1, 1)";
    }

    b0.onmousedown = function(){
      b0.style.transform = "scale(0.95, 0.95)";
    },
    b0.onmouseup = function(){
      b0.style.transform = "scale(1, 1)";
    }

    bmas.onmousedown = function(){
      bmas.style.transform = "scale(0.95, 0.95)";
    },
    bmas.onmouseup = function(){
      bmas.style.transform = "scale(1, 1)";
    }

    bmenos.onmousedown = function(){
      bmenos.style.transform = "scale(0.95, 0.95)";
    },
    bmenos.onmouseup = function(){
      bmenos.style.transform = "scale(1, 1)";
    }

    bpor.onmousedown = function(){
      bpor.style.transform = "scale(0.95, 0.95)";
    },
    bpor.onmouseup = function(){
      bpor.style.transform = "scale(1, 1)";
    }

    bdiv.onmousedown = function(){
      bdiv.style.transform = "scale(0.95, 0.95)";
    },
    bdiv.onmouseup = function(){
      bdiv.style.transform = "scale(1, 1)";
    }

    bclear.onmousedown = function(){
      bclear.style.transform = "scale(0.95, 0.95)";
    },
    bclear.onmouseup = function(){
      bclear.style.transform = "scale(1, 1)";
    }

    bsign.onmousedown = function(){
      bsign.style.transform = "scale(0.95, 0.95)";
    },
    bsign.onmouseup = function(){
      bsign.style.transform = "scale(1, 1)";
    }

    bigual.onmousedown = function(){
      bigual.style.transform = "scale(0.95, 0.95)";
    },
    bigual.onmouseup = function(){
      bigual.style.transform = "scale(1, 1)";
    }

    bpunto.onmousedown = function(){
      bpunto.style.transform = "scale(0.95, 0.95)";
    },
    bpunto.onmouseup = function(){
      bpunto.style.transform = "scale(1, 1)";
    }
