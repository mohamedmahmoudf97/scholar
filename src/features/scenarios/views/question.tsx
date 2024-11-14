import React from 'react';

interface QuestionComponentProps {
  title: string;
  description: string;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ title, description }) => (
  <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-purple-50 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
  </div>
);

export default QuestionComponent;
