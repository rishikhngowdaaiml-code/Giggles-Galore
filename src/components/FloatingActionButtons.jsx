import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Music, VolumeX } from 'lucide-react';
import './FloatingActionButtons.css';

const FloatingActionButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We create the audio element in code so it doesn't clutter the DOM if we don't want to
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=piano-moment-9835.mp3'); // Placeholder elegant piano music
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Need to handle potential autoplay restrictions
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="floating-actions">
      <button 
        className={`fab music-fab ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleMusic}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </button>

      <a 
        href="https://wa.me/919844909044" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fab whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingActionButtons;
