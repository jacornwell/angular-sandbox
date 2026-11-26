import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationHeader } from './components/application-header/application-header';

@Component({
  imports: [RouterOutlet, ApplicationHeader],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-datatables');
}
