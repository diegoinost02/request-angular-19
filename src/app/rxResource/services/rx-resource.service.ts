import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RxResourceService {

  private http = inject(HttpClient);
  private apiUrl = environment.API_URL;

  getRequest(page: number) {
    return this.http.get<number>(`${this.apiUrl}/some-endpoint`);
  }

  getRequestArray(page: number) {
    return this.http.get<number[]>(`${this.apiUrl}/some-endpoint`);
  }
}
