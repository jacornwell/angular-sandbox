import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-application-header',
  styleUrl: './application-header.css',
  templateUrl: './application-header.html',
})
export class ApplicationHeader {}
