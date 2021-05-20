const imgSlider = document.querySelector('.imgheader'),
     sliImg = document.querySelectorAll('.sliimg'),
     circlHeader= document.querySelectorAll('.cirl')

function slidHeaderHide(){
    sliImg.forEach(el => {
        el.classList.remove('sliactiv')
        el.classList.add('slidhide')
    });
    circlHeader.forEach(l => {
        l.classList.remove('cirlactiv')
    });
    
}
function slidHeaderActiv(i=0){
    console.log(sliImg[i])
    sliImg[i].classList.remove('slidhide')
    sliImg[i].classList.add('sliactiv')
    circlHeader[i].classList.add('cirlactiv')
}
slidHeaderHide()
slidHeaderActiv();
let n=0
const imgSlideNext=setInterval(() => {
    
    if(n<2){
        n++
        console.log(n)
    }else{
        n=0
    }
    slidHeaderHide()
    slidHeaderActiv(n)
}, 8000);