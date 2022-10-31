const hour = document.getElementById("hrs");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("secs");
const tyme = document.getElementById("tyme");


function getTime(){
   let h = new Date().getHours(); 
   let m = new Date().getMinutes(); 
   let s = new Date().getSeconds(); 
   let tyme = "AM";

   if(h > 12){
    
    h = h - 12;
    h = "0"+h;
    tyme = "PM"
    
   }
   else{
      h = "0" + h;
   }
   if(m < 10){
    m = "0"+m;
   }
   if(s < 10){
    s = "0"+s;
   }
   hour.innerText = h;
   minutes.innerText = m;
   seconds.innerText = s;
   document.getElementById("tyme").innerHTML = tyme;
   setTimeout(()=>{
    getTime()
   })

}
getTime()
