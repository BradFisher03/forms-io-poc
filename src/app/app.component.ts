import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormioModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
