import React, { useState, useRef } from "react";
import { Transcript } from "assemblyai";
import Transcribe from "../Transcribe";
import Loading from "../Loading";
import Reproductor from "../Reproductor";
import LetterSize from "./components/LetterSize";

export default function AudioPlayer(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioSource, setAudioSource] = useState<string>("");
  const [transcription, setTranscription] = useState<Transcript | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePosition = (start: number) => {
    const startSec = start / 1000;
    if (audioRef.current) {
      audioRef.current.currentTime = startSec;
    }
  };

  const [letterSize, setletterSize] = useState<string>("text-sm");

  const increaseFontSize = () => {
    setletterSize("text-lg");
  };

  const decreaseFontSize = () => {
    setletterSize("text-sm");
  };

  const chageSize = () => {
    if (letterSize === "text-lg") {
      decreaseFontSize();
    } else {
      increaseFontSize();
    }
  };

  return (
    <div className="p-10 ">
      <Reproductor
        audioSource={audioSource}
        setAudioSource={setAudioSource}
        setLoading={setLoading}
        setTranscription={setTranscription}
        audioRef={audioRef}
      />
      {transcription && transcription.utterances && (
        <LetterSize chageSize={chageSize} letterSize={letterSize} />
      )}
      {!loading ? (
        <div className="gap-5 mt-14 flex flex-col items-center">
          {transcription &&
            transcription.utterances &&
            transcription.utterances.map((speaker, i: number) => (
              <Transcribe
                key={i}
                content={speaker.text}
                role={speaker.speaker}
                start={speaker.start}
                end={speaker.end}
                position={handlePosition}
                letterSize={letterSize}
              />
            ))}
        </div>
      ) : (
        <Loading audioSource={audioSource} />
      )}
    </div>
  );
}
