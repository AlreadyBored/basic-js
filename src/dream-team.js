const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(memb) {
 let temp='';
 
  for(let i=0;i<memb.length;i++)
  {
    if((typeof memb[i] === "string" || memb[i] instanceof String)==0)
    {
      memb.splice(i,1);
    }
    for(let j=0;j<memb[i].length;j++)
    {
      if(memb[i][j]==' ')
      { temp=memb[i];
        temp.splice(j,1);
        memb[i]=temp;
      }
    }
    memb[i]=memb[i][0];
    
  }
  /*for(let i=0;i<memb.length;i++)
  {
    for(let j=0;j<memb[i].length;j++)
    {if(j=0)
      memb[i][j]=memb[i][j];
      
    }
    break;
  }
*/
  if(memb.sort())
  {
 return memb.join('');
 //temp=memb.String; 
  //return temp.toUpperCase();
  }
  else return false
  
};

