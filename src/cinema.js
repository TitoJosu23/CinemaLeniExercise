function butaca(){
    this.fila   = new Array();
    this.estado = new Array();   //0 = libre 1= ocupado y 2= reservado.
    this.numero = new Array();
}

function iniciobutaca(numerob, filab, estadob, but){
    but.numero[numerob]   = numerob + 1;
    but.fila[numerob]     = filab;
    but.estado[numerob]   = estadob;
}
function cine(fila, butfila, butacac){
    this.filas      = fila;
    this.butacas    = butacac;
    this.butacafila = butfila;
}
function asientoDisponible(){
    var disponibilidad = document.getElementById("infoCines");
    disponibilidad.innerHTML = '<p>Este Asiento se encuentra disponible. </p>';
}
function funciononcick(){ 
    asientoDisponible();
}

// Alerta

var show4 = 'Este asiento está Ocupado, por favor seleccione un asiento Disponible (Color Verde)';

function funcionalerta(){
   document.getElementById("infoCines").innerHTML = show4;
}

// INICIO SCRIPT

var fila = 8;
var butfila = 9;
butacas = new butaca();

// iNICIOALIZAR LAS BUTACAS

var num2 = 0;

for(var filai = 1; filai <= fila; filai++){

    for(var butacai = 1; butacai <= butfila; butacai++ ){

       var estado = Math.floor((Math.random() * 2 ) + 0);
        num2 = (butacai +((filai-1)* butfila)) -1;
        iniciobutaca(num2, filai, estado, butacas);
    }
}

 micine= new cine(fila, butfila, butacas);

function mostrar(){
    var numero = 0;
    document.write("<table>");

    for(var filai = 1; filai <= micine.filas; filai++){

        document.write("<tr>");

        for(var butacai = 1; butacai <= micine.butacafila; butacai++ ){

            numero ++;
            if(micine.butacas.estado[numero] == 0){

                document.write("<td><img  id='");
                document.write(numero);
                document.write(" ' onclick='funciononcick(");
                document.write(numero);
                document.write(")' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Punto_verde.png' style='width:30px'></td>");

           }else{

               document.write("<td><img onclick='funcionalerta()' src='https://upload.wikimedia.org/wikipedia/commons/3/39/Punto_rojo.png' style='width: 30px'></td>");
           }
        }
        document.write("</tr>");
    }
document.write("</table>");
}

mostrar();

function viewer() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var money = document.getElementById("money").value;
    var show2 = "<b>Espectador:</b> "+name+"<br><b>Edad:</b> "+ " <span>" + age + "</span>" +" años <br><b>Dinero:</b> "+ money;

    document.getElementById("infoViewer").innerHTML = show2; 
}

function info_cinema() 
{
var film="Avengers: Infinity War";
var price=100;
var show = "<b>Pelicula:</b> "+film+"<br><b>Precio:</b> "+price;

    document.getElementById("infoCine").innerHTML = show; 
}

function info_movie () {
    var title="Pride & Prejudice";
    var time="2 h 6 min";
    var min_age = 16; 
    var director="Joe Wright"; 
    var show1 ="<b>Titulo de la Pelicula:</b> "+title+"<br><b>Duracion:</b> "+time+"<br><b>Edad minima:</b> "+min_age+" años<br><b>Director:</b> "+director;

    var edadS = "<b>Transacción Exitosa!! </br>Disfrute de su funcion</b>"
    var datosErroneos = "<b>(Verifique los datos e intente nuevamente)</b>"
    var error = "<b>(Error, Algun dato introducido es erroneo...)</b>"
    
    var userMoney = document.querySelector("#money").value;
    document.getElementById("info").innerHTML = userMoney;

    var age = document.querySelector("#age").value; 
    document.getElementById("info").innerHTML = age;

    var collection = document.getElementsByTagName("h3");
    var getText = document.getElementById("asiento-disp").innerHTML = collection[1].innerHTML;
    var butacaDisp = getText

    // validaciones

    if (butacaDisp === "<p>Este Asiento se encuentra disponible. </p>"){
        butacaDisp = true;
    }
    else if(butacaDisp === "Este asiento está Ocupado, por favor seleccione un asiento Disponible (Color Verde)"){
        butacaDisp = false;
    }
    else{
        console.log(" ");
    }

    if (age >= min_age && age < 110 && userMoney >= 100 && butacaDisp == true) {
        document.getElementById("info").innerHTML = edadS;
      } else if (age < min_age && age > 1 || userMoney < 100 || butacaDisp == false) {
        document.getElementById("info").innerHTML = datosErroneos;
      } else {
        document.getElementById("info").innerHTML = error;
      };
document.getElementById("infoMovie").innerHTML = show1; 
}
