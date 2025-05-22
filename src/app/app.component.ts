import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DrugSearchComponent } from './components/drug-search/drug-search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrugSearchComponent],
  template: `<app-drug-search></app-drug-search>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drugsearch';
}
