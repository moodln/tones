// instantiate web audio api object 
let audioContext = new AudioContext();
let keys = {
    sustain: false
}

class Audio {
    constructor() {
        // create gain node, gain corresponds with volume
        this.gainNode = audioContext.createGain();
        this.gainNode.gain.setValueAtTime(0.08, 0);
        

        // C3 to C5 scale, attach frequencies to corresponding keyboard value
        this.notes = {
            'z': 130.81,
            'x': 146.83,
            'c': 164.81,
            'v': 174.61,
            'b': 196.00,
            'n': 220.00,
            'm': 246.94,
            'a': 261.63,
            's': 293.66,
            'd': 329.63,
            'f': 349.23,
            'g': 392.00,
            'h': 440.00,
            'j': 493.88,
            'k': 523.25,
            'l': 587.33,
            'q': 659.25,
            'w': 698.46,
            'e': 783.99,
            'r': 880.00,
            't': 987.77,
            'y': 1046.50,
            'u': 1174.66,
            'i': 1318.51,
            'o': 1396.91,
            'p': 1567.98,
            '[': 1760.00,
            ']': 1975.53,
            '`': 2093.00
        }

    }

    playNotes(key) {
        
        
        if (keys.sustain === false && this.notes[key]) {
            // oscillator corresponds with frequency, 
            // create oscillator node to attach frequency from notes object
            let oscillator = audioContext.createOscillator();
            oscillator.frequency.setValueAtTime(this.notes[key], audioContext.currentTime);

            // lower gain for higher frequency notes
            if (this.notes[key] > 699) {
                this.gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
                this.gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1.5);
            // higher gain for lower frequency
            } else if (this.notes[key] < 247) {
                this.gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            }

            // allows volume to descrease with time
            this.gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.5);

            // connect oscillator node to volume node
            oscillator.connect(this.gainNode);
            // connect gain node to destination (speakers)
            this.gainNode.connect(audioContext.destination);

            oscillator.start(0);

            // tone will play for 1.5 seconds 
            oscillator.stop(audioContext.currentTime + 1.5)
        } else {
            this.sustainPedal(key);
        }
    }

    // create sustain pedal when user presses on space bar
    sustainPedal(key) { 

                if (this.notes[key]) {

                    let oscillator = audioContext.createOscillator();
                    oscillator.frequency.setValueAtTime(this.notes[key], audioContext.currentTime);

                    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 5)

                    if (this.notes[key] > 699) {
                        this.gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
                    } else if (this.notes[key] < 247) {
                        this.gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    }
                    // connect oscillator node to volume node
                    oscillator.connect(this.gainNode);
                    // connect gain node to destination (speakers)
                    this.gainNode.connect(audioContext.destination);

                    oscillator.start(0);

                    // tone will play for 5 seconds 
                    oscillator.stop(audioContext.currentTime + 5)

                }

    }


}

export {Audio, keys};
