import React from "react";
import LetterIncrease from "./LetterIncrease";
import LetterDecrease from "./LetterDecrease";

interface FuncLetter {
  chageSize: () => void;
  letterSize: string;
}

const LetterSize = ({ chageSize, letterSize }: FuncLetter) => {
  return (
    <div className="absolute top-0 right-12 flex-row mt-10 items-center gap-2 hidden md:flex">
      {letterSize !== "text-lg" ? (
        <LetterIncrease action={chageSize} />
      ) : (
        <LetterDecrease action={chageSize} />
      )}
    </div>
  );
};

export default LetterSize;
