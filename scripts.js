function updateClock() {
    const now = new Date();
    let hours = now.getHours(); // let because we modify hours
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strHours = String(hours).padStart(2, '0');

    console.log("chicku");
    console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Period: ${period}`);

    updateFlip('hours', strHours);
    updateFlip('minutes', minutes);
    updateFlip('seconds', seconds);
    document.getElementById('period').textContent = period;
}

function updateFlip(unit, value) {
    const flipElement = document.getElementById(unit);
    const topElement = flipElement.querySelector('.top');
    const bottomElement = flipElement.querySelector('.bottom');

    // If the value is different, update the flip element
    if (topElement.textContent !== value) {
        // Update bottom element first
        bottomElement.textContent = topElement.textContent;
        // Set new value to top element
        topElement.textContent = value;

        // Add the animate class to trigger the animation
        flipElement.classList.add('animate');

        // Remove the animate class after the animation duration (500ms in this case)
        setTimeout(() => {
            flipElement.classList.remove('animate');
        }, 500); // Adjust this value to match your CSS animation duration
    }
}

// Call updateClock every second
setInterval(updateClock, 1000);
updateClock();



// function updateTime() {
//     const clockElement = document.getElementById('clock2');
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     clockElement.textContent = `${hours}:${minutes}:${seconds}`;
// }

// setInterval(updateTime, 1000);
// updateTime(); // Initial call to display the time immediately
