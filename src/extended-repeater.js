const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes=1, separator='+', addition, additionRepeatTimes=1, additionSeparator='|'}){
    // let strRepeat=''
      if (str === null) {
         str = 'null';
      }
     if (addition === null) {
         addition = 'null'}
                let String=str
     if( addition != undefined){
     arr=[]
     for (let i = 0; i < additionRepeatTimes; i++) {
         arr.push(addition)} 
         arr=arr.join(additionSeparator)
         String=str+arr   
     
    }
     let strRepeat=[]
     for (let i = 0; i < repeatTimes; i++) {
        strRepeat.push(String)
        
    }
    return strRepeat.join(separator)  

          
    
    //    strRepeat
}



  