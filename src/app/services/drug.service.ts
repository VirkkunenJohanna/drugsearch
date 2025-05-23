import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  private apiUrl = 'https://api.fda.gov/drug/label.json';

  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) {}

  searchDrugs(query: string): Observable<any> {
    this.logSearch(query); // 👈 tallennetaan haku tietokantaan

    const url = `${this.apiUrl}?search=openfda.brand_name:${query}&limit=10`;
    return this.http.get(url);
  }

  private async logSearch(query: string) {
    const searchesRef = collection(this.firestore, 'searches');
    await addDoc(searchesRef, {
      query,
      timestamp: new Date()
    });
  }
}
