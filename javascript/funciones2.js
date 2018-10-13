function aumentaPuntuacion()
{
puntuacion=puntuacion+1;
document.getElementById("puntuacion").value=puntuacion;
}

function compruebaRepetido(num)
{
	repetido=true;
	if(aleatorios[num]=="usado")//El nº aleatorio ya está en las cartas
	{
		//alert(num+" ya esta usado");
		repetido=true;
	}
	else
	{
		aleatorios[num]="usado";
		repetido=false;
	}
	return repetido;
}
function desactivaCarta(c1, c2)
	{
		
		document.getElementById(c1).onclick=yaClicado;
		document.getElementById(c2).onclick=yaClicado;
	}

function yaClicado()
	{
	alert("Carta ya clicada");
	}