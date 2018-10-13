
function creaCabecera()
{

	if (tipoMemory==0)
	{
	creaCabeceraMatematica();
	}
	else
	{
	creaCabeceraTextual();
	}
}
//Esta cabecera no debe dejar elegir parejas no otras cosas si estamos hablando de textos, ya 
// que las parejas se forman con un XML o JSON que viene del servidor
function creaCabeceraTextual()
{


/*Celda para las funciones*/
aux2="<div class='indicaciones'><td>";
aux2+=indicaciones;
aux2+="</td></div>";

/*31032014-No funciona lo de cambiar las alturas, ya que cada carta tiene un id diferente.
Podr&iacute;a hacerse un bucle para recorrerlos todos, pero hoy no*/
aux2+="<div class='puntuacion'><td> Puntuaci&oacute;n:<input type='text' id='puntuacion' size='2' value='0' disabled>"+"</td></div>";

a="formadorestic";
b="@";
c=".com";

aux2+="<div  class='home'><td><a href='index.html' title='Ir al inicio del MEMORY'><img class='imagenhome' src='imagenes/home.png'></a></td></div>";
aux2+="</tr></table></td>";

document.getElementById("filacabecera").innerHTML=aux2;
}
function creaCabeceraMatematica()
{

/*Fila para tiempo, puntuaci&oacute;n, n� parejas*/
/*Bucle para el combo de parejas*/
aux2="<td><table border='1' width='100%'><tr><td>";//N� parejas y funci&oacute;n en una celda, puntuaci&oacute;n en otra
aux2+="N&uacute;mero de parejas: ";
aux2+="<select id='comboparejas' onChange='javascript:creaTablaNueva(this.value);'>";
for(i=1;i<nparejas.length;i++)
	{
		if (numeroparejas==nparejas[i]){seleccionada="selected";}
		else{seleccionada="";}
		aux2+="<option value='"+nparejas[i]+"' "+seleccionada+" >"+nparejas[i]+"</option>";
	}
aux2+="</select>";
aux2+="</td>";

/*Fin bucle para combo parejas*/

/*Celda para las funciones*/
aux2+="<td >";
aux2+="Funci&oacute;n:"; 



aux2+="<input type='text' id='campooperacion' value='"+operacion+"' onClick='javascript:borrarCampo(this);' >";
aux2+="<input type='button' id='botonoperacion' value='Actualizar' onClick='javascript:seleccionaFuncionPersonalizada();'>";

aux2+="<label for='valoresnegativos' >Valores negativos</label>";
aux2+="<input type='checkbox' id='valoresnegativos' >";
aux2+="</td>";

/*31032014-No funciona lo de cambiar las alturas, ya que cada carta tiene un id diferente.
Podr&iacute;a hacerse un bucle para recorrerlos todos, pero hoy no*/
aux2+="<td> Puntuaci&oacute;n:<input type='text' id='puntuacion' size='2' value='0' disabled>"+"</td>";
aux2+="<td> <a href='manual/MEMORY.pdf' target='_blank'>MANUAL</a></td>";
a="formadorestic";
b="@";
c=".com";
aux2+="<td><font size='2'> C.C. BY-NC<br> Luis Sanz Goizueta("+a+b+"gmail"+c+")</font></td>";
//alert(aux2);
aux2+="<td><div  class='home'><a href='index.html' title='Ir al inicio del MEMORY'><img  src='imagenes/home.png'></a></div></td></tr></table></td>";
document.getElementById("filacabecera").innerHTML=aux2;


}

function seleccionaFuncionPersonalizada()
{auxop=document.getElementById("campooperacion").value;
    
	
	seleccionaFuncion(auxop);
	document.getElementById("campooperacion").value=auxop;
	
	}

function borrarCampo(obj)
{
	obj.value="";
	
	}
function seleccionaFuncion(funcion)
	{
		operacion=funcion;
		
		vaciaValores();
		creaTablero();
	}
	