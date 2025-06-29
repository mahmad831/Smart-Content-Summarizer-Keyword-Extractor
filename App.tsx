
import React, { useState, useCallback } from 'react';
import { SummarizationResult } from './types';
import { analyzeText } from './services/geminiService';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';

const App: React.FC = () => {
  const [result, setResult] = useState<SummarizationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string>('');

  const handleAnalyze = useCallback(async (text: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    setInputText(text);

    try {
      const analysisResult = await analyzeText(text);
      setResult(analysisResult);
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError('An unexpected error occurred.');
        }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClear = useCallback(() => {
    setResult(null);
    setError(null);
    setIsLoading(false);
    setInputText('');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-slate-50">
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Smart Content Summarizer
          </h1>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
            Leverage Gemini to instantly summarize text, extract keywords, and analyze sentiment.
          </p>
        </header>

        <main className="w-full h-[calc(100vh-12rem)] max-h-[800px] grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InputSection 
            onAnalyze={handleAnalyze} 
            onClear={handleClear} 
            isLoading={isLoading}
            initialText={inputText}
          />
          <OutputSection 
            result={result} 
            isLoading={isLoading} 
            error={error} 
          />
        </main>
      </div>
    </div>
  );
};

export default App;
