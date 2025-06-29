
export type Sentiment = 'Positive' | 'Negative' | 'Neutral';

export interface SummarizationResult {
  summary: string;
  keywords: string[];
  sentiment: Sentiment;
}
