<html>
    <head>
        <link rel="icon" type="image/ico" href="/sicor/view/img/favicon.ico">
        <link rel="stylesheet" type="text/css" href="reset.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="base.css">
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="mapa.css">
        <link rel="stylesheet" type="text/css" href="sit.css">
        
        <meta charset="utf-8">
        
    </head>
        <body>   
            <main>
                <div class="content">           
                    <section id="focal">
                        <div class="parent">
                            <div class="panzoom">
                                <?php require('mapabarra.svg') ?>   
                            </div>
                        </div>
                        
                    </section>
                <!--<h2> Clique <a  target="_blank" href="http://sicor.quilombonet.com.br/tabela_curta.php">aqui</a> para verificar as condições da tabela curta</h2>-->
                <h1>Legenda</h1>
                <p>Azul - Reservado pela Loteadora</p>
                <p>Cinza - Permuta</p>
                <p>Branco - Disponivel</p>
                <p>Amarelo - Proposta</p>
                <p>Vermelho - Vendido</p>
                <!--<p> Caso as cores não aparecam, limpar o histórico do navegador desde o começo</p>-->
                </div>
            </main>    
        </body>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
        integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
        crossorigin="anonymous"></script>
        <script src="util/zoompan1/jquery.panzoom.js"></script>
        <script type="text/javascript" src="mapa.js"></script>
        
        
        <script>
          (function() {
            var $section = $('#focal');
            var $panzoom = $section.find('.panzoom').panzoom();
            $panzoom.parent().on('mousewheel.focal', function( e ) {
              e.preventDefault();
              var delta = e.delta || e.originalEvent.wheelDelta;
              var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
              $panzoom.panzoom('zoom', zoomOut, {
                animate: false,
                focal: e
              });
            });
          })();
        </script>
    
</html>