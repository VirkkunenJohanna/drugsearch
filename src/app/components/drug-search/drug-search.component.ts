import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DrugService } from '../../services/drug.service';

@Component({
  selector: 'app-drug-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './drug-search.component.html'
})
export class DrugSearchComponent {
  searchQuery: string = '';
  drugs: any[] = [];

  constructor(private drugService: DrugService) {}

  search(): void {
    const query = this.searchQuery.trim();
    if (query) {
      this.drugService.searchDrugs(query).subscribe({
        next: (response) => {
          this.drugs = response.results || [];
        },
        error: (err) => {
          console.error('Error fetching drug data:', err);
        }
      });
    }
  }
}
