// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3');

// checked metronome box
document.querySelector("#metronome").checked = true;

const checkedBoxes = document.querySelectorAll('[type = "checkbox"]')


//timing for sounds
const sounds = document.querySelectorAll('[type="radio"]')

let count = 0;

// This function is called every 600ms
function update() {
    // capture query html element for count
    const metronomeCount = document.querySelector(".metronome-count")
    metronomeCount.innerText = count;

    // count updating
    if (count <= 3) {
        count++;
        // reset the count
    } else if (count = 4) {
        count = 1
    }
    for (const box of checkedBoxes)
        if (box.checked === true) {
            if (box.value === "metronome") {
                // Play the 'tick' sound
                tick.play();
                // Play the "tock sound"
                if (count % 4 === 1) {
                    tock.play();
                }
            }


            // Play the "kick-drum" sound
            else if (box.value === "kick-drum") {
                for (const sound of sounds) {
                    if (sound.checked === true) {
                        if (sound.value === "value1")
                            if (count % 4 === 2) {
                                kick.play()
                            } if (sound.value === "value2") {
                                if (count % 4 === 3)
                                    kick.play();
                            } if (sound.value === "value3") {
                                if (count % 4 === 0)
                                    kick.play();
                            } if (sound.value === "value4") {
                                if (count % 4 === 1)
                                    kick.play();
                            }
                    }
                }
            } else if (box.value === "snare-drum") {
                for (const sound of sounds) {
                    if (sound.checked === true) {
                        if (sound.value === "value1")
                            if (count % 4 === 2) {
                                snare.play()
                            } if (sound.value === "value2") {
                                if (count % 4 === 3)
                                    snare.play();
                            } if (sound.value === "value3") {
                                if (count % 4 === 0)
                                    snare.play();
                            } if (sound.value === "value4") {
                                if (count % 4 === 1)
                                    snare.play();
                            }
                    }
                }
            } else if (box.value === "hi-hat") {
                for (const sound of sounds) {
                    if (sound.checked === true) {
                        if (sound.value === "value1")
                            if (count % 4 === 2) {
                                hiHat.load();
                                hiHat.play()
                            } if (sound.value === "value2") {
                                if (count % 4 === 3)
                                hiHat.load();    
                                hiHat.play();
                            } if (sound.value === "value3") {
                                if (count % 4 === 0)
                                hiHat.load();    
                                hiHat.play();
                            } if (sound.value === "value4") {
                                if (count % 4 === 1)
                                hiHat.load();    
                                hiHat.play();
                            }
                    }
                }
            }
        }
}




// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



// one div have all the musical instruments
// this would call for different type of radios using doc.quersel using 


// one div will have all the counts
// this would call for different type of radios.


//consider changing css for checkbox to image