document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");
    var video = document.getElementById("myVideo");
    var overlay = document.getElementById("overlay");
    var enterText = document.getElementById("enter-text");
    var dotCount = 0;

    overlay.addEventListener('click', function() {
        video.play();
        audio.play();
        overlay.style.display = 'none';
    });

    var maxVolume = 0.1; 
    function limitVolume(volume) {
        if (volume > maxVolume) {
            audio.volume = maxVolume;
        } else {
            audio.volume = volume; 
        }
    }

    limitVolume(0.1);

    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        enterText.textContent = `Click to Enter${'.'.repeat(dotCount)}`;
    }, 500);


    /* -------- TAB VISIBILITY CONTROL -------- */

    let wasPlaying = false;

    document.addEventListener("visibilitychange", function() {

        if (document.hidden) {
            // remember if media was playing
            wasPlaying = !video.paused;

            video.pause();
            audio.pause();
        } else {
            // resync when returning
            audio.currentTime = video.currentTime;

            if (wasPlaying) {
                video.play();
                audio.play();
            }
        }

    });

});