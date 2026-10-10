import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useAudio } from "../hooks/useAudio";


//fonction de loop audio qui fonctionne sur toutes les pages du site sans interruption
function AudioLoop() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      className="sound-toggle"
      onClick={toggleAudio}
      aria-label={isPlaying ? "Couper le son" : "Activer le son"}
    >
      <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeXmark} />
    </button>
  );
}

export default AudioLoop;
