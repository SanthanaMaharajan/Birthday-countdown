function countdownTimer(){
const currentDate= new Date("Dec 17 2001");
const date=new Date();
currentDate.setFullYear(date.getFullYear());
const days=document.getElementById("days");
const hours = document.getElementById("hours");
const minutes=document.getElementById("minutes");
const  seconds=document.getElementById("seconds");
let diff=currentDate - date;
let  d= Math.floor(diff/(1000*60*60*24));
let h=Math.floor(diff/ (1000*60*60)%24);
let m=Math.floor((diff/ (1000*60)) %60 );
let s=Math.floor(diff/(1000)%60);

days.innerHTML=d<10? "0"+d:d;
hours.innerHTML=h<10? "0"+h : h;
minutes.innerHTML=m<10? "0"+m: m;
seconds.innerHTML=s<10? "0"+s: s;
}
setInterval(countdownTimer,1000)

