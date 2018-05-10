<?php

$path = $_SERVER['DOCUMENT_ROOT'];
require_once ($path.'/barrasvg/Lote.php');
require_once ($path.'/barrasvg/conexao.php');

$lotes=array();

$query =$conexao->stmt_init();  
$sql="SELECT id,lote,quadra,status,comprador,corretor FROM lotebarra ";  
//testa se o query está correto    
if($query=$conexao->prepare($sql)){
    //passando variaveis para a query
    try{
        //executando a consulta
        $resultado=$query->execute();
        $query->bind_result($id,$numLote,$quadra,$status,$comprador,$corretor);
       //colocando resultados no array
        while ($query->fetch()) {
          $lote= new Lote($id,$numLote,$quadra,$status,$comprador,$corretor);  
          array_push($lotes,$lote);      
        } 
       //testa o resultado
        if (!$resultado) {
            $message  = 'Invalid query: ' . $conexao->error . "\n";
            //$message .= 'Whole query: ' . $resultado;
            die($message);
        }//end of if
    }//end of try
    catch(Exception $e){
        echo "erro";
    }
}else{
    echo "Há um problema com a sintaxe inicial da query SQL";
}
//return $lotes;
//header('Content-type: text/plain');
//print_r($lotes);
//echo (json_encode($lotes,JSON_PRETTY_PRINT));
echo (json_encode($lotes)); 