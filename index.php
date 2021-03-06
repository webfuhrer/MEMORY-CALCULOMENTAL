<!DOCTYPE html>
<head>
<script language="Javascript">
function cambiaDestino(obj)
{

document.getElementById("memorymatematico").href="jugar.php?ocultacarta="+obj.checked;
}
</script>
<meta charset="UTF-8">
<title>Crea tu baraja para MEMORY, cartas personalizables con fines educativos</title>
<meta name="description" content="Recurso educativo de cartas tipo MEMORY personalizables online para fines docentes">
<link rel="stylesheet" type="text/css" href="css/estilos.css"> 

</head>
<body class="pantallaprincipal">
<h1>MEMORY educativo personalizable.</h1>
Con esta aplicación educativa se trata de simular el juego de "MEMORY", en el que unas cartas están boca abajo
 y hay que buscar las parejas, levantando un par y viendo si coinciden. Con las limitaciones propias del dispositivo, puede usarse también para tablets y smartphones.
 <br>
Puede usarse para buscar parejas de números relacionados (el MEMORY matemático) 
 en el que se pueden elegir diferentes funciones matemáticas para encontrar x y f(x); podemos seleccionar si queremos o no ocultar las cartas y el número de parejas.
 <br>
 Hay otra versión para buscar parejas de conceptos (por ejemplo País/Capital, palabras en idioma1/idioma2....) con el Memory de palabras;<br>
 las barajas se crean fácilmente y se puede elegir también mostrar u ocultar las cartas.
<ul class="opciones">

<li id="memory-matematico"><a href="jugar.php?ocultacarta=false" id="memorymatematico">Memory de operaciones matemáticas</a> (<input type="checkbox" name="ocultacarta" value="true" onClick="javascript: cambiaDestino(this);">Clica para ocultar las cartas)</li>
<li id="crear_baraja"><a href="crear_baraja.php">Crear una nueva baraja de cartas</a></li>
<li id="jugar"><a href="seleccionar_baraja.php">Seleccionar baraja para jugar</a></li>
<li id="ejemplo"><a href="http://formadorestic.com/MEMORY-CALCULOMENTAL/jugar.php?combo_barajas=10&ocultacarta=true">Ver un ejemplo</a></li>

</ul>
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">MEMORY</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://formadorestic.com/MEMORY-CALCULOMENTAL/" property="cc:attributionName" rel="cc:attributionURL">Luis Sanz Goizueta</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Reconocimiento-NoComercial 4.0 Internacional License</a>.
</body>
</html>