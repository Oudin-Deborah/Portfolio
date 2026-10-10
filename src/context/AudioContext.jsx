import { createContext, useState, useRef } from "react";
import witchyLoopOgg from "../assets/witchy_loop.ogg";
import witchyLoopMp3 from "../assets/witchy_loop.mp3";


//gestion du toggle, 
export const AudioContext = createContext();

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
      <audio ref={audioRef} loop>
        <source src={witchyLoopOgg} type="audio/ogg; codecs=opus" />
        <source src={witchyLoopMp3} type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
}
