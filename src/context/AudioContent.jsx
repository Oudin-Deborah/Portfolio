import { createContext, useContext, useState, useRef } from "react";
import witchyLoop from "../assets/witchy_loop.wav";

const audioContext = createContext();

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
    <audioContext.Provider value={{ isPlaying, toggleAudio }}>
      <audio ref={audioRef} src={witchyLoop} loop />
      {children}
    </audioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
