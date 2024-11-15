import React from 'react';
import { ChoiceImpact } from '../data/types';

interface ImpactComponentProps {
  impact: ChoiceImpact;
  onNext: () => void;
}

const ImpactComponent: React.FC<ImpactComponentProps> = ({ impact, onNext }) => (
  <div className="mt-6 p-4 sm:p-6 border border-gray-200 rounded-lg bg-green-50 shadow-md animate-fadeIn">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Impact of Your Choice</h3>

    <div className="mb-4 sm:mb-6">
      <h4 className="text-green-700 font-semibold text-md sm:text-lg">Positive Impact</h4>
      <p className="text-gray-700 text-sm sm:text-base mt-1">{impact.positiveImpact}</p>
      <p className="italic text-gray-500 text-xs sm:text-sm mt-1">{impact.positiveInsight}</p>
    </div>

    <div className="mb-4 sm:mb-6">
      <h4 className="text-red-700 font-semibold text-md sm:text-lg">Negative Impact</h4>
      <p className="text-gray-700 text-sm sm:text-base mt-1">{impact.negativeImpact}</p>
      <p className="italic text-gray-500 text-xs sm:text-sm mt-1">{impact.negativeInsight}</p>
    </div>

    <button
      onClick={onNext}
      className="mt-4 px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg"
    >
      Next Scenario
    </button>
  </div>
);

export default ImpactComponent;
