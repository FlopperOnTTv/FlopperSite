import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, Volume2 } from 'lucide-react';

interface MusicPlayerProps {
  githubRepo: string;
  githubBranch?: string;
}

export function MusicPlayer({ githubRepo, githubBranch = 'main' }: MusicPlayerProps) {
  const [tracks, setTracks] = useState<string[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];
  const trackName = currentTrack ? currentTrack.split('/').pop()?.replace('.mp3', '') : 'Loading...';

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setIsLoading(true);
        const apiUrl = `https://api.github.com/repos/${githubRepo}/contents/music?ref=${githubBranch}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch music files from GitHub');
        }

        const files = await response.json();
        const mp3Files = files
          .filter((file: any) => file.name.endsWith('.mp3'))
          .map((file: any) => file.download_url)
          .sort();

        if (mp3Files.length === 0) {
          throw new Error('No MP3 files found in /music folder');
        }

        setTracks(mp3Files);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load music');
        setTracks([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
  }, [githubRepo, githubBranch]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [tracks.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack;
    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentTrack, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (isLoading) {
    return (
      <div className="ps2-panel p-4">
        <div className="text-center text-sm text-gray-400 font-mono">
          Loading music library...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ps2-panel p-4">
        <div className="text-center text-sm text-red-400 font-mono">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="ps2-panel p-4">
      <audio ref={audioRef} crossOrigin="anonymous" />

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Volume2 className="w-4 h-4 text-[#969696]" />
          <p className="text-sm font-mono text-[#969696] truncate flex-1">
            {trackName}
          </p>
          <span className="text-xs text-gray-500 font-mono">
            {currentTrackIndex + 1}/{tracks.length}
          </span>
        </div>

        <div className="relative bg-[#1a1a1a] rounded h-1.5 mb-2 cursor-pointer group">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5552F7] to-[#7774FF] rounded transition-all"
            style={{ width: `${progressPercent}%` }}
          />
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = parseFloat(e.target.value);
              }
            }}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex justify-between text-xs text-gray-500 font-mono mb-4">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={togglePlay}
          className="p-2 rounded-lg bg-[#5552F7]/20 hover:bg-[#5552F7]/40 transition-colors text-[#5552F7] hover:text-[#7774FF]"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={nextTrack}
          className="p-2 rounded-lg bg-[#5552F7]/20 hover:bg-[#5552F7]/40 transition-colors text-[#5552F7] hover:text-[#7774FF]"
          aria-label="Next track"
        >
          <SkipForward className="w-5 h-5" />
        </button>

        <span className="text-xs text-gray-500 font-mono ml-auto">
          {tracks.length} track{tracks.length !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}
