const slide = document.querySelectorAll('.slide')
const btnprev = window.document.getElementById('prev')
const btnnext = window.document.getElementById('next')
const pontos = document.querySelectorAll('.ponto')

let ativoS = 0;

function hideslide(){
    slide.forEach(item => item.classList.remove("on"))
    pontos.forEach(item => item.classList.remove("on"))
}

function mostrarSlide(){
    slide[ativoS].classList.add('on')
    pontos[ativoS].classList.add('on')

}

function nextslider(){
    hideslide()
    if(ativoS === slide.length -1){
        ativoS = 0

    }else{
       ativoS++ 
    }
    mostrarSlide()
}
function prevslider(){
    hideslide()
    if(ativoS === 0){
        ativoS = slide.length -1

    }else{
       ativoS-- 
    }
    mostrarSlide()
}
btnnext.addEventListener('click',nextslider)
btnprev.addEventListener('click', prevslider)