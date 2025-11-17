
import type { TakeoverScenario } from './types';

export const TAKEOVER_SCENARIOS: TakeoverScenario[] = [
  {
    id: 'newcastle_2022',
    club: 'Newcastle Utd',
    year: 2022,
    name: "Newcastle Utd (Saudi PIF)",
    description: "Takeover by Saudi Arabia's Public Investment Fund in Oct 2021. First full season 2022-23."
  },
  {
    id: 'chelsea_2023',
    club: 'Chelsea',
    year: 2023,
    name: "Chelsea (Boehly/Clearlake)",
    description: "Takeover by Todd Boehly & Clearlake Capital consortium in May 2022. First full season 2022-23."
  },
    {
    id: 'mancity_2009',
    club: 'Manchester City',
    year: 2009,
    name: "Man City (Abu Dhabi Group)",
    description: "Takeover by Abu Dhabi United Group in Aug 2008. First full season 2008-09."
  },
];

export const DEFAULT_SCENARIO_ID = 'newcastle_2022';
export const DEFAULT_CONTROL_CLUBS = ["Aston Villa", "Everton", "West Ham", "Crystal Palace"];

export const ALL_CLUBS = [
  "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", 
  "Chelsea", "Crystal Palace", "Everton", "Fulham", "Leicester City", 
  "Liverpool", "Manchester City", "Manchester Utd", "Newcastle Utd", 
  "Southampton", "Tottenham", "West Ham", "Wolves"
];
