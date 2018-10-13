<?php include("funcionesPHP/funciones.php"); ?>
<html>
<head>
<title>Selección de baraja para jugar</title>
</head>
<body>
<form action ="jugar.php">
Seleccione una de las partidas y haga click en "jugar":
<?php creaCombosBarajas(); ?>
<br>
<input type="checkbox" name="ocultacarta" value="true"> Ocultar las cartas
<br>
<button value="Jugar">Jugar</button>
<br>

</form>
</body>
</html>