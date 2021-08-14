import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retrieveId',
})
export class RetrieveIdPipe implements PipeTransform {
  transform(url: string): string {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
