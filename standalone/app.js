// Music Player Application
class MusicPlayer {
    constructor() {
        this.tracks = [];
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.isLoading = true;
        this.duration = 0;
        this.currentTime = 0;

        this.audio = document.getElementById('audioPlayer');
        this.playBtn = document.getElementById('playBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.trackName = document.getElementById('trackName');
        this.trackCounter = document.getElementById('trackCounter');
        this.trackCount = document.getElementById('trackCount');
        this.progressBar = document.getElementById('progressBar');
        this.progressSlider = document.getElementById('progressSlider');
        this.currentTimeEl = document.getElementById('currentTime');
        this.durationEl = document.getElementById('duration');
        this.playerStatus = document.getElementById('playerStatus');

        this.setupEventListeners();
        this.fetchTracks();
    }

    setupEventListeners() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.nextBtn.addEventListener('click', () => this.nextTrack());

        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this.updatePlayButton();
        });

        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updatePlayButton();
        });

        this.audio.addEventListener('timeupdate', () => {
            this.currentTime = this.audio.currentTime;
            this.updateProgress();
        });

        this.audio.addEventListener('loadedmetadata', () => {
            this.duration = this.audio.duration;
            this.progressSlider.max = this.duration;
            this.updateProgress();
        });

        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });

        this.progressSlider.addEventListener('input', (e) => {
            this.audio.currentTime = parseFloat(e.target.value);
        });
    }

    async fetchTracks() {
        try {
            this.isLoading = true;
            this.playerStatus.textContent = 'Fetching tracks...';

            if (!CONFIG.GITHUB_REPO || CONFIG.GITHUB_REPO === 'YOUR_USERNAME/YOUR_REPO') {
                throw new Error('Configure your GitHub repo in config.js');
            }

            const apiUrl = `https://api.github.com/repos/${CONFIG.GITHUB_REPO}/contents/${CONFIG.MUSIC_FOLDER}?ref=${CONFIG.GITHUB_BRANCH}`;

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const files = await response.json();

            const mp3Files = files
                .filter(file => file.name.endsWith('.mp3'))
                .map(file => file.download_url)
                .sort();

            if (mp3Files.length === 0) {
                throw new Error('No MP3 files found in /music folder');
            }

            this.tracks = mp3Files;
            this.currentTrackIndex = 0;
            this.playerStatus.textContent = ''; // Clear status
            this.updateTrackInfo();
            this.loadTrack();
        } catch (error) {
            this.playerStatus.textContent = `Error: ${error.message}`;
            this.playerStatus.style.color = '#f87171';
        } finally {
            this.isLoading = false;
        }
    }

    loadTrack() {
        if (this.tracks.length === 0) return;

        const track = this.tracks[this.currentTrackIndex];
        this.audio.src = track;
        this.updateTrackInfo();

        if (this.isPlaying) {
            this.audio.play().catch(() => {
                this.isPlaying = false;
                this.updatePlayButton();
            });
        }
    }

    togglePlay() {
        if (this.tracks.length === 0) return;

        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play().catch(() => {
                this.isPlaying = false;
                this.updatePlayButton();
            });
        }
    }

    nextTrack() {
        if (this.tracks.length === 0) return;
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.loadTrack();
    }

    updateTrackInfo() {
        const track = this.tracks[this.currentTrackIndex];
        const fileName = track.split('/').pop()?.replace('.mp3', '') || 'Loading...';

        this.trackName.textContent = fileName;
        this.trackCounter.textContent = `${this.currentTrackIndex + 1}/${this.tracks.length}`;
        this.trackCount.textContent = `${this.tracks.length} track${this.tracks.length !== 1 ? 's' : ''}`;
    }

    updateProgress() {
        const percent = this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
        this.progressBar.style.width = `${percent}%`;
        this.progressSlider.value = this.currentTime;

        this.currentTimeEl.textContent = this.formatTime(this.currentTime);
        this.durationEl.textContent = this.formatTime(this.duration);
    }

    updatePlayButton() {
        if (this.isPlaying) {
            this.playBtn.innerHTML = `
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
                </svg>
            `;
            this.playBtn.setAttribute('aria-label', 'Pause');
        } else {
            this.playBtn.innerHTML = `
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                </svg>
            `;
            this.playBtn.setAttribute('aria-label', 'Play');
        }
    }

    formatTime(time) {
        if (!time || isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Navigation
function setupNavigation() {
    const homeBtn = document.querySelector('.nav-home');
    const designsBtn = document.querySelector('.nav-designs');
    const homePage = document.getElementById('home') || document.querySelectorAll('.home-content');
    const designsPage = document.getElementById('designsPage');

    homeBtn?.addEventListener('click', () => {
        homePage.forEach(el => el.style.display !== 'none' && el.style.display !== 'none');
        designsPage.style.display = 'none';
    });

    designsBtn?.addEventListener('click', () => {
        homePage.forEach(el => el.style.display = 'none');
        designsPage.style.display = 'block';
    });
}

// Typing text animation
function setupTypingText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const text = typingElement.textContent;
    typingElement.textContent = '';

    let index = 0;
    const type = () => {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(type, 50);
        } else {
            // Trigger content reveal after typing completes
            showContent();
        }
    };

    type();
}

// Show content with animation
function showContent() {
    const contentElements = document.querySelectorAll('.home-content');
    contentElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

// Code wrapper animation
function setupCodeWrapper() {
    const codeWrappers = document.querySelectorAll('.code-wrapper');
    codeWrappers.forEach(wrapper => {
        const text = wrapper.textContent;
        wrapper.innerHTML = '';

        let charIndex = 0;
        const typeChar = () => {
            if (charIndex < text.length) {
                const span = document.createElement('span');
                span.textContent = text[charIndex];
                span.style.animationDelay = `${charIndex * 50}ms`;
                wrapper.appendChild(span);
                charIndex++;
                setTimeout(typeChar, 50);
            }
        };

        typeChar();
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupCodeWrapper();
    setupTypingText();

    // Initialize music player
    const musicPlayer = new MusicPlayer();
});
