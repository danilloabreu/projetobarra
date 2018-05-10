 $(document).ready(function(){
            
function marcarLotes(){
    resultado=null ;    
        $.post( "/barrasvg/retorna_status_json.php", function( data ) {
            resultado = JSON.parse(data);
            for (i=0;i<resultado.length; i++){
            console.log (resultado[i].status);    
            }//fim do laço for
});//fim da função post
}//fim da função marcar lotes         
           
     marcarLotes();
     
});//fim da função ready