class Audio {
    constructor() {
        // instantiate web audio api object 
        this.audioContext = new AudioContext();
        this.buffer = this.audioContext.createBuffer(1, this.audioContext.sampleRate * 1, this.audioContext.sampleRate);
        // create gain node, gain corresponds with volume
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.setValueAtTime(0.08, 0);
        // allows volume to descrease with time
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1.5);


    }

    createNotes(key) {
        // C4 to C5 scale, attach frequencies to corresponding keyboard value
        const notes = {
            's': 261.63,
            'd': 293.66,
            'f': 329.63,
            'g': 349.23,
            'h': 392.00,
            'j': 440.00,
            'k': 493.88,
            'l': 523.25,
            'e': 587.33,
            'r': 659.25,
            't': 698.46,
            'y': 783.99,
            'u': 880.00,
            'i': 987.77,
            'o': 1046.50,
            'p': 1174.66
        }
        
        
        if (notes[key]) {
            // oscillator corresponds with frequency, 
            // create oscillator node to attach frequency from notes object
            let oscillator = this.audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(notes[key], this.audioContext.currentTime);
            if (notes[key] > 699) {
                this.gainNode.gain.setValueAtTime(0.03, this.audioContext.currentTime);
            }
            // connect oscillator node to volume node
            oscillator.connect(this.gainNode);
            // connect gain node to destination (speakers)
            this.gainNode.connect(this.audioContext.destination);

            oscillator.start(0);

            // tone will play for 1.5 seconds 
            oscillator.stop(this.audioContext.currentTime + 1.5)
        }
    }


}

export default Audio;