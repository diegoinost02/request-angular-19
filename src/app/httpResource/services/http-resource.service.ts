import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpResourceService {

  private apiUrl = environment.API_URL;

  geRequestRs() {
    return httpResource<number[]>(
      {
        url: `${this.apiUrl}/some-endpoint`,
        method: 'GET',
        body: {}
      },
      {
        defaultValue: []
      }
    );
  }

  geRequestRsWithDependency($page: Signal<number>) {
    return httpResource<number | undefined>(() => ({
      url: `${this.apiUrl}/some-endpoint`,
      params: {
        'page': $page()
      },
      method: 'GET',
      body: {}
    }));
  }
}
