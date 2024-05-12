import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { run } from "@/utils/functions/runTranscript";
import { handleAudioUpload } from "@/utils/functions/sumbitAudio";
import { Transcript } from "assemblyai";

interface ReproductorProps {
  audioSource: string;
  setAudioSource: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTranscription: Dispatch<SetStateAction<Transcript | null>>;
  audioRef: MutableRefObject<any>;
}

const Reproductor: React.FC<ReproductorProps> = ({
  audioSource,
  setAudioSource,
  setLoading,
  setTranscription,
  audioRef,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <input
        className="text-slate-100 rounded-full"
        type="file"
        accept="audio/*"
        onChange={(e) =>
          handleAudioUpload(e, setAudioSource, setLoading, setTranscription)
        }
      />

      <div className="flex flex-col sm:flex-row gap-4  items-center">
        <audio
          ref={audioRef}
          controls
          src={
            "https://res.cloudinary.com/dt5wyofhb/video/upload/v1715531075/vmeoibuncjovy023xngo.wav"
          }
        />
        <button
          className="border p-3 rounded-lg bg-slate-100"
          onClick={() => run(setLoading, setTranscription, audioSource)}
        >
          Transcribir
        </button>
      </div>
    </div>
  );
};

export default Reproductor;
