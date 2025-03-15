import { httpResource } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { HttpResourceService } from '@app/httpResource/services/http-resource.service';

@Component({
  selector: 'app-http-resource',
  imports: [],
  templateUrl: './http-resource.component.html'
})
export class HttpResourceComponent {

  private readonly httpResourceService = inject(HttpResourceService);

  $page = signal<number>(0);

  response = this.httpResourceService.geRequestRs();
  responseWithDependency = this.httpResourceService.geRequestRsWithDependency(this.$page);

  directResponse = httpResource(() => ({
    url: 'some-endpoint',
    method: 'GET',
    body: {}
  }));

  directResponseWithDependency = httpResource<number | undefined>(() => ({
    url: `some-endpoint`,
    params: {
      'page': this.$page()
    },
    method: 'GET',
    body: {}
  }));
  
  reset() {
    this.responseWithDependency.set(undefined);
  }

  reload() {
    this.response.reload();
  }
}
