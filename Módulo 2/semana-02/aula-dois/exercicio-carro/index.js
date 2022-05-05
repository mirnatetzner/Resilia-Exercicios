var carro = {
    cor: '',
    capacidadeTanque: 0,
    qntCombustivel: 0,
    consumoMédio: 0,
    previsao: function(){
        return this.qtsCombustivel*this.consumoMédio
    },
   getQtsCombustivel: function(){
       return this.qtsCombustivel
   },
   setQtsCombustivel: function(qntAbastecimento){
       var total = this.qntCombustivel + qntAbastecimento;
       if (total <= this.capacidadeTanque){
           this.qntCombustivel = total;
       }
   },
   
    getCor: function(){


    },
    getTanque:function(){

    },

    

}