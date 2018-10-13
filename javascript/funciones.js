var clicado=false;
var numClicado=new Array();
var idClicado=new Array();
var operacion="4*x";

var funciones=["2*x","4*x", "3*x","x^2","x^3" ];
var aleatorios=new Array();//Este array es para evitar que salgan duplicados. 
			  //Se usa en funciones2.js y se va rellenando la posici�n x cuando x se da como n�mero 
var ancho_carta, ancho_pantalla, alto_pantalla;
var alto_carta=0;
var margen=20;
var cabecera=20;
var pie=40;
var puntuacion=0;
var numeroparejas=8;
var ncolumnas, nfilas;
var tamanioLetra;
var x_=new Array();
var fx=new Array();
var textos_speech_fx=new Array();//Esto es para cargar las palabras y que suenen al clicar
var textos_speech_x=new Array();//Esto es para cargar las palabras y que suenen al clicar
//var auxop;
var ocultacarta=true;
var indicaciones="Busca las parejas relacionadas";
var tipoMemory=0;//Si el tipoMemory es 0, ser� num�rico; si es 1 ser� de parejas que han creado los profesores
				//Esta variable habr� que capturarla en la pantalla anterior
var nparejas=[2,3,4,6,8,9,10,12,14,15,16,18];
var cartas=new Array();//Aqu� estar�n desordenados y mezclados tanto x como fx. 		
//Se rellena en rellenaArrayCartas();(funcionesCreaTablero.js)
rango=20;
$(document).ready(function() {
tipoMemory=parseInt($("#tipo_memory").val());
ocultacarta=$("#ocultacarta").val();

//alert("ocultacarta:"+ocultacarta);
//alert("tipoMemory");
    if(tipoMemory==0)
	{//alert("Crea tablero");
	creaTablero();}
	else
	{creaTableroAsincrono();}
});
function gestionaClick(objeto)
{
	sonar("click");
id=objeto.id;//Los ids deben ser x_num o fx_num, ej: x_8 o fx_8
		//Al introducir nos negativos, en las potencias pares pueden aparecer 2 veces la misma soluci�n, 
		//As� que se repetir�a fx. Para evitarlo, se llamar�n:fx_n_origen_N

id_num=extraeNumeroDeId(id);

if (id.indexOf("fx")!=-1)
{//Solo quiero que hable en los fx
speechSynthesis.speak(textos_speech_fx[id_num]);
}
//alert(id+"id_num:"+id_num);

//alert("-"+id+"-");
if(clicado) //Si esto se cumple es porque es el segundo click
	{
		clicado=false;
		cambiaColor(id,"seleccionada");
		numClicado[1]=id_num;
		idClicado[1]=id;
		compruebaPar();
		
		
	}
	else
	{
		clicado=true;
		cambiaColor(id,"seleccionada");
		numClicado[0]=id_num;
		idClicado[0]=id;
		
	}



}
function cambiaColor(id, estado)
{
	
	document.getElementById(id).className=estado;
}
function compruebaPar()
{
	if(compruebaOperacion())
	{
		aumentaPuntuacion();//Esto est� en funciones2.js
		carta1=idClicado[1];
		carta2=idClicado[0];
		cambiaColor(carta1, "acertada");
		cambiaColor(carta2, "acertada");
		sonar("ok");
		desactivaCarta(carta1, carta2);//Esto est� en funciones2.js
	}
	else
	{
		//alert ("Devuelto false");
		sonar("ko");
		window.setTimeout(ponerFalladas, 300);//Retardo para que se vea un poco las falladas
		
	}
}
function ponerFalladas()
{
		cambiaColor(idClicado[1], "fallada");
		cambiaColor(idClicado[0], "fallada");
}
function compruebaOperacionNumerica()
{
var x,fx,fx_aux,fx2;
		//Compruebo si con x numClicado[0] y fx numClicado[1] est� bien la operaci�n 
		x=numClicado[0]; 
		fx=numClicado[1];
		aux=operacion;
		//Esto es para el caso de que sea num�rico
			expr = Parser.parse(operacion);
			fx_aux=expr.evaluate({ x: x });
		//Para el caso no num�rico, hay que comparar si n y m coinciden en x_n y fx_m
		if(fx==fx_aux)
		{return true;}
		//Compruebo si con x numClicado[1] y fx numClicado[0] est� bien la operaci�n
		x=numClicado[1]; 
		fx=numClicado[0];
		aux=operacion;
		//fx_aux=eval(aux.replace("x",x));
		fx_aux=expr.evaluate({ x: x });
		if(fx==fx_aux)
		{return true;}
		return false;
}
function compruebaOperacionTextual()
{




if(numClicado[1]==numClicado[0] && idClicado[0]!=idClicado[1]){return true;}else{return false;}
}
function compruebaOperacion()
	{
		if (tipoMemory==0){return compruebaOperacionNumerica();}
		else
		{return compruebaOperacionTextual();}
	}
	
function extraeNumeroDeId(id_entero)
{
	if(id_entero.indexOf("origen")>-1) //Esto es que contiene la palabra origen y tiene forma //"fx_"+fx[i]+"origen_"+x_[i];						   
	{
		aux=id_entero.indexOf("origen");
		aux2=id_entero.slice(3, aux);
		//alert("aux2:"+aux2);
		return aux2;
	}
	if(id_entero!=null)
	{
		i=id_entero.indexOf("_");
		l=id_entero.length;
		return id_entero.slice(i+1,l);
	}
	else 
	{return "sale undefined";}
}
function extraeTextoDeId(id)
{
//Aqu� llegar�n ids del tipo x_n y fx_m as� que hay que ver si llega fx o x y devolver 
//la posic�n n o m del array x o fx
var arrayValores=id.split("_");
tipo=arrayValores[0];//Esto devuelve x o fx
indice=arrayValores[1];//Esto devuelve el �ndice del array
if(tipo=="fx")
{return fx[indice];}
else
{return x_[indice];}


}