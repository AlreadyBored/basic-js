const CustomError = require("../extensions/custom-error");

const chainMaker = {

  /*
  Методы addLink, reverseChain и removeLink чейнятся, в то время как остальные – нет. 
  
  */
  
   arrChain : [],
  
  
    getLength() {
      // todo getLength возвращает текущую длину цепи в виде числа;
  
  return this.arrChain.getLength; 
  
    },
  
    addLink( value = ' ' ) {
      // todo addLink(value) добавляет звено, содержащее строковое представление value к цепочке;
      // Если addLink вызван без аргументов, он добавляет пустое звено ('( )') в цепочку. 
  
      this.arrChain.push( value );
  
      return this; 
    },
  
    removeLink(position) {
      // todo removeLink(position) удаляет звено цепи, находящееся в заданном положении;
      // Если removeLink принимает некорректную позицию (например, не являющуюся числом, или дробное число, 
      // или ссылающуюся на несуществующее звено), он должен выбросить ошибку. 
  
      if (!Number.isInteger(position)) {
        this.arrChain = [];
        throw "Нецелое число";
      } ;
  
      if ( (position<1) || ( position > this.arrChain.getLength )) {
        this.arrChain = [];
        throw "Некорректная позиция";
      } ;
  
      this.arrChain.splice(position-1, 1);
  
      return this; 
  
    },
    reverseChain() {
      // todo reverseChain разворачивает цепь задом наперед;
  
      this.arrChain.reverse();
  
      return this; 
  
    },
  
    finishChain() {
      // todo finishChain завершает цепь и возвращает ее.
      // После вызова метода finishChain существующая на данный момент цепь должна быть удалена, 
      // как и в случае, если была выброшена ошибка
  
      var resultStr = "( " + this.arrChain[0] + " )";
  
    for (var i = 1; i < this.arrChain.length; i++) {
    
      resultStr += "~~( " + this.arrChain[i] + " )";
    
      }
    
      this.arrChain = [];
      return resultStr;
    }
  
  };
  
  
module.exports = chainMaker;
