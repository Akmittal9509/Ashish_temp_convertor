let btn=document.getElementById('Temperature')
btn.addEventListener('click',convert)
function convert(e){
    let currbtn=e.currentTarget;
    let currinput=currbtn.previousElementSibling;

    let newli=document.createElement('li')
    newli.classList.add('list-group-item')
    newli.textContent=Number(Number(currinput.value)+273)

   let first=document.getElementById('parent')
   first.appendChild(newli)

   let newli1=document.createElement('li')
    newli1.classList.add('list-group-item')
    newli1.textContent=Number(Number(currinput.value)*9/5+32)

   let next=document.getElementById('next')
   next.appendChild(newli1)
}