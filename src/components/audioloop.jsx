import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolume, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import witchyLoop from "../assets/witchy_loop.wav";

function AudioLoop() {
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
    <div>
      <audio ref={audioRef} src={witchyLoop} loop />
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Couper le son" : "Activer le son"}
      >
        <FontAwesomeIcon icon={isPlaying ? faVolumeXmark : faVolume} />
      </button>
    </div>
  );
}

export default AudioLoop;
