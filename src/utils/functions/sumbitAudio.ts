import { Transcript } from "assemblyai";

export const handleAudioUpload = async (
  event: any,
  setAudioSource: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setTranscription: React.Dispatch<React.SetStateAction<Transcript | null>>
) => {
  const file = event?.target?.files?.[0];
  setLoading(true);

  if (file) {
    setTranscription(null);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(
      "https://prueba-tecnica-transcripcion-cristians-projects-99e3cf7d.vercel.app/api/audio",
      {
        method: "POST",
        body: formData,
      }
    );

    try {
      const data = await response.json();
      setLoading(false);

      setAudioSource(data?.url);
    } catch (error) {
      throw new Error("No se pudo cargar el audio");
    }
  }
};
