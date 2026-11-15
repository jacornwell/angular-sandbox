import { Injectable, signal } from '@angular/core';

export interface TeamRecord {
  id: string;
  name: string;
  division: string;
  homeCity: string;
  favorite: boolean;
}

const initialTeams: TeamRecord[] = [
  { id: 'arizona-cardinals', name: 'Arizona Cardinals', division: 'NFC West', homeCity: 'Glendale', favorite: false },
  { id: 'atlanta-falcons', name: 'Atlanta Falcons', division: 'NFC South', homeCity: 'Atlanta', favorite: false },
  { id: 'baltimore-ravens', name: 'Baltimore Ravens', division: 'AFC North', homeCity: 'Baltimore', favorite: false },
  { id: 'buffalo-bills', name: 'Buffalo Bills', division: 'AFC East', homeCity: 'Orchard Park', favorite: false },
  { id: 'carolina-panthers', name: 'Carolina Panthers', division: 'NFC South', homeCity: 'Charlotte', favorite: false },
  { id: 'chicago-bears', name: 'Chicago Bears', division: 'NFC North', homeCity: 'Chicago', favorite: false },
  { id: 'cincinnati-bengals', name: 'Cincinnati Bengals', division: 'AFC North', homeCity: 'Cincinnati', favorite: false },
  { id: 'cleveland-browns', name: 'Cleveland Browns', division: 'AFC North', homeCity: 'Cleveland', favorite: false },
  { id: 'dallas-cowboys', name: 'Dallas Cowboys', division: 'NFC East', homeCity: 'Arlington', favorite: false },
  { id: 'denver-broncos', name: 'Denver Broncos', division: 'AFC West', homeCity: 'Denver', favorite: false },
  { id: 'detroit-lions', name: 'Detroit Lions', division: 'NFC North', homeCity: 'Detroit', favorite: false },
  { id: 'green-bay-packers', name: 'Green Bay Packers', division: 'NFC North', homeCity: 'Green Bay', favorite: false },
  { id: 'houston-texans', name: 'Houston Texans', division: 'AFC South', homeCity: 'Houston', favorite: false },
  { id: 'indianapolis-colts', name: 'Indianapolis Colts', division: 'AFC South', homeCity: 'Indianapolis', favorite: false },
  { id: 'jacksonville-jaguars', name: 'Jacksonville Jaguars', division: 'AFC South', homeCity: 'Jacksonville', favorite: false },
  { id: 'kansas-city-chiefs', name: 'Kansas City Chiefs', division: 'AFC West', homeCity: 'Kansas City', favorite: false },
  { id: 'las-vegas-raiders', name: 'Las Vegas Raiders', division: 'AFC West', homeCity: 'Paradise', favorite: false },
  { id: 'los-angeles-chargers', name: 'Los Angeles Chargers', division: 'AFC West', homeCity: 'Inglewood', favorite: false },
  { id: 'los-angeles-rams', name: 'Los Angeles Rams', division: 'NFC West', homeCity: 'Inglewood', favorite: false },
  { id: 'miami-dolphins', name: 'Miami Dolphins', division: 'AFC East', homeCity: 'Miami Gardens', favorite: false },
  { id: 'minnesota-vikings', name: 'Minnesota Vikings', division: 'NFC North', homeCity: 'Minneapolis', favorite: false },
  { id: 'new-england-patriots', name: 'New England Patriots', division: 'AFC East', homeCity: 'Foxborough', favorite: false },
  { id: 'new-orleans-saints', name: 'New Orleans Saints', division: 'NFC South', homeCity: 'New Orleans', favorite: false },
  { id: 'new-york-giants', name: 'New York Giants', division: 'NFC East', homeCity: 'East Rutherford', favorite: false },
  { id: 'new-york-jets', name: 'New York Jets', division: 'AFC East', homeCity: 'East Rutherford', favorite: false },
  { id: 'philadelphia-eagles', name: 'Philadelphia Eagles', division: 'NFC East', homeCity: 'Philadelphia', favorite: false },
  { id: 'pittsburgh-steelers', name: 'Pittsburgh Steelers', division: 'AFC North', homeCity: 'Pittsburgh', favorite: false },
  { id: 'san-francisco-49ers', name: 'San Francisco 49ers', division: 'NFC West', homeCity: 'Santa Clara', favorite: false },
  { id: 'seattle-seahawks', name: 'Seattle Seahawks', division: 'NFC West', homeCity: 'Seattle', favorite: false },
  { id: 'tampa-bay-buccaneers', name: 'Tampa Bay Buccaneers', division: 'NFC South', homeCity: 'Tampa', favorite: false },
  { id: 'tennessee-titans', name: 'Tennessee Titans', division: 'AFC South', homeCity: 'Nashville', favorite: false },
  { id: 'washington-commanders', name: 'Washington Commanders', division: 'NFC East', homeCity: 'Landover', favorite: false },
];

@Injectable({ providedIn: 'root' })
export class TeamDataService {
  readonly teams = signal(initialTeams);

  getTeam(id: string): TeamRecord | undefined {
    return this.teams().find((team) => team.id === id);
  }

  updateTeam(updatedTeam: TeamRecord): void {
    this.teams.update((teams) =>
      teams.map((team) => (team.id === updatedTeam.id ? updatedTeam : team)),
    );
  }

  setFavorite(id: string, favorite: boolean): void {
    const team = this.getTeam(id);
    if (team) {
      this.updateTeam({ ...team, favorite });
    }
  }
}
