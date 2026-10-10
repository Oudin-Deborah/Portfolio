import { useContext } from "react";
import { AudioContext } from "./AudioContext";
import "../assets/style/styleSoundToggle.sass";

export function UseAudio() {
  return useContext(AudioContext);
}
