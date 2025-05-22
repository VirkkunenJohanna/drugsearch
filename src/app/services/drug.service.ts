import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  private apiUrl = 'https://api.fda.gov/drug/label.json';

  constructor(private http: HttpClient) {}

  searchDrugs(query: string): Observable<any> {
    const url = `${this.apiUrl}?search=openfda.brand_name:${query}&limit=10`;
    return this.http.get(url);
  }
}
