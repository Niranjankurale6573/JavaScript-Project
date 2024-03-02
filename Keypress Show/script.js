
const val1=document.querySelector('#val1')
const val2=document.querySelector('#val2')
const val3=document.querySelector('#val3')

window.addEventListener('keydown',(e)=>{
        val1.innerHTML=e.key
        val2.innerHTML=e.keyCode
        val3.innerHTML=e.code
})