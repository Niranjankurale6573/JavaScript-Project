const form=document.querySelector('form')

form.addEventListener('submit',function(e){

    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#Weight').value);
    const result=document.querySelector('#Result')

    if(height===0||height<0|| isNaN(height))
    {
        result.innerHTML="Please Check Height Insert Value.."
    }else if(weight===0||weight<0|| isNaN(weight))
    {
        result.innerHTML="Please Insert Weight correct value"
    }else{
        const BMI=(weight/(height*height/10000)).toFixed(2);
        result.innerHTML=BMI
    }
    
})