// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
// checked metronome box
document.querySelector("#metronome").checked = true;

let count = 0;

// This function is called every 600ms
function update() {
    if (document.querySelector("#metronome").checked === true){

        // Play the 'tick' sound
        tick.play();
        // capture query html element for counter
        const metronomeCount = document.querySelector(".metronome-count")
        metronomeCount.innerText = count;
        
        // Play the "tock sound"
        if(count % 4 === 0){
            tock.play();
        }
        // count updating
        if (count <= 3){
            count++;
            // reset the count
        } else if (count = 4){
            count = 1
        }
    }
    
    

    }




// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
