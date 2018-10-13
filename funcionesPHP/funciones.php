<?php
function grabaDatosEnBD($arrayPareja1, $arrayPareja2, $id, $creador, $asignatura, $indicaciones)
	{
	try {
			$query="INSERT INTO t_datosgenerales VALUES(".$id.",\"$creador\", \"$asignatura\", \"$indicaciones\");";
			//$dbh = new SQLite3('../database/database.db3');
			$dbh = new PDO("sqlite:../database/database.db3");
			
					for($i=1; $i<=count($arrayPareja1); $i++)
					{
						//echo $i." ".$arrayPareja1[$i]." ".$arrayPareja2[$i];
						$query=$query."INSERT INTO t_datosbaraja VALUES (".$id.", \"$arrayPareja1[$i]\", \"$arrayPareja2[$i]\");";
					}
					//echo $query;
					$dbh->exec($query);
			} catch (PDOException $e) {
			echo 'Connection failed: ' . $e->getMessage();
			}
		}
		
		
	function maxIdBaraja()
		{/*
				cc = $result->fetch(PDO::FETCH_ASSOC);
				if(!$aux)
				{echo("No existen datos para ese usuario");}
				else
				{return $aux["IDjugador"];}*/
		$db = new PDO("sqlite:database/database.db3");
		$sql = 'SELECT MAX(id_partida)FROM t_datosbaraja;';
		$result = $db->query($sql);
		$aux= $result->fetch(PDO::FETCH_BOTH );
			if(!$aux)
				{echo("No existen datos para ese usuario");}
				else
				{
						$id=$aux[0];

				}
		
		
		echo $id+1;
		}
	function creaCombosBarajas()
		{
		$db = new PDO("sqlite:database/database.db3");//new SQLite3('database/database.db3');
		$sql = 'SELECT * FROM t_datosgenerales';
		//$result = $db->query($sql);//->fetchArray(SQLITE3_ASSOC); 
		$row = array(); 
		$i = 0; 
		$aux="<select name='combo_barajas' class='estilocombo'>";
							
		foreach ($db->query($sql) as $res) 							
			 { 
				$id_partida=$res['id_partida']; 
				$creador=$res['creador']; 
				$asignatura=$res['asignatura']; 
				$texto_combo="ID: ".$id_partida." ASIGNATURA: ".$asignatura." CREADOR: ".$creador;
				$aux=$aux."<option value='".$id_partida."'>".$texto_combo."</option>";
				 if(!isset($res['creador'])) continue; 
				$row[$i]['creador'] = $res['creador']; 
				  //echo($row[$i]['creador']);
				$i++; 

			  } 
		  $aux=$aux."</select>";
		  echo($aux);
		}
		
		
		
	function creaIndicacionesJSON($id)
		{
		$db = new PDO("sqlite:../database/database.db3");//new SQLite3('database/database.db3');
		$sql = 'SELECT * FROM t_datosgenerales  WHERE id_partida='.$id;
		$result = $db->query($sql);
		$aux= $result->fetch(PDO::FETCH_BOTH );
			if(!$aux)
				{echo("No existen datos para ese usuario");}
				else
				{
						$creador=$aux[1];
						$asignatura=$aux[2];
						$indicaciones=$aux[3];

				}
		
		 print("{");
		 print("\n");
		 print("\"indicaciones\":");
		  print("\"".$indicaciones."\"");
		  print(",");
		  print("\n");
		}
		function creaParejasJSON($id)
		{
		
			$db = new PDO("sqlite:../database/database.db3");
		$sql = 'SELECT pareja1, pareja2 FROM t_datosbaraja WHERE id_partida='.$id;
		$result = $db->query($sql);//->fetchArray(SQLITE3_ASSOC); 
		$row = array();  
		$i = 0; 
	$auxPareja1="";
	$auxPareja2="";
	foreach ($db->query($sql) as $res) 							
			 { 
				
             if(!isset($res['pareja1'])) continue; 

              
			  
			  $auxPareja1="\"".$res['pareja1']."\"".",".$auxPareja1;
			  $auxPareja2="\"".$res['pareja2']."\"".",".$auxPareja2;
            $i++; 

          } 
		  $largo1=strlen ( $auxPareja1)-1;
		  $largo2=strlen ( $auxPareja2)-1;
		  $auxPareja1=substr($auxPareja1, 0, $largo1);
		  $auxPareja2=substr($auxPareja2, 0, $largo2);
         
		  print("\n");
		  print("\"texto1\":[".$auxPareja1."],"); 
		  print("\n");
		  print("\"texto2\":[".$auxPareja2."]"); 
		  print("\n");
		  print("}"); 
		  }
	?> 