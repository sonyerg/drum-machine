import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
  updateDisplay: (description: string) => void;
}

export default function Drum({ audioClip, updateDisplay }: DrumProps) {
  function playSound(clip: AudioClip) {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      ?.play()
      .catch(console.error);

    updateDisplay(clip.description);
  }

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
      tabIndex={0}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
}
