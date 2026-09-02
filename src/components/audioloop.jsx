import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useAudio } from "../context/UseAudio";

function AudioLoop() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Couper le son" : "Activer le son"}
    >
      <FontAwesomeIcon icon={isPlaying ? faVolumeXmark : faVolumeHigh} />
    </button>
  );
}

export default AudioLoop;
