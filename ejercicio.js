//variables globales
let num1 = document.getElementById("texto1");
let num2 = document.getElementById("texto2");
let btnPrimero = document.getElementById("btnPrimero");
let btnSegundo = document.getElementById("btnSegundo");
let resul = document.getElementById("resultado");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnEspacio = document.getElementById("btnEspacio");
let btnEnter = document.getElementById("btnEnter");

let op = document.getElementById("op");

const suma = () => {

    let resultado = 0;

    resultado = num1 + num2;

    resul.innerHTML += resultado;

}

//Eventos
btnPrimero.onclick = function() {
    btn1.onclick = function() {
        texto1.innerHTML += "1";
    };

    btn2.onclick = function() {
        texto1.innerHTML += "2";
    };

    btn3.onclick = function() {
        texto1.innerHTML += "3";
    };

    btn4.onclick = function() {
        texto1.innerHTML += "4";
    };

    btn5.onclick = function() {
        texto1.innerHTML += "5";
    };

    btn6.onclick = function() {
        texto1.innerHTML += "6";
    };

    btn7.onclick = function() {
        texto1.innerHTML += "7";
    };

    btn8.onclick = function() {
        texto1.innerHTML += "8";
    };

    btn9.onclick = function() {
        texto1.innerHTML += "9";
    };

    btn0.onclick = function() {
        texto1.innerHTML += "0";
    };
};

btnSegundo.onclick = function() {
    btn1.onclick = function() {
        texto2.innerHTML += "1";
    };

    btn2.onclick = function() {
        texto2.innerHTML += "2";
    };

    btn3.onclick = function() {
        texto2.innerHTML += "3";
    };

    btn4.onclick = function() {
        texto2.innerHTML += "4";
    };

    btn5.onclick = function() {
        texto2.innerHTML += "5";
    };

    btn6.onclick = function() {
        texto2.innerHTML += "6";
    };

    btn7.onclick = function() {
        texto2.innerHTML += "7";
    };

    btn8.onclick = function() {
        texto2.innerHTML += "8";
    };

    btn9.onclick = function() {
        texto2.innerHTML += "9";
    };

    btn0.onclick = function() {
        texto2.innerHTML += "0";
    };
}


btnPorcent.onclick = function() {
    texto.innerHTML += "0";
};

btnDiv.onclick = function() {
    texto.innerHTML += "0";
};

btnBorrarTodo.onclick = function() {
    texto.innerHTML += " ";
};

btnBorrar.onclick = function() {
    texto.innerHTML += "<br>";
};

btnMulti.onclick = function() {
    texto.innerHTML += "<br>";
};

btnGuion.onclick = function() {
    texto.innerHTML += "<br>";
};

btnMas.onclick = function() {
    suma();
};

btnPunto.onclick = function() {
    texto.innerHTML += "<br>";
};

btnIgual.onclick = function() {
    texto.innerHTML += "<br>";
};