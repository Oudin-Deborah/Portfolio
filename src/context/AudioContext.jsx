import { createContext, useState, useRef } from "react";
import witchyLoop from "../assets/witchy_loop.wav";

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
      <audio ref={audioRef} src={witchyLoop} loop />
      {children}
    </AudioContext.Provider>
  );
}
