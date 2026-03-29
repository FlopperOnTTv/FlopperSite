document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("myAudio");
    const video = document.getElementById("myVideo");
    const overlay = document.getElementById("overlay");
    const enterText = document.getElementById("enter-text");
    let dotCount = 0;

    // 1. Initial State
    audio.volume = 0.1; // Set initial volume low
    
    // 2. Click to Enter Logic
    overlay.addEventListener('click', function() {
        // We use a promise check because play() is asynchronous
        const playVideo = video.play();
        const playAudio = audio.play();

        // Handle browsers that might still try to block it
        Promise.all([playVideo, playAudio]).then(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }).catch(error => {
            console.log("Playback prevented by browser: ", error);
            // Even if it fails, we hide the overlay so the user can try clicking again
            overlay.style.display = 'none';
        });
    });

    // 3. Animated "Click to Enter..." text
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        enterText.textContent = `Click to Enter${'.'.repeat(dotCount)}`;
    }, 500);

    /* -------- TAB VISIBILITY CONTROL -------- */
    // This ensures that if the user switches tabs, the music/video stops 
    // and restarts in sync when they come back.

    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            video.pause();
            audio.pause();
        } else {
            // Only resume if the overlay is already gone (meaning they already clicked "Enter")
            if (overlay.style.display === 'none') {
                // Sync audio to video timestamp
                audio.currentTime = video.currentTime;
                video.play();
                audio.play();
            }
        }
    });
});
