import { AssemblyAI } from "assemblyai";

interface Data {
  audio_url: string;
  language_code: string;
  speaker_labels: boolean;
  speakers_expected: number;
}

const client = new AssemblyAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY_ASSEMBLYAI || "",
});

export const run = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setTranscription: React.Dispatch<React.SetStateAction<any>>,
  audioSource: string
  //   data
): Promise<void> => {
  setLoading(true);
  const data: Data = {
    audio_url:
      "https://res.cloudinary.com/dt5wyofhb/video/upload/v1715531075/vmeoibuncjovy023xngo.wav",
    language_code: "es",
    speaker_labels: true,
    speakers_expected: 2,
  };

  const transcript = await client.transcripts?.create(data);
  setLoading(false);
  if (transcript && transcript.utterances) {
    setTranscription(transcript);
  }
};
