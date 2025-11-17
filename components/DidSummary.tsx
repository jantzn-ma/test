
import React from 'react';
import type { DidResult } from '../types';

interface DidSummaryProps {
  result: DidResult;
}

const StatCard: React.FC<{ title: string; value: string; color: string; subtitle?: string }> = ({ title, value, color, subtitle }) => (
  <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-200 text-center">
    <p className="text-sm font-medium text-slate-500">{title}</p>
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
    {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
  </div>
);

export const DidSummary: React.FC<DidSummaryProps> = ({ result }) => {
  // Logic for points
  const isPositivePoints = result.points.att > 0;
  const attColorPoints = result.points.att === 0 ? 'text-slate-700' : isPositivePoints ? 'text-green-600' : 'text-red-600';
  const attSignPoints = isPositivePoints && result.points.att !== 0 ? '+' : '';

  // Logic for spend
  const isPositiveSpend = result.spend.att > 0;
  const attColorSpend = result.spend.att === 0 ? 'text-slate-700' : isPositiveSpend ? 'text-blue-600' : 'text-orange-600';
  const attSignSpend = isPositiveSpend && result.spend.att !== 0 ? '+' : '';

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Causal Impact Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard 
                title="Effect on League Points (ATT)" 
                value={`${attSignPoints}${result.points.att.toFixed(2)}`}
                color={attColorPoints}
                subtitle="Avg. points change per season due to treatment"
            />
            <StatCard 
                title="Effect on Net Spend (ATT)" 
                value={`${attSignSpend}${result.spend.att.toFixed(2)}M`}
                color={attColorSpend}
                subtitle="Avg. net spend change per season (€M)"
            />
        </div>
    </div>
  );
};
