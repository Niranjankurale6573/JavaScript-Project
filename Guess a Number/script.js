// const temp=document.querySelector('#showVal');
const inputValue=document.querySelector('#inputValue');
const Submit=document.querySelector('#onClick');
const preVal=document.querySelector('#preVal');
const gueRem=document.querySelector('#gueRem');
const lowOrHigh =document.querySelector('#lowOrHigh');
const startOver=document.querySelector('.main');

const p=document.createElement('p');

let randNum=parseInt(Math.random()*100+1);
let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    Submit.addEventListener('click',function(e){
        e.preventDefault();

        const guess=parseInt(inputValue.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid No.');
    }
    else if(guess<1){
        alert('please enter valid No.');
    }
    else if(guess>100){
        alert('please enter valid No.');
    }
    else{

        prevGuess.push(guess)
        
        if(numGuess===11){
            displayGuess(guess);
            displayMessage('Game Over, Random number was:'+randNum);
            endGame();}
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randNum){
        displayMessage('You Guessed it right')
        endGame()
    }else if(guess<randNum){
        displayMessage('Number is TOO low')

    }else if(guess>randNum){
        displayMessage('Number is TOO high')
    }

}
function displayGuess(guess){
    inputValue.value='';
    preVal.innerHTML+=guess+",";
    numGuess++;
    gueRem.innerHTML=11-numGuess;
}
function displayMessage(message){
    lowOrHigh.innerHTML='<h3>'+message+'</h3>'
}
function endGame(){
    inputValue.value="";
    inputValue.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h3 id="newGame">Start New Game</h1>';
    startOver.appendChild(p);
    playGame=false;
    newGame();

}
function newGame(){
    const newGame=document.querySelector('#newGame');
    newGame.addEventListener('click',(e)=>{
        randNum=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        preVal.innerHTML=''
        gueRem.innerHTML=11-numGuess
        inputValue.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
        displayMessage("New started, Let's Play again")
    })

}



