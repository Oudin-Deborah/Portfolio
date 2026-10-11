import { createContext } from "react";

// État du son partagé par tout le site : lu avec le hook useAudio, fourni par AudioProvider
export const AudioContext = createContext();
