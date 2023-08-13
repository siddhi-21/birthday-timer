const days=document.querySelector(".days");
const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");
function counter(){
    const endDate=new Date(2023, 7, 15, 00, 00, 00);
    const startDate=new Date();
    const diff=endDate-startDate;
   
    let second=1000;
    let minute=second*60;
    let hour=minute*60;
    let day=hour*24;
    let textDay=Math.floor(diff/(1000*60*60*24));
    let textHours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let textMinutes=Math.floor((diff%hour)/minute);
    let textSeconds=Math.floor((diff%minute)/second);
    days.innerHTML=textDay;
    hours.innerHTML=textHours;
    minutes.innerHTML=textMinutes;
    seconds.innerHTML=textSeconds;
}
counter();
setInterval(counter,1000);



