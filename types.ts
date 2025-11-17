
export interface ClubSeasonData {
  Club: string;
  Season: number; // Represents the end year of the season, e.g., 2022 for 2021-2022
  LeaguePoints: number;
  NetTransferSpend: number; // In millions of euros/pounds
}

export interface PlotDataPoint {
  season: number;
  'Treatment Group': number | null;
  'Control Group': number | null;
}

export interface SingleMetricDidResult {
  att: number;
  plotData: PlotDataPoint[];
  treatmentPreAvg: number;
  treatmentPostAvg: number;
  controlPreAvg: number;
  controlPostAvg: number;
}

export interface DidResult {
  points: SingleMetricDidResult;
  spend: SingleMetricDidResult;
}

export interface TakeoverScenario {
  id: string;
  club: string;
  year: number;
  name: string;
  description: string;
}
