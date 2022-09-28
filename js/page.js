// const pedir=document.querySelector('.pedir')
// const lista =document.querySelector('#lista')
// const modal = document.querySelector('.modal')
// const escogido=document.getElementById('producto__escogido')

// const cancelar = document.querySelector('.cancelar')
// const aceptar = document.querySelector('.aceptar')


// pedir.addEventListener('click',()=>{
//     if(lista.options[lista.selectedIndex].value==='ninguno'){
//         alert('no escogiste')
//     } else{
//         modal.style.top=0
//         escogido.textContent=
//         lista.options[lista.selectedIndex].text
//     }
    
// })

// cancelar.addEventListener('click',()=>{
//     modal.style.top='-800px'
//     lista.selectedIndex=0
// })

// aceptar.addEventListener('click',()=>{
//     location='./html/fin.html'
// })

const lista=document.querySelector('#lista')
const item = document.querySelector('.item')
const modal = document.querySelector('.modal__pedido')

document.querySelector('.salida').addEventListener('click',()=>location="./index.html")

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
    location="./fin.html"
})