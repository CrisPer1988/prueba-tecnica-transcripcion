import React from "react";

interface LetterIncreaseProps {
  action: () => void;
}

const LetterIncrease = ({ action }: LetterIncreaseProps) => {
  return (
    <svg
      onClick={action}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      fill="#f8fafc"
    >
      <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm504 104v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
    </svg>
  );
};

export default LetterIncrease;
