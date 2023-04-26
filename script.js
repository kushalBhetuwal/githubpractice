const h2 = document.getElementsByTagName('h2')[0];

h2.addEventListener('click', function(){
    h2.classList.toggle('toggle')
})

const button = document.querySelector('button')
button.addEventListener("click", ()=>{
    button.style.backgroundColor= "red";
})