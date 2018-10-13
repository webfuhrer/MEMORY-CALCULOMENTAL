
<?php
header("Access-Control-Allow-Origin: *"); 
include("../funcionesPHP/funciones.php");
$id=$_REQUEST['id'];
creaIndicacionesJSON($id);
creaParejasJSON($id);

?>