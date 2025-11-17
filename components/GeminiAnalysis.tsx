
import React from 'react';

interface GeminiAnalysisProps {
  analysis: string;
  isLoading: boolean;
}

// A more robust markdown-to-HTML renderer
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const processLine = (line: string) => {
    // Bold
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return line;
  };

  const htmlContent = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      if (line.startsWith('## ')) {
        return `<h2 class="text-lg font-bold text-slate-800 mt-4 mb-2">${processLine(line.substring(3))}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3 class="text-md font-semibold text-slate-700 mt-3 mb-1">${processLine(line.substring(4))}</h3>`;
      }
      if (line.startsWith('* ')) {
         return `<ul class="list-disc list-inside"><li class="mb-1">${processLine(line.substring(2))}</li></ul>`;
      }
      return `<p>${processLine(line)}</p>`;
    })
    .join('');

  return (
    <div className="prose prose-slate max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};


export const GeminiAnalysis: React.FC<GeminiAnalysisProps> = ({ analysis, isLoading }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        <h3 className="text-xl font-bold text-slate-900">Gemini AI-Powered Insights</h3>
      </div>
      {isLoading && !analysis && (
        <div className="flex items-center text-slate-500">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2.99988V5.99988M5.63604 5.63611L7.75736 7.75742M2.99988 12H5.99988M5.63604 18.3639L7.75736 16.2426M12 21V18M18.3639 18.3639L16.2426 16.2426M21 12H18M18.3639 5.63611L16.2426 7.75742" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Generating analysis... This may take a moment.
        </div>
      )}
      {analysis && (
         <div className="text-slate-700">
            <MarkdownRenderer content={analysis} />
         </div>
      )}
    </div>
  );
};
