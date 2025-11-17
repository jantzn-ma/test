
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Introduction } from './components/Introduction';
import type { DidResult, TakeoverScenario } from './types';
import { calculateDid } from './services/didService';
import { getGeminiAnalysis } from './services/geminiService';
import { footballData } from './data/footballData';
import { DEFAULT_SCENARIO_ID, DEFAULT_CONTROL_CLUBS, TAKEOVER_SCENARIOS } from './constants';

const App: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(DEFAULT_SCENARIO_ID);
  const [controlClubs, setControlClubs] = useState<string[]>(DEFAULT_CONTROL_CLUBS);
  
  const [didResult, setDidResult] = useState<DidResult | null>(null);
  const [geminiAnalysis, setGeminiAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  // When the scenario changes, ensure the new treatment club is not in the control group
  useEffect(() => {
    const currentScenario = TAKEOVER_SCENARIOS.find(s => s.id === selectedScenarioId);
    if (currentScenario) {
      setControlClubs(prev => prev.filter(c => c !== currentScenario.club));
    }
  }, [selectedScenarioId]);

  const handleRunAnalysis = useCallback(async () => {
    if (controlClubs.length === 0) {
      setError('Please select at least one control club.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeminiAnalysis('');
    setShowResults(true);

    const scenario = TAKEOVER_SCENARIOS.find(s => s.id === selectedScenarioId);
    if (!scenario) {
      setError('Invalid scenario selected.');
      setIsLoading(false);
      return;
    }
    const { club: treatmentClub, year: treatmentYear } = scenario;

    try {
      const pointsResult = calculateDid(footballData, treatmentClub, treatmentYear, controlClubs, 'LeaguePoints');
      const spendResult = calculateDid(footballData, treatmentClub, treatmentYear, controlClubs, 'NetTransferSpend');
      const result = { points: pointsResult, spend: spendResult };
      
      setDidResult(result);

      const aiAnalysis = await getGeminiAnalysis(result, scenario, controlClubs);
      setGeminiAnalysis(aiAnalysis);

    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Analysis failed: ${errorMessage}`);
      setDidResult(null);
      setGeminiAnalysis('');
    } finally {
      setIsLoading(false);
    }
  }, [selectedScenarioId, controlClubs]);

  const selectedScenario = TAKEOVER_SCENARIOS.find(s => s.id === selectedScenarioId)!;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <Introduction />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1">
            <ControlPanel
              selectedScenarioId={selectedScenarioId}
              setSelectedScenarioId={setSelectedScenarioId}
              controlClubs={controlClubs}
              setControlClubs={setControlClubs}
              onRunAnalysis={handleRunAnalysis}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:col-span-2">
            {showResults && (
              <ResultsDisplay
                didResult={didResult}
                geminiAnalysis={geminiAnalysis}
                isLoading={isLoading}
                error={error}
                treatmentClub={selectedScenario.club}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
