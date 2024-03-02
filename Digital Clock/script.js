const clock=document.getElementById('clock');

//set Interval are use to currant date and time.

setInterval(()=>{
    let date=new Date();
    //console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString()
},1000)


