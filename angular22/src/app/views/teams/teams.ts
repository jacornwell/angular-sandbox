import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamDataService } from '../../services/team-data.service';

@Component({
  imports: [RouterLink],
  selector: 'app-teams',
  styleUrl: './teams.css',
  templateUrl: './teams.html',
})
export class Teams {
  readonly teamData = inject(TeamDataService);

  setFavorite(teamId: string, event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.teamData.setFavorite(teamId, event.target.checked);
    }
  }
}
