$(document).ready(function(){
/**********Funções**********/

function marcarLotes(){
    resultado=null ;
    classe=null;
        $.post( "/barrasvg/retorna_status_json.php", function( data ) {
            resultado = JSON.parse(data);
                for (i=0;i<resultado.length; i++){

                //testa o resultado para determinar a cor das situações              
                switch (resultado[i].status){
                    case 0:
                        cor="lightgreen";
                        break;
                    case 1:
                        cor="yellow";
                        break;
                    case 2:
                    cor="lightcoral";
                        break;
                    case 3:
                    cor="blue";
                        break;
                    case 4:
                    cor="lightslategrey";
                        break;
                }//fim do switch
                
               
                //$("#q"+resultado[i].quadra+"l"+resultado[i].lote).addClass(classe);
                $("#q"+resultado[i].quadra+"l"+resultado[i].lote).css("fill",cor);
                $("#q"+resultado[i].quadra+"l"+resultado[i].lote).attr("corretor",resultado[i].corretor);
                $("#q"+resultado[i].quadra+"l"+resultado[i].lote).attr("comprador",resultado[i].comprador);

                //inserir tooltip
                        if(resultado[i].status==2){
                        
                        $("#q"+resultado[i].quadra+"l"+resultado[i].lote).tooltip({
                            track:true,
                            items: '[comprador], [corretor]',
                            content: function () {
                            return 'Comprador: ' + $(this).attr('comprador')+'<br/>Corretor: ' + $(this).attr('corretor');
                        }//fim do content
                        });//fim da tooltip
                    }
                    
                       if(resultado[i].status==4){
                        
                        $("#q"+resultado[i].quadra+"l"+resultado[i].lote).tooltip({
                            track:true,
                            items: '[comprador], [corretor]',
                            content: function () {
                            return 'Permuta: ' + $(this).attr('comprador');
                        }//fim do content
                        });//fim da tooltip
                    }

                }//fim do laço for
        });//fim da função post
}//fim da função marcar lotes
 
function setCheckSum_v (){
    $.get('/barrasvg/check_table.php', function (result){
        variavel=result;
    });
}//fim da função set checksum
    
function setCheckSum_e (){
    $.get('/barrasvg/check_table.php', function (result){
        estatico=result;
    });
}//fim da função set checksum   
   
function verificaMudancaCheckSum(){
    var antigo =variavel;
    setCheckSum_v();
    var novo =estatico;
        if(antigo!==novo){
            estatico=variavel;
            marcarLotes();
        }//fim do if
}
//início do script

//iniciar o panzoom
$("svg").panzoom({
  cursor:"default"
});

//desenhar lotes
marcarLotes();

//setar o checksum estatico
setCheckSum_e();
//setar o checksum variavel
setCheckSum_v();

//setar intervalo de mudança
setInterval(function(){
    setCheckSum_v ();
    verificaMudancaCheckSum();}, 3000);    
     
});//fim da função ready
