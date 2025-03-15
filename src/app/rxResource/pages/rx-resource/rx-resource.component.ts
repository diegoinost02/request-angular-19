import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RxResourceService } from '@app/rxResource/services/rx-resource.service';

@Component({
  selector: 'app-rx-resource',
  imports: [],
  templateUrl: './rx-resource.component.html'
})
export class RxResourceComponent {
  
  private readonly rxResourceService = inject(RxResourceService);

  $page = signal<number>(0);

  // rxResource must be used with an observable, which allows us to use RxJS operators
  response = rxResource({
    request: () => ({
      page: this.$page()
    }),
    loader: ({ request }) => this.rxResourceService.getRequest(request.page),
  })

  responseArray = rxResource({
    request: () => ({
      page: this.$page()
    }),
    loader: ({ request }) => this.rxResourceService.getRequestArray(request.page),
    defaultValue: []
  })

  reset() {
    this.response.set(undefined);
  }

  reload() {
    this.response.reload();
  }
}
