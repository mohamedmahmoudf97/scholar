'use client';
import React, { useState } from 'react';
import { Scenario } from '../data/types';
import QuestionComponent from './question';
import AnswerOptions from './answer-options';
import ImpactComponent from './impact';
import { scenarios } from '../data/scenarios';

const ScenarioView: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const currentScenario: Scenario = scenarios[currentScenarioIndex];

  const handleChoiceSelect = (choiceIndex: number) => {
    setSelectedChoice(choiceIndex);
  };

  const handleNextScenario = () => {
    setSelectedChoice(null);
    setCurrentScenarioIndex((prevIndex) => (prevIndex + 1) % scenarios.length);
  };

  return (
    <div className="w-full max-w-3xl p-10 bg-white border border-gray-200 shadow-lg rounded-lg animate-fadeIn">
      <QuestionComponent title={currentScenario.title} description={currentScenario.description} />
      
      <AnswerOptions 
        choices={currentScenario.choices} 
        onSelect={handleChoiceSelect} 
        selectedChoice={selectedChoice}
      />

      {selectedChoice !== null && (
        <ImpactComponent 
          impact={currentScenario.choices[selectedChoice].impact} 
          onNext={handleNextScenario} 
        />
      )}
    </div>
  );
};

export default ScenarioView;
