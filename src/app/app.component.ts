import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { AppConfig } from './forms-io.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormioModule],
  providers: [{ provide: FormioAppConfig, useValue: AppConfig }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  exampleFormUrl = 'https://example.form.io/wizard';
}
