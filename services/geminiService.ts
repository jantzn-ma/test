
import { GoogleGenAI } from "@google/genai";
import type { DidResult, TakeoverScenario } from '../types';

export const getGeminiAnalysis = async (
  result: DidResult,
  scenario: TakeoverScenario,
  controlClubs: string[]
): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are a world-class sports data analyst, specializing in football (soccer) analytics and communicating complex findings to a non-technical audience.
    Your task is to interpret the results of a dual-metric Difference-in-Differences (DiD) analysis.

    ## Analysis Context
    - **Methodology:** Difference-in-Differences (DiD).
    - **Research Question:** What is the causal effect of a major financial takeover on a football club's on-pitch performance and its transfer market behavior?
    - **Treatment Event:** The takeover of **${scenario.club}** by **${scenario.name}**, with the first full season post-treatment being **${scenario.year-1}-${scenario.year}**.
    - **Control Group (similar clubs, no takeover):** ${controlClubs.join(', ')}.
    - **Metrics Analyzed:** 1. Final League Points, 2. Net Transfer Spend (in millions).

    ## Key Findings from the DiD Model

    ### 1. Impact on League Points
    - **Causal Effect (ATT):** **${result.points.att.toFixed(2)} points**. This is the estimated causal impact on league points per season.
    - **Performance Trend:** ${scenario.club}'s average points changed from ${result.points.treatmentPreAvg.toFixed(2)} (pre-takeover) to ${result.points.treatmentPostAvg.toFixed(2)} (post-takeover).
    - **Control Group Trend:** The control group's points changed from ${result.points.controlPreAvg.toFixed(2)} to ${result.points.controlPostAvg.toFixed(2)} over the same period.

    ### 2. Impact on Net Transfer Spend
    - **Causal Effect (ATT):** **${result.spend.att.toFixed(2)} million**. This is the estimated causal impact on net transfer spending per season.
    - **Spending Trend:** ${scenario.club}'s average net spend changed from ${result.spend.treatmentPreAvg.toFixed(2)}M (pre-takeover) to ${result.spend.treatmentPostAvg.toFixed(2)}M (post-takeover).
    - **Control Group Trend:** The control group's net spend changed from ${result.spend.controlPreAvg.toFixed(2)}M to ${result.spend.controlPostAvg.toFixed(2)}M over the same period.

    ## Your Task
    Write a concise, insightful, and easy-to-understand summary of these findings in Markdown.

    1.  **## Executive Summary**: Start with this heading. In one or two clear sentences, state the main conclusion. Did the takeover lead to a significant increase in spending, and did that translate into a meaningful improvement in league points?

    2.  **## The Financial Impact**: Under this heading, explain what the causal effect of **${result.spend.att.toFixed(2)}M** on net spend means. Did the club's spending habits change significantly compared to their peers after the takeover?

    3.  **## The On-Pitch Result**: Under this heading, explain the causal effect of **${result.points.att.toFixed(2)}** points. Was the investment successful in creating a competitive advantage on the pitch, once we account for general league trends?

    4.  **## Conclusion**: Provide a concluding thought. Synthesize the two findings. For example, did the massive spending yield a proportional increase in points, or was the return on investment smaller than expected? Mention that this is a statistical estimate and other factors can influence performance.

    Keep the tone professional, confident, and data-driven. Use bold formatting for key numbers.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Could not generate AI analysis. The model may be unavailable or the request was blocked.";
  }
};
