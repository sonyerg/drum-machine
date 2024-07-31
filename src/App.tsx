import { useEffect, useState } from "react";
import Drum from "./Drum";

type AudioClip = {
  keyTrigger: string;
  url: string;
  description: string;
};

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    description: "Open-HH",
  },
  {
    keyTrigger: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat",
  },
  {
    keyTrigger: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    description: "Closed-HH",
  },
];

function App() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const drumMachine = document.getElementById("drum-Q");
    drumMachine?.focus();

    setDisplay("Heater 1");
  }, []);

  function playAudio(e: React.KeyboardEvent<HTMLDivElement>) {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );

    if (!clip) {
      return;
    }

    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      ?.play()
      .catch(console.error);

    setDisplay(clip.description);
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
  }

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>Drum Machine</h1>
      <div id="whole-drum" className="whole-drum">
        {audioClips.map((clip) => (
          <>
            <Drum
              key={clip.keyTrigger}
              audioClip={clip}
              updateDisplay={setDisplay}
            />
          </>
        ))}
      </div>
      <div id="display">{display}</div>
    </div>
  );
}

export default App;
