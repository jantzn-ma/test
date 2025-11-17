
import type { ClubSeasonData, SingleMetricDidResult, PlotDataPoint } from '../types';

const calculateAverage = (
  data: ClubSeasonData[],
  metric: keyof Pick<ClubSeasonData, 'LeaguePoints' | 'NetTransferSpend'>
): number => {
  if (data.length === 0) return 0;
  // For points, filter out seasons where a club was not in the league (points = 0)
  // For spend, a value of 0 is valid, so we don't filter.
  const validSeasons = metric === 'LeaguePoints' ? data.filter(d => d.LeaguePoints > 0) : data;
  if (validSeasons.length === 0) return 0;

  const total = validSeasons.reduce((sum, d) => sum + d[metric], 0);
  return total / validSeasons.length;
};

export const calculateDid = (
  allData: ClubSeasonData[],
  treatmentClub: string,
  treatmentYear: number,
  controlClubs: string[],
  metric: keyof Pick<ClubSeasonData, 'LeaguePoints' | 'NetTransferSpend'>
): SingleMetricDidResult => {
  
  const treatmentData = allData.filter(d => d.Club === treatmentClub);
  const controlData = allData.filter(d => controlClubs.includes(d.Club));

  const treatmentPre = treatmentData.filter(d => d.Season < treatmentYear);
  const treatmentPost = treatmentData.filter(d => d.Season >= treatmentYear);
  const controlPre = controlData.filter(d => d.Season < treatmentYear);
  const controlPost = controlData.filter(d => d.Season >= treatmentYear);
  
  const treatmentPreAvg = calculateAverage(treatmentPre, metric);
  const treatmentPostAvg = calculateAverage(treatmentPost, metric);
  const controlPreAvg = calculateAverage(controlPre, metric);
  const controlPostAvg = calculateAverage(controlPost, metric);

  const att = (treatmentPostAvg - treatmentPreAvg) - (controlPostAvg - controlPreAvg);

  // Prepare data for plotting
  const allSeasons = [...new Set(allData.map(d => d.Season))].sort();
  
  const plotData: PlotDataPoint[] = allSeasons.map(season => {
    const treatmentMetricData = treatmentData.find(d => d.Season === season);
    // For points, nullify if 0 (not in league), for spend, 0 is a valid value
    const treatmentAvg = treatmentMetricData !== undefined ? (metric === 'LeaguePoints' && treatmentMetricData[metric] === 0 ? null : treatmentMetricData[metric]) : null;

    const controlSeasonData = controlData.filter(d => d.Season === season);
    const validControlSeasonData = metric === 'LeaguePoints' ? controlSeasonData.filter(d => d.LeaguePoints > 0) : controlSeasonData;

    const controlAvg = validControlSeasonData.length > 0
      ? validControlSeasonData.reduce((sum, d) => sum + d[metric], 0) / validControlSeasonData.length
      : null;

    return {
      season,
      'Treatment Group': treatmentAvg,
      'Control Group': controlAvg
    };
  });
  
  return {
    att,
    plotData,
    treatmentPreAvg,
    treatmentPostAvg,
    controlPreAvg,
    controlPostAvg,
  };
};
