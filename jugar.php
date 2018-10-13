<!DOCTYPE html>
<head><title>MEMORY EDUCATIVO. CREA TU PROPIA BARAJA</title>
<?php
header('Content-Type: text/html; charset=UTF-8'); 
?>
<script language="Javascript" src="javascript/jquery-1.11.1.js"></script>
<script language="Javascript" src="javascript/funciones.js"></script>
<script language="Javascript" src="javascript/cargaJSON.js"></script>
<script language="Javascript" src="javascript/funciones2.js"></script>
<script language="Javascript" src="javascript/funcionesCreaTablero.js"></script>
<script language="Javascript" src="javascript/funcionesPantalla.js"></script>
<script language="Javascript" src="javascript/funcionesCabecera.js"></script>
<script language="Javascript" src="javascript/parser.js"></script>
<script language="Javascript" src="javascript/sonidos.js"></script>
<script language="Javascript" src="javascript/speech.js"></script>
<meta name=viewport content="width=device-width"/>
<meta name=description content="Aplicación educativa de de cartas tipo MEMORY">
<meta name=keywords content="matemáticas, cálculo, pdi, MEMORY, recurso educativo">
<link rel="stylesheet" type="text/css" href="css/estilos.css"> 

</head>
<body>
<!--SONIDOS-->
<?php
if(isset ($_REQUEST['combo_barajas']))
{
	$barajaSeleccionada=$_REQUEST['combo_barajas'];
	if (isset ($_REQUEST['ocultacarta']))
		{$ocultacarta=$_REQUEST['ocultacarta'];}
		else
		{$ocultacarta=false;}
	
	$tipo_memory=1;
}
else
{
if (isset ($_REQUEST['ocultacarta']))
		{$ocultacarta=$_REQUEST['ocultacarta'];}
		else
		{$ocultacarta=false;}
	$barajaSeleccionada="";
	$tipo_memory=0;
}

?>
<input type="hidden" value="<?php echo $barajaSeleccionada?>" id="baraja_seleccionada">
<input type="hidden" value="<?php echo $tipo_memory?>" id="tipo_memory">
<input type="hidden" value="<?php echo $ocultacarta?>" id="ocultacarta">
<audio  preload="auto" id="click">
<source src="sonidos/click.ogg" type="audio/ogg" >
<source src="sonidos/click.mp3" type="audio/mpeg">
</audio>
<audio  preload="auto" id="ok">
<source src="sonidos/ok4.ogg" type="audio/ogg" >
<source src="sonidos/ok4.mp3" type="audio/mpeg">
</audio>
<audio  preload="auto" id="ko">
<source src="sonidos/ko4.ogg" type="audio/ogg" >
<source src="sonidos/ko4.mp3" type="audio/mpeg">
</audio>
<!--FIN SONIDOS-->
<form name="formulario" id="formulario">
<table id="tablaTotal" width="100%" border="0">
<tr>
	
	<div id="filacabecera"></div>

</tr>
<tr>
	<td>
	<div id="tabla"></div>
	</td>
</tr>
</table>
</form>
</body>
</html>