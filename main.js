// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio ('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3');

// checked metronome box
document.querySelector("#metronome").checked = true;

const checkedBoxes = document.querySelectorAll('[type = "checkbox"]')

let count = 0;

// This function is called every 600ms
function update() {
    // capture query html element for counter
    const metronomeCount = document.querySelector(".metronome-count")
    metronomeCount.innerText = count;
    

    // count updating
    if (count <= 3){
        count++;
        // reset the count
    }
    
    else if (count = 4){
        count = 1
    }

    for (const box of checkedBoxes)
        if (box.checked === true){
            if (box.value === "metronome"){
                // Play the 'tick' sound
                tick.play();
                // Play the "tock sound"
                if(count % 4 === 0){
                    tock.play();
                }
            }
            else if (box.value === "kick-drum"){
                // Play the "kick-drum" sound
                kick.play()
            }
            else if (box.value === "snare-drum"){
                // Play the "kick-drum" sound
                snare.play()
            }
            else if (box.value === "hi-hat"){
                // Play the "kick-drum" sound
                hiHat.play()
            }
        }

    }









// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
