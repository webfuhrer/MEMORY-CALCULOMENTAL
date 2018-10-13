function creaTableroAsincrono()
{
	n=0;
	baraja_seleccionada=$("#baraja_seleccionada").val();
	//alert(baraja_seleccionada);
	//document.forms['formulario']['combofunciones'].value=operacion;
	//document.getElementById('combofunciones').value=operacion;
	//alert("baraja_seleccionada:"+baraja_seleccionada);
	$.getJSON("datosJSON/leeTablas.php?id="+baraja_seleccionada, function(json) {
							
									
									diseccionarJSON(json);
									
							
						//Desde aqui se rellena el array y se barajean
	
	calculaLados();//Aquí calcula el nº de filas y columnas.
	calculaTamanio();//Aquí calcula la anchura y altura de las cartas en función de los lados y la resolución de la pantalla
			//calculaTamanio.js está en funcionesPantalla.js
	creaCabecera();//Aquií se crea la cabecera con combos de parejas, funciones...
var aux, aux_operacion, colspan;
colspan=ncolumnas-1;//Esta variable lleva las columnas que debe ocupar la cabecera
aux_operacion=operacion;
aux="<table  align='center' class='cartas' border=1><div id='tablero'>";
aux+="<tr>";

expr = Parser.parse(operacion);
resultadoOp=expr.evaluate({ x: 2 });
//aux+="<td colspan='"+ncolumnas+"' class='titulo' align='center' height='"+cabecera+"px'>Busca las parejas de x y "+operacion+" por ejemplo, 2 y "+resultadoOp+"; Puntuación:<input type='text' id='puntuacion' size='2' value='0' disabled>"+"</td>";
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
		//Para los números, cartas[i] tiene pinta de x_n y fx_f(n), por ejemplo x_4 y fx_16
		//Para textos, cartas[i] tiene pinta de x_n y fx_m, donde m y n son las posiciones
		
		
			//alert(cartas[n]);
			texto=extraeTextoDeId(cartas[n]);
			aux+="<td id='"+cartas[n]+"' name='"+cartas[n]+"' onClick='javascript:gestionaClick(this);' class='noseleccionada' height='"+alto_carta+"px' width='"+ancho_carta+"px'>";
			
			if(ocultacarta=="true"){
				aux+="<div class='textocarta'>"+texto+"</div>";
				}
			else
				{
				aux+=texto;
				}
			
			aux+="</td>";
			
		
		
		//Esto esta en funcionesPantalla.js
		//alert("n="+n+" numero="+numero);
		n++;
		}
		aux+="</tr>";
		
	}

aux+="<tr>";
//aux+="<td colspan='"+ncolumnas+"' class='puntuacion' height='"+pie+"px'>Puntuación:<input type='text' id='puntuacion' size='2' value='0' disabled></td>";
aux+="</tr>";
aux+="</table></div>";
//alert(ncolumnas);
document.getElementById("tabla").innerHTML=aux;
cambiaTamanio();
});
}