document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("myAudio");
    const video = document.getElementById("myVideo");
    const overlay = document.getElementById("overlay");
    const enterText = document.getElementById("enter-text");
    let dotCount = 0;

    // Set initial volume
    audio.volume = 0.1;

    // The "Click to Enter" function
    overlay.addEventListener('click', function() {
        // 1. Force play immediately
        video.play();
        audio.play();

        // 2. Hide the overlay instantly (no delay)
        overlay.style.display = 'none';
        
        console.log("Site started");
    });

    // Animated dots logic
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        enterText.textContent = `Click to Enter${'.'.repeat(dotCount)}`;
    }, 500);

    // Tab Visibility logic
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            video.pause();
            audio.pause();
        } else {
            // Only resume if the user has already entered the site
            if (overlay.style.display === 'none') {
                audio.currentTime = video.currentTime;
                video.play();
                audio.play();
            }
        }
    });
});
