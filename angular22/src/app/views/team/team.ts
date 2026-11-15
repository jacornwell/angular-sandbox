import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamDataService, TeamRecord } from '../../services/team-data.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team {
  private readonly route = inject(ActivatedRoute);
  private readonly teamData = inject(TeamDataService);
  readonly team = signal(
    this.teamData.getTeam(this.route.snapshot.paramMap.get('id') ?? ''),
  );
  readonly saved = signal(false);
  readonly form = new FormGroup({
    name: new FormControl(this.team()?.name ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    division: new FormControl(this.team()?.division ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    homeCity: new FormControl(this.team()?.homeCity ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    favorite: new FormControl(this.team()?.favorite ?? false, {
      nonNullable: true,
    }),
  });

  save(): void {
    const team = this.team();
    if (!team || this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const updatedTeam: TeamRecord = { ...team, ...this.form.getRawValue() };
    this.teamData.updateTeam(updatedTeam);
    this.team.set(updatedTeam);
    this.saved.set(true);
  }
}
