var lista = {
    tipo: 'Lista de compras',
    itens: [],
    adicionaItens: function (){
        lista.itens.push(prompt('Qual item você quer adicionar?'));
    },
    exibeItens: function(){
        console.log(lista.itens);
    },
    removeItemNome: function(){
       
    },
    removeItemPosicao: function(){
        lista.itens.splice
    }
}

//objeto lista, um conjunto chave valor, o primeiro (tipo,itens) são os nomes dos objetos 
//o segundo é o tipo, objeto 

splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
     */

     filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */