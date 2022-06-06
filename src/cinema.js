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

function funciononcick(valor){
    micine.butacas.estado[valor] = 2;
    document.getElementById(valor).src = "seleccionado.png";
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
            // console.log(numero);
            // console.log("estado numerob");
            // console.log(micine);
            if(micine.butacas.estado[numero] == 0){

                document.write("<td><img  id=' ");
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

// Separacion AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

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
    var edadN = "<b>No tienes la edad requerida para ver esta pelicula</b>"
    var error = "<b>Error, Algun dato introducido es erroneo...</b>"
    
    var precio = document.querySelector("#money").value;
    document.getElementById("qlq").innerHTML = precio;
    console.log(precio);

    var minAge = document.querySelector("#age").value;
    document.getElementById("qlq").innerHTML = minAge;

    // edad usario minAge

    if (minAge >= min_age && minAge < 120 && precio >= 100) {
        document.getElementById("qlq").innerHTML = edadS;
      } else if (minAge < min_age && minAge > 0 && precio < 100) {
        document.getElementById("qlq").innerHTML = edadN;
      } else {
        document.getElementById("qlq").innerHTML = error;
      };
    
    



    document.getElementById("infoMovie").innerHTML = show1; 
}








function cines () {

var filaAsiento, columAsiento, c=0;

butacas = new Array(9);
for (var i=0;i<9;i++)
butacas[i]=new Array(8);
for (var i=0;i<9;i++)
for (var j=0;j<8;j++)
butacas[i][j]=0;

while(c<=72){
    filaAsiento=document.getElementById("filaAsiento").value;
    columAsiento=document.getElementById("columAsiento").value;

        if ((filaAsiento>0 && filaAsiento<=8)&&(columAsiento>0 && columAsiento<=9)){

            if(butacas[(filaAsiento-1)][(columAsiento-1)]==0){
                butacas[(filaAsiento-1)][(columAsiento-1)]=1;
                c=c+1;
                document.getElementById("reserva").innerHTML = "Reserva Exitosa";
            } else {
                document.getElementById("reserva").innerHTML = "Butaca Ocupada";
            }
            } 
        }
    for (var i=0;i<9;i++){
        for (var j=0;j<40;j++){
            document.write(butacas[i][j,"\t"]);
        }
    }
}

// TERCERA PARTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

