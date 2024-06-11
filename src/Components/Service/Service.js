export const data=(mydata)=>{
    let Data=JSON.parse(localStorage.getItem(mydata))
     if(!data){
         return[];
     }
     return Data;
 }

 