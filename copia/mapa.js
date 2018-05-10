$(document).ready(function(){
/*
$("svg").svgPanZoom({
width: 500

});
*/
$("svg").panzoom({
  cursor:"default"
});

function marcarLotes(){
    resultado=null ;
    classe=null;
        $.post( "/barrasvg/retorna_status_json.php", function( data ) {
            resultado = JSON.parse(data);
                for (i=0;i<resultado.length; i++){

                /*switch (resultado[i].status){
                    case 0:
                        classe="disponivel";
                        break;
                    case 1:
                        classe="proposta";
                        break;
                    case 2:
                    classe="vendido";
                        break;
                }//fim do switch
                */
               
               
                switch (resultado[i].status){
                    case 0:
                        cor="white";
                        break;
                    case 1:
                        cor="yellow";
                        break;
                    case 2:
                    cor="red";
                        break;
                    case 3:
                    cor="blue";
                        break;
                    case 4:
                    cor="grey";
                        break;
                }//fim do switch
                
               
                //$("#q"+resultado[i].quadra+"l"+resultado[i].lote).addClass(classe);
                $("#q"+resultado[i].quadra+"l"+resultado[i].lote).css("fill",cor);
                $("#q"+resultado[i].quadra+"l"+resultado[i].lote).attr("corretor",resultado[i].corretor);
                $("#q"+resultado[i].quadra+"l"+resultado[i].lote).attr("comprador",resultado[i].comprador);

                    
                        $("#q"+resultado[i].quadra+"l"+resultado[i].lote).tooltip({
                            track:true,
                            items: '[comprador], [corretor]',
                            content: function () {
                            return 'Comprador: ' + $(this).attr('comprador')+'<br/>Corretor: ' + $(this).attr('corretor');
                        }//fim do content
                        });//fim da tooltip
                    $("#q"+resultado[i].quadra+"l"+resultado[i].lote).tooltip('enable');    
                    
                    if(resultado[i].status!=2){
                    $("#q"+resultado[i].quadra+"l"+resultado[i].lote).tooltip('disable');    
                    }
                }//fim do laço for
        });//fim da função post
}//fim da função marcar lotes
 
marcarLotes();


function setCheckSum_v (){
    $.get('/barrasvg/check_table.php', function (result){
    //alert(result);
    variavel=result;
    //alert($(".checksum").val());
    
    });
    }//fim da função set checksum
    
 function setCheckSum_e (){
    $.get('/barrasvg/check_table.php', function (result){
    //alert(result);
    estatico=result;
    //alert($(".checksum").val());
     });
    }
    //fim da função set checksum   
   
function verificaMudancaCheckSum(){
    var antigo =variavel;
    //alert ("CheckSum fixo: "+antigo);
    setCheckSum_v();
    var novo =estatico;
   // alert ("CheckSum variavel"+novo)
    if(antigo!==novo){
        estatico=variavel;
        //alert ("Mudou"); 
       //location.reload(true);
        marcarLotes();
    }

}
//inicio do script
//setar o checksum estatico
setCheckSum_e();
//setar o checksum variavel
setCheckSum_v();

setInterval(function(){
    setCheckSum_v ();
    verificaMudancaCheckSum();}, 3000);    
   
    
});//fim da função ready
