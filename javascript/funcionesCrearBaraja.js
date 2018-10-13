var lineasPareja=1;
var texto_parejanorellena="Por favor, rellena las parejas vacías antes de crear otra. Gracias ;-)";
var texto_cabeceranorellena="Por favor, rellena la cabecera. Gracias ;-)";
$(document).ready(function()	{
$('.icono_anadir').click(annadirPareja);
$('#btnGrabar').click(grabarBaraja);


});

function annadirPareja()
{
if(parejaRellena())
		{
		lineasPareja++;
		aux1="<br>";
		aux1+="Pareja 1: <input type='text' name='pareja1-"+lineasPareja+"' id='pareja1-"+lineasPareja+"'>";
		aux1+="Pareja 2: <input type='text' name='pareja2-"+lineasPareja+"' id='pareja2-"+lineasPareja+"'>";
		aux1+="<img src='imagenes/annadir.png' id='imagen_annadir"+lineasPareja+"' class='icono_anadir' alt='Pulse para a&ntilde;adir parejas de cartas' title='Pulsar para a&ntilde;adir otra pareja de cartas' onClick='javascript: annadirPareja();'>";
		$("#parejas").append(aux1)	;
		}
else
	{
	alert(texto_parejanorellena);
	}

}
function grabarBaraja()
{
cabecera=cabeceraRellena();
parejas=parejaRellena();
todorelleno=(cabecera && parejas);

		if(!parejas)
		{
			alert(texto_parejanorellena);
		}
		if (!cabecera)
		{
			alert(texto_cabeceranorellena);
		}
		if (todorelleno)
		{
			
			$("#num_parejas").val(lineasPareja);
			$("#formulario").submit();
		}
}

function cabeceraRellena()
	{
	rellenos=true;
	creador=$("#nombre_creador").val();
	asignatura=$("#asignatura").val();
	indicaciones=$("#textoindicaciones").val();
	if (creador=="" || asignatura=="" || indicaciones=="")
		{
		
		rellenos=false;
		}
		return rellenos;
	}
function parejaRellena()
	{
	rellenos=true;
	for (i=1; i<lineasPareja+1;i++)
		{
		id_pareja1="#pareja1-"+i;
		id_pareja2="#pareja2-"+i;
		pareja1=$("#pareja1-"+i).val();
		pareja2=$("#pareja2-"+i).val();
				if(pareja1=="" || pareja2=="")
				{
				
				rellenos=false;
				}
		
		}
		return rellenos;
	}
