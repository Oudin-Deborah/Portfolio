import { useState, useRef } from "react";
import { AudioContext } from "./AudioContext";
import witchyLoopOgg from "../assets/witchy_loop.ogg";
import witchyLoopMp3 from "../assets/witchy_loop.mp3";


// Fournit l'état du son et le lecteur audio à tout le site
export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  function toggleAudio() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {/* Opus en priorité (plus léger), MP3 en secours pour les navigateurs sans Ogg */}
      {/* preload="none" : la musique n'est téléchargée qu'au moment où on l'active */}
      <audio ref={audioRef} loop preload="none">
        <source src={witchyLoopOgg} type="audio/ogg; codecs=opus" />
        <source src={witchyLoopMp3} type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
}
