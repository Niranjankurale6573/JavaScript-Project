const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{

        // if(e.target.id==='orange'){body.style.backgroundColor=e.target.id}
        // if(e.target.id==='white'){body.style.backgroundColor=e.target.id}
        // if(e.target.id==='skyblue'){body.style.backgroundColor=e.target.id}
        // if(e.target.id==='Yellow'){body.style.backgroundColor=e.target.id}

        switch(e.target.id){
            case 'orange':body.style.backgroundColor=e.target.id
             break;

             case 'white':body.style.backgroundColor=e.target.id
             break;

             case 'skyblue':body.style.backgroundColor=e.target.id
             break;

             case 'Yellow':body.style.backgroundColor=e.target.id
             break;

             case 'Red':body.style.backgroundColor=e.target.id
             break;

             case 'Blue':body.style.backgroundColor=e.target.id
             break;
             
             
             default:console.log("check click Event")
        }

    })
})