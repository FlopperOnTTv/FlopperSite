document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("myAudio");
    const video = document.getElementById("myVideo");
    const overlay = document.getElementById("overlay");
    const profileBox = document.getElementById("blurred-box");
    const enterText = document.getElementById("enter-text");
    let dotCount = 0;

    // 1. Set volume
    audio.volume = 0.2;

    // 2. Click logic
    overlay.addEventListener('click', function() {
        // Play media
        video.play();
        audio.play();

        // Hide overlay and show content
        overlay.style.display = 'none';
        profileBox.style.display = 'block';
    });

    // 3. Dot animation
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        enterText.textContent = `Click to Enter${'.'.repeat(dotCount)}`;
    }, 500);

    // 4. Tab Visibility (Pause when switching tabs)
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            video.pause();
            audio.pause();
        } else {
            if (overlay.style.display === 'none') {
                audio.currentTime = video.currentTime;
                video.play();
                audio.play();
            }
        }
    });
});
