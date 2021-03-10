const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    var result;
    
    var str1= (date.toISOString());
    str=str1.substr(5,2);
    if (str<3){
        result='winter';
    }else if ((str<6)&&(str>=3)){
        result = 'spring';
    }else if ((str<9)&&(str>=6)){ 
        result = 'summer';
    }else if ((str<13)&&(str>=9)){ 
        result = 'autumn';  
    } 

    return result;
    
}  

