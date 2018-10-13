<html>
<head>
<?php include("funcionesPHP/funciones.php"); ?>
<title>Creaci&oacute;n de baraja para MEMORY</title>
<meta name="description" content="Creaci&oacute;n de baraja de cartas para memory">
<meta name="keywords" content="MEMORY, pdi, recurso educativo">
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="css/estilosAnnadirBaraja.css"> 
<script language="Javascript" src="javascript/jquery-1.11.1.js"></script>
<script language="Javascript" src="javascript/funcionesCrearBaraja.js"></script>

</head>
<body>
<form id="formulario" action="funcionesPHP/grabarBaraja.php" accept-charset="UTF-8" method="POST">
<div id="instrucciones">
Para crear una baraja, rellena los campos que hay a continuaci&oacute;n. <br>
El ID de la baraja ser&aacute; el que sirva para identificar la baraja cuando se quiera jugar y es un n&uacute;mero que da el sistema.<br>
Para ir a&ntilde;adiendo m&aacute;s parejas, haz click en el bot&oacute;n de (<img src="imagenes/annadir.png" id="imagen_annadir"  class="icono_anadir"  alt="Pulse para a&ntilde;adir parejas de cartas" title="Pulsar para a&ntilde;adir otra pareja de cartas">)
El campo de "indicaciones" sirve para mostrar al jugador qu&eacute; debe buscar; esto aparecer&aacute; en la cabecera de la partida.
<br>
Una vez terminado, haz click en "Grabar"; tu partida se grabar&aacute; y te dar&aacute; la opci&oacute;n de jugar mostrando un ocultando las cartas.
<br>&iquest;F&aacute;cil, verdad?...Pues....a creaaaar....
<hr>

</div>
<div id="cabeceraDatos">
Id: <input type="number" class="campoid" name="id_baraja"  value="<?php maxIdBaraja();?>"  readonly="readonly" size="8"> 
Creador: <input type="text" name="nombre_creador" id="nombre_creador"> 
Asignatura: <input type="text" name="asignatura" id="asignatura"> 
</div>
<div class="indicaciones_alumno">
<label for="textarea">Indicaciones:</label><br>
<textarea name="indicaciones" id="textoindicaciones" cols=50 >
</textarea>
</div>
<div id="parejas">
	Pareja 1: <input type="text" name="pareja1-1" id="pareja1-1" > 
	Pareja 2: <input type="text" class="pareja2" name="pareja2-1" id="pareja2-1"> 
	<img src="imagenes/annadir.png" id="imagen_annadir" class="icono_anadir" alt="Pulse para a&ntilde;adir parejas de cartas" title="Pulsar para a&ntilde;adir otra pareja de cartas">
</div>
<input type="hidden" name="numero_parejas" id="num_parejas" value="cosa">
<div class="botonGrabar" ><button type="button" id="btnGrabar" class="boton">Grabar</button></div>

</div>
</form>
</body>
</html>