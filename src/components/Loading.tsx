import React from "react";

interface Audio {
  audioSource: string;
}

const Loading = ({ audioSource }: Audio) => {
  return (
    <div className="mt-20 flex justify-center items-center gap-4">
      <h1 className="text-slate-50 text-center">
        {audioSource !== ""
          ? "TRANSCRIBIENDO LA LLAMADA..."
          : "Procesando audio"}
      </h1>
      <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
};

export default Loading;
