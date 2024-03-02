const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let Color='#'
    for(i=0;i<6;i++){
        Color += hex[Math.floor(Math.random()*16)]
    }
    return Color;
}

const body=document.querySelector('body')
const Start=document.querySelector('.start')
const Stop=document.querySelector('.stop')
let Interval;

Start.addEventListener('click',()=>{
    if(!Interval){
        Interval=setInterval(bodyChang,2000)
    }
})

Stop.addEventListener('click',()=>{
    clearInterval(Interval)
    Interval=null
})
//arrow function
const bodyChang=()=>body.style.backgroundColor=randomColor()