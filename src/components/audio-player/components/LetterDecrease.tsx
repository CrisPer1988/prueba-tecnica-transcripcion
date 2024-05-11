import React from "react";

interface LetterDecreaseProps {
  action: () => void;
}

const LetterDecrease = ({ action }: LetterDecreaseProps) => {
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
      <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm384-16v-80h320v80H600Z" />
    </svg>
  );
};

export default LetterDecrease;
