import { useContext } from "react";
import { AudioContext } from "./AudioContext";

export function useAudio() {
  return useContext(AudioContext);
}
