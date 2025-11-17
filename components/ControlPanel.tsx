
import React from 'react';
import { ALL_CLUBS, TAKEOVER_SCENARIOS } from '../constants';

interface ControlPanelProps {
  selectedScenarioId: string;
  setSelectedScenarioId: (id: string) => void;
  controlClubs: string[];
  setControlClubs: (clubs: string[]) => void;
  onRunAnalysis: () => void;
  isLoading: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  selectedScenarioId,
  setSelectedScenarioId,
  controlClubs,
  setControlClubs,
  onRunAnalysis,
  isLoading,
}) => {
  const handleControlClubToggle = (club: string) => {
    setControlClubs(
      controlClubs.includes(club)
        ? controlClubs.filter(c => c !== club)
        : [...controlClubs, club]
    );
  };

  const currentScenario = TAKEOVER_SCENARIOS.find(s => s.id === selectedScenarioId);
  const treatmentClub = currentScenario?.club;
  const availableControlClubs = ALL_CLUBS.filter(c => c !== treatmentClub);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 sticky top-8">
      <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">Analysis Setup</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="takeover-scenario" className="block text-sm font-medium text-slate-700 mb-1">
            1. Select Takeover Scenario
          </label>
          <select
            id="takeover-scenario"
            value={selectedScenarioId}
            onChange={(e) => setSelectedScenarioId(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {TAKEOVER_SCENARIOS.map(scenario => (
              <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
            ))}
          </select>
          <p className="text-xs text-slate-500 mt-2">{currentScenario?.description}</p>
        </div>

        <div>
          <h4 className="block text-sm font-medium text-slate-700 mb-2">
            2. Select Control Group Clubs
          </h4>
          <div className="max-h-60 overflow-y-auto border border-slate-200 rounded-md p-2 bg-slate-50 space-y-1">
            {availableControlClubs.map(club => (
              <div key={club} className="flex items-center">
                <input
                  id={`control-${club}`}
                  type="checkbox"
                  checked={controlClubs.includes(club)}
                  onChange={() => handleControlClubToggle(club)}
                  className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor={`control-${club}`} className="ml-2 text-sm text-slate-800">
                  {club}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onRunAnalysis}
          disabled={isLoading || controlClubs.length === 0}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : 'Run DiD Analysis'}
        </button>
      </div>
    </div>
  );
};
