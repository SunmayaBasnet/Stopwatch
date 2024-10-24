const clock=document.querySelector(".clock");
let sec=0,min=0,hr=0,mili=0,intervalId;

const updateClock=()=>{
   const second=String(sec).padStart(2,"0");
   const minute=String(min).padStart(2,"0");
   const hour=String(hr).padStart(2,"0");
   const miliSecond=String(mili).padStart(2,"0");
   clock.innerText=`${hour}:${minute}:${second}:${miliSecond}`
}
const startStopwatch=()=>{
   intervalId=setInterval(()=>{
       if(mili<10){
           mili++;
       }
       else if(sec<59){
           sec++;
       }
       else if(min<59){
           min++;
       }
       else {
           sec=0;
           min=0;
           hr++;
       }
       updateClock()
   },100);
}
const stopStopwatch=()=>{
   clearInterval(intervalId);
};
const resetStopwatch=()=>{
   clearInterval(intervalId);
   sec=0;
   min=0;
   hr=0;
   mili=0;
   updateClock();
}