<?php

class Lote{
    public $id;
    public $lote;
    public $quadra;
    public $status;
    public $comprador;
    public $corretor;
    
    
    function __construct($id="",$lote,$quadra,$status,$comprador,$corretor){
        $this->id=$id;
        $this->lote=$lote;
        $this->quadra=$quadra;
        $this->status=$status;   
        $this->comprador=$comprador;
        $this->corretor=$corretor;
        
    }//fim do construtor
       
}//fim da classe lote

