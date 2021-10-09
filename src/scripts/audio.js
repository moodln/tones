class Audio {
    constructor() {
        this.audioContext = new AudioContext();

        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.setValueAtTime(0.05, 0);


    }

    createNotes(key) {

        const notes = {
            's': 261.63,
            'd': 293.66,
            'f': 329.63,
            'g': 349.23,
            'h': 392.00,
            'j': 440.00,
            'k': 493.88,
            'l': 523.25
        }
        

        if (notes[key]) {
            let oscillator = this.audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(notes[key], this.audioContext.currentTime);
            oscillator.connect(this.gainNode)
            this.gainNode.connect(this.audioContext.destination);
            oscillator.start(0);
            oscillator.stop(this.audioContext.currentTime + 1)
        }
    }


}

export default Audio;