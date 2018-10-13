
<?php 
//$db = new SQLite3('database/database.db3');
 header("Access-Control-Allow-Origin: *");
$db = new PDO("sqlite:database/database.db3");
$sql = 'SELECT pareja1, pareja2 FROM t_datosbaraja WHERE id_partida=1';
$result = $db->query($sql);//->fetchArray(SQLITE3_ASSOC); 
$row = array(); 

        $i = 0; 
$auxPareja1="";
	$auxPareja2="";
         while($res = $result->fetch(PDO::FETCH_BOTH )){ 
	
             if(!isset($res['pareja1'])) continue; 

              $row[$i]['pareja1'] = $res['pareja1']; 
              $row[$i]['pareja2'] = $res['pareja2']; 
			  
			  $auxPareja1="\"".$res['pareja1']."\"".",".$auxPareja1;
			  $auxPareja2="\"".$res['pareja2']."\"".",".$auxPareja2;
            $i++; 

          } 
		  $largo1=strlen ( $auxPareja1)-1;
		  $largo2=strlen ( $auxPareja2)-1;
		  $auxPareja1=substr($auxPareja1, 0, $largo1);
		  $auxPareja2=substr($auxPareja2, 0, $largo2);
          print("{");
		  print("\n");
		  print("\"texto1\":[".$auxPareja1."],"); 
		  print("\n");
		  print("\"texto2\":[".$auxPareja2."],"); 
		  print("\n");
		  print("}"); 
?>