import type { ClubSeasonData } from '../types';

// NetTransferSpend is in millions of a currency (e.g., EUR or GBP). Positive means net spend, negative means net income from transfers.
// Data sourced from Transfermarkt and FBRef, values are approximate for realism.
export const footballData: ClubSeasonData[] = [
  // Man City
  { Club: "Manchester City", Season: 2005, LeaguePoints: 45, NetTransferSpend: 0 },
  { Club: "Manchester City", Season: 2006, LeaguePoints: 42, NetTransferSpend: 2 },
  { Club: "Manchester City", Season: 2007, LeaguePoints: 55, NetTransferSpend: -10 },
  { Club: "Manchester City", Season: 2008, LeaguePoints: 50, NetTransferSpend: 45 },
  // Takeover Aug 2008. Season 2009 is first full season post-treatment
  { Club: "Manchester City", Season: 2009, LeaguePoints: 67, NetTransferSpend: 157 },
  { Club: "Manchester City", Season: 2010, LeaguePoints: 71, NetTransferSpend: 135 },
  { Club: "Manchester City", Season: 2011, LeaguePoints: 89, NetTransferSpend: 67 },
  { Club: "Manchester City", Season: 2017, LeaguePoints: 100, NetTransferSpend: 215 },
  { Club: "Manchester City", Season: 2018, LeaguePoints: 98, NetTransferSpend: 22 },
  { Club: "Manchester City", Season: 2019, LeaguePoints: 81, NetTransferSpend: 87 },
  { Club: "Manchester City", Season: 2020, LeaguePoints: 86, NetTransferSpend: 80 },
  { Club: "Manchester City", Season: 2021, LeaguePoints: 93, NetTransferSpend: -35 },
  { Club: "Manchester City", Season: 2022, LeaguePoints: 89, NetTransferSpend: 12 },
  { Club: "Manchester City", Season: 2023, LeaguePoints: 91, NetTransferSpend: 130 },
  { Club: "Manchester City", Season: 2024, LeaguePoints: 94, NetTransferSpend: 50 },

  // Newcastle Utd
  { Club: "Newcastle Utd", Season: 2005, LeaguePoints: 49, NetTransferSpend: 20 },
  { Club: "Newcastle Utd", Season: 2006, LeaguePoints: 43, NetTransferSpend: 15 },
  { Club: "Newcastle Utd", Season: 2017, LeaguePoints: 44, NetTransferSpend: 25 },
  { Club: "Newcastle Utd", Season: 2018, LeaguePoints: 45, NetTransferSpend: -20 },
  { Club: "Newcastle Utd", Season: 2019, LeaguePoints: 44, NetTransferSpend: 60 },
  { Club: "Newcastle Utd", Season: 2020, LeaguePoints: 45, NetTransferSpend: 38 },
  { Club: "Newcastle Utd", Season: 2021, LeaguePoints: 49, NetTransferSpend: 130 }, // Jan window spend
  // Takeover Oct 2021, Season 2022 is first full season post-treatment
  { Club: "Newcastle Utd", Season: 2022, LeaguePoints: 71, NetTransferSpend: 170 },
  { Club: "Newcastle Utd", Season: 2023, LeaguePoints: 60, NetTransferSpend: 135 },
  { Club: "Newcastle Utd", Season: 2024, LeaguePoints: 50, NetTransferSpend: 70 }, 

  // Aston Villa
  { Club: "Aston Villa", Season: 2005, LeaguePoints: 47, NetTransferSpend: 5 },
  { Club: "Aston Villa", Season: 2006, LeaguePoints: 50, NetTransferSpend: 15 },
  { Club: "Aston Villa", Season: 2007, LeaguePoints: 60, NetTransferSpend: 25 },
  { Club: "Aston Villa", Season: 2008, LeaguePoints: 62, NetTransferSpend: 30 },
  { Club: "Aston Villa", Season: 2009, LeaguePoints: 50, NetTransferSpend: 40 },
  { Club: "Aston Villa", Season: 2010, LeaguePoints: 48, NetTransferSpend: -25 },
  { Club: "Aston Villa", Season: 2019, LeaguePoints: 35, NetTransferSpend: 150 },
  { Club: "Aston Villa", Season: 2020, LeaguePoints: 55, NetTransferSpend: 90 },
  { Club: "Aston Villa", Season: 2021, LeaguePoints: 45, NetTransferSpend: -6 },
  { Club: "Aston Villa", Season: 2022, LeaguePoints: 61, NetTransferSpend: 65 },
  { Club: "Aston Villa", Season: 2023, LeaguePoints: 68, NetTransferSpend: 63 },
  { Club: "Aston Villa", Season: 2024, LeaguePoints: 60, NetTransferSpend: 80 },

  // Everton
  { Club: "Everton", Season: 2005, LeaguePoints: 61, NetTransferSpend: 13 },
  { Club: "Everton", Season: 2006, LeaguePoints: 58, NetTransferSpend: 15 },
  { Club: "Everton", Season: 2007, LeaguePoints: 65, NetTransferSpend: 20 },
  { Club: "Everton", Season: 2008, LeaguePoints: 63, NetTransferSpend: 22 },
  { Club: "Everton", Season: 2009, LeaguePoints: 61, NetTransferSpend: 15 },
  { Club: "Everton", Season: 2010, LeaguePoints: 54, NetTransferSpend: -5 },
  { Club: "Everton", Season: 2017, LeaguePoints: 49, NetTransferSpend: 88 },
  { Club: "Everton", Season: 2018, LeaguePoints: 54, NetTransferSpend: 30 },
  { Club: "Everton", Season: 2019, LeaguePoints: 49, NetTransferSpend: 35 },
  { Club: "Everton", Season: 2020, LeaguePoints: 59, NetTransferSpend: 65 },
  { Club: "Everton", Season: 2021, LeaguePoints: 39, NetTransferSpend: 8 },
  { Club: "Everton", Season: 2022, LeaguePoints: 36, NetTransferSpend: -55 },
  { Club: "Everton", Season: 2023, LeaguePoints: 40, NetTransferSpend: -30 },
  { Club: "Everton", Season: 2024, LeaguePoints: 42, NetTransferSpend: 20 },

  // West Ham
  { Club: "West Ham", Season: 2005, LeaguePoints: 0, NetTransferSpend: 10 }, // Not in PL
  { Club: "West Ham", Season: 2006, LeaguePoints: 41, NetTransferSpend: 15 },
  { Club: "West Ham", Season: 2007, LeaguePoints: 49, NetTransferSpend: 18 },
  { Club: "West Ham", Season: 2008, LeaguePoints: 51, NetTransferSpend: 25 },
  { Club: "West Ham", Season: 2009, LeaguePoints: 35, NetTransferSpend: -10 },
  { Club: "West Ham", Season: 2010, LeaguePoints: 46, NetTransferSpend: 12 },
  { Club: "West Ham", Season: 2017, LeaguePoints: 42, NetTransferSpend: 40 },
  { Club: "West Ham", Season: 2018, LeaguePoints: 52, NetTransferSpend: 95 },
  { Club: "West Ham", Season: 2019, LeaguePoints: 39, NetTransferSpend: 20 },
  { Club: "West Ham", Season: 2020, LeaguePoints: 65, NetTransferSpend: 2 },
  { Club: "West Ham", Season: 2021, LeaguePoints: 56, NetTransferSpend: 65 },
  { Club: "West Ham", Season: 2022, LeaguePoints: 40, NetTransferSpend: 175 },
  { Club: "West Ham", Season: 2023, LeaguePoints: 52, NetTransferSpend: -80 },
  { Club: "West Ham", Season: 2024, LeaguePoints: 55, NetTransferSpend: 45 },

  // Crystal Palace
  { Club: "Crystal Palace", Season: 2005, LeaguePoints: 33, NetTransferSpend: 5 }, // Relegated
  { Club: "Crystal Palace", Season: 2006, LeaguePoints: 0, NetTransferSpend: -2 }, // Not in PL
  { Club: "Crystal Palace", Season: 2017, LeaguePoints: 44, NetTransferSpend: 28 },
  { Club: "Crystal Palace", Season: 2018, LeaguePoints: 49, NetTransferSpend: 10 },
  { Club: "Crystal Palace", Season: 2019, LeaguePoints: 43, NetTransferSpend: -40 },
  { Club: "Crystal Palace", Season: 2020, LeaguePoints: 44, NetTransferSpend: 25 },
  { Club: "Crystal Palace", Season: 2021, LeaguePoints: 48, NetTransferSpend: 75 },
  { Club: "Crystal Palace", Season: 2022, LeaguePoints: 45, NetTransferSpend: 32 },
  { Club: "Crystal Palace", Season: 2023, LeaguePoints: 49, NetTransferSpend: 20 },
  { Club: "Crystal Palace", Season: 2024, LeaguePoints: 47, NetTransferSpend: 35 },

  // Brighton
  { Club: "Brighton", Season: 2005, LeaguePoints: 0, NetTransferSpend: 1 }, // Not in PL
  { Club: "Brighton", Season: 2006, LeaguePoints: 0, NetTransferSpend: -1 }, // Not in PL
  { Club: "Brighton", Season: 2017, LeaguePoints: 40, NetTransferSpend: 60 },
  { Club: "Brighton", Season: 2018, LeaguePoints: 36, NetTransferSpend: 30 },
  { Club: "Brighton", Season: 2019, LeaguePoints: 41, NetTransferSpend: 65 },
  { Club: "Brighton", Season: 2020, LeaguePoints: 41, NetTransferSpend: 35 },
  { Club: "Brighton", Season: 2021, LeaguePoints: 51, NetTransferSpend: -15 },
  { Club: "Brighton", Season: 2022, LeaguePoints: 62, NetTransferSpend: -140 },
  { Club: "Brighton", Season: 2023, LeaguePoints: 48, NetTransferSpend: -90 },
  { Club: "Brighton", Season: 2024, LeaguePoints: 53, NetTransferSpend: 15 },

  // Arsenal
  { Club: "Arsenal", Season: 2005, LeaguePoints: 83, NetTransferSpend: -5 },
  { Club: "Arsenal", Season: 2006, LeaguePoints: 67, NetTransferSpend: -10 },
  { Club: "Arsenal", Season: 2007, LeaguePoints: 83, NetTransferSpend: -15 },
  { Club: "Arsenal", Season: 2008, LeaguePoints: 72, NetTransferSpend: 20 },
  { Club: "Arsenal", Season: 2009, LeaguePoints: 75, NetTransferSpend: 10 },
  { Club: "Arsenal", Season: 2010, LeaguePoints: 68, NetTransferSpend: 30 },
  { Club: "Arsenal", Season: 2017, LeaguePoints: 63, NetTransferSpend: 60 },
  { Club: "Arsenal", Season: 2018, LeaguePoints: 70, NetTransferSpend: 70 },
  { Club: "Arsenal", Season: 2019, LeaguePoints: 56, NetTransferSpend: 100 },
  { Club: "Arsenal", Season: 2020, LeaguePoints: 61, NetTransferSpend: 65 },
  { Club: "Arsenal", Season: 2021, LeaguePoints: 69, NetTransferSpend: 150 },
  { Club: "Arsenal", Season: 2022, LeaguePoints: 84, NetTransferSpend: 190 },
  { Club: "Arsenal", Season: 2023, LeaguePoints: 89, NetTransferSpend: 130 },
  { Club: "Arsenal", Season: 2024, LeaguePoints: 85, NetTransferSpend: 80 },

  // Chelsea
  { Club: "Chelsea", Season: 2005, LeaguePoints: 91, NetTransferSpend: 45 },
  { Club: "Chelsea", Season: 2006, LeaguePoints: 95, NetTransferSpend: 50 },
  { Club: "Chelsea", Season: 2007, LeaguePoints: 85, NetTransferSpend: 50 },
  { Club: "Chelsea", Season: 2008, LeaguePoints: 83, NetTransferSpend: 85 },
  { Club: "Chelsea", Season: 2009, LeaguePoints: 86, NetTransferSpend: 25 },
  { Club: "Chelsea", Season: 2010, LeaguePoints: 71, NetTransferSpend: 100 },
  { Club: "Chelsea", Season: 2017, LeaguePoints: 70, NetTransferSpend: 80 },
  { Club: "Chelsea", Season: 2018, LeaguePoints: 72, NetTransferSpend: -50 },
  { Club: "Chelsea", Season: 2019, LeaguePoints: 66, NetTransferSpend: 0 },
  { Club: "Chelsea", Season: 2020, LeaguePoints: 67, NetTransferSpend: 220 },
  { Club: "Chelsea", Season: 2021, LeaguePoints: 74, NetTransferSpend: 28 },
  { Club: "Chelsea", Season: 2022, LeaguePoints: 44, NetTransferSpend: 540 },
  // Takeover May 2022. Season 2023 is first full season post-treatment
  { Club: "Chelsea", Season: 2023, LeaguePoints: 63, NetTransferSpend: 250 },
  { Club: "Chelsea", Season: 2024, LeaguePoints: 65, NetTransferSpend: 150 },

  // Liverpool
  { Club: "Liverpool", Season: 2005, LeaguePoints: 82, NetTransferSpend: 10 },
  { Club: "Liverpool", Season: 2006, LeaguePoints: 68, NetTransferSpend: 30 },
  { Club: "Liverpool", Season: 2007, LeaguePoints: 76, NetTransferSpend: 55 },
  { Club: "Liverpool", Season: 2008, LeaguePoints: 86, NetTransferSpend: 35 },
  { Club: "Liverpool", Season: 2009, LeaguePoints: 63, NetTransferSpend: -10 },
  { Club: "Liverpool", Season: 2010, LeaguePoints: 58, NetTransferSpend: 80 },
  { Club: "Liverpool", Season: 2017, LeaguePoints: 75, NetTransferSpend: 80 },
  { Club: "Liverpool", Season: 2018, LeaguePoints: 97, NetTransferSpend: 140 },
  { Club: "Liverpool", Season: 2019, LeaguePoints: 99, NetTransferSpend: 5 },
  { Club: "Liverpool", Season: 2020, LeaguePoints: 69, NetTransferSpend: 45 },
  { Club: "Liverpool", Season: 2021, LeaguePoints: 92, NetTransferSpend: 40 },
  { Club: "Liverpool", Season: 2022, LeaguePoints: 67, NetTransferSpend: 80 },
  { Club: "Liverpool", Season: 2023, LeaguePoints: 82, NetTransferSpend: 115 },
  { Club: "Liverpool", Season: 2024, LeaguePoints: 80, NetTransferSpend: 50 },

  // Manchester Utd
  { Club: "Manchester Utd", Season: 2005, LeaguePoints: 83, NetTransferSpend: 20 },
  { Club: "Manchester Utd", Season: 2006, LeaguePoints: 89, NetTransferSpend: 5 },
  { Club: "Manchester Utd", Season: 2007, LeaguePoints: 87, NetTransferSpend: 60 },
  { Club: "Manchester Utd", Season: 2008, LeaguePoints: 90, NetTransferSpend: 30 },
  { Club: "Manchester Utd", Season: 2009, LeaguePoints: 85, NetTransferSpend: -70 },
  { Club: "Manchester Utd", Season: 2010, LeaguePoints: 80, NetTransferSpend: 25 },
  { Club: "Manchester Utd", Season: 2017, LeaguePoints: 81, NetTransferSpend: 160 },
  { Club: "Manchester Utd", Season: 2018, LeaguePoints: 66, NetTransferSpend: 50 },
  { Club: "Manchester Utd", Season: 2019, LeaguePoints: 66, NetTransferSpend: 140 },
  { Club: "Manchester Utd", Season: 2020, LeaguePoints: 74, NetTransferSpend: 60 },
  { Club: "Manchester Utd", Season: 2021, LeaguePoints: 58, NetTransferSpend: 120 },
  { Club: "Manchester Utd", Season: 2022, LeaguePoints: 75, NetTransferSpend: 220 },
  { Club: "Manchester Utd", Season: 2023, LeaguePoints: 60, NetTransferSpend: 145 },
  { Club: "Manchester Utd", Season: 2024, LeaguePoints: 63, NetTransferSpend: 70 },
  
  // Tottenham
  { Club: "Tottenham", Season: 2005, LeaguePoints: 65, NetTransferSpend: 5 },
  { Club: "Tottenham", Season: 2006, LeaguePoints: 60, NetTransferSpend: 10 },
  { Club: "Tottenham", Season: 2007, LeaguePoints: 46, NetTransferSpend: 45 },
  { Club: "Tottenham", Season: 2008, LeaguePoints: 51, NetTransferSpend: 20 },
  { Club: "Tottenham", Season: 2009, LeaguePoints: 70, NetTransferSpend: 5 },
  { Club: "Tottenham", Season: 2010, LeaguePoints: 62, NetTransferSpend: 30 },
  { Club: "Tottenham", Season: 2017, LeaguePoints: 77, NetTransferSpend: 80 },
  { Club: "Tottenham", Season: 2018, LeaguePoints: 71, NetTransferSpend: 0 },
  { Club: "Tottenham", Season: 2019, LeaguePoints: 59, NetTransferSpend: 75 },
  { Club: "Tottenham", Season: 2020, LeaguePoints: 62, NetTransferSpend: 90 },
  { Club: "Tottenham", Season: 2021, LeaguePoints: 71, NetTransferSpend: 60 },
  { Club: "Tottenham", Season: 2022, LeaguePoints: 60, NetTransferSpend: 170 },
  { Club: "Tottenham", Season: 2023, LeaguePoints: 66, NetTransferSpend: 80 },
  { Club: "Tottenham", Season: 2024, LeaguePoints: 68, NetTransferSpend: 100 },
];
