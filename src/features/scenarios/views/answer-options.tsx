import React from 'react';
import { Choice } from '../data/types';

interface AnswerOptionsProps {
  choices: Choice[];
  onSelect: (choiceIndex: number) => void;
  selectedChoice: number | null;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ choices, onSelect, selectedChoice }) => (
  <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-blue-50 animate-fadeIn">
    {choices.map((choice, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-full text-left px-6 py-3 mt-3 border rounded-lg ${
          selectedChoice === index
            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
            : 'bg-gray-100 text-gray-800 border-gray-300'
        } transition-all duration-200 hover:bg-blue-400 hover:text-white hover:shadow-md`}
      >
        {choice.text}
      </button>
    ))}
  </div>
);

export default AnswerOptions;
