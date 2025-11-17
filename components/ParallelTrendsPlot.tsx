
import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { DidResult } from '../types';

interface ParallelTrendsPlotProps {
  data: DidResult | null;
  treatmentClub: string;
}

type ActiveMetric = 'points' | 'spend';

export const ParallelTrendsPlot: React.FC<ParallelTrendsPlotProps> = ({ data, treatmentClub }) => {
  const [activeMetric, setActiveMetric] = useState<ActiveMetric>('points');

  const plotData = activeMetric === 'points' ? data?.points.plotData : data?.spend.plotData;
  const yAxisLabel = activeMetric === 'points' ? 'League Points' : 'Net Transfer Spend (€M)';

  const MetricToggle: React.FC = () => (
    <div className="flex space-x-1 rounded-lg bg-slate-100 p-1 mb-4">
      <button
        onClick={() => setActiveMetric('points')}
        className={`w-full rounded-md py-2 text-sm font-medium transition-colors ${
          activeMetric === 'points' ? 'bg-white text-indigo-700 shadow' : 'text-slate-600 hover:bg-slate-200'
        }`}
      >
        League Points
      </button>
      <button
        onClick={() => setActiveMetric('spend')}
        className={`w-full rounded-md py-2 text-sm font-medium transition-colors ${
          activeMetric === 'spend' ? 'bg-white text-indigo-700 shadow' : 'text-slate-600 hover:bg-slate-200'
        }`}
      >
        Net Transfer Spend
      </button>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Parallel Trends Plot</h3>
      <p className="text-sm text-slate-600 mb-4">
        This chart visualizes the core assumption of DiD. The trends between the treatment group ({treatmentClub}) and control group should be parallel *before* the treatment. A divergence after indicates a potential causal effect.
      </p>
      <MetricToggle />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={plotData}
            margin={{ top: 5, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="season" 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              axisLine={{ stroke: '#cbd5e1' }} 
              tickLine={{ stroke: '#cbd5e1' }}
              label={{ value: 'Season', position: 'insideBottom', offset: -15, fill: '#475569' }}
            />
            <YAxis 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              axisLine={{ stroke: '#cbd5e1' }} 
              tickLine={{ stroke: '#cbd5e1' }}
              label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 0, fill: '#475569' }}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
              formatter={(value: number) => activeMetric === 'spend' ? `${value.toFixed(1)}M` : value}
            />
            <Legend wrapperStyle={{ color: '#475569', fontSize: 14 }} />
            <Line type="monotone" dataKey="Treatment Group" stroke="#4f46e5" strokeWidth={2.5} dot={{ r: 4, fill: '#4f46e5' }} activeDot={{ r: 6 }} connectNulls />
            <Line type="monotone" dataKey="Control Group" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 6 }} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
