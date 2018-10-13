function creaCartas()

{
	//alert("crea cartas"+numeroparejas);
						//En esta funci�n se crean los grupos x,fx
						for(i=0;i<numeroparejas;i++)
						{
							x_[i]=obtenerAleatorio();//Estar�a bien introducir un proc. para no repetir n�meros.
							aux=operacion;
							expr = Parser.parse(operacion);
							fx_aux=expr.evaluate({ x: x_[i]});
							//fx_aux=eval(aux.replace("x",x_[i]));
							fx[i]=fx_aux;
							
							
						}
						rellenaArrayCartas();
						barajeaCartas();
						
				
			
				rellenaArrayCartas();
			barajeaCartas();	
				
				
	
}
function diseccionarJSON(obj)
{
						indicaciones=obj.indicaciones;
						for (i=0; i<obj.texto1.length; i++)
									{
									x_[i]=obj.texto1[i];
									fx[i]=obj.texto2[i];
                                                                        textos_speech_fx[i]=crearSpeech(fx[i]);//Para que se diga la palabra al clicar
                                                                       // textos_speech_x[i]=crearSpeech(x_[i]);//Para que se diga la palabra al clicar
									}
									//alert("Desde diseccionarJSON: "+obj.texto1[2]);
									rellenaArrayCartas();
									barajeaCartas();
								
}
function rellenaArrayCartas()
	{
		
		aux_x=x_.length;
		aux_fx=fx.length;
		//alert("Desde rellena array: "+x_[2]);
		//Si estamos con n�meros, los ids se forman, por ejemplo como x_4 y fx_16 (si f(x)=4*x)
		//En el caso de textos, los ids se forman como x_n y fx_n, donde n es la posici�n del array de las parejas y 
		// solo hay que comparar al clicar si n coincide en los dos ids.
					for (i=0;i<aux_x;i++)
					{
						if(tipoMemory==0){cartas[i]="x_"+x_[i];	}else{cartas[i]="x_"+i;}
						//alert("Desde bucle:"+cartas[i]);
					
					}
					for(i=0;i<aux_fx;i++)/*En cartas hay que poner el prefijo x_ y fx_ para que al crear la tabla el id se forme correctamente*/
					{
						if(tipoMemory==0){cartas[i+aux_x]="fx_"+fx[i]+"origen_"+x_[i];}else{cartas[i+aux_x]="fx_"+i;}
					
					}
	
		/*for(i=0;i<cartas.length;i++)
		{
		alert(cartas[i]);
		}*/
	
	
}
function barajeaCartas()
	{
		//M�todo sacado de http://comosehaceenjavascript.blogspot.com.es/2012/08/desordenar-de-forma-aleatoria-un-array.html
		//http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
		
		var j, temp;
	  	for(var i = cartas.length - 1; i > 0; i--){
	    	j = Math.floor(Math.random() * (i + 1));
	    	temp = cartas[i];
	    	cartas[i] = cartas[j];
	    	cartas[j] = temp;
	  	}
  
	}
function obtenerAleatorio()
	{
		var usado=true;
		valoresnegativos=$("#valoresnegativos").is(':checked');
                
		while(usado==true)
		{
		auxsigno=Math.floor(2*Math.random());
		//alert(auxsigno);
		if(auxsigno<1)
		{auxsigno=-1;}
		else
		{auxsigno=1;}	
                auxsigno=1;//Solo valores positivos a mano
		aux=auxsigno*Math.floor(1+rango*Math.random());		
		usado=compruebaRepetido(aux);
		
		}
		//alert("aux="+aux);
		return aux;
	}
function calculaLados()
	{
	var x_aux, y_aux, x, y;
	dif_aux=200;
	//alert("calcula lados:"+cartas.length);
		for (i=1;i<cartas.length/2+1;i++)
		{
			if(cartas.length%i==0)
			{
			x_aux=i;
			y_aux=cartas.length/i;
			aux=Math.abs(y_aux-x_aux);
			if(aux<dif_aux)
			{
				dif_aux=aux;
				x=x_aux;
				y=y_aux;
				//alert("aux="+aux);
			}
			//dif_aux=aux;
			
			
		}
		
	}
	ncolumnas=x;
	nfilas=y;
	//alert("x="+x+"y="+y);
	}
function creaTablero()
{
	n=0;
	//document.forms['formulario']['combofunciones'].value=operacion;
	//document.getElementById('combofunciones').value=operacion;
	//alert("Antes de creaCartas");
	creaCartas();//Desde aqui se rellena el array y se barajean
	
	calculaLados();//Aqu� calcula el n� de filas y columnas.
	calculaTamanio();//Aqu� calcula la anchura y altura de las cartas en funci�n de los lados y la resoluci�n de la pantalla
			//calculaTamanio.js est� en funcionesPantalla.js
	creaCabecera();//Aqui� se crea la cabecera con combos de parejas, funciones...
var aux, aux_operacion, colspan;
colspan=ncolumnas-1;//Esta variable lleva las columnas que debe ocupar la cabecera
aux_operacion=operacion;
aux="<table  align='center' class='cartas' border=1><div id='tablero'>";
aux+="<tr>";

expr = Parser.parse(operacion);
resultadoOp=expr.evaluate({ x: 2 });

aux+="</tr>";

//alert("cartas.length="+cartas.length);
//alert("nfilas="+nfilas+"ncolumnas="+ncolumnas);
//alert("nflas="+nfilas);
	for (fila=0;fila<nfilas;fila++)
	{
		//alert("."); 
		aux+="<tr>";
		for (columna=0;columna<ncolumnas;columna++)
		{
		
		//alert(cartas[n]);
		//document.write("En fila: "+i+" columna: "+j+" n="+n);
		//Para los n�meros, cartas[i] tiene pinta de x_n y fx_f(n), por ejemplo x_4 y fx_16
		//Para textos, cartas[i] tiene pinta de x_n y fx_m, donde m y n son las posiciones
		
		if(tipoMemory==0)
			{
			
			numero=extraeNumeroDeId(cartas[n]);
			aux+="<td id='"+cartas[n]+"' name='"+cartas[n]+"' onClick='javascript:gestionaClick(this);' class='noseleccionada' height='"+alto_carta+"px' width='"+ancho_carta+"px'>";
			//Meto numero en capa para ocultar
			
			if(ocultacarta=="true"){
				aux+="<div class='textocarta'>"+numero+"</div>";
				}
				else
				{
				aux+=numero;
				}
			aux+="</td>";
			}
			else
			{
			
			}
		
		
		//Esto esta en funcionesPantalla.js
		//alert("n="+n+" numero="+numero);
		n++;
		}
		aux+="</tr>";
		
	}

aux+="<tr>";
//aux+="<td colspan='"+ncolumnas+"' class='puntuacion' height='"+pie+"px'>Puntuaci�n:<input type='text' id='puntuacion' size='2' value='0' disabled></td>";
aux+="</tr>";
aux+="</table></div>";
//alert(ncolumnas);
document.getElementById("tabla").innerHTML=aux;
cambiaTamanio();
}

function creaTablaNueva(nparejas)
{
	
	numeroparejas=nparejas;
	vaciaValores();
	creaTablero();
}
function vaciaValores()
{
	cartas.length=0;
	aleatorios.length=0;
	x_.length=0;
	fx.length=0;
}
