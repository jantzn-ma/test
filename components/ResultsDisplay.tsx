
import React from 'react';
import type { DidResult } from '../types';
import { ParallelTrendsPlot } from './ParallelTrendsPlot';
import { DidSummary } from './DidSummary';
import { GeminiAnalysis } from './GeminiAnalysis';

interface ResultsDisplayProps {
  didResult: DidResult | null;
  geminiAnalysis: string;
  isLoading: boolean;
  error: string | null;
  treatmentClub: string;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  didResult,
  geminiAnalysis,
  isLoading,
  error,
  treatmentClub,
}) => {
  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!didResult && !isLoading) {
    return (
       <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center">
         <h3 className="text-lg font-medium text-slate-700">Ready to Analyze</h3>
         <p className="text-slate-500 mt-2">Configure your analysis on the left and click "Run" to see the results.</p>
       </div>
    );
  }

  return (
    <div className="space-y-8">
      {didResult && <DidSummary result={didResult} />}
      
      {isLoading && !didResult ? (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center justify-center h-80 text-slate-500">Loading chart data...</div>
        </div>
      ) : (
        <ParallelTrendsPlot data={didResult} treatmentClub={treatmentClub} />
      )}
      
      <GeminiAnalysis analysis={geminiAnalysis} isLoading={isLoading} />
    </div>
  );
};
