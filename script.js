
// Carousel kép lapozás 
//----------------------------------------------------------
const arrowLeft = document.getElementById('js-left');
arrowLeft.onclick = function () {
    // lapozás beállítása js + css
    document.getElementById('carousel').scrollLeft -= window.innerWidth; 
}
const arrowRight = document.getElementById('js-right');
arrowRight.onclick = function () {
    // lapozás beállítása js + css
    document.getElementById('carousel').scrollLeft += window.innerWidth; 
}
//----------------------------------------------------------
function myFunc() {
    event.preventDefault()
    console.log('Sikeres megakadályozás')
}
