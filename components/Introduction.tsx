
import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Does Financial Power Guarantee Success?</h2>
      <p className="text-slate-600">
        This tool uses a statistical method called **Difference-in-Differences (DiD)** to measure the causal effect of a major financial takeover on a football club's league performance and transfer spending.
      </p>
      <p className="text-slate-600 mt-2">
        By selecting a real-world takeover scenario and comparing the "treated" club against a "control" group of similar clubs, we can isolate the true impact of the new investment from other league-wide trends.
      </p>
    </div>
  );
};
