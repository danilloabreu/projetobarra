<?php

$path = $_SERVER['DOCUMENT_ROOT'];
require ($path.'/sicor/controller/php/conexao.php');

$query =$conexao->stmt_init();  
$sql="checksum table `lote`";

//testa se o query está correto
        
    if($query=$conexao->prepare($sql)){
        //passando variaveis para a query
        try{           
            //$query->bind_param('s',$destinatario);           
            $resultado=$query->execute();
            $query->bind_result($col1,$col2);

            while ($query->fetch()) {    
            
            $checksum=$col2;
            
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
    //while($row = $resultado->fetch_assoc()){
    //echo $row['resumo'] . '<br />';
    }else{
        echo "Há um problema com a sintaxe inicial da query SQL";
    }
             
echo $checksum;

?>