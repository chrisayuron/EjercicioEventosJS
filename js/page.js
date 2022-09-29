const lista=document.querySelector('#lista')
const item = document.querySelector('.item')
const modal = document.querySelector('.modal__pedido')

document.querySelector('.salida').addEventListener('click',()=>location.href="../index.html")

document.querySelector('.pedir').addEventListener('click',()=>{
    if(lista.options[lista.selectedIndex].value==='ninguno'){
     alert('No ha seleccionado producto')   
    } else{
        modal.style.top=0;
        item.textContent=lista.options[lista.selectedIndex].text
    }
    
})

document.querySelector('.cancel').addEventListener('click',()=>{
    lista.selectedIndex=0
    modal.style.top='-2000px';
})

document.querySelector('.accept').addEventListener('click',()=>{
    modal.style.top='-2000px';
    location.href="./fin.html"
})