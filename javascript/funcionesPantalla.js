function calculaTamanio()
{
	TamVentana();
	/*Quizá cambiar por tamaño de VENTANA*/
	ancho_pantalla=0.8*screen.width;
	alto_pantalla=0.8*screen.height;
	
	alto_carta=(alto_pantalla-cabecera-pie)/nfilas-margen;
	
	ancho_carta=(ancho_pantalla)/ncolumnas-margen;
	tamanioLetra=0.7*alto_carta;
	
}
function aumentaAltura()
{
alto_carta=alto_carta+2;
creaTablero();

}
function disminuyeAltura()
{
alto_carta=alto_carta-2;
creaTablero();
x_[i]=0;
}

function cambiaTamanio()
	{
		
		
		
	}
	
function TamVentana() {
  var Tamanyo = [0, 0];
  if (typeof window.innerWidth != 'undefined')
  {
    Tamanyo = [
        window.innerWidth,
        window.innerHeight
    ];
  }
  else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
  {
 
       ancho_pantalla= document.documentElement.clientWidth;
        alto_pantalla=document.documentElement.clientHeight;
    
  }
  else   {
    
    ancho_pantalla=    document.getElementsByTagName('body')[0].clientWidth;
       alto_pantalla= document.getElementsByTagName('body')[0].clientHeight;
    
  }
 
}