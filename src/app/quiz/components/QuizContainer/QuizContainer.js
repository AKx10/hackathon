import { useState } from "react";

const QuizContainer = ({ quiz, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onOptionSelect(option); // Notify the parent component
  };

  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex mb-4 text-white">{quiz?.question}</div>
      {quiz?.options.map((option, index) => (
        <label key={index} className="flex mb-4 cursor-pointer">
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary mr-4 font-mono text-white"
            checked={selectedOption === option}
            onChange={() => handleOptionSelect(option)}
          />
          <p className="font-mono text-white">{option}</p>
        </label>
      ))}
    </div>
  );
};

export default QuizContainer;
