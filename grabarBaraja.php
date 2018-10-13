
<?php 
include("funciones.php");
$num=$_REQUEST['numero_parejas'];
$id_baraja=$_REQUEST['id_baraja'];
$nombre_creador=htmlentities($_REQUEST['nombre_creador']);
$asignatura=htmlentities($_REQUEST['asignatura']);
$indicaciones=htmlentities($_REQUEST['indicaciones']);
$arrayPareja1 = array();
$arrayPareja2 = array();
//Primero relleno los arrays
for($i=1; $i<=$num;$i++)
		{
		$auxNombreCampo1="pareja1-".$i;
		$auxNombreCampo2="pareja2-".$i;
		$valorCampo1=htmlentities ($_REQUEST[$auxNombreCampo1]);
		$valorCampo2=htmlentities ($_REQUEST[$auxNombreCampo2]);
		$arrayPareja1[$i]=$valorCampo1;
		$arrayPareja2[$i]=$valorCampo2;
		}
//Los grabo. grabaDatosEnBD($arrayPareja1, $arrayPareja2); está en funciones.php 

		
		
?>
<html>
<head>
<title>Grabación de baraja</title>
</head>
<body>
Partida con id: <?php grabaDatosEnBD($arrayPareja1, $arrayPareja2, $id_baraja, $nombre_creador, $asignatura, $indicaciones); ?> grabada. 
Haga clik en el enlace para jugar: <a href="seleccionar_baraja.php">Jugar </a>

</body>
</html>