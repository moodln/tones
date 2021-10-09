
import Canvas from './scripts/canvas'
import Audio from './scripts/audio'



document.addEventListener('DOMContentLoaded', () => {
    const convas = new Canvas();
    convas.draw();
})

document.addEventListener('keydown', (e) => {
    const convas = new Canvas();
    convas.touchDraw(e);

})

document.addEventListener('keyup', () => {
    const convas = new Canvas();
    convas.removeDraw();
    
})

document.addEventListener('keydown', (e) => {
    const audio = new Audio();
    let key = e.key;
    audio.createNotes(key);

})








