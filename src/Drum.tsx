import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

export default function Drum({ audioClip }: DrumProps) {
  function playSound(clip: AudioClip) {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      ?.play()
      .catch(console.error);

    document.getElementById("display")!.innerText = clip.description;
  }

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
}
