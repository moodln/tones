
import {canvas, keyboardKeys, createShape, animate} from './scripts/canvas'
import {Audio, keys} from './scripts/audio'

const modal = document.getElementById('welcome');
const closeModal = document.getElementsByClassName('close')[0];
const openModal = document.getElementsByClassName('open')[0];
const anyKey = document.getElementById('anyKey');

// working on touch screen functionality
// function startup() {
//     animate();
//     modal.style.display = 'block';
//     canvas.addEventListener('touchend', handleEnd, false);
//     canvas.addEventListener('touchcancel', handleCancel, false);
//     canvas.addEventListener('touchmove', handleMove, false);
// }

// canvas.onclick = function(e) {
//     if (e.target !== modal)
//     anyKey.style.display = 'none';
//     canvas.style.margin = '20px 20px 0px 20px';

//     let color = 'pink';

//     // console.log(e.clientX);
//     console.log(e.clientY);
//     // left-right (0-width (left on page is lower in number than right on page))
//     keyboardKeys.x = e.clientX;
//     // up-down (0 - height (higher on page = lower in number))
//     keyboardKeys.y = e.clientY;

//     createShape(color);
// }

// function handleEnd() {

// }

// function handleCancel() {

// }

// function handleMove() {

// }


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth - 60;
    canvas.height = window.innerHeight - 60;
})


window.addEventListener('DOMContentLoaded', () => {
    animate();
    modal.style.display = 'block';
})

closeModal.onclick = function() {
    modal.style.display = 'none';

}
openModal.onclick = function() {
    modal.style.display = 'block';

}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

// event listener for shapes to appear
document.addEventListener('keydown', (e) => {
    const audio = new Audio();

    anyKey.style.display = 'none'
    canvas.style.margin = '20px 20px 0px 20px'

    let color = 'pink'
    // assign x, y coordinates and color based on frequency of note 
    if (audio.notes[e.key] > 879) {
        // console.log(canvas.height)
        // console.log(canvas.width)
        // random number between canvas.width/canvas.height and canvas.width
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width);
        keyboardKeys.y = Math.random() * (canvas.height - 400 - (canvas.height - canvas.height)) + (canvas.height - canvas.height);
        color = colorAssignment(audio.notes[e.key]);
    } else if (audio.notes[e.key] > 348 && audio.notes[e.key] < 879) {
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width);
        keyboardKeys.y = Math.random() * ((canvas.height - 200) - (canvas.height - 400)) + (canvas.height - 400);
        color = colorAssignment(audio.notes[e.key]);
    } else if (audio.notes[e.key] < 348) {
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width);
        keyboardKeys.y = Math.random() * (canvas.height - (canvas.height - 200)) + (canvas.height - 200);
        color = colorAssignment(audio.notes[e.key]);
    }
    
    createShape(color);   
})


function colorAssignment(frequency) {
    let colors = [
        'rgb(72,   61, 139)',
        'rgb(25,   25, 112)',
        'rgb(0,   128, 128)',
        'rgb(70,  130, 180)',
        'rgb(95,  158, 160)',
        'rgb(100, 149, 237)',
        'rgb(75,    0, 130)',
        'rgb(106,  90, 205)',
        'rgb(138,  43, 226)',
        'rgb(165,  42,  42)',
        'rgb(176, 196, 222)',
        'rgb(205,  92,  92)',
        'rgb(178,  34,  34)',
        'rgb(222, 184, 135)',
        'rgb(219, 112, 147)',
        'rgb(221, 160, 221)',
        'rgb(216, 191, 216)',
        'rgb(209, 147,  92)',
        'rgb(238, 147,  58)',
        'rgb(243, 198, 119)',
        'rgb(243, 166, 109)',
        'rgb(209, 184, 129)',
        'rgb(244, 240, 187)',
        'rgb(241, 216, 171)',
        'rgb(255, 228, 225)',
        'rgb(253, 245, 230)',
        'rgb(255, 235, 205)',
        'rgb(255, 250, 250)'
    ];

    if (frequency <= 174.61) {
        let i = Math.floor(Math.random() * (3 - 0) + 0);
        return colors[i];
    } else if (frequency <= 261.63 && frequency > 174.61) {
        let i = Math.floor(Math.random() * (4 - 2) + 2);
        return colors[i];
    } else if (frequency <= 392 && frequency > 261) {
        let i = Math.floor(Math.random() * (8 - 5) + 5);
        return colors[i];
    } else if (frequency <= 587.33 && frequency > 392) {
        let i = Math.floor(Math.random() * (12 - 9) + 9);
        return colors[i];
    } else if (frequency <= 880 && frequency > 587.33) {
        let i = Math.floor(Math.random() * (17 - 12) + 12);
        return colors[i];
    } else if (frequency <= 1318.51 && frequency > 880) {
        let i = Math.floor(Math.random() * (23 - 18) + 18);
        return colors[i];
    } else if (frequency <= 2093 && frequency > 987.77) {
        let i = Math.floor(Math.random() * (23 - 21) + 21)
        return colors[i];
    }
}



// event listener for sound 
document.addEventListener('keydown', (e) => {
    if (modal.style.display = 'none') {
        const audio = new Audio();
        if (e.code === 'Space') {
            keys.sustain = true;
        }
        // console.log(keys.sustain);
        audio.playNotes(e.key);
        // console.log(e.code);
    }
})


// stops sustain pedal
document.addEventListener('keyup', (e) => {
    const audio = new Audio();
    if (e.code === 'Space') {
        keys.sustain = false;
    }   
})







