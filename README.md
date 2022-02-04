<img width="280" alt="Screen Shot 2022-02-04 at 12 26 28 PM" src="https://user-images.githubusercontent.com/88460822/152575303-5a5d835a-004e-4d83-9857-c29484f04bc7.png">




<a href="https://moodln.github.io/tones/">Live site!</a>

### Table of Contents
- [Overview](#overview)
- [Functionality & MVPs](#functionality-and-mvps)
- [Technologies](#technologies)
- [Core Features & Technical Challenges](#core-features-and-technical-challenges)
- [Future Directions](#future-directions)


# Overview
Tones is an interactive application that creates a synesthetic experience for the user. The user is invited to use their keyboard to create different sounds, resembling how they might use a piano. Once sound is produced, an associated color will appear on the screen: warmer colors for higher notes, and cooler colors for lower notes. The colors will dance on the screen as the user plays. 

Bonus features include options for the user to record what they've created, as well as choosing between different color schemes and patterns.  

 ![Screen Shot 2022-02-04 at 12 25 31 PM](https://user-images.githubusercontent.com/88460822/152574568-ee2e3566-bf35-4f4f-9a2f-f9569fb5ebfb.png)

# Functionality and MVPs

With tones, users will be able to:

- interact with their keyboard to create sounds
- use the space key to act as a sustain pedal


In addition, this project will include:

- instructions on how to interact with the page 
- a production README


# Technologies

This project implements: 
- Canvas API to display shapes and colors
- Web Audio API to create sounds
- Webpack to bundle the Javascript code

# Core Features and Technical Challenges 

## Integrated Synthesizer with Visual Accompaniment
Users are able to use their computer keyboard to create sounds. With each keyboard press, the user will hear a sound similar to what a piano keyboard or synthesizer would produce. In addition to these sounds, the user will see shapes of different colors appear on their screen: each color associated with the frequency of sound produced. 

<img width="833" alt="Screen Shot 2022-02-04 at 1 03 41 PM" src="https://user-images.githubusercontent.com/88460822/152580181-9ac0ee9b-be21-4842-b464-4bd3723f7c0d.png">

I wanted to create the sounds in the same way that synthesizers are built to create different sounds. I researched how sounds are created through modifying frequency, pitch, oscillation, and gain. I was able to incorporate these features through the use of Web Audio API, which provides an AudioContext within which you can modify the way each sound is formed. I was able to find a table that layed out all frequencies for an equal-tempered scale, and decided to omit sharp and flat notes in order to produce a unique user-experience. 

#### **CHALLENGE:**
I attached event listeners to respond to keydown events - every time a user presses a certain key on their keyboard, a sound would play. This worked for a little while; but after around 6 seconds of pressing keys, something would happen that made the sound stop - the keys wouldn't produce sound for about half a second, only to then start working again.

#### **SOLUTION:**
I discovered that I had been creating too many AudioContext instances. I initially set the AudioContext instance as a property of my Audio class - which resulted in creating a new AudioContext instance each time a key was pressed. In order to fix this, I had to create a single AudioContext instance and access it globally. From there I could do whatever I needed to do with each AudioContext instance. 

<p align="center">
    <img src="https://user-images.githubusercontent.com/88460822/152590902-16677691-9e11-4936-84bf-6f5f6a9c3e18.png"
          align="middle" height="auto" width="auto" />
 <br><p></p>
    <img src="https://user-images.githubusercontent.com/88460822/152590990-32afae93-7521-4e45-aa90-e329c1a99663.png"
         align="middle" width="auto" height="auto" />
</p>

# Future Directions 

- Recording functionailty
- Create new color schemes and patterns to choose from 
- Add touch event listeners to allow for interaction on a user's phone 
